package org.bsc.commands;

import org.bsc.commands.helper.GraaljsHelper;
import org.graalvm.polyglot.Context;
import org.jboss.forge.addon.ui.command.AbstractUICommand;
import org.jboss.forge.addon.ui.command.UICommand;
import org.jboss.forge.addon.ui.context.UIBuilder;
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
public class JSEvalStep extends AbstractUICommand implements UIWizardStep, GraaljsHelper {

    private boolean verbose = false;
    
	@Override
    public boolean isVerbose() {
        return verbose;
    }

    @Override
	public NavigationResult next(UINavigationContext context) throws Exception {
        
        debug(context, String.format("%s.next", getClass().getSimpleName()));
        
        verbose = getAttribute(context, "verbose",false);
        
        //final ScriptEngine scriptEngine = (ScriptEngine)getAttribute(context, ScriptEngine.class.getName(),null);
        final Context jsContext = (Context)getAttribute(context, Context.class.getName(),null);

        try {
            
            final Object result = invokeFunction( jsContext, "next" );
            
        	//final Object result = ((Invocable)scriptEngine).invokeFunction("next");
        
        	if( result instanceof UICommand ) {
        		return NavigationResultBuilder.create()
        										.add((UICommand)result)
        										.build();
        	}
        	
        	debug(context,"result of method 'next' is not valid it must be an UICommand instance!" );
        	
        }
        catch( NoSuchMethodException ex ) {

        	debug(context,"method 'next' not found" );
        	
        }
        
        return null;
	}

	@Override
	public Result execute(UIExecutionContext context) throws Exception {
		debug(context,"EvalStep.execute");

        //final ScriptEngine scriptEngine = (ScriptEngine)getAttribute(context, ScriptEngine.class.getName(),null);
        final Context jsContext = (Context)getAttribute(context, Context.class.getName(),null);

        //final Object result = ((Invocable)scriptEngine).invokeFunction("execute", context);
        final Object result = invokeFunction(jsContext, "execute", context);        

        return Results.success(String.valueOf(result));          
	}

	@Override
	public void initializeUI(UIBuilder builder) throws Exception {
         
        //final ScriptEngine scriptEngine = (ScriptEngine)getAttribute(builder, ScriptEngine.class.getName(),null);
        final Context jsContext = (Context)getAttribute(builder, Context.class.getName(),null);

        debug(builder,"EvalStep.initializeUI");

        //((Invocable)scriptEngine).invokeFunction("initializeUI", builder);
        invokeFunction(jsContext, "initializeUI", builder);        
	}

}
