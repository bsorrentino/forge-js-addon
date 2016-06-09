package org.bsc.script.rhino;

import org.mozilla.javascript.ScriptableObject;

public interface HostObjectProvider {

	java.util.Collection<Class<? extends ScriptableObject>> getHostObjectClasses();
}
