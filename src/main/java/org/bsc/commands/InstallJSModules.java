package org.bsc.commands;


import static org.bsc.commands.AddonUtils.copyDirToAssetDir;
import static org.bsc.commands.AddonUtils.getManifest;
import static org.bsc.commands.AddonUtils.printVersion;

import java.util.jar.Manifest;

import javax.inject.Inject;

import org.bsc.functional.Functional.Fn;
import org.jboss.forge.addon.resource.FileResource;
import org.jboss.forge.addon.ui.context.UIBuilder;
import org.jboss.forge.addon.ui.context.UIContext;
import org.jboss.forge.addon.ui.context.UIExecutionContext;
import org.jboss.forge.addon.ui.hints.InputType;
import org.jboss.forge.addon.ui.input.UIInput;
import org.jboss.forge.addon.ui.metadata.UICommandMetadata;
import org.jboss.forge.addon.ui.metadata.WithAttributes;
import org.jboss.forge.addon.ui.result.Result;
import org.jboss.forge.addon.ui.result.Results;
import org.jboss.forge.addon.ui.util.Metadata;

/**
 *
 * @author bsorrentino
 *
 */
public class InstallJSModules extends AbstractDynjsUICommand  implements AddonConstants {
	@Inject
	@WithAttributes(label = "JS Module Directory", required = true, type = InputType.DIRECTORY_PICKER)
	private UIInput<FileResource<?>> scriptDir;

	//@Inject
	//@WithAttributes(label = "Overwrite", required = true, type = InputType.CHECKBOX, defaultValue = "true")
	//private UIInput<Boolean> overwrite;

	@Override
	public UICommandMetadata getMetadata(UIContext context) {
		return Metadata.forCommand(InstallJSModules.class)
				.name("js-install-modules")
				.category(CATEGORY)
				.description("Install common/shared modules from given directory")
				;
	}

	@Override
	public void initializeUI(UIBuilder builder) throws Exception {
		builder.add(scriptDir);
		//builder.add(overwrite);
	}

	@Override
	public Result execute(UIExecutionContext context) throws Exception {

		printVersion(context);

		final FileResource<?> js = scriptDir.getValue();

		final Manifest mf = getManifest();

		return copyDirToAssetDir(js.getUnderlyingResourceObject(), mf, 
                        (p) -> { return Results.success(); }, 
                        (e) -> { return Results.fail("install module failed!", e);} 
                );

	}


}
