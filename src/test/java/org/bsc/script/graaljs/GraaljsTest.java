package org.bsc.script.graaljs;

import java.util.function.Predicate;

import javax.script.Bindings;
import javax.script.ScriptContext;
import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;

import org.hamcrest.core.IsNull;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Ignore;
import org.junit.Test;

public class GraaljsTest {

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

    @Test
    public void nashorn_classloader_test() throws ScriptException {

    	final Predicate<String> allowHostClassLookup =  s -> true;
    	
        final Bindings bindings = service.getBindings(ScriptContext.ENGINE_SCOPE);
        // @see https://github.com/graalvm/graaljs/blob/master/docs/user/ScriptEngine.md
        bindings.put("polyglot.js.allowHostAccess", true);
        bindings.put("polyglot.js.allowHostClassLookup", allowHostClassLookup);
        bindings.put("polyglot.js.allowIO", true);
    	
        service.put( "self", this );

        service.eval( "load('classpath:jvm-npm.js');" );

        service.put( "lookup_in_classloader", true );
        service.eval( "load('src/test/resources/jasmine/spec.js');" );
    }


}
