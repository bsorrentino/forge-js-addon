package org.bsc.commands;


import static java.lang.String.format;

import org.bsc.commands.helper.GraaljsHelper;
import org.graalvm.polyglot.Context;
import org.jboss.forge.addon.ui.command.AbstractUICommand;
import org.jboss.forge.addon.ui.context.UIBuilder;
import org.jboss.forge.addon.ui.context.UIExecutionContext;
import org.jboss.forge.addon.ui.result.Result;
import org.jboss.forge.addon.ui.result.Results;
import org.jboss.forge.addon.ui.wizard.UIWizardStep;

public class JSCommand extends AbstractUICommand implements UIWizardStep, GraaljsHelper {

	final Object jsObject;

	public JSCommand(Object jsObject) {
		super();
		this.jsObject = jsObject;
	}
	
	@Override
	public Result execute(UIExecutionContext context) throws Exception {
	    debug(context, format("%s.execute", getClass().getSimpleName()));

        final Context jsContext = (Context)getAttribute(context, Context.class.getName(), null);
        //final ScriptEngine scriptEngine = (ScriptEngine)getAttribute(builder, ScriptEngine.class.getName(), null);
 
        final Object result = invokeMethod(jsContext, jsObject, "execute", context);
        //final Object result = ((Invocable)scriptEngine).invokeMethod(jsObject, "execute", context);
        
        return Results.success(String.valueOf(result));          
	}

	@Override
	public void initializeUI(UIBuilder builder) throws Exception {   
        debug(builder, format("%s.initializeUI", getClass().getSimpleName()));

        final Context jsContext = (Context)getAttribute(builder, Context.class.getName(), null);
        //final ScriptEngine scriptEngine = (ScriptEngine)getAttribute(builder, ScriptEngine.class.getName(), null);

        invokeMethod(jsContext, jsObject, "initializeUI", builder);
        //((Invocable)scriptEngine).invokeMethod(jsObject, "initializeUI", builder);
                
	}
	
}
