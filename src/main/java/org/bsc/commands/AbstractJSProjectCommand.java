/*
 * The MIT License
 *
 * Copyright 2016 softphone.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
package org.bsc.commands;

import static java.lang.String.format;
import static org.bsc.commands.AddonUtils.getOut;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.function.Predicate;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import javax.inject.Inject;
import javax.script.Bindings;
import javax.script.ScriptContext;
import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;

import org.jboss.forge.addon.dependencies.DependencyResolver;
import org.jboss.forge.addon.projects.ui.AbstractProjectCommand;
import org.jboss.forge.addon.resource.FileResource;
import org.jboss.forge.addon.script.ScriptContextBuilder;
import org.jboss.forge.addon.ui.context.UIBuilder;
import org.jboss.forge.addon.ui.context.UIContextProvider;
import org.jboss.forge.addon.ui.hints.InputType;
import org.jboss.forge.addon.ui.input.InputComponentFactory;
import org.jboss.forge.addon.ui.input.UIInput;
import org.jboss.forge.addon.ui.metadata.WithAttributes;

/**
 *
 * @author bsorrentino
 */
public abstract class AbstractJSProjectCommand extends AbstractProjectCommand {

    private static final String JVM_NPM_DEBUG = "jvm-npm.debug";

	@Inject
    protected DependencyResolver dependencyResolver;

    @Inject
    private InputComponentFactory componentFactory;

    
    public DependencyResolver getDependencyResolver() {
        return dependencyResolver;
    }

    public InputComponentFactory getComponentFactory() {
        return componentFactory;
    }

    
    protected int nextCalls = 0;

    
    @Inject
    @WithAttributes(label = "Verbose", required = true, type = InputType.CHECKBOX,defaultValue = "false")
    protected UIInput<Boolean> verbose;

    
    @Override
    public void initializeUI(UIBuilder builder) throws Exception {
        
        builder.add(verbose);
        
    }

    
    protected <T extends UIContextProvider> void info( T cx, String format, Object...args ) {
        
        final java.io.PrintStream s = getOut(cx).out();
        s.printf(format, (Object [])args);
        s.println();
    }
    
    protected <T extends UIContextProvider> void debug( T cx, String format, Object...args ) {
        
        if( !verbose.getValue().booleanValue() ) return;
        
        final java.io.PrintStream s = getOut(cx).out();
        s.printf(format, (Object [])args);
        s.println();
    }
    
    protected <T extends UIContextProvider> void error( T cx, String format, Object...args ) {
        
        final java.io.PrintStream s = getOut(cx).err();
        final Object [] _args = (Object [])args;
        
        s.printf(format, _args);
        s.println();
        
        final int last = _args.length-1;
        if( last >= 0 && _args[last] instanceof Throwable ) {
            
            Throwable t = (Throwable)_args[last];
            
            t.printStackTrace(s);
            
        }   
    }

    //private static final String JS_ENGINE_NAME = "rhino-npm";
    //private static final String JS_ENGINE_NAME = "nashorn";
    private static final String JS_ENGINE_NAME = "graal.js";
    
    final ScriptEngineManager manager = new ScriptEngineManager();

    private final ScriptEngine getScriptEngine() {
        
        final ScriptEngine service = manager.getEngineByName(JS_ENGINE_NAME);
        
        if( service == null ) {
            throw new IllegalStateException(format("[%s] javascript engine not found!", JS_ENGINE_NAME));
        }
        
        if( JS_ENGINE_NAME.equals("graal.js")) {
        	final Predicate<String> allowHostClassLookup =  s -> true;
        	
            final Bindings bindings = service.getBindings(ScriptContext.ENGINE_SCOPE);
            // @see https://github.com/graalvm/graaljs/blob/master/docs/user/ScriptEngine.md
            bindings.put("polyglot.js.allowHostAccess", true);
            bindings.put("polyglot.js.allowHostClassLookup", allowHostClassLookup);
            bindings.put("polyglot.js.allowIO", true);
      
        }
        return service;
    }
    
    
    /**
     * 
     * @param <T>
     * @param context
     * @return 
     */
    protected <T extends UIContextProvider> ScriptEngine getScriptEngine( T context, final FileResource<?> js ) {
        
    	debug( context, "script engine [%s] loading ....", JS_ENGINE_NAME);
    	
        final ScriptEngine service = getScriptEngine();
    	
        debug( context, "script engine [%s] loaded!", JS_ENGINE_NAME);

    	service.setContext(ScriptContextBuilder.create()
                .currentResource(js)
                .stdout(getOut(context).out())
                .stderr(getOut(context).err())
                .build());
        service.put( "$self", this );
        
        
        {
        final String eval = "exports = {};";

        try {
        	
            service.eval( eval); 
        
        } catch (ScriptException ex) {
        	
            error( context, "ERROR evaluating\n%s\n", eval, ex);
            
            throw new RuntimeException(ex);
        }}
        
        	
        {
        //
        // need for forge class loading problem
        //
        final String eval =			
        		  new BufferedReader(new InputStreamReader(getClass().getClassLoader().getResourceAsStream("jvm-npm.js")))
        		  .lines()
        		  .collect( Collectors.joining("\n"));
        //final String eval = "load('classpath:jvm-npm.js');";
       
        try {
        
        	System.setProperty(JVM_NPM_DEBUG, String.valueOf(verbose.getValue().booleanValue()));        	
            service.eval(  eval );
        } catch (ScriptException ex) {
        	
            error( context, "ERROR evaluating\n%s\n", eval, ex);
            
            throw new RuntimeException(ex);
        }}
        
        return service;
    }
    
}
