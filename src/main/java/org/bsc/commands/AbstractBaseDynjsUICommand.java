package org.bsc.commands;

import java.io.File;
import java.io.IOException;
import java.util.jar.Manifest;

import javax.enterprise.inject.spi.BeanManager;
import javax.inject.Inject;

import org.bsc.functional.Functional.Fn;
import org.dynjs.Config;
import org.dynjs.runtime.DynJS;
import org.dynjs.runtime.GlobalObjectFactory;
import org.dynjs.runtime.Runner;
import org.jboss.forge.addon.dependencies.DependencyResolver;
import org.jboss.forge.addon.environment.Environment;
import org.jboss.forge.addon.projects.ui.AbstractProjectCommand;
import org.jboss.forge.addon.resource.FileResource;
import org.jboss.forge.addon.ui.context.UIContextProvider;
import org.jboss.forge.addon.ui.input.InputComponentFactory;
import org.jboss.forge.furnace.manager.maven.MavenContainer;
import static org.bsc.commands.AddonUtils.getOut;
/**
 * 
 * @author softphone
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

	/**
	 * 
	 * @return
	 * @throws IOException
	 * @see http://stackoverflow.com/questions/1272648/reading-my-own-jars-manifest
	 */
	protected Manifest getManifest() throws IOException {
		return AddonUtils.getManifest(getClass());
	}
	
	/**
	 * 
	 * @param mf
	 * @return
	 * @throws IOException
	 */
	protected String getVersion( final Manifest mf ) throws IOException {
		return AddonUtils.getVersion(mf);
	}

	/**
	 * 
	 * @return
	 * @throws IOException 
	 */
	protected final java.io.File getAssetDir( final Manifest mf ) throws IOException {
		return AddonUtils.getAssetDir(mf);
	}
	
	/**
	 * 
	 * @param w
	 * @throws IOException 
	 */
	protected final void copyResourceToAssetDir( final String resourceName, final Manifest mf  ) throws IOException {
		AddonUtils.copyResourceToAssetDir(getClass().getClassLoader(), resourceName,mf);
	}
	/**
	 * 
	 * @param w
	 * @throws IOException 
	 */
	protected final <T>  T copyFileToAssetDir( final java.io.File resource, final Manifest mf, boolean overwrite, 
					Fn<Void,T> onSuccess, 
					Fn<Exception,T> onError  )  
	{
		return AddonUtils.copyFileToAssetDir( resource,mf,overwrite, onSuccess, onError);
		
	}
	
	/**
	 * 
	 * @return
	 */
	private Config newConfig() {
		//final Config config = new Config(getClass().getClassLoader().getParent());
		final Config config = new Config(getClass().getClassLoader());

		return config;
	}
	
	/**
	 * 
	 * @param ctx
	 * @param resourceName
	 * @param factory
	 * @param mf
	 * @return
	 * @throws Exception
	 */
	protected <T extends UIContextProvider> Runner runnerFromClasspath(T ctx, final String resourceName, GlobalObjectFactory factory, Manifest mf)
			throws Exception {

		final Config config = newConfig();
		
		config.setGlobalObjectFactory(factory);
		config.setOutputStream(getOut(ctx).out());
		config.setErrorStream(getOut(ctx).err());
		
		final DynJS dynjs = new DynJS(config);

		final Runner runner = dynjs.newRunner();

		java.io.InputStream is = getClass().getClassLoader().getResourceAsStream(resourceName);

		if( is == null ) {
			throw new IllegalArgumentException( String.format("resource [%s] not found in classpath!", resourceName));
		}

		final java.io.File assetDir = getAssetDir(mf);

		dynjs.evaluate( new StringBuilder()
			.append("require.addLoadPath('").append(assetDir.getPath()).append("');")
			.toString()	
			);
		
		return runner.withSource( new java.io.InputStreamReader(is));
	}

	/**
	 * 
	 * @param ctx
	 * @param factory
	 * @return
	 */
	protected <T extends UIContextProvider> DynJS newDynJS( T ctx, GlobalObjectFactory factory) {
		
		final Config config = newConfig();

		config.setGlobalObjectFactory(factory);
		config.setOutputStream(getOut(ctx).out());
		config.setErrorStream(getOut(ctx).err());

		final DynJS dynjs = new DynJS(config);

		return dynjs;
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
	protected Runner runnerFromFile( DynJS dynjs, final FileResource<?> js,  Manifest mf)  throws Exception {

		final File file = js.getUnderlyingResourceObject();

		final java.io.File assetDir = getAssetDir(mf);
		final String folder = file.getParent();
		if (folder != null) {
			
			final String header = new StringBuilder()
				.append("__basedir = '").append(folder).append("';")
				.append("require.addLoadPath(__basedir);")
				.append("require.addLoadPath('").append(assetDir.getPath()).append("');")
				.toString();
			
			dynjs.evaluate(header);
		}

		return dynjs.newRunner().withSource(file);

	}
	
	/**
	 * 
	 * @param js
	 * @return
	 * @throws Exception
	 */
	protected <T extends UIContextProvider> Object executeFromClasspath(T ctx, final String resourceName, GlobalObjectFactory factory, Manifest mf)
			throws Exception {
		
		final Object result = runnerFromClasspath(ctx, resourceName, factory, mf).execute();

		return result;


	}
	
	/**
	 * 
	 * @param js
	 * @return
	 * @throws Exception
	 */
	protected <T extends UIContextProvider> Object executeFromFile(T ctx, final FileResource<?> js, GlobalObjectFactory factory, Manifest mf)
			throws Exception {

		final DynJS dynjs = newDynJS(ctx, factory);

		final Object result = runnerFromFile(dynjs, js, mf).execute();

		return result;

	}

	
}
