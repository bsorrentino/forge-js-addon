package org.bsc.commands;

import java.io.File;
import java.util.jar.Manifest;

import javax.inject.Inject;
import javax.script.ScriptEngine;
import javax.script.ScriptEngineFactory;
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
import org.bsc.script.rhino.ForgeRhinoScriptEngine;
import org.jboss.forge.addon.script.ScriptContextBuilder;
import org.jboss.forge.addon.ui.command.AbstractUICommand;
import org.jboss.forge.addon.ui.context.UIContextProvider;
import static java.lang.String.format;
import org.bsc.script.rhino.npm.NPMRhinoScriptEngineFactory;
import org.jboss.forge.addon.projects.ProjectFactory;
import org.jboss.forge.addon.ui.command.UICommand;
import static java.lang.String.format;
import static java.lang.String.format;
import static java.lang.String.format;

/**
 * Evaluate a script
 *
 * @author bsorrentino
 *
 */
public class JSEval extends AbstractJSProjectCommand implements UIWizard {
        

    @Override
    public UICommandMetadata getMetadata(UIContext context) {
        return Metadata.forCommand(JSEval.class)
                .name("js-eval")
                .category(CATEGORY)
                .description("Evaluate a script");
    }

    @Override
    public void initializeUI(UIBuilder builder) throws Exception {
        debug( builder, "Eval.initializeUI verbose=%b", verbose);
        
        super.initializeUI(builder);
    }

    @Override
    public Result execute(final UIExecutionContext context) {
        printVersion(context);

        debug( context, "Eval.execute");
        
        return Results.success();
    }

    private int nextCalls = 0;
    
    @Override
    public NavigationResult next(UINavigationContext context) throws Exception {

        if( nextCalls++ > 0 ) { // FIX ISSUE : MULTI INVOCATION
            return Results.navigateTo(JSEvalStep.class);
        }

        debug( context, "Eval.next" );
        
        final FileResource<?> js = script.getValue();
        
        final ForgeRhinoScriptEngine scriptEngine = super.getScriptEngine(context);

        scriptEngine.setContext(ScriptContextBuilder.create()
                .currentResource(js)
                .stdout(getOut(context).out())
                .stderr(getOut(context).err())
                .build());

        final File file = js.getUnderlyingResourceObject();
     
        try ( java.io.Reader r = new java.io.FileReader(file) ) {

            debug( context, "scriptEngine.eval(%s)", js );

            final Object result =  scriptEngine.eval(r);

            debug( context, "scriptEngine.eval()=%s", result );

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

    @Override
    protected boolean isProjectRequired() {
        return false;
    }

    @Override
    protected ProjectFactory getProjectFactory() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

}
