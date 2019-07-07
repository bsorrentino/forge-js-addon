package org.bsc.commands.helper;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.stream.Collectors;

import org.bsc.commands.UIContextHelper;
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
        final Value function = jsContext.getBindings("js").getMember(functionName);
        
        if (function == null) {
            throw new NoSuchMethodException(functionName);
        } else if (!function.canExecute()) {
            throw new NoSuchMethodException( String.format( "%s is not a function", functionName) );
        }
        
        return function.execute(args).as(Object.class);
       

    }

}
