package org.bsc.commands;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import static org.bsc.commands.AddonUtils.getAttribute;
import static org.bsc.commands.AddonUtils.getOut;
import org.bsc.script.rhino.ForgeRhinoScriptEngine;

import org.jboss.forge.addon.ui.command.AbstractUICommand;
import org.jboss.forge.addon.ui.context.UIBuilder;
import org.jboss.forge.addon.ui.context.UIExecutionContext;
import org.jboss.forge.addon.ui.context.UINavigationContext;
import org.jboss.forge.addon.ui.result.NavigationResult;
import org.jboss.forge.addon.ui.result.Result;
import org.jboss.forge.addon.ui.result.Results;
import org.jboss.forge.addon.ui.wizard.UIWizardStep;

import static org.bsc.commands.AddonConstants.*;
import org.jboss.forge.addon.ui.command.UICommand;

/**
 * 
 * @author bsorrentino
 *
 */
public class JSEvalStep extends AbstractUICommand implements UIWizardStep {
        
	@Override
	public NavigationResult next(UINavigationContext context) throws Exception {
        
            if(Boolean.TRUE.equals(getAttribute(context,"verbose"))) getOut(context).out().println("EvalStep.next" );
            return null;
	}

	@Override
	public Result execute(UIExecutionContext context) throws Exception {
		if(Boolean.TRUE.equals(getAttribute(context,"verbose"))) getOut(context).out().println("EvalStep.execute");

                final ForgeRhinoScriptEngine scriptEngine = (ForgeRhinoScriptEngine)getAttribute(context, ScriptEngine.class.getName());

                final Object result = scriptEngine.invokeFunction("execute", context);

                return Results.success(String.valueOf(result));          
	}

	@Override
	public void initializeUI(UIBuilder builder) throws Exception {

            
                final ForgeRhinoScriptEngine scriptEngine = (ForgeRhinoScriptEngine)getAttribute(builder, ScriptEngine.class.getName());

                if(Boolean.TRUE.equals(getAttribute(builder,"verbose"))) getOut(builder).out().println("EvalStep.initializeUI");

                scriptEngine.invokeFunction("initializeUI", builder);
                
	}

}
