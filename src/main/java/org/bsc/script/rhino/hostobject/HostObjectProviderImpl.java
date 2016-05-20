package org.bsc.script.rhino.hostobject;

import org.bsc.script.rhino.HostObjectProvider;

import org.kohsuke.MetaInfServices;
import org.mozilla.javascript.ScriptableObject;

@MetaInfServices
public class HostObjectProviderImpl implements HostObjectProvider {

	@Override
	public java.util.Collection<Class<? extends ScriptableObject>> getHostObjectClasses() {
		
		java.util.List<Class<? extends ScriptableObject>> result = new java.util.ArrayList<>(1);
		//result.add( URIMatcherHostObject.class );
		
		return java.util.Collections.unmodifiableCollection(result);
	}

}
