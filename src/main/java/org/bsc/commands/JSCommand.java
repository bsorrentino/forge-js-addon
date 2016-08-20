package org.bsc.commands;

import static org.bsc.commands.AddonUtils.getAttribute;
import static org.bsc.commands.AddonUtils.getOut;

import javax.script.Invocable;
import javax.script.ScriptEngine;

import org.jboss.forge.addon.ui.command.AbstractUICommand;
import org.jboss.forge.addon.ui.context.UIBuilder;
import org.jboss.forge.addon.ui.context.UIContextProvider;
import org.jboss.forge.addon.ui.context.UIExecutionContext;
import org.jboss.forge.addon.ui.result.Result;
import org.jboss.forge.addon.ui.result.Results;
import org.jboss.forge.addon.ui.wizard.UIWizardStep;

public class JSCommand extends AbstractUICommand implements UIWizardStep {

	final Object jsObject;

	public JSCommand(Object jsObject) {
		super();
		this.jsObject = jsObject;
	}
	
    private <T extends UIContextProvider> boolean isVerbose( T context ) {
    	return (Boolean.TRUE.equals(getAttribute(context,"verbose")));
    }
	
    private <T extends UIContextProvider> void debug( T context, String fmt, Object...args) {

    	if(isVerbose(context)) {
    		final java.io.PrintStream ps = getOut(context).out();
    		ps.printf(fmt, (Object[])args );
    		ps.println();
    	}
    	
    }

	@Override
	public Result execute(UIExecutionContext context) throws Exception {
		debug(context,"JSCommand.execute");

        final ScriptEngine scriptEngine = (ScriptEngine)getAttribute(context, ScriptEngine.class.getName());

        final Object result = ((Invocable)scriptEngine).invokeMethod(jsObject, "execute", context);

        return Results.success(String.valueOf(result));          
	}

	@Override
	public void initializeUI(UIBuilder builder) throws Exception {
   
        final ScriptEngine scriptEngine = (ScriptEngine)getAttribute(builder, ScriptEngine.class.getName());

        debug(builder,"JSCommand.initializeUI");

        ((Invocable)scriptEngine).invokeMethod(jsObject, "initializeUI", builder);
                
	}
	
}
