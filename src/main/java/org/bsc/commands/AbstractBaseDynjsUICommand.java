package org.bsc.commands;


import java.io.File;
import java.util.jar.Manifest;

import javax.enterprise.inject.spi.BeanManager;
import javax.inject.Inject;
import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import org.bsc.script.rhino.RhinoScriptEngine;

import org.jboss.forge.addon.dependencies.DependencyResolver;
import org.jboss.forge.addon.environment.Environment;
import org.jboss.forge.addon.projects.ui.AbstractProjectCommand;
import org.jboss.forge.addon.resource.FileResource;
import org.jboss.forge.addon.ui.context.UIContextProvider;
import org.jboss.forge.addon.ui.input.InputComponentFactory;
import org.jboss.forge.furnace.manager.maven.MavenContainer;

/**
 * 
 * @author bsorrentino
 *
 */
public abstract class AbstractBaseDynjsUICommand extends AbstractProjectCommand {
	@Inject
	BeanManager beanManager;
	
	@Inject
	private MavenContainer container;

	@Inject
	private Environment environment;

	@Inject
	protected DependencyResolver dependencyResolver;

	@Inject
	private InputComponentFactory componentFactory;
	
	
	public MavenContainer getContainer() {
		return container;
	}

	public Environment getEnvironment() {
		return environment;
	}

	public DependencyResolver getDependencyResolver() {
		return dependencyResolver;
	}

	public final InputComponentFactory getComponentFactory() {
		return componentFactory;
	}
	
	public final BeanManager getBeanManager() {
		return beanManager;
	}

        protected final RhinoScriptEngine scriptEngine;

        protected AbstractBaseDynjsUICommand() {
            
            ScriptEngineManager manager = new ScriptEngineManager(getClass().getClassLoader());
            scriptEngine = (RhinoScriptEngine)manager.getEngineByName("rhino-npm");
        }
        
        /**
         * 
         * @param <T>
         * @param resourceName
         * @param mf
         * @return
         * @throws Exception 
         */
	protected <T extends UIContextProvider> Object evalFromClasspath(final String resourceName, Manifest mf)
			throws Exception {
		
		final java.io.InputStream is = getClass().getClassLoader().getResourceAsStream(resourceName);

		if( is == null ) {
			throw new IllegalArgumentException( String.format("resource [%s] not found in classpath!", resourceName));
		}

                try ( java.io.Reader r = new java.io.InputStreamReader(is) ) {
                    
                    return scriptEngine.eval(r);
                }
                
	}

	/**
	 * 
	 * @param ctx
	 * @param js
	 * @param factory
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
