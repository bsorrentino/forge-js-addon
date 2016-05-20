package org.bsc.script.rhino.npm;

import static  java.lang.String.format;

import java.io.IOException;
import org.bsc.script.rhino.RootTopLevel;

import org.mozilla.javascript.Context;
import org.mozilla.javascript.ScriptableObject;


@SuppressWarnings("serial")
public final class NPMTopLevel extends ScriptableObject {

	private static final String MODULE_NAME = "jvm-npm.js";
	private static final String MODULE = "scripting/" + MODULE_NAME;


	/**
	 * 
	 * @param topLevel
	 */
	public NPMTopLevel( RootTopLevel topLevel ) {
		super( topLevel, ScriptableObject.getObjectPrototype(topLevel));

	
	}

	/**
	 * @return class name
	 */
	@Override
	public String getClassName() {
		return "jvm-npm";
	}


	/**
	 * 
	 * @param cx
	 * @param topLevel
	 * @return
	 * @throws IOException
	 */
	public static NPMTopLevel createNPMTopLevel( final Context cx, final RootTopLevel topLevel ) {
		if (topLevel == null)
			throw new java.lang.IllegalArgumentException("topLevel is null!");
		if (cx == null)
			throw new java.lang.IllegalArgumentException("cx is null!");


		final NPMTopLevel npm = new NPMTopLevel(topLevel);
		
		//cx.initStandardObjects(npm); Note: this call throws java.lang.IllegalArgumentException
		
		final java.io.InputStream is = NPMTopLevel.class.getClassLoader().getResourceAsStream(MODULE);
		
		if( is == null ) {
                    throw new RuntimeException( format( "resource [%s] not found!", MODULE));
		}
		
                try {
			cx.evaluateReader(npm, new java.io.InputStreamReader(is), MODULE_NAME, 0, null);
                        
		} catch (IOException e) {
			throw new RuntimeException( format( "error evaluating [%s]!", MODULE), e);
		}
                    return npm;
                }
}
