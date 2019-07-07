package org.bsc.commands;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.jar.Manifest;

import org.apache.commons.io.FileUtils;
import org.apache.commons.io.FilenameUtils;
import org.apache.commons.io.filefilter.FileFilterUtils;
import org.apache.commons.io.filefilter.IOFileFilter;
import org.jboss.forge.addon.ui.context.UIContextProvider;
import org.jboss.forge.addon.ui.output.UIOutput;
import org.jboss.forge.furnace.util.OperatingSystemUtils;

/**
 *
 * @author bsorrentino
 *
 */
public class AddonUtils {

	private AddonUtils() {
	}


    /**
     *
     * @param <T>
     * @param context
     * @return
     */
	private static  <T extends UIContextProvider> UIOutput getOut( T context ) {
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

		final String className = clazz.getSimpleName().concat(".class");
		final String classPath = clazz.getResource(className).toString();

		if (!classPath.startsWith("jar")) {
		  // Class not from JAR
		  throw new IOException( "MANIFEST NOT FOUND!");
		}

		final String manifestPath = classPath.substring(0, classPath.lastIndexOf("!") + 1).concat("/META-INF/MANIFEST.MF");

		final Manifest manifest = new Manifest(new java.net.URL(manifestPath).openStream());

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
         * @param ctx
         */
        public static void  printVersion( UIContextProvider ctx )  {
            try {
                final String currentVersion =  getVersion( getManifest() );

                getOut(ctx).out().printf("FORGE::DynJS current version [%s]\n", currentVersion);
            } catch (IOException ex) {

                getOut(ctx).err().printf( "Error reading FORGE::DynJS current version\n%s\n",
                        (ex.getCause()!=null) ? ex.getCause().getMessage() : ex.getMessage());
            }
        }

	/**
	 *
         * @param mf
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
         * @param cl
         * @param resourceName
         * @param mf
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
         * @param <T>
         * @param resource
         * @param mf
         * @param overwrite
         * @param onSuccess
         * @param onError
         * @return
         */
	public static <T>  T copyFileToAssetDir( final java.io.File resource, final Manifest mf, boolean overwrite,
					java.util.function.Supplier<T> onSuccess,
					java.util.function.Function<Exception,T> onError  )
	{

		if( resource == null ) {
			throw new IllegalArgumentException("resource parameter is null!");
		}

		try {
			final java.io.File assetDir = getAssetDir(mf);
			final String resourceName = FilenameUtils.getName( resource.getName() );
			final java.io.File target = new java.io.File( assetDir, resourceName );

			if( target.exists() && !overwrite ) {
				return onError.apply(new IllegalStateException(String.format("resource [%s] already exists!", resourceName)) );
			}
			FileUtils.copyFileToDirectory(resource, assetDir);

		} catch (IOException e) {
			return onError.apply(e);
		}

		return onSuccess.get();

	}

        /**
         *
         * @param <T>
         * @param source
         * @param mf
         * @param onSuccess
         * @param onError
         * @return
         */
	public static <T>  T copyDirToAssetDir( final java.io.File source, final Manifest mf,
					java.util.function.Supplier<T> onSuccess,
					java.util.function.Function<Exception,T> onError  )
	{

		if( source == null ) {
			throw new IllegalArgumentException("resource parameter is null!");
		}
		if( !source.exists() ) {
			throw new IllegalArgumentException("source directory doesn't exist!");
		}
		if( !source.isDirectory() ) {
			throw new IllegalArgumentException("source is not a directory!");
		}

		try {
			final java.io.File assetDir = getAssetDir(mf);

			IOFileFilter jsFiles = FileFilterUtils.and( FileFilterUtils.fileFileFilter(), FileFilterUtils.suffixFileFilter(".js"));

			FileUtils.copyDirectory(source, assetDir, jsFiles,true);

		} catch (IOException e) {
			return onError.apply(e);
		}

		return onSuccess.get();

	}
}
