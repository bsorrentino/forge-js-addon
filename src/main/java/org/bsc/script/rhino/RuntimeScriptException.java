package org.bsc.script.rhino;

import javax.script.ScriptException;

@SuppressWarnings("serial")
public class RuntimeScriptException extends RuntimeException {

	public RuntimeScriptException(ScriptException cause) {
		super(cause);
		if (cause == null)
			throw new java.lang.IllegalArgumentException("cause is null!");

	}
	
	public ScriptException cast() {
		return (ScriptException)getCause();
	}
	
}