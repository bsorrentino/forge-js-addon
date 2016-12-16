var System = java.lang.System;

print("Install Plugin executing ....", System.getProperty("user.dir"));

var installPlugin = require("./installPlugin");

function initializeUI( builder ) {
    print( "initializeUI" );

    installPlugin.initializeUI( builder, 'io.fabric8:docker-maven-plugin' );

}

function execute( context ) {
    var MavenPluginBuilder = org.jboss.forge.addon.maven.plugins.MavenPluginBuilder,
        ExecutionBuilder   = org.jboss.forge.addon.maven.plugins.ExecutionBuilder,
        ConfigurationBuilder = org.jboss.forge.addon.maven.plugins.ConfigurationBuilder
        ;

    installPlugin.execute( context, function( cc ) {
 
        var pb = MavenPluginBuilder.create()
                .setCoordinate(cc)
                .addExecution(
                        ExecutionBuilder.create()
                        .setPhase("package")
                        .addGoal("build")
                        .setConfig( ConfigurationBuilder.create() 
                        		//.createConfigurationElement("images")
                        			//.addChild("image")
                        		)
                        )
                ;

        return pb;
        
    });
    
    return "OK";
}

