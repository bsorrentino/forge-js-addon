package org.bsc.commands;

import static java.lang.String.format;
import static org.bsc.commands.AddonConstants.CATEGORY;
import static org.bsc.commands.AddonUtils.getManifest;
import static org.bsc.commands.AddonUtils.getVersion;

import java.io.IOException;
import java.nio.charset.Charset;
import java.util.Iterator;
import java.util.jar.Manifest;

import javax.inject.Inject;

import org.apache.commons.io.FileUtils;
import org.apache.commons.io.FilenameUtils;
import org.apache.commons.io.IOUtils;
import org.bsc.commands.helper.UIContextHelper;
import org.jboss.forge.addon.dependencies.builder.DependencyBuilder;
import org.jboss.forge.addon.parser.java.facets.JavaSourceFacet;
import org.jboss.forge.addon.parser.java.ui.AbstractJavaSourceCommand;
import org.jboss.forge.addon.projects.Project;
import org.jboss.forge.addon.projects.ProjectFactory;
import org.jboss.forge.addon.projects.dependencies.DependencyInstaller;
import org.jboss.forge.addon.resource.DirectoryResource;
import org.jboss.forge.addon.resource.FileResource;
import org.jboss.forge.addon.ui.context.UIBuilder;
import org.jboss.forge.addon.ui.context.UIContext;
import org.jboss.forge.addon.ui.context.UIExecutionContext;
import org.jboss.forge.addon.ui.hints.InputType;
import org.jboss.forge.addon.ui.input.UIInput;
import org.jboss.forge.addon.ui.input.UIInputMany;
import org.jboss.forge.addon.ui.metadata.UICommandMetadata;
import org.jboss.forge.addon.ui.metadata.WithAttributes;
import org.jboss.forge.addon.ui.result.NavigationResult;
import org.jboss.forge.addon.ui.result.Result;
import org.jboss.forge.addon.ui.util.Metadata;
import org.jboss.forge.addon.ui.wizard.UIWizard;
import org.jboss.forge.furnace.util.Strings;
import org.jboss.forge.roaster.model.source.JavaClassSource;
import org.jboss.forge.roaster.model.source.MethodSource;

/**
 *
 * @author bsorrentino
 *
 */
public class NewJSAddonCommand extends
        AbstractJavaSourceCommand<JavaClassSource> implements UIContextHelper {

    @Inject
    @WithAttributes(label = "require project", required = false, type = InputType.CHECKBOX)
    UIInput<Boolean> requireProject;

    @Inject
    @WithAttributes(label = "Script", required = true, type = InputType.FILE_PICKER)
    private UIInput<FileResource<?>> script;

    @Inject
    @WithAttributes(label = "Command name", required = false)
    private UIInput<String> commandName;

    @Inject
    @WithAttributes(label = "Categories", required = false)
    private UIInputMany<String> categories;

    @Inject
    protected DependencyInstaller depInstaller;

    @Inject
    protected ProjectFactory projectFactory;

    @Override
    public UICommandMetadata getMetadata(UIContext context) {
        return Metadata.forCommand(NewJSAddonCommand.class)
                .name("addon-new-js-command")
                .category(CATEGORY)
                .description("Create a addon from a script");
    }

    @Override
    public void initializeUI(UIBuilder builder) throws Exception {
        super.initializeUI(builder);

        script.addValidator((uivc) -> {

            final FileResource<?> file = script.getValue();

            if (file.isDirectory()) {
                uivc.addValidationError(script, "the given script is a directory!. It must be a js file");
                return;
            }

        });

        builder.add(commandName)
                .add(categories)
                .add(script)
                .add(requireProject);

    }

    private boolean isRequireProjectSet() {
        return Boolean.TRUE.equals(requireProject.getValue());
    }

    private String loadTextResource(String resourceName) throws IOException {

        final java.io.InputStream is = getClass().getClassLoader()
                .getResourceAsStream(resourceName);

        return IOUtils.toString(is, Charset.forName("UTF-8"));
    }

    private void addAbstractProjectCommandImpl(JavaClassSource source) {

        if( isRequireProjectSet() ) {
            //@Inject
            //private ProjectFactory projectFactory;
            
            source.addField()
                    .setPrivate()
                    .setName("projectFactory")
                    .setType(ProjectFactory.class)
                    .addAnnotation(Inject.class);
            
        }

        
        source.addMethod()
                .setPublic()
                .setName("isProjectRequired")
                .setReturnType("boolean")
                .setBody( isRequireProjectSet() ? "return true;" : "resturn false;" )
                .addAnnotation(Override.class);

        source.addMethod()
                .setPublic()
                .setName("getProjectFactory")
                .setReturnType(ProjectFactory.class)
                .setBody( isRequireProjectSet() ? "return projectFactory;" : "return null;")
                .addAnnotation(Override.class);

    }

    private void addNextMethod(JavaClassSource command) {

        final MethodSource<JavaClassSource> method = command.addMethod().setPublic()
                .setName("next")
                .setReturnType(NavigationResult.class)
                .setParameters("UINavigationContext context");
        method.addThrows(Exception.class).addAnnotation(Override.class);

        try {
            final String bodyTemplate
                    = loadTextResource(isRequireProjectSet() ? "nextMethodBodyP.txt" : "nextMethodBody.txt");

            final FileResource<?> file = script.getValue();
            
            
            method.setBody(format(bodyTemplate, file.getName(), command.getName() ));
        } catch (IOException e) {

            method.setBody("// ERROR READING BODY TEMPLATE");
        }

    }

    private void addExecuteMethod(JavaClassSource command) {

        command.addMethod()
                .setPublic()
                .setName("execute")
                .setReturnType(Result.class)
                .setParameters("UIExecutionContext context")
                .setBody(
                        "return Results.success(\"Command '"
                        + commandName.getValue()
                        + "' successfully executed!\");")
                .addThrows(Exception.class)
                .addAnnotation(Override.class);

    }

    private void addInitializeUIMethod(JavaClassSource command) {
        command.addMethod()
                .setPublic()
                .setName("initializeUI")
                .setReturnTypeVoid()
                .setBody("super.initializeUI(builder);\n")
                .setParameters("UIBuilder builder")
                .addThrows(Exception.class)
                .addAnnotation(Override.class);

    }

    private void addGetMetdataMethod(JavaClassSource command) {
        MethodSource<JavaClassSource> method
                = command.addMethod()
                .setPublic()
                .setName("getMetadata").setReturnType(UICommandMetadata.class)
                .setParameters("UIContext context");
        method.addAnnotation(Override.class);

        StringBuilder body = new StringBuilder()
                .append("return Metadata.forCommand(")
                .append(command.getName()).append(".class)").append('\n')
                .append("\t.name(\"").append(commandName.getValue())
                .append("\")");
        Iterator<String> iterator = categories.getValue().iterator();
        if (iterator.hasNext()) {
            body.append("\t.category(Categories.create(");
            while (iterator.hasNext()) {
                body.append('"').append(iterator.next()).append('"');
                if (iterator.hasNext()) {
                    body.append(", ");
                }
            }
            body.append("))");
        }
        body.append(';');
        method.setBody(body.toString());

    }

    private void addImports(JavaClassSource command) {

        command.addImport(java.io.File.class);
        command.addImport(java.util.Collection.class);
        command.addImport(java.util.List.class);

        command.addImport(javax.inject.Inject.class);
        command.addImport(javax.script.ScriptEngine.class);

        command.addImport(org.jboss.forge.addon.projects.Project.class);
        command.addImport(org.jboss.forge.addon.resource.DirectoryResource.class);
        command.addImport(org.jboss.forge.addon.resource.FileResource.class);
        command.addImport(org.jboss.forge.addon.resource.Resource.class);
        command.addImport(org.jboss.forge.addon.resource.ResourceFactory.class);
        command.addImport(org.jboss.forge.addon.resource.ResourceFilter.class);
        command.addImport(org.jboss.forge.addon.ui.context.UIBuilder.class);
        command.addImport(org.jboss.forge.addon.ui.context.UIContext.class);
        command.addImport(org.jboss.forge.addon.ui.context.UIExecutionContext.class);
        command.addImport(org.jboss.forge.addon.ui.context.UINavigationContext.class);
        command.addImport(org.jboss.forge.addon.ui.metadata.UICommandMetadata.class);
        command.addImport(org.jboss.forge.addon.ui.result.NavigationResult.class);
        command.addImport(org.jboss.forge.addon.ui.result.Result.class);
        command.addImport(org.jboss.forge.addon.ui.result.Results.class);
        command.addImport(org.jboss.forge.addon.ui.util.Metadata.class);
        command.addImport(org.jboss.forge.addon.ui.wizard.UIWizard.class);
        command.addImport(org.jboss.forge.addon.ui.util.Categories.class);
        command.addImport(org.jboss.forge.addon.script.ScriptContextBuilder.class);
        command.addImport(org.jboss.forge.addon.projects.ProjectFactory.class);

        command.addImport(AbstractJSProjectCommand.class);
        command.addImport(JSEvalStep.class  );
        command.addImport(AddonUtils.class.getName().concat(".*")).setStatic(true);
        command.addImport(AddonConstants.class.getName().concat(".*")).setStatic(true);

    }

    /**
     *
     * @param context
     * @param project
     * @param source
     * @return
     * @throws Exception
     */
    @Override
    public JavaClassSource decorateSource(UIExecutionContext context,
            Project project, JavaClassSource source) throws Exception {
       
        final Manifest mf = getManifest();

        final String version = getVersion(mf);

        installDependencies(project, version);

        copyProjectJS(context, project);

        if (Strings.isNullOrEmpty(commandName.getValue())) {

            commandName.setValue(FilenameUtils.getBaseName(script.getValue()
                    .getName()));
        }

        addImports(source);

        source.setSuperType(AbstractJSProjectCommand.class);

        source.addInterface(UIWizard.class);

        addGetMetdataMethod(source);

        addInitializeUIMethod(source);

        addExecuteMethod(source);

        addNextMethod(source);

        addAbstractProjectCommandImpl(source);

        return source;
    }

    
    @Override
    protected String calculateDefaultPackage(UIContext context) {

        final Project project = getSelectedProject(context);

        return project.getFacet(JavaSourceFacet.class)
                .getBasePackage()
                .concat(".commands");
    }

    @Override
    protected Class<JavaClassSource> getSourceType() {
        return JavaClassSource.class;
    }

    @Override
    protected String getType() {
        return "UI Command";
    }

    private void copyProjectJS(UIExecutionContext context, Project project) throws Exception {

        final FileResource<?> file = script.getValue();

        final DirectoryResource projectDir = file.getParent();

        final String resourcesDir = String.format("%s/src/main/resources",
                project.getRoot().getFullyQualifiedName());

        final java.io.File resourcesDirFile = new java.io.File(resourcesDir);

        if (!resourcesDirFile.exists()) {

            if (!resourcesDirFile.mkdirs()) {
                getOut(context).err().printf("ERROR CREATING FOLDER: [%s]\n",
                        resourcesDir);
                return;
            }
        }

        FileUtils.copyDirectory(projectDir.getUnderlyingResourceObject(), resourcesDirFile, (f) -> true);

    }

    /**
     *
     * @param project
     */
    private void installDependencies(Project project, String version) {

        final DependencyBuilder dep = DependencyBuilder.create(
                String.format("org.bsc:forge-js-addon:%s", version)).setScopeType("compile");

        depInstaller.install(project, dep);

    }

    @Override
    protected ProjectFactory getProjectFactory() {
        return projectFactory;
    }
}
