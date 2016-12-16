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
import javax.inject.Inject;
import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;
import static org.bsc.commands.AddonUtils.getOut;
import org.jboss.forge.addon.dependencies.DependencyResolver;
import org.jboss.forge.addon.projects.ui.AbstractProjectCommand;
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

        /*
        final Project project = Projects.getSelectedProject(getProjectFactory(),
                builder.getUIContext());

        debug( builder, "root [%s]\n", project.getRoot());
                
        script.setCompleter(new UICompleter<FileResource<?>>() {

            @SuppressWarnings("unchecked")
            @Override
            public Iterable<FileResource<?>> getCompletionProposals(
                    UIContext context,
                    InputComponent<?, FileResource<?>> input, String value) {

                List<Resource<?>> result = listResources(
                        project.getRoot(), new ArrayList<Resource<?>>());

                final java.io.File root = (java.io.File) project.getRoot().getUnderlyingResourceObject();

                final java.io.File resourcesDirs[] = {
                    new java.io.File(root, "src/main/resources"),
                    new java.io.File(root, "src/test/resources")
                };

                for (java.io.File resourcesDir : resourcesDirs) {
                    if (resourcesDir.exists()) {

                        Resource<?> resourcesRes = resFactory.create(resourcesDir);

                        listResources(resourcesRes, result);

                    }
                }

                Collections.sort(result, new Comparator<Resource<?>>() {

                    @Override
                    public int compare(Resource<?> o1, Resource<?> o2) {
                        return o1.getFullyQualifiedName().compareTo(
                                o2.getFullyQualifiedName());
                    }
                });

                return (Iterable<FileResource<?>>) (List<?>) result;
            }
        });
        */
        
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

    private static final String JS_ENGINE_NAME = "rhino-npm";
    //private static final String JS_ENGINE_NAME = "nashorn";

    final ScriptEngineManager manager = new ScriptEngineManager();

    private final ScriptEngine getScriptEngine() {
        
        final ScriptEngine service = manager.getEngineByName(JS_ENGINE_NAME);
        
        if( service == null ) {
            throw new IllegalStateException(format("[%s] javascript engine not found!", JS_ENGINE_NAME));
        }
        
        return service;
    }
    
    /**
     * 
     * @param <T>
     * @param context
     * @return 
     */
    @Deprecated
    protected <T extends UIContextProvider> ScriptEngine getScriptEngineEmbedded( T context ) {     
    	return getScriptEngine(context);
    }
    
    /**
     * 
     * @param <T>
     * @param context
     * @return 
     */
    protected <T extends UIContextProvider> ScriptEngine getScriptEngine( T context ) {
        
        final ScriptEngine service = getScriptEngine();
        
        try {
        
        	System.setProperty(JVM_NPM_DEBUG, String.valueOf(verbose.getValue().booleanValue()));
        	
            service.put( "self", this );
            service.eval( "load('classpath:jvm-npm.js');");
        } catch (ScriptException ex) {
            throw new RuntimeException(ex);
        }
        
        return service;
    }
    
}
