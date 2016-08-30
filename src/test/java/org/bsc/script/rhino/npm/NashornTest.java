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

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;
import org.hamcrest.core.IsNull;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Ignore;
import org.junit.Test;

public class NashornTest {
    final ScriptEngineManager manager = new ScriptEngineManager();

    ScriptEngine service;
    
    @Before
    public void initScriptEngine() {
        service = manager.getEngineByName("nashorn");
        
        Assert.assertThat(service, IsNull.notNullValue());
        
    }
    
    @Test
    @Ignore
    public void dummy() {}
    
    
    
    /**

*   require test with relative path ./
        should be defined ....passed
        introspection should be defined ....passed
        moduleA  ....passed
        moduleB  ....error
        
        >>>
        cannot load module moduleB
        <<<
        
     */
    @Test @Ignore
    public void nashorn_test() throws ScriptException {
        
        service.put( "self", this );
        
        service.eval( "load('classpath:jvm-npm.js');" );
 
        service.put( "lookup_in_classloader", false );
        service.eval( "load('src/test/resources/jasmine/spec.js');" );
    }
    
    @Test
    public void nashorn_classloader_test() throws ScriptException {
        
        service.put( "self", this );
        
        service.eval( "load('classpath:jvm-cl-npm.js');" );

        service.put( "lookup_in_classloader", true );
        service.eval( "load('src/test/resources/jasmine/spec.js');" );
    }
    
}
