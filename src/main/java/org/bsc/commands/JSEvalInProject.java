package org.bsc.commands;

import java.io.File;
import java.util.Collection;
import java.util.List;

import javax.inject.Inject;
import javax.script.ScriptEngine;

import org.jboss.forge.addon.projects.Project;
import org.jboss.forge.addon.resource.DirectoryResource;
import org.jboss.forge.addon.resource.FileResource;
import org.jboss.forge.addon.resource.Resource;
import org.jboss.forge.addon.resource.ResourceFactory;
import org.jboss.forge.addon.resource.ResourceFilter;
import org.jboss.forge.addon.ui.context.UIBuilder;
import org.jboss.forge.addon.ui.context.UIContext;
import org.jboss.forge.addon.ui.context.UIExecutionContext;
import org.jboss.forge.addon.ui.context.UINavigationContext;
import org.jboss.forge.addon.ui.metadata.UICommandMetadata;
import org.jboss.forge.addon.ui.result.NavigationResult;
import org.jboss.forge.addon.ui.result.Result;
import org.jboss.forge.addon.ui.result.Results;
import org.jboss.forge.addon.ui.util.Metadata;
import org.jboss.forge.addon.ui.wizard.UIWizard;

import static org.bsc.commands.AddonUtils.*;
import org.jboss.forge.addon.script.ScriptContextBuilder;
import static org.bsc.commands.AddonConstants.*;
import org.bsc.script.rhino.ForgeRhinoScriptEngine;
import org.jboss.forge.addon.projects.ProjectFactory;
import org.jboss.forge.addon.ui.hints.InputType;
import org.jboss.forge.addon.ui.input.UIInput;
import org.jboss.forge.addon.ui.metadata.WithAttributes;

/**
 * Evaluate a script in project's scope
 *
 * @author bsorrentino
 *
 */
public class JSEvalInProject extends AbstractJSProjectCommand implements UIWizard {
    @Inject
    @WithAttributes(label = "Script", required = true, type = InputType.FILE_PICKER)
    protected UIInput<FileResource<?>> script;

    @Inject
    ResourceFactory resFactory;

    @Override
    public UICommandMetadata getMetadata(UIContext context) {
        return Metadata.forCommand(JSEvalInProject.class)
                .name("js-eval-in-project")
                .category(CATEGORY)
                .description("Evaluate a script in project's scope");
    }


    /**
     *
     */
    @Override
    public void initializeUI(final UIBuilder builder) throws Exception {
        debug( builder, "JSEvalInProject.initializeUI");

        super.initializeUI(builder);

        script.addValidator( (uivc) -> {
            
            final FileResource<?> file = script.getValue();

            if( file.isDirectory() ) {
                uivc.addValidationError(script, "the given script is a directory!. It must be a js file");
                return;
            }
            // Set current directory
            System.setProperty( "user.dir", file.getParent().getFullyQualifiedName() );

        });
        
        builder.add( script );
        
 
    }

    @Override
    public Result execute(final UIExecutionContext context) {
        printVersion(context);

        debug( context, "EvalP.execute");

        return Results.success();
    }
    
    @Override
    public NavigationResult next(UINavigationContext context) throws Exception {

        if( nextCalls++ > 0 ) { // FIX ISSUE : MULTI INVOCATION
            return Results.navigateTo(JSEvalStep.class);
        }
        
        debug(context, "EvalP.next");

        final FileResource<?> js = script.getValue();

        final Project project = super.getSelectedProject(context);

        final ForgeRhinoScriptEngine scriptEngine = getScriptEngine(context);
        
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
        putAttribute(context, "verbose", verbose.getValue());

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
    
    @SuppressWarnings("unchecked")
    private List<Resource<?>> listResources(Resource<?> res, final List<Resource<?>> result) {

        final List<?> r = res.listResources((f) -> {

                if (f instanceof FileResource) {

                    final FileResource<?> file = (FileResource<?>) f;

                    return file.getName().endsWith(".js");
                } else if (f instanceof DirectoryResource) {

                    listResources(f, result);
                }

                return false;
        });

        result.addAll((Collection<? extends Resource<?>>) r);

        return result;
    }

}
