package org.bsc.script.rhino;

import java.io.IOException;
import static java.lang.String.format;

import javax.script.ScriptContext;
import javax.script.ScriptEngine;
import org.javascript.rhino.RhinoTopLevel;

import org.mozilla.javascript.Context;
import org.mozilla.javascript.Function;
import org.mozilla.javascript.ImporterTopLevel;
import org.mozilla.javascript.Scriptable;
import org.mozilla.javascript.ScriptableObject;
import static java.lang.String.format;

@SuppressWarnings("serial")
public final class RootTopLevel extends ImporterTopLevel {

    final javax.script.ScriptEngine engine;

    /**
     *
     * @param args
     * @return
     */
    private static String _print(Object[] args) {
        final StringBuilder printBuffer = new StringBuilder();
        int row = 0;
        for (Object arg : args) {

            if (row++ > 0) {
                printBuffer.append(" ");
            }
            // Convert the arbitrary JavaScript value into a string form.
            printBuffer.append(Context.toString(arg));
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
    public static void print(Context cx, Scriptable thisObj, Object[] args, Function funObj) {
        if (args == null) {
            return;
        }

        final String buffer = _print(args);

        if (thisObj instanceof RootTopLevel) {

            RootTopLevel _this = (RootTopLevel) thisObj;

            final ScriptContext scx = (_this.engine != null) ? _this.engine.getContext() : null;
            if (scx != null) {

                final java.io.Writer w = scx.getWriter();

                if (w != null) {
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

    private static RootTopLevel deref( Scriptable thisObj ) {
        if( thisObj != null ) {
            if( thisObj instanceof RootTopLevel ) {
                return (RootTopLevel) thisObj;
            }

            final Scriptable protoObj = thisObj.getPrototype();
            if( protoObj instanceof RootTopLevel ) {
                return (RootTopLevel) thisObj;
            }   
        }    
        
        return null;
        
    }
    
    /**
     * Load and execute a set of JavaScript source files.
     *
     * This method is defined as a JavaScript function.
     *
     */
    public static void load(Context cx, Scriptable thisObj, Object[] args, Function funObj) throws Exception {
        if (args == null) {
            return;
        }
        
        RootTopLevel _this = deref(thisObj);
        
        if( _this == null ) _this = deref( thisObj.getParentScope() );
        
        if( _this == null ) throw new IllegalStateException( "cannot deref thisObj to  RhinoTopLevel!");

        for (Object a : args) {

            final String module = Context.toString(a);

            _this._load(cx, module);
        }
    }

    private final java.util.Set<String> moduleCache = new java.util.HashSet<>();

    private void _load(Context cx, String module) {

        if( moduleCache.contains(module)) {
            return;
        }

        final ClassLoader cl = Thread.currentThread().getContextClassLoader();

        final java.io.InputStream is = cl.getResourceAsStream(module);

        if (is != null) {

            try {
                cx.evaluateReader(this, new java.io.InputStreamReader(is), module, 0, null);

                moduleCache.add( module );

            } catch (IOException e) {
                throw new RuntimeException(format("error evaluating module [%s]", module), e);
            }

        } else { // Fallback

            java.io.File file = new java.io.File(module);

            if (!file.exists()) {
                throw new RuntimeException(format("module [%s] doesn't exist!", module));
            }
            if (!file.isFile()) {
                throw new RuntimeException(format("module [%s] is not a file exist!", module));
            }

            try {
                final java.io.FileReader reader = new java.io.FileReader(file);

                cx.evaluateReader(this, reader, module, 0, null);

                moduleCache.add( module );

            } catch (IOException e) {
                throw new RuntimeException(format("error evaluating module [%s]", module), e);
            }

        }
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
        final String[] names = {"print", "load"};

        defineFunctionProperties(names, getClass(), ScriptableObject.DONTENUM);

        final ScriptableObject objProto = (ScriptableObject) getObjectPrototype(this);
        objProto.defineFunctionProperties(names, getClass(), DONTENUM);

    }
}
