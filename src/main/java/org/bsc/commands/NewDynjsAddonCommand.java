package org.bsc.commands;

import java.util.Iterator;

import javax.inject.Inject;

import org.jboss.forge.addon.dependencies.builder.DependencyBuilder;
import org.jboss.forge.addon.maven.projects.MavenFacet;
import org.jboss.forge.addon.parser.java.facets.JavaSourceFacet;
import org.jboss.forge.addon.parser.java.ui.AbstractJavaSourceCommand;
import org.jboss.forge.addon.projects.Project;
import org.jboss.forge.addon.projects.dependencies.DependencyInstaller;
import org.jboss.forge.addon.resource.FileResource;
import org.jboss.forge.addon.ui.command.AbstractUICommand;
import org.jboss.forge.addon.ui.context.UIBuilder;
import org.jboss.forge.addon.ui.context.UIContext;
import org.jboss.forge.addon.ui.context.UIExecutionContext;
import org.jboss.forge.addon.ui.hints.InputType;
import org.jboss.forge.addon.ui.input.UIInput;
import org.jboss.forge.addon.ui.input.UIInputMany;
import org.jboss.forge.addon.ui.metadata.UICommandMetadata;
import org.jboss.forge.addon.ui.metadata.WithAttributes;
import org.jboss.forge.addon.ui.result.Result;
import org.jboss.forge.addon.ui.result.Results;
import org.jboss.forge.addon.ui.util.Categories;
import org.jboss.forge.addon.ui.util.Metadata;
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
	@WithAttributes(label = "require project", required = false, defaultValue = "true", type = InputType.CHECKBOX)
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
				.description("Create a addon from a script")
						;				
	}

	
	@Override
	public void initializeUI(UIBuilder builder) throws Exception {
	    super.initializeUI(builder);

		builder.add(commandName).add(categories).add(script).add(requireProject);

	}


	@Override
	public JavaClassSource decorateSource(UIExecutionContext context, Project project, JavaClassSource command) throws Exception 
	{
		 installDependencies(project);
		 
	     if (Strings.isNullOrEmpty(commandName.getValue()))
	      {
	         commandName.setValue(script.getValue().getName());
	      }

	      command.setSuperType(AbstractUICommand.class);
	      command.addImport(UIBuilder.class);
	      command.addImport(UIContext.class);
	      command.addImport(UIExecutionContext.class);
	      command.addImport(UICommandMetadata.class);
	      command.addImport(Metadata.class);
	      command.addImport(Categories.class);
	      command.addImport(Result.class);
	      command.addImport(Results.class);

	      MethodSource<JavaClassSource> getMetadataMethod = command.addMethod()
	               .setPublic()
	               .setName("getMetadata")
	               .setReturnType(UICommandMetadata.class)
	               .setParameters("UIContext context");
	      getMetadataMethod.addAnnotation(Override.class);

	      String getMetadataMethodBody = "return Metadata.forCommand(" + command.getName() + ".class" + ")\n"
	               + "\t.name(\"" + commandName.getValue() + "\")";
	      Iterator<String> iterator = categories.getValue().iterator();
	      if (iterator.hasNext())
	      {
	         getMetadataMethodBody += "\t.category(Categories.create(";
	         while (iterator.hasNext())
	         {
	            getMetadataMethodBody += "\"" + iterator.next() + "\"";
	            if (iterator.hasNext())
	               getMetadataMethodBody += ", ";
	         }
	         getMetadataMethodBody += "))";
	      }
	      getMetadataMethodBody += ";";
	      getMetadataMethod.setBody(getMetadataMethodBody);

	      command.addMethod()
	               .setPublic()
	               .setName("initializeUI")
	               .setReturnTypeVoid()
	               .setBody("// not implemented")
	               .setParameters("UIBuilder builder")
	               .addThrows(Exception.class)
	               .addAnnotation(Override.class);

	      command.addMethod()
	               .setPublic()
	               .setName("execute")
	               .setReturnType(Result.class)
	               .setParameters("UIExecutionContext context")
	               .setBody("return Results.success(\"Command '" + commandName.getValue() + "' successfully executed!\");")
	               .addThrows(Exception.class)
	               .addAnnotation(Override.class);

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
	
	private void installDependencies( Project project ) {
		
	 	
		DependencyBuilder dep = DependencyBuilder.create( "org.bsc:dynjs-addon:2.7.2.Final");
		
		depInstaller.install(project, dep);
		
		
		
		
	}
}