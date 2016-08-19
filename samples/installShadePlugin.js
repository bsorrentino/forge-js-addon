var installPlugin = require("./installPlugin");


print("Install Plugin executing ....");


function initializeUI( builder ) {

    installPlugin.initializeUI( builder, 'org.apache.maven.plugins:maven-shade-plugin' );

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
                        .addGoal("shade")
                        .setConfig( ConfigurationBuilder.create() 
                        		
                        		)
                        )
                ;

        return pb;
        
    });
}

