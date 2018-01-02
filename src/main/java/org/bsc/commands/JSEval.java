package org.bsc.commands;

import java.io.File;
import javax.inject.Inject;
import javax.script.ScriptEngine;

import org.jboss.forge.addon.resource.FileResource;
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
import static org.bsc.commands.AddonConstants.*;
import org.jboss.forge.addon.script.ScriptContextBuilder;
import org.jboss.forge.addon.projects.ProjectFactory;
import org.jboss.forge.addon.ui.hints.InputType;
import org.jboss.forge.addon.ui.input.UIInput;
import org.jboss.forge.addon.ui.metadata.WithAttributes;

/**
 * Evaluate a script
 *
 * @author bsorrentino
 *
 */
public class JSEval extends AbstractJSProjectCommand implements UIWizard {
        
    @Inject
    @WithAttributes(label = "Script", required = true, type = InputType.FILE_PICKER)
    protected UIInput<FileResource<?>> script;
    

    @Override
    public UICommandMetadata getMetadata(UIContext context) {
        return Metadata.forCommand(JSEval.class)
                .name("js-eval")
                .category(CATEGORY)
                .description("Evaluate a script");
    }

    @Override
    public void initializeUI(UIBuilder builder) throws Exception {
       
        debug( builder, "Eval.initializeUI " );

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
        
        builder.add(script);
        
    }

    @Override
    public Result execute(final UIExecutionContext context) {
        printVersion(context);

        debug( context, "Eval.execute");
        
        return Results.success();
    }

    @Override
    public NavigationResult next(UINavigationContext context) throws Exception {

        if( nextCalls++ > 0 ) { // FIX ISSUE : MULTI INVOCATION
            return Results.navigateTo(JSEvalStep.class);
        }

        debug( context, "Eval.next" );
        
        final FileResource<?> js = script.getValue();
        
        final ScriptEngine scriptEngine = super.getScriptEngine(context,js);

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
