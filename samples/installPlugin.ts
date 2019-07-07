import facets = require("forge/facets");
import * as  dps from "./dependencies";

import {
  MavenPluginBuilder,
  CoordinateBuilder,
  ConfigurationBuilder,
  ConfigurationElementBuilder,
  ExecutionBuilder,
  String
} from "./ts/forge-types";

class Attributes {
  gid:org.jboss.forge.addon.ui.input.UIInput<any>  

  constructor(  ) {
    this.gid = $self.getComponentFactory().createInput("coordinate", String.class);
    this.gid.setLabel( "Coordinate GroupId:ArtifactId[:version]" );
    this.gid.setRequired( true );
  }
}

var attrs = new Attributes();


export function initializeUI(builder:org.jboss.forge.addon.ui.context.UIBuilder, defaultValue?:any ) {

    print("installPlugin initialize UI ");
    if( defaultValue ) {
        attrs.gid.setDefaultValue(defaultValue);
    }

    builder.add(attrs.gid);
    
    print("UI initialized!")

}

/**
 *
 * @param {type} cc
 * @param {type} pb - Plugin
 *
 */
export function installPlugin(cc:org.jboss.forge.addon.dependencies.Coordinate, pb:org.jboss.forge.addon.maven.plugins.MavenPlugin) {
    print("installPlugin");

    var mvn = $project.getFacet( facets.MavenPluginFacet ) as org.jboss.forge.addon.maven.projects.MavenPluginFacet;

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

        print("installPlugin", e);
    }

}

/**
 *
 * @param {type} context
 * @param {type} pb - callback function: ( coordinate ) -> Plugin
 *
 */
export function execute(
  context:org.jboss.forge.addon.ui.context.UIExecutionContext,
  cb:(coordinate:org.jboss.forge.addon.dependencies.Coordinate) => org.jboss.forge.addon.maven.plugins.MavenPlugin )
{

    print("execute");

    var list = dps.resolve("" + attrs.gid.getValue());

    if( list.isEmpty() ) {
        print( "dependency not found!", attrs.gid.getValue());
        return;
    }

    var i = 0 ;
    if( context.getUIContext().getProvider().isGUI() ) {
        i = list.size() - 1;
    }
    else {

        i = 0;
        list.forEach( (d) => {
            print("[" + (++i) + "] " + d);
        });

        var result = context.getPrompt().prompt("Choose dependency [" + i + "] 0 to skip");

        if (result) {
            i = parseInt(result);
            if( i == 0 ) return "skipped!";
        }

        var cc = list.get(--i);
        installPlugin( cc, cb(cc) );
    }
}
