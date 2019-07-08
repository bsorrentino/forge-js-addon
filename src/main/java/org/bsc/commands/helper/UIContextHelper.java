package org.bsc.commands.helper;

import org.jboss.forge.addon.ui.command.UICommand;
import org.jboss.forge.addon.ui.context.UIContextProvider;
import org.jboss.forge.addon.ui.output.UIOutput;

public interface UIContextHelper extends UICommand {
    
    default  <T extends UIContextProvider> UIOutput getOut( T context ) {
        return context.getUIContext().getProvider().getOutput();
    }

    default <C extends UIContextProvider,T> boolean attributeExists( C ctx, String name ) {
        
        return ctx.getUIContext().getAttributeMap().containsKey(name);
    }

    @SuppressWarnings("unchecked")
    default <C extends UIContextProvider,T> T getAttribute( C ctx, String name, T defaultValue ) {
        
        final Object v = ctx.getUIContext().getAttributeMap().get(name);
        
        return (v!=null) ? (T)v : defaultValue; 
    }

    @SuppressWarnings("unchecked")
    default <C extends UIContextProvider,T> T  putAttribute( C ctx, String name, T value ) {

        return (T)ctx.getUIContext().getAttributeMap().put(name, value);
    }

    default <C extends UIContextProvider>void info( C cx, String format, Object...args ) {
        
        final java.io.PrintStream s = getOut(cx).out();
        s.printf(format, (Object [])args);
        s.println();
    }
    
    default <C extends UIContextProvider,T> void debug( C cx, String format, Object...args ) {
        
        final boolean verbose = getAttribute( cx, "verbose", false );
        
        if( !verbose ) return;
        
        final java.io.PrintStream s = getOut(cx).out();
        s.printf(format, (Object [])args);
        s.println();
    }
    
    default <C extends UIContextProvider,T> void error( C cx, String format, Object...args ) {
        
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

}
