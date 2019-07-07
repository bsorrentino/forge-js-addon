package org.bsc.commands;


import javax.script.Invocable;
import javax.script.ScriptEngine;

import org.jboss.forge.addon.ui.command.AbstractUICommand;
import org.jboss.forge.addon.ui.context.UIBuilder;
import org.jboss.forge.addon.ui.context.UIExecutionContext;
import org.jboss.forge.addon.ui.result.Result;
import org.jboss.forge.addon.ui.result.Results;
import org.jboss.forge.addon.ui.wizard.UIWizardStep;

public class JSCommand extends AbstractUICommand implements UIWizardStep, UIContextHelper {

	final Object jsObject;

	public JSCommand(Object jsObject) {
		super();
		this.jsObject = jsObject;
	}
	
	@Override
	public Result execute(UIExecutionContext context) throws Exception {
		debug(context,"JSCommand.execute");

        final ScriptEngine scriptEngine = (ScriptEngine)getAttribute(context, ScriptEngine.class.getName(), null);

        final Object result = ((Invocable)scriptEngine).invokeMethod(jsObject, "execute", context);

        return Results.success(String.valueOf(result));          
	}

	@Override
	public void initializeUI(UIBuilder builder) throws Exception {
   
        final ScriptEngine scriptEngine = (ScriptEngine)getAttribute(builder, ScriptEngine.class.getName(), null);

        debug(builder,"JSCommand.initializeUI");

        ((Invocable)scriptEngine).invokeMethod(jsObject, "initializeUI", builder);
                
	}
	
}
