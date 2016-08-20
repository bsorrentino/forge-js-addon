package org.bsc.commands;

import static org.bsc.commands.AddonUtils.getAttribute;
import static org.bsc.commands.AddonUtils.getOut;

import javax.script.Invocable;
import javax.script.ScriptEngine;
import javax.script.ScriptException;

import org.jboss.forge.addon.ui.command.AbstractUICommand;
import org.jboss.forge.addon.ui.command.UICommand;
import org.jboss.forge.addon.ui.context.UIBuilder;
import org.jboss.forge.addon.ui.context.UIContextProvider;
import org.jboss.forge.addon.ui.context.UIExecutionContext;
import org.jboss.forge.addon.ui.context.UINavigationContext;
import org.jboss.forge.addon.ui.result.NavigationResult;
import org.jboss.forge.addon.ui.result.Result;
import org.jboss.forge.addon.ui.result.Results;
import org.jboss.forge.addon.ui.result.navigation.NavigationResultBuilder;
import org.jboss.forge.addon.ui.wizard.UIWizardStep;


/**
 * 
 * @author bsorrentino
 *
 */
public class JSEvalStep extends AbstractUICommand implements UIWizardStep {
	
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
	public NavigationResult next(UINavigationContext context) throws Exception {
        
        debug(context,"EvalStep.next" );

        final ScriptEngine scriptEngine = (ScriptEngine)getAttribute(context, ScriptEngine.class.getName());

        try {
        
        	final Object result = ((Invocable)scriptEngine).invokeFunction("next");
        
        	if( result instanceof UICommand ) {
        		return NavigationResultBuilder.create()
        										.add((UICommand)result)
        										.build();
        	}
        	
        	debug(context,"result of method 'next' is not valid it must be an UICommand instance!" );
        	
        }
        catch( NoSuchMethodException | ScriptException ex ) {

        	debug(context,"method 'next' not found" );
        	
        }
        
        return null;
	}

	@Override
	public Result execute(UIExecutionContext context) throws Exception {
		debug(context,"EvalStep.execute");

        final ScriptEngine scriptEngine = (ScriptEngine)getAttribute(context, ScriptEngine.class.getName());

        final Object result = ((Invocable)scriptEngine).invokeFunction("execute", context);

        return Results.success(String.valueOf(result));          
	}

	@Override
	public void initializeUI(UIBuilder builder) throws Exception {

            
        final ScriptEngine scriptEngine = (ScriptEngine)getAttribute(builder, ScriptEngine.class.getName());

        debug(builder,"EvalStep.initializeUI");

        ((Invocable)scriptEngine).invokeFunction("initializeUI", builder);
                
	}

}
