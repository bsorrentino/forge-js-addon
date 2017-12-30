@Java2TS(declare = {

@Type(org.jboss.forge.addon.dependencies.Coordinate.class),
@Type(org.jboss.forge.addon.dependencies.Dependency.class),
@Type(org.jboss.forge.addon.dependencies.DependencyRepository.class),
@Type(org.jboss.forge.addon.dependencies.builder.DependencyBuilder.class),
@Type(org.jboss.forge.addon.dependencies.builder.CoordinateBuilder.class),
@Type(org.jboss.forge.addon.dependencies.builder.DependencyQueryBuilder.class),

@Type(org.jboss.forge.addon.maven.dependencies.MavenDependencyAdapter.class),
@Type(org.jboss.forge.addon.maven.plugins.PluginElement.class),
@Type(org.jboss.forge.addon.maven.plugins.Execution.class),
@Type(org.jboss.forge.addon.maven.plugins.ConfigurationElement.class),
@Type(org.jboss.forge.addon.maven.plugins.Configuration.class),
@Type(org.jboss.forge.addon.maven.plugins.ConfigurationBuilder.class),
@Type(org.jboss.forge.addon.maven.plugins.ConfigurationElementBuilder.class),
@Type(org.jboss.forge.addon.maven.plugins.ExecutionBuilder.class),
@Type(org.jboss.forge.addon.maven.plugins.MavenPluginBuilder.class),

@Type(org.jboss.forge.addon.ui.context.UIContext.class),
@Type(org.jboss.forge.addon.ui.context.UIValidationContext.class),
@Type(org.jboss.forge.addon.ui.context.UIBuilder.class),
@Type(org.jboss.forge.addon.ui.context.UIContextProvider.class),
@Type(org.jboss.forge.addon.ui.context.UIExecutionContext.class),
@Type(org.jboss.forge.addon.ui.context.UINavigationContext.class),
@Type(org.jboss.forge.addon.ui.command.UICommand.class),
@Type(org.jboss.forge.addon.ui.command.CommandExecutionListener.class),
@Type(org.jboss.forge.addon.ui.result.Result.class),
@Type(org.jboss.forge.addon.ui.result.Results.class),
@Type(org.jboss.forge.addon.ui.result.NavigationResult.class),
@Type(org.jboss.forge.addon.ui.wizard.UIWizardStep.class),
@Type(org.jboss.forge.addon.ui.wizard.UIWizard.class),
@Type(org.jboss.forge.addon.ui.input.InputComponentFactory.class),
@Type(org.jboss.forge.addon.ui.input.UIInput.class),
@Type(org.jboss.forge.addon.ui.input.UIInputMany.class),
@Type(org.jboss.forge.addon.ui.input.UISelectMany.class),
@Type(org.jboss.forge.addon.ui.input.UISelectOne.class),
@Type(org.jboss.forge.addon.ui.output.UIMessage.class),
@Type(org.jboss.forge.addon.ui.metadata.UICommandMetadata.class),

@Type(org.apache.maven.model.Dependency.class),
@Type(org.apache.maven.model.Exclusion.class)
})
package org.bsc;
import org.bsc.processor.annotation.Java2TS;
import org.bsc.processor.annotation.Type;
