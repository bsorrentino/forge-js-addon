var installPlugin = require("./installPlugin");


print("Install Plugin executing ....");


function initializeUI( builder ) {

    installPlugin.initializeUI( builder, 'net.orfjackal.retrolambda:retrolambda-maven-plugin' );

}

function execute( context ) {
    var MavenPluginBuilder = org.jboss.forge.addon.maven.plugins.MavenPluginBuilder,
        ExecutionBuilder   = org.jboss.forge.addon.maven.plugins.ExecutionBuilder
        ;

    installPlugin.execute( context, function( cc ) {
 
        var pb = MavenPluginBuilder.create()
                .setCoordinate(cc)
                .addExecution(
                        ExecutionBuilder.create()
                        .addGoal("process-main")
                        .addGoal("process-test")
                        )
                ;

        return pb;
        
    });
}

