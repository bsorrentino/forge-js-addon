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
import javax.script.ScriptEngineFactory;
import javax.script.ScriptEngineManager;
import static org.bsc.commands.AddonConstants.DEBUG;
import static org.bsc.commands.AddonUtils.getOut;
import org.bsc.script.rhino.RhinoScriptEngine;
import org.bsc.script.rhino.npm.NPMRhinoScriptEngineFactory;
import org.jboss.forge.addon.dependencies.DependencyResolver;
import org.jboss.forge.addon.projects.ui.AbstractProjectCommand;
import org.jboss.forge.addon.ui.context.UIContextProvider;
import org.jboss.forge.addon.ui.input.InputComponentFactory;

/**
 *
 * @author bsorrentino
 */
public abstract class AbstractJSProjectCommand extends AbstractProjectCommand {

    /*
    @Inject
    private MavenContainer container;

    @Inject
    private Environment environment;
    */

    @Inject
    protected DependencyResolver dependencyResolver;

    @Inject
    private InputComponentFactory componentFactory;

    final ScriptEngineManager manager = new ScriptEngineManager(Thread.currentThread().getContextClassLoader());

    protected <T extends UIContextProvider> void info( T cx, String format, Object...args ) {
        
        final java.io.PrintStream s = getOut(cx).out();
        s.printf(format, (Object [])args);
        s.println();
    }
    
    protected <T extends UIContextProvider> void debug( T cx, String format, Object...args ) {
        
        if( !DEBUG ) return;
        
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
    
    protected <T extends UIContextProvider> RhinoScriptEngine getScriptEngine( T context ) {
        
        RhinoScriptEngine scriptEngine = null;
        
        for( ScriptEngineFactory f : manager.getEngineFactories() ) {
                
            debug( context, "factory [%s]\n%s", f.getEngineName(), String.valueOf(f.getNames()));
            if( f instanceof NPMRhinoScriptEngineFactory ) {
                try {
                    
                    scriptEngine = (RhinoScriptEngine)f.getScriptEngine();
                    
                    scriptEngine.put("componentFactory", componentFactory);
                    scriptEngine.put("dependencyResolver", dependencyResolver);
                    
                }
                catch( Throwable t ) {
                    error( context, "error %s]", t.getMessage());
                }
            }
        }
        
        if( scriptEngine == null ) {
            
            final String msg = format("script engine %s not found!", "rhino-npm");
            error( context, msg );
            
            throw new RuntimeException(msg);
            
        }
        
        return scriptEngine;
    }
}
