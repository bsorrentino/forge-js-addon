package org.bsc.commands.helper;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.NoSuchElementException;
import java.util.stream.Collectors;

import org.graalvm.polyglot.Context;
import org.graalvm.polyglot.HostAccess;
import org.graalvm.polyglot.Source;
import org.graalvm.polyglot.Value;
import org.jboss.forge.addon.resource.FileResource;
import org.jboss.forge.addon.ui.context.UIContextProvider;

public interface GraaljsHelper extends UIContextHelper {
    
    String JVM_NPM_DEBUG = "jvm-npm.debug";
    
    default boolean isVerbose() {
        return false;
    };
    
    default <T extends UIContextProvider> Context newGraaljsContext( T context, final FileResource<?> js) {
        
        final Context jsContext = 
                Context.newBuilder("js")
                .out( getOut(context).out() )
                .err( getOut(context).err() )
                //.allowAllAccess(true) 
                .allowHostAccess(HostAccess.ALL)
                //.allowCreateThread(true)
                .allowHostClassLookup( s -> true )
                .allowIO(true)   
                //.allowExperimentalOptions(true)
                //.option("js.experimental-foreign-object-prototype", "true")
                .build();
        
        jsContext.getBindings("js").putMember( "$self", this );

        {
            
        final String eval = "exports = {};";
        
        try {
            
            final Source source = Source.newBuilder("js", eval,  "inline").build();
            jsContext.eval( source ); 
            
        } catch (IOException ex) {
            
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
        
      
        try {
            
            final Source source = Source.newBuilder("js", eval,  "jvm-npm.js").build();

            System.setProperty(JVM_NPM_DEBUG, String.valueOf(isVerbose()));           
            
            jsContext.eval(  source );
            
        } catch (IOException ex) {
            
            error( context, "ERROR evaluating\n%s\n", eval, ex);
            
            throw new RuntimeException(ex);
        }}
            
        return jsContext;
    }
  
    /**
     * 
     * @param jsContext
     * @param functionName
     * @param args
     * @return
     * @throws NoSuchMethodException
     */
    default Object invokeFunction( Context jsContext, String functionName, Object... args ) throws NoSuchMethodException {
        if (jsContext == null)
            throw new java.lang.IllegalArgumentException("jsContext is null!");
        if (functionName == null)
            throw new java.lang.IllegalArgumentException("name is null!");

        final Value function = jsContext.getBindings("js").getMember(functionName);
        
        if (function == null) {
            throw new NoSuchMethodException(functionName);
        } else if (!function.canExecute()) {
            throw new NoSuchMethodException( String.format( "%s is not a function", functionName) );
        }
        
        return function.execute(args).as(Object.class);
       

    }
    
    default Object invokeMethod( Context jsContext, Object thiz, String methodName, Object... args) throws NoSuchMethodException  {
        if (thiz == null)
            throw new java.lang.IllegalArgumentException("thiz is null!");
        if (jsContext == null)
            throw new java.lang.IllegalArgumentException("jsContext is null!");
        if (methodName == null)
            throw new java.lang.IllegalArgumentException("name is null!");

        final Value value = Value.asValue(thiz);
        //final Value value = jsContext.getBindings("js")..asValue(thiz);
        
        if( value == null ) {
            throw new NoSuchElementException("js object not found!");
        }
        
        final Value method = value.getMember(methodName);
        
        if (method == null) {
            throw new NoSuchMethodException(methodName);
        } else if (!method.canExecute()) {
            throw new NoSuchMethodException( String.format( "%s is not a method", methodName) );
        }
        
        return method.execute(args).as(Object.class);
    }
}
