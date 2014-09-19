package org.bsc.commands;

import static org.bsc.commands.AddonUtils.getAssetDir;
import static org.bsc.commands.AddonUtils.getManifest;
import static org.bsc.commands.AddonUtils.getVersion;
import static org.bsc.commands.AddonUtils.getOut;

import java.io.IOException;
import java.util.Iterator;
import java.util.jar.Manifest;

import javax.inject.Inject;

import org.apache.commons.io.FileUtils;
import org.apache.commons.io.FilenameUtils;
import org.apache.commons.io.IOUtils;
import org.dynjs.runtime.DynJS;
import org.jboss.forge.addon.dependencies.builder.DependencyBuilder;
import org.jboss.forge.addon.parser.java.facets.JavaSourceFacet;
import org.jboss.forge.addon.parser.java.ui.AbstractJavaSourceCommand;
import org.jboss.forge.addon.projects.Project;
import org.jboss.forge.addon.projects.dependencies.DependencyInstaller;
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
import org.jboss.forge.addon.ui.result.Results;
import org.jboss.forge.addon.ui.util.Categories;
import org.jboss.forge.addon.ui.util.Metadata;
import org.jboss.forge.addon.ui.wizard.UIWizard;
import org.jboss.forge.furnace.util.Strings;
import org.jboss.forge.roaster.model.source.JavaClassSource;
import org.jboss.forge.roaster.model.source.MethodSource;

/**
 * 
 * @author softphone
 *
 */
public class NewDynjsAddonCommand extends
		AbstractJavaSourceCommand<JavaClassSource> implements AddonConstants {

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

	@Override
	public UICommandMetadata getMetadata(UIContext context) {
		return Metadata.forCommand(NewDynjsAddonCommand.class)
				.name("addon-new-dynjs-command")
				.category(CATEGORY)
				.description("Create a addon from a script");
	}

	@Override
	public void initializeUI(UIBuilder builder) throws Exception {
		super.initializeUI(builder);

		builder.add(commandName).add(categories).add(script)
				.add(requireProject);

	}

	private String loadTextResource(String resourceName) throws IOException {

		final java.io.InputStream is = getClass().getClassLoader()
				.getResourceAsStream(resourceName);

		return IOUtils.toString(is);
	}

	private void addNextMethod(JavaClassSource command) {

		MethodSource<JavaClassSource> method = command.addMethod().setPublic()
				.setName("next")
				.setReturnType(NavigationResult.class)
				.setParameters("UINavigationContext context");
		method.addThrows(Exception.class).addAnnotation(Override.class);

		try {
			final String bodyTemplate = 
					loadTextResource( Boolean.TRUE.equals(requireProject.getValue()) ? "nextMethodBodyP.txt" : "nextMethodBody.txt");
			
			method.setBody(String.format(bodyTemplate, command.getName(), script.getValue().getName()));
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
			.setBody("// not implemented")
			.setParameters("UIBuilder builder")
			.addThrows(Exception.class)
			.addAnnotation(Override.class);

	}

	private void addGetMetdataMethod(JavaClassSource command) {
		MethodSource<JavaClassSource> method = 
				command.addMethod()
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
				if (iterator.hasNext())
					body.append(", ");
			}
			body.append("))");
		}
		body.append(';');
		method.setBody(body.toString());

	}

	private void addImports(JavaClassSource command) {
		
		command.addImport(UIBuilder.class);
		command.addImport(UIContext.class);
		command.addImport(UIExecutionContext.class);
		command.addImport(UICommandMetadata.class);
		command.addImport(Metadata.class);
		command.addImport(Categories.class);
		command.addImport(Result.class);
		command.addImport(Results.class);
		command.addImport(UIWizard.class);
		command.addImport(DynJS.class);
		command.addImport(EvalStep.class);
		
		command.addImport(AddonUtils.class.getName().concat(".*")).setStatic(true);
	}
	
	/**
	 * 
	 */
	@Override
	public JavaClassSource decorateSource(UIExecutionContext context,
			Project project, JavaClassSource command) throws Exception {
		
		final Manifest mf = getManifest();
		
		final String version = getVersion(mf);
		
		installDependencies(project, version);

		final java.io.File assetDir = getAssetDir(mf);

		copyModules(context, project, assetDir);

		if (Strings.isNullOrEmpty(commandName.getValue())) {

			commandName.setValue(FilenameUtils.getBaseName(script.getValue()
					.getName()));
		}

		if (Boolean.TRUE.equals(requireProject.getValue())) {
			command.setSuperType(AbstractDynjsProjectCommand.class);
		} else {
			command.setSuperType(AbstractDynjsUICommand.class);
		}
		command.addInterface(UIWizard.class);

		addImports(command);
		
		addGetMetdataMethod(command);

		addInitializeUIMethod(command);

		addExecuteMethod(command);

		addNextMethod(command);

		return command;
	}

	@Override
	protected String calculateDefaultPackage(UIContext context) {
		Project project = getSelectedProject(context);
		return project.getFacet(JavaSourceFacet.class).getBasePackage()
				+ ".commands";
	}

	@Override
	protected Class<JavaClassSource> getSourceType() {
		return JavaClassSource.class;
	}

	@Override
	protected String getType() {
		return "UI Command";
	}

	private void copyModules(UIExecutionContext context, Project project, java.io.File assetDir)
			throws Exception {


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

		FileUtils.copyDirectory(assetDir, resourcesDirFile);

		FileUtils.copyFileToDirectory(script.getValue()
				.getUnderlyingResourceObject(), resourcesDirFile);
	}

	/**
	 * 
	 * @param project
	 */
	private void installDependencies(Project project, String version ) {

		final DependencyBuilder dep = DependencyBuilder.create(
				String.format("org.bsc:dynjs-addon:%s", version)).setScopeType("provided");

		depInstaller.install(project, dep);

	}
}