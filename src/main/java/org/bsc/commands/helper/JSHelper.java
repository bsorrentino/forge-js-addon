package org.bsc.commands.helper;

import static java.lang.String.format;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.function.Predicate;
import java.util.stream.Collectors;

import javax.script.Bindings;
import javax.script.ScriptContext;
import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;

import org.jboss.forge.addon.resource.FileResource;
import org.jboss.forge.addon.script.ScriptContextBuilder;
import org.jboss.forge.addon.ui.context.UIContextProvider;

@Deprecated
public interface JSHelper extends UIContextHelper {
    
    //private static final String JS_ENGINE_NAME = "rhino-npm";
    String JS_ENGINE_NAME = "nashorn";
    //private static final String JS_ENGINE_NAME = "graal.js";

    String JVM_NPM_DEBUG = "jvm-npm.debug";
    
    default boolean isVerbose() {
        return false;
    };
  
    default ScriptEngine getScriptEngine() {

        final ScriptEngineManager manager = new ScriptEngineManager();

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
    default <T extends UIContextProvider> ScriptEngine getScriptEngine( T context, final FileResource<?> js ) {
        
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
        
            System.setProperty(JVM_NPM_DEBUG, String.valueOf(isVerbose()));           
            service.eval(  eval );
        } catch (ScriptException ex) {
            
            error( context, "ERROR evaluating\n%s\n", eval, ex);
            
            throw new RuntimeException(ex);
        }}
        
        return service;
    }
    

}
