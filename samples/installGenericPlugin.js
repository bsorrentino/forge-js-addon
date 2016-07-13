var installPlugin = require("./installPlugin");


print("Install Plugin executing ....");


function initializeUI( builder ) {

    installPlugin.initializeUI( builder );

}

function execute( context ) {
    var MavenPluginBuilder = org.jboss.forge.addon.maven.plugins.MavenPluginBuilder;

    installPlugin.execute( context , function( cc ) {
 
        var pb = MavenPluginBuilder.create()
                .setCoordinate(cc)
                ;

        return pb;
        
    });
}
