package org.bsc.commands;

import java.util.jar.Manifest;

import javax.inject.Inject;
import javax.script.ScriptEngine;

import org.jboss.forge.addon.resource.FileResource;
import org.jboss.forge.addon.ui.context.UIBuilder;
import org.jboss.forge.addon.ui.context.UIContext;
import org.jboss.forge.addon.ui.context.UIExecutionContext;
import org.jboss.forge.addon.ui.context.UINavigationContext;
import org.jboss.forge.addon.ui.hints.InputType;
import org.jboss.forge.addon.ui.input.UIInput;
import org.jboss.forge.addon.ui.metadata.UICommandMetadata;
import org.jboss.forge.addon.ui.metadata.WithAttributes;
import org.jboss.forge.addon.ui.result.NavigationResult;
import org.jboss.forge.addon.ui.result.Result;
import org.jboss.forge.addon.ui.result.Results;
import org.jboss.forge.addon.ui.util.Metadata;
import org.jboss.forge.addon.ui.wizard.UIWizard;

import static org.bsc.commands.AddonUtils.*;
import org.jboss.forge.addon.script.ScriptContextBuilder;

/**
 * Evaluate a script
 *
 * @author bsorrentino
 *
 */
public class Eval extends AbstractDynjsUICommand implements UIWizard, AddonConstants {

	@Inject
	@WithAttributes(label = "Script", required = true, type = InputType.FILE_PICKER)
	private UIInput<FileResource<?>> script;

	@Override
	public UICommandMetadata getMetadata(UIContext context) {
		return Metadata.forCommand(Eval.class)
						.name("js-eval")
						.category(CATEGORY)
						.description("Evaluate a script")
						;
	}

	@Override
	public void initializeUI(UIBuilder builder) throws Exception {
		if(DEBUG) getOut( builder ).out().println( "Eval.initializeUI");

		builder.add(script);
	}

	@Override
	public Result execute(final UIExecutionContext context) {
                printVersion(context);
                
		if(DEBUG) getOut( context ).out().println( "Eval.execute");
		return Results.success();
	}

	@Override
	public NavigationResult next(UINavigationContext context) throws Exception {
                
		if(DEBUG) getOut(context).out().println( "Eval.next" );


                final FileResource<?> js = script.getValue();

                final Manifest mf = getManifest();

                scriptEngine.setContext(ScriptContextBuilder.create()
                            .currentResource(js)
                            .stdout(getOut(context).out())
                            .stderr(getOut(context).err())
                            .build());
                scriptEngine.put("self", this);
                

                try {
                        /*Object result = */evalFromFile(js, mf);
                }
                catch(java.lang.LinkageError e) {
                        if(DEBUG) getOut(context).err().println( String.valueOf( e.getMessage()));

                }
                catch( Exception e) {

                        getOut(context).err().println( String.valueOf( e.getMessage()));

                        if(DEBUG) e.printStackTrace(getOut(context).err());

                        throw e;
                }

		putAttribute( context, ScriptEngine.class.getName(), scriptEngine );

		return Results.navigateTo( EvalStep.class);

	}


}
