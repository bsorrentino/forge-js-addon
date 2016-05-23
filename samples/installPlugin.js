var facets = require("forge/facets");
var project = require("forge/project");

var MavenPluginBuilder          = org.jboss.forge.addon.maven.plugins.MavenPluginBuilder;
var CoordinateBuilder           = org.jboss.forge.addon.dependencies.builder.CoordinateBuilder;
var ConfigurationBuilder        = org.jboss.forge.addon.maven.plugins.ConfigurationBuilder;
var ConfigurationElementBuilder = org.jboss.forge.addon.maven.plugins.ConfigurationElementBuilder;
var ExecutionBuilder            = org.jboss.forge.addon.maven.plugins.ExecutionBuilder;

var String = java.lang.String;

var attrs = {};

attrs.gid = self.componentFactory.createInput("coordinate", String);
attrs.gid.label = "Coordinate GroupId:ArtifactId[:version]";
attrs.gid.required = true;

 

exports.initializeUI = function(builder, defaultValue ) {

    if( defaultValue ) {
        attrs.gid.setDefaultValue(defaultValue);
    }
    
    print("initialize UI");
    builder.add(attrs.gid);
    print("UI initialized!")

}

exports.installPlugin = function(cc) {
    
    var mvn = project.facet( facets.MavenPluginFacet );
    
    try {


        var pb = MavenPluginBuilder.create()
                .setCoordinate(cc)
                .addExecution(
                        ExecutionBuilder.create()
                        .addGoal("process-main")
                        .addGoal("process-test")
                        )
                ;



        if (mvn.hasPlugin(cc)) {
            print("updating ....", cc);
            mvn.updatePlugin(pb)
        }
        else {
            print("adding ....", cc);
            mvn.addPlugin(pb)
        }

    }
    catch (e) {

        print(e);
    }

}

exports.execute = function( context ) {

    var dps = require("dependencies");

    var list = dps.resolve("" + attrs.gid.value);
        
    var i ;
    if( context.getUIContext().getProvider().isGUI() ) {
        i = list.length - 1;
    }
    else {

        i = -1;
        list.forEach( function(d) {
            print("[" + (++i) + "] " + d);        
        });

        var result = context.prompt.prompt("Choose dependency [" + i + "]");

        if (result) {
            i = parseInt(result);
        }

        exports.installPlugin(list[i]);
    }
}

