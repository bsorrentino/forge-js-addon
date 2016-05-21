/*
 * Copyright (C) 2006 Sun Microsystems, Inc. All rights reserved. 
 * Use is subject to license terms.
 *
 * Redistribution and use in source and binary forms, with or without modification, are 
 * permitted provided that the following conditions are met: Redistributions of source code 
 * must retain the above copyright notice, this list of conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list of 
 * conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution. Neither the name of the Sun Microsystems nor the names of 
 * is contributors may be used to endorse or promote products derived from this software 
 * without specific prior written permission. 

 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
 * OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY 
 * AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER 
 * OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR 
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR 
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON 
 * ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE
 * OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */

package org.bsc.script.rhino.npm;
import java.util.Arrays;
import java.util.List;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineFactory;
import org.bsc.script.rhino.AbstractRhinoScriptEngineFactory;
import org.bsc.script.rhino.RhinoScriptEngine;
import org.bsc.script.rhino.RootTopLevel;

import org.kohsuke.MetaInfServices;

@MetaInfServices(ScriptEngineFactory.class)
public class NPMRhinoScriptEngineFactory  extends AbstractRhinoScriptEngineFactory {


	@Override
	public List<String> getNames() {
		return Arrays.asList( "rhino-npm" );
	}

	@Override
	public ScriptEngine getScriptEngine() {
		
		final ClassLoader cl = null; // getClass().getClassLoader()
		final RhinoScriptEngine service = new RhinoScriptEngine( cl, (cx, engine) -> {
			
			final RootTopLevel root =  new RootTopLevel(cx, false, engine);
                        
                        return NPMTopLevel.createNPMTopLevel(cx, root);
		});

		return service;
		
	}		
	
	   
}
