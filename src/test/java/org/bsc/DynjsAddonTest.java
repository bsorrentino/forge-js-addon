package org.bsc;

import javax.inject.Inject;
import org.bsc.commands.Eval;
import org.jboss.arquillian.container.test.api.Deployment;
import org.jboss.arquillian.junit.Arquillian;
import org.jboss.forge.addon.ui.test.UITestHarness;
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
    @AddonDependencies({
        @AddonDependency(name = "org.bsc:dynjs-addon", version="2.19.2"),
        @AddonDependency(name = "org.jboss.forge.addon:ui"),
        @AddonDependency(name = "org.jboss.forge.addon:ui-test-harness"),
        @AddonDependency(name = "org.jboss.forge.addon:maven")  
    })
    public static AddonArchive getDeployment() {
            final String version = "2.19.2.Final";
            final String addonVersion = "2.19.2";
            return ShrinkWrap.create(AddonArchive.class).addBeansXML().addAsAddonDependencies(

                AddonDependencyEntry.create("org.bsc:dynjs-addon", addonVersion),
                AddonDependencyEntry.create("org.jboss.forge.furnace.container:cdi"),
                AddonDependencyEntry.create("org.jboss.forge.addon:projects"),
                AddonDependencyEntry.create("org.jboss.forge.addon:configuration"),
                AddonDependencyEntry.create("org.jboss.forge.addon:maven"),
                AddonDependencyEntry.create("org.jboss.forge.addon:ui"),
                AddonDependencyEntry.create("org.jboss.forge.addon:ui-test-harness")
            ); 
    }

   @Inject
   UITestHarness testHarness;

   @Test
   public void testCommandInjection() throws Exception
   {
      Assert.assertNotNull(testHarness);
   }
}