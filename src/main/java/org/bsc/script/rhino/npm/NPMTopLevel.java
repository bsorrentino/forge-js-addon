package org.bsc.script.rhino.npm;

import static  java.lang.String.format;

import java.io.IOException;
import org.bsc.script.rhino.RootTopLevel;

import org.mozilla.javascript.Context;
import org.mozilla.javascript.ScriptableObject;


@SuppressWarnings("serial")
public final class NPMTopLevel extends ScriptableObject {


	/**
	 * 
	 * @param topLevel
	 */
	protected NPMTopLevel( RootTopLevel topLevel ) {
		super( topLevel, ScriptableObject.getObjectPrototype(topLevel));
	}

	/**
	 * @return class name
	 */
	@Override
	public String getClassName() {
		return "jvm-npm";
	}

        public static NPMTopLevel createNPMTopLevel( final Context cx, final RootTopLevel topLevel, String jvm_npm_module_name ) {
		if (topLevel == null)
			throw new java.lang.IllegalArgumentException("topLevel is null!");
		if (cx == null)
			throw new java.lang.IllegalArgumentException("cx is null!");
		if (jvm_npm_module_name == null)
			throw new java.lang.IllegalArgumentException("jvm_npm_module_name is null!");

                final String module = "scripting/" + jvm_npm_module_name ;
                
		final NPMTopLevel npm = new NPMTopLevel(topLevel);
		
		//cx.initStandardObjects(npm); Note: this call throws java.lang.IllegalArgumentException
		
		final java.io.InputStream is = NPMTopLevel.class.getClassLoader().getResourceAsStream(module);
		
		if( is == null ) {
                    throw new RuntimeException( format( "resource [%s] not found!", module));
		}
		
                try {
			cx.evaluateReader(npm, new java.io.InputStreamReader(is), jvm_npm_module_name, 0, null);
                        
		} catch (IOException e) {
			throw new RuntimeException( format( "error evaluating [%s]!", module), e);
		}
                    return npm;
                }
}
