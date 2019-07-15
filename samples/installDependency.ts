
import facets = require("forge/facets");
import * as dps from "./dependencies";
import { DependencyBuilder, MavenDependencyAdapter, String } from "./ts/forge-types";

/**
 * @param context
 * @param coord
 */
export function chooseAndInstallDependency( context:org.jboss.forge.addon.ui.context.UIExecutionContext, coord:any ) {
    const list = dps.resolve("" + coord);

    if( list.isEmpty() ) {
        throw `dependency not found!  ${coord}`;
    }

    let i = 0;
    if( context.getUIContext().getProvider().isGUI() ) {
        i = list.size() - 1;
    }
    else {

        i = 0;
        list.forEach( d => print( `[${(++i)}] ${d}`) );


        var result = context.getPrompt().prompt(`Choose dependency [${i}] 0 to skip`);

        if (result) {
            i = parseInt(result);
            if( i == 0 ) return "skipped!";
        }

        installDependency(list.get(--i));
    }

}

function installDependency(coord:org.jboss.forge.addon.dependencies.Coordinate) {

    let mvn:org.jboss.forge.addon.maven.projects.MavenFacet = $project.getFacet( facets.MavenFacet );

    let model = mvn.getModel();

    let md = model.getDependencies()
        .stream()
        .filter( d => d.getGroupId() == coord.getGroupId() && d.getArtifactId() == coord.getArtifactId() )
        .findFirst();

    if( md.isPresent() ) {

        model.removeDependency( md.get() );

        md.get().setVersion( coord.getVersion() );

        model.addDependency( md.get() );
    }
    else {
        const db = DependencyBuilder.create()
            .setCoordinate(coord)
            ;

        model.addDependency( new MavenDependencyAdapter(db) );
    }

    mvn.setModel( model );

}

///
/// FORGE
///

class Attributes {
  coord:org.jboss.forge.addon.ui.input.UIInput<any>

  constructor(  ) {
    this.coord = $self.getComponentFactory().createInput("coordinate", String.class);
    this.coord.setLabel( "Coordinate GroupId:ArtifactId[:version]" );
    this.coord.setRequired( true );
  }
}

var attrs = new Attributes();

function initializeUI( builder:org.jboss.forge.addon.ui.context.UIBuilder ) {
    builder.add(attrs.coord);
}


function execute( context:org.jboss.forge.addon.ui.context.UIExecutionContext ) {

    try {
        chooseAndInstallDependency( context, attrs.coord.getValue());
    }
    catch( e ) {
        print(e);
    }

}
