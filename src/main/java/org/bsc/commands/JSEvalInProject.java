package org.bsc.commands;

import java.io.File;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.jar.Manifest;
import javax.enterprise.inject.spi.BeanManager;

import javax.inject.Inject;
import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
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
import static org.bsc.commands.AddonConstants.*;
import org.bsc.script.rhino.RhinoScriptEngine;
import org.jboss.forge.addon.dependencies.DependencyResolver;
import org.jboss.forge.addon.environment.Environment;
import org.jboss.forge.addon.projects.ProjectFactory;
import org.jboss.forge.addon.projects.ui.AbstractProjectCommand;
import org.jboss.forge.addon.ui.input.InputComponentFactory;
import org.jboss.forge.furnace.manager.maven.MavenContainer;

/**
 * Evaluate a script in project's scope
 *
 * @author bsorrentino
 *
 */
public class JSEvalInProject extends AbstractJSProjectCommand implements UIWizard {
    @Inject
    @WithAttributes(label = "Script", required = true, type = InputType.FILE_PICKER)
    private UIInput<FileResource<?>> script;

    @Inject
    ResourceFactory resFactory;

    @Override
    public UICommandMetadata getMetadata(UIContext context) {
        return Metadata.forCommand(JSEvalInProject.class)
                .name("js-eval-in-project")
                .category(CATEGORY)
                .description("Evaluate a script in project's scope");
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

        debug( builder, "initializeUI");

        final Project project = Projects.getSelectedProject(getProjectFactory(),
                builder.getUIContext());

        debug( builder, "root [%s]\n", project.getRoot());

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
                    new java.io.File(root, "src/main/resources"),
                    new java.io.File(root, "src/test/resources")
                };

                for (java.io.File resourcesDir : resourcesDirs) {
                    if (resourcesDir.exists()) {

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

        debug( context, "EvalP.execute");

        return Results.success();
    }

    @Override
    public NavigationResult next(UINavigationContext context) throws Exception {

        debug(context, "EvalP.next");

        final FileResource<?> js = script.getValue();

        final Project project = super.getSelectedProject(context);

        final RhinoScriptEngine scriptEngine = getScriptEngine(context);
        
        scriptEngine.setContext(ScriptContextBuilder.create()
                .currentResource(js)
                .stdout(getOut(context).out())
                .stderr(getOut(context).err())
                .build());
        scriptEngine.put("project", project);

        final File file = js.getUnderlyingResourceObject();

        try(java.io.Reader r = new java.io.FileReader(file)) {

            final Object result =  scriptEngine.eval(r);

            debug( context,"result = [%s]\n", String.valueOf(result));

        } catch (java.lang.LinkageError e) {
            error( context, "linkage error [%s]", e.getMessage(), e);

        } catch (Exception e) {

            error( context, "exception [%s]", e.getMessage(), e);

            throw e;
        }

        putAttribute(context, ScriptEngine.class.getName(), scriptEngine);

        return Results.navigateTo(JSEvalStep.class);
    }

    @Inject
    private ProjectFactory projectFactory;

    @Override
    protected final ProjectFactory getProjectFactory() {
        return projectFactory;
    }

    @Override
    protected final boolean isProjectRequired() {
        return true;
    }

}
