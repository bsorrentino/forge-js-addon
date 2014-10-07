package org.bsc.commands;

import java.util.jar.Manifest;

import javax.inject.Inject;

import org.dynjs.runtime.DynJS;
import org.dynjs.runtime.GlobalObject;
import org.dynjs.runtime.GlobalObjectFactory;
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

import static org.bsc.commands.AddonUtils.getOut;
import static org.bsc.commands.AddonUtils.getAttribute;
import static org.bsc.commands.AddonUtils.putAttribute;
import static org.bsc.commands.AddonUtils.*;

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
		if(DEBUG) getOut( context ).out().println( "Eval.execute");
		return Results.success();
	}

	@Override
	public NavigationResult next(UINavigationContext context) throws Exception {

		if(DEBUG) getOut(context).out().println( "Eval.next" );

		DynJS dynjs = getAttribute(context, DynJS.class.getName());

		if( dynjs == null ) {
			final GlobalObjectFactory factory = new GlobalObjectFactory() {

				@Override
				public GlobalObject newGlobalObject(DynJS runtime) {
					return new GlobalObject(runtime) {{

						defineReadOnlyGlobalProperty("self", Eval.this, true);
						//defineReadOnlyGlobalProperty("context", context);

					}};
				}
			};

			final FileResource<?> js = script.getValue();

			final Manifest mf = getManifest();

			dynjs = newDynJS(context, factory);

			try {
				/*Object result = */runnerFromFile(dynjs, js, mf).evaluate();
			}
			catch(java.lang.LinkageError e) {
				if(DEBUG) getOut(context).err().println( String.valueOf( e.getMessage()));

			}
			catch( Exception e) {

					getOut(context).err().println( String.valueOf( e.getMessage()));

					if(DEBUG) e.printStackTrace(getOut(context).err());

					throw e;
			}

			putAttribute( context, DynJS.class.getName(), dynjs );

		}

		return Results.navigateTo( EvalStep.class);

	}


}
