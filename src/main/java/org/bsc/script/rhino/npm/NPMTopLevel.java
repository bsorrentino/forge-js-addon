package org.bsc.script.rhino.npm;

import static java.lang.String.format;

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
    protected NPMTopLevel(RootTopLevel topLevel) {
        super(topLevel, ScriptableObject.getObjectPrototype(topLevel));
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
     */
    public static NPMTopLevel createNPMTopLevel(final Context cx, final RootTopLevel topLevel) {
        if (topLevel == null) {
            throw new java.lang.IllegalArgumentException("topLevel is null!");
        }
        if (cx == null) {
            throw new java.lang.IllegalArgumentException("cx is null!");
        }

        final NPMTopLevel npm = new NPMTopLevel(topLevel);

        return npm;

    }
}
