package org.bsc;

import javax.inject.Inject;
import org.bsc.commands.Eval;
import org.jboss.arquillian.container.test.api.Deployment;
import org.jboss.arquillian.junit.Arquillian;
import org.jboss.forge.arquillian.AddonDependency;
import org.jboss.forge.arquillian.AddonDependencies;
import org.jboss.forge.arquillian.archive.AddonArchive;
import org.jboss.forge.furnace.repositories.AddonDependencyEntry;
import org.jboss.shrinkwrap.api.ShrinkWrap;
import org.junit.runner.RunWith;
import org.junit.Assert;
import org.junit.Test;
@RunWith(Arquillian.class)
public class DynjsAddonTest {

	@Deployment
	@AddonDependencies({@AddonDependency(name = "org.bsc:dynjs-addon", version="2.19.2")})
	public static AddonArchive getDeployment() {
                final String version = "2.19.2.Final";
                final String addonVersion = "2.19.2";
		return ShrinkWrap.create(AddonArchive.class).addBeansXML().addAsAddonDependencies(

                    AddonDependencyEntry.create("org.jboss.forge.addon:addon-manager", version),
                    AddonDependencyEntry.create("org.jboss.forge.addon:addons", version),
                    AddonDependencyEntry.create("org.jboss.forge.addon:core", version),
                    AddonDependencyEntry.create("org.jboss.forge.furnace.container:cdi", version),

                    AddonDependencyEntry.create("org.bsc:dynjs-addon", addonVersion)
            	)
            ; 
	}

   @Inject
   private Eval evalCommand;

   @Test
   public void testCommandInjection() throws Exception
   {
      Assert.assertNotNull(evalCommand);
      Assert.assertNotNull(evalCommand.getDependencyResolver());

      System.out.println( String.valueOf(evalCommand.getDependencyResolver()));
   }
}