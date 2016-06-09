/*
 * The MIT License
 *
 * Copyright 2016 softphone.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
package org.bsc.script.rhino.npm;

import javax.script.ScriptException;
import org.bsc.script.rhino.ForgeRhinoScriptEngine;
import org.bsc.script.rhino.RootTopLevel;
import org.javascript.rhino.RhinoTopLevel;
import static org.javascript.rhino.RhinoTopLevel.loadModule;
import org.junit.Ignore;
import org.junit.Test;
import org.mozilla.javascript.Context;
import org.mozilla.javascript.ContextAction;
import org.mozilla.javascript.ContextFactory;
import org.mozilla.javascript.Scriptable;
import org.mozilla.javascript.ScriptableObject;

public class NPMRhinoTest {
    
    @Test
    @Ignore
    public void dummy() {}
    
    private static boolean LOOKUP_IN_CLASSLOADER = true;

    @Test
    @Ignore
    public void rhino_jvm_npm_test() 
    {       
        final ContextFactory contextFactory = new ContextFactory();

        contextFactory.call( new ContextAction() {

            @Override
            public Object run(Context cx) {
                final RhinoTopLevel topLevel = new RhinoTopLevel(cx);

                Scriptable newScope = cx.newObject(topLevel);
                newScope.setPrototype(topLevel);
                //newScope.setParentScope(null);

                ScriptableObject.putProperty(newScope, "lookup_in_classloader", LOOKUP_IN_CLASSLOADER);
                
                loadModule(cx, newScope, "src/test/resources/spec.js");

                
                return newScope;
           }
        });


    }
    
    @Test
    //@Ignore
    public void rhino_addon_test() throws ScriptException {

        final ClassLoader cl = Thread.currentThread().getContextClassLoader();
          
        final ForgeRhinoScriptEngine service = new ForgeRhinoScriptEngine( cl, (cx, engine) -> {

                final RootTopLevel root =  new RootTopLevel(cx, false, engine);

                final NPMTopLevel npm =  NPMTopLevel.createNPMTopLevel(cx, root);
                
                return npm;
        });

        service.put( "lookup_in_classloader", LOOKUP_IN_CLASSLOADER );
        service.eval( "load('src/test/resources/spec.js');" );
    }
    
}
