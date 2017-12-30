import facets = require("forge/facets");
import project = require("forge/project");

var MavenPluginBuilder          = org.jboss.forge.addon.maven.plugins.MavenPluginBuilder;
var CoordinateBuilder           = org.jboss.forge.addon.dependencies.builder.CoordinateBuilder;
var ConfigurationBuilder        = org.jboss.forge.addon.maven.plugins.ConfigurationBuilder;
var ConfigurationElementBuilder = org.jboss.forge.addon.maven.plugins.ConfigurationElementBuilder;
var ExecutionBuilder            = org.jboss.forge.addon.maven.plugins.ExecutionBuilder;

var String = java.lang.String;

interface Attributes {
  gid:org.jboss.forge.addon.ui.input.UIInput<any>;
}

var attrs:Attributes = {
  gid:self.componentFactory.createInput("coordinate", String)
};

attrs.gid.setLabel( "Coordinate GroupId:ArtifactId[:version]" );
attrs.gid.setRequired( true );



exports.initializeUI = function(builder:any, defaultValue:any ) {

    if( defaultValue ) {
        attrs.gid.setDefaultValue(defaultValue);
    }

    print("initialize UI");
    builder.add(attrs.gid);
    print("UI initialized!")

}

/**
 *
 * @param {type} cc
 * @param {type} pb - Plugin
 *
 */
exports.installPlugin = function(cc:any, pb:any) {

    var mvn = project.facet( facets.MavenPluginFacet );

    try {

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

/**
 *
 * @param {type} context
 * @param {type} pb - callback function: ( coordinate ) -> Plugin
 *
 */
exports.execute = function( context:any, cb:any ) {

    var dps = require("dependencies");

    var list = dps.resolve("" + attrs.gid.getValue());

    if( list.length == 0 ) {
        print( "dependency not found!", attrs.gid.getValue());
        return;
    }

    var i = 0 ;
    if( context.getUIContext().getProvider().isGUI() ) {
        i = list.length - 1;
    }
    else {

        i = 0;
        list.forEach( (d:any) => {
            print("[" + (++i) + "] " + d);
        });

        var result = context.prompt.prompt("Choose dependency [" + i + "] 0 to skip");

        if (result) {
            i = parseInt(result);
            if( i == 0 ) return "skipped!";
        }

        var cc = list[--i];
        exports.installPlugin( cc, cb(cc) );
    }
}
