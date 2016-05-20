package org.bsc.commands;

import java.io.File;
import java.util.jar.Manifest;
import javax.enterprise.inject.spi.BeanManager;

import javax.inject.Inject;
import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;

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
import static org.bsc.commands.AddonConstants.*;
import org.bsc.script.rhino.RhinoScriptEngine;
import org.jboss.forge.addon.dependencies.DependencyResolver;
import org.jboss.forge.addon.environment.Environment;
import org.jboss.forge.addon.projects.ProjectFactory;
import org.jboss.forge.addon.projects.ui.AbstractProjectCommand;
import org.jboss.forge.addon.script.ScriptContextBuilder;
import org.jboss.forge.addon.ui.input.InputComponentFactory;
import org.jboss.forge.furnace.manager.maven.MavenContainer;

/**
 * Evaluate a script
 *
 * @author bsorrentino
 *
 */
public class JSEval extends AbstractProjectCommand implements UIWizard {
    @Inject
    private BeanManager beanManager;

    @Inject
    private MavenContainer container;

    @Inject
    private Environment environment;

    @Inject
    private DependencyResolver dependencyResolver;

    @Inject
    private InputComponentFactory componentFactory;

    @Inject
    @WithAttributes(label = "Script", required = true, type = InputType.FILE_PICKER)
    private UIInput<FileResource<?>> script;

    protected final RhinoScriptEngine scriptEngine;

    public JSEval() {

        final ScriptEngineManager manager = new ScriptEngineManager(getClass().getClassLoader());
        scriptEngine = (RhinoScriptEngine)manager.getEngineByName("rhino-npm");
    }

    @Override
    public UICommandMetadata getMetadata(UIContext context) {
        return Metadata.forCommand(JSEval.class)
                .name("js-eval")
                .category(CATEGORY)
                .description("Evaluate a script");
    }

    @Override
    public void initializeUI(UIBuilder builder) throws Exception {
        if (DEBUG) {
            getOut(builder).out().println("Eval.initializeUI");
        }

        builder.add(script);
    }

    @Override
    public Result execute(final UIExecutionContext context) {
        printVersion(context);

        if (DEBUG) {
            getOut(context).out().println("Eval.execute");
        }
        return Results.success();
    }

    @Override
    public NavigationResult next(UINavigationContext context) throws Exception {

        if (DEBUG) {
            getOut(context).out().println("Eval.next");
        }

        final FileResource<?> js = script.getValue();

        final Manifest mf = getManifest();

        scriptEngine.setContext(ScriptContextBuilder.create()
                .currentResource(js)
                .stdout(getOut(context).out())
                .stderr(getOut(context).err())
                .build());
        scriptEngine.put("self", this);

        try {
            /*Object result = */
            evalFromFile(js, mf);
        } catch (java.lang.LinkageError e) {
            if (DEBUG) {
                getOut(context).err().println(String.valueOf(e.getMessage()));
            }

        } catch (Exception e) {

            getOut(context).err().println(String.valueOf(e.getMessage()));

            if (DEBUG) {
                e.printStackTrace(getOut(context).err());
            }

            throw e;
        }

        putAttribute(context, ScriptEngine.class.getName(), scriptEngine);

        return Results.navigateTo(JSEvalStep.class);

    }

    @Override
    protected boolean isProjectRequired() {
        return false;
    }

    @Override
    protected ProjectFactory getProjectFactory() {
        return null;
    }
    
    /**
     * 
     * @param js
     * @param mf
     * @return
     * @throws Exception
     */
    protected Object evalFromFile( final FileResource<?> js,  Manifest mf)  throws Exception {

            final File file = js.getUnderlyingResourceObject();

            try ( java.io.Reader r = new java.io.FileReader(file) ) {

                return scriptEngine.eval(r);
            }


    }

}
