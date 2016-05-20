package org.bsc.commands;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.jar.Manifest;

import javax.inject.Inject;
import javax.script.ScriptEngine;
import static org.bsc.commands.AddonConstants.DEBUG;

import org.jboss.forge.addon.projects.Project;
import org.jboss.forge.addon.projects.Projects;
import org.jboss.forge.addon.resource.DirectoryResource;
import org.jboss.forge.addon.resource.FileResource;
import org.jboss.forge.addon.resource.Resource;
import org.jboss.forge.addon.resource.ResourceFactory;
import org.jboss.forge.addon.resource.ResourceFilter;
import org.jboss.forge.addon.ui.context.UIBuilder;
import org.jboss.forge.addon.ui.context.UIContext;
import org.jboss.forge.addon.ui.context.UIExecutionContext;
import org.jboss.forge.addon.ui.context.UINavigationContext;
import org.jboss.forge.addon.ui.hints.InputType;
import org.jboss.forge.addon.ui.input.InputComponent;
import org.jboss.forge.addon.ui.input.UICompleter;
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
 * Evaluate a script in project's scope
 *
 * @author bsorrentino
 *
 */
public class EvalInProject extends AbstractDynjsProjectCommand implements UIWizard, AddonConstants {
	@Inject
	@WithAttributes(label = "Script", required = true, type = InputType.FILE_PICKER)
	private UIInput<FileResource<?>> script;

	@Inject
	ResourceFactory resFactory;

	@Override
	public UICommandMetadata getMetadata(UIContext context) {
		return Metadata.forCommand(EvalInProject.class)
					   .name("js-eval-in-project")
					   .category(CATEGORY)
					   .description("Evaluate a script in project's scope")
					   ;
	}

	@SuppressWarnings("unchecked")
	private List<Resource<?>> listResources(Resource<?> res,
			final List<Resource<?>> result) {

		List<?> r = res.listResources(new ResourceFilter() {

			@Override
			public boolean accept(Resource<?> res) {

				if (res instanceof FileResource) {

					FileResource<?> file = (FileResource<?>) res;

					return file.getName().endsWith(".js");
				} else if (res instanceof DirectoryResource) {

					listResources(res, result);
				}

				return false;
			}
		});

		result.addAll((Collection<? extends Resource<?>>) r);

		return result;
	}

	/**
	 *
	 */
	@Override
	public void initializeUI(final UIBuilder builder) throws Exception {

		if( DEBUG ) getOut(builder).out().println("initializeUI");

		final Project project = Projects.getSelectedProject(getProjectFactory(),
				builder.getUIContext());

		if( DEBUG ) getOut(builder).out().printf("root [%s]\n", project.getRoot());

		script.setCompleter(new UICompleter<FileResource<?>>() {

			@SuppressWarnings("unchecked")
			@Override
			public Iterable<FileResource<?>> getCompletionProposals(
					UIContext context,
					InputComponent<?, FileResource<?>> input, String value) {

				List<Resource<?>> result = listResources(
						project.getRoot(), new ArrayList<Resource<?>>());

				final java.io.File root = (java.io.File) project.getRoot().getUnderlyingResourceObject();

				final java.io.File resourcesDirs[] = {
						new java.io.File( root, "src/main/resources"),
						new java.io.File( root, "src/test/resources")
				};

				for( java.io.File resourcesDir : resourcesDirs ) {
					if( resourcesDir.exists() ) {

						Resource<?> resourcesRes = resFactory.create(resourcesDir);

						listResources(resourcesRes, result);

					}
				}

				Collections.sort(result, new Comparator<Resource<?>>() {

					@Override
					public int compare(Resource<?> o1, Resource<?> o2) {
						return o1.getFullyQualifiedName().compareTo(
								o2.getFullyQualifiedName());
					}
				});

				return (Iterable<FileResource<?>>) (List<?>) result;
			}
		});
		builder.add(script);

	}

	@Override
	public Result execute(final UIExecutionContext context) {
                printVersion(context);

                if(DEBUG) getOut(context).out().println( "EvalP.execute" );

		return Results.success();
	}

	@Override
	public NavigationResult next(UINavigationContext context) throws Exception {

		if(DEBUG) getOut(context).out().println( "EvalP.next" );

                final FileResource<?> js = script.getValue();

                final Manifest mf = getManifest();

                final Project project = super.getSelectedProject(context);

                scriptEngine.setContext(ScriptContextBuilder.create()
                            .currentResource(js)
                            .stdout(getOut(context).out())
                            .stderr(getOut(context).err())
                            .build());
                scriptEngine.put("self", this);
                scriptEngine.put("project", project);

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
