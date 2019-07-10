package org.bsc.commands;

import javax.inject.Inject;

import org.bsc.commands.helper.UIContextHelper;
import org.jboss.forge.addon.dependencies.DependencyResolver;
import org.jboss.forge.addon.projects.ui.AbstractProjectCommand;
import org.jboss.forge.addon.ui.context.UIBuilder;
import org.jboss.forge.addon.ui.hints.InputType;
import org.jboss.forge.addon.ui.input.InputComponentFactory;
import org.jboss.forge.addon.ui.input.UIInput;
import org.jboss.forge.addon.ui.metadata.WithAttributes;

public abstract class AbstractJSProjectCommand extends AbstractProjectCommand implements UIContextHelper {

    @Inject
    protected DependencyResolver dependencyResolver;

    @Inject
    private InputComponentFactory componentFactory;

    public DependencyResolver getDependencyResolver() {
        return dependencyResolver;
    }

    public InputComponentFactory getComponentFactory() {
        return componentFactory;
    }

    @Inject
    @WithAttributes(label = "Verbose", required = true, type = InputType.CHECKBOX, defaultValue = "false")
    protected UIInput<Boolean> verbose;

    @Override
    public void initializeUI(UIBuilder builder) throws Exception {

        builder.add(verbose);

    }

}
