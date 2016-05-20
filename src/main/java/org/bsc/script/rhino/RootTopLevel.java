package org.bsc.script.rhino;

import java.io.IOException;

import javax.script.ScriptContext;
import javax.script.ScriptEngine;

import org.mozilla.javascript.Context;
import org.mozilla.javascript.Function;
import org.mozilla.javascript.ImporterTopLevel;
import org.mozilla.javascript.Scriptable;
import org.mozilla.javascript.ScriptableObject;

@SuppressWarnings("serial")
public final class RootTopLevel extends ImporterTopLevel {

	final javax.script.ScriptEngine engine;
	
	/**
	 * 
	 * @param args
	 * @return
	 */
	private static String printBuffer( Object[] args ) {
    	final StringBuilder printBuffer = new StringBuilder();
    	int row = 0;
    	for( Object arg : args ) {
			
    		if (row++ > 0) {
    			printBuffer.append(" ");
    		}   	
			// Convert the arbitrary JavaScript value into a string form.
			printBuffer.append( Context.toString(arg) );
		}
		return printBuffer.toString();
	}
	
	/**
	 * print function exported to javascript
	 * 
	 * @param cx
	 * @param thisObj
	 * @param args
	 * @param funObj
	 */
    public static void print(Context cx, Scriptable thisObj, Object[] args, Function funObj)
	{
    	if( args == null ) {
    		return;
    	}
    	
    	final String buffer = printBuffer(args);
    	
    	if( thisObj instanceof RootTopLevel ) {
    		
    		RootTopLevel _this = (RootTopLevel) thisObj;
    		
    		final ScriptContext scx = (_this.engine != null ) ? _this.engine.getContext() : null;
    		if( scx !=null ) {    		
	        	
    			final java.io.Writer w = scx.getWriter();
	        	
	    		if( w != null ) {
	    			try {
	    				w.write(buffer);
	    				w.write('\n');
	    				w.flush();
	        			return;
	    			} catch (IOException e) {
	    				// IGNORE EXCEPTION
	    			} 
	    		}
    		}
    		
    	}
	
		System.out.println(buffer);
	}

    /**
     * 
     * @param cx
     * @param sealed
     */
	public RootTopLevel(Context cx) {
		this(cx, false, null);
	}

    /**
     * 
     * @param cx
     * @param sealed
     */
	public RootTopLevel(Context cx, ScriptEngine engine) {
		this(cx, false, engine);		
	}
    /**
     * 
     * @param cx
     * @param sealed
     */
	public RootTopLevel(Context cx, boolean sealed, ScriptEngine engine) {
		super(cx, sealed);
		
		this.engine = engine;
		
	}
	
	public void initStandardObjects(Context cx, boolean sealed) {
	    super.initStandardObjects(cx, sealed);
		final String[] names = {  "print" };

		defineFunctionProperties(names, getClass(),  ScriptableObject.DONTENUM);
		
		final ScriptableObject objProto = (ScriptableObject) getObjectPrototype(this);
	    objProto.defineFunctionProperties(names,  getClass(), DONTENUM);		
		
	}
}
