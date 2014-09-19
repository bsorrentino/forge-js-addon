package org.bsc.commands;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.jar.Manifest;

import org.apache.commons.io.FileUtils;
import org.apache.commons.io.FilenameUtils;
import org.bsc.functional.Functional.Fn;
import org.jboss.forge.addon.ui.context.UIContextProvider;
import org.jboss.forge.addon.ui.output.UIOutput;
import org.jboss.forge.furnace.util.OperatingSystemUtils;

public class AddonUtils {

	private AddonUtils() {
	}
	
	/**
	 * 
	 * @param ctx
	 * @param name
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public static <C extends UIContextProvider,T> T getAttribute( C ctx, String name ) {
		
		return (T)ctx.getUIContext().getAttributeMap().get(name);
	}

	/**
	 * 
	 * @param ctx
	 * @param name
	 * @param value
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public static <C extends UIContextProvider,T> T putAttribute( C ctx, String name, T value ) {
		
		return (T)ctx.getUIContext().getAttributeMap().put(name, value);
	}

	/**
	 * 
	 * @param context
	 * @return
	 */
	public static  <T extends UIContextProvider> UIOutput getOut( T context ) {
		return context.getUIContext().getProvider().getOutput();
	}

	/**
	 * get addon manifest
	 * 
	 * @return
	 * @throws IOException
	 */
	public static Manifest getManifest() throws IOException {
		return getManifest(AddonUtils.class);
	}

	/**
	 * 
	 * @return
	 * @throws IOException
	 * @see http://stackoverflow.com/questions/1272648/reading-my-own-jars-manifest
	 */
	private static Manifest getManifest(Class<?> clazz) throws IOException {
		if( clazz == null ) throw new IllegalArgumentException( "argument clazz is null!");
		
		String className = clazz.getSimpleName().concat(".class");
		String classPath = clazz.getResource(className).toString();
		
		if (!classPath.startsWith("jar")) {
		  // Class not from JAR
		  throw new IOException( "MANIFEST NOT FOUND!");
		}
		
		final String manifestPath = classPath.substring(0, classPath.lastIndexOf("!") + 1).concat("/META-INF/MANIFEST.MF");
		
		Manifest manifest = new Manifest(new java.net.URL(manifestPath).openStream());

		return manifest;
	}
	
	/**
	 * 
	 * @param mf
	 * @return
	 * @throws IOException
	 */
	public static String getVersion( final Manifest mf ) throws IOException {
		if (mf == null)
			throw new IllegalArgumentException("argument 'mf' is null!");
		
		final String version = mf.getMainAttributes().getValue("version");

		return version;
	}

	/**
	 * 
	 * @return
	 * @throws IOException 
	 */
	public static java.io.File getAssetDir( final Manifest mf ) throws IOException {
		if( mf == null ) throw new IllegalArgumentException( "argument 'mf' is null!");

		final java.io.File forgeDir =  OperatingSystemUtils.getUserForgeDir();
		
		final java.io.File result = new java.io.File( forgeDir, String.format("dynjs/%s", getVersion(mf)));
		
		if( !result.exists() ) {
			if( !result.mkdirs() ) {
			
				throw new IOException( String.format("error creating dynjs asset dir [%s]", result));
			}
		}
		
		return result;
	}
	
	/**
	 * 
	 * @param w
	 * @throws IOException 
	 */
	public static void copyResourceToAssetDir( final ClassLoader cl, final String resourceName, final Manifest mf  ) throws IOException {

		if (cl == null)
			throw new IllegalArgumentException("argument 'cl' is null!");
		if (resourceName == null)
			throw new IllegalArgumentException(
					"argument 'resourceName' is null!");
		if (mf == null)
			throw new IllegalArgumentException("argument 'mf' is null!");
		
		final java.net.URL source = cl.getResource(resourceName);
		if( source == null ) {
			throw new FileNotFoundException( String.format("resource [%s] not found in classloader!", source));
		}
		
		final java.io.File target = new java.io.File( getAssetDir(mf), resourceName );

		if( !target.exists() || getVersion(mf).endsWith("SNAPSHOT")) {
			FileUtils.copyURLToFile(source, target);
		}
	}
	/**
	 * 
	 * @param w
	 * @throws IOException 
	 */
	public static <T>  T copyFileToAssetDir( final java.io.File resource, final Manifest mf, boolean overwrite, 
					Fn<Void,T> onSuccess, 
					Fn<Exception,T> onError  )  
	{
		
		if( resource == null ) {
			throw new IllegalArgumentException("resource parameter is null!");
		}
		
		
		try {
			final java.io.File assetDir = getAssetDir(mf);
			final String resourceName = FilenameUtils.getName( resource.getName() );
			final java.io.File target = new java.io.File( assetDir, resourceName );

			if( target.exists() && !overwrite ) {
				return onError.f(new IllegalStateException(String.format("resource [%s] already exists!", resourceName)) );
			}
			FileUtils.copyFileToDirectory(resource, assetDir);

		} catch (IOException e) {
			return onError.f(e);
		}
		
		return onSuccess.f(null);
		
	}
}
