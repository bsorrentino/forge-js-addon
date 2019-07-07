
import facets = require("forge/facets");
import * as dps from "./dependencies";
import { DependencyBuilder, MavenDependencyAdapter, String } from "./ts/forge-types";


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

    print("initialize UI");
    builder.add(attrs.coord);

}

function installDependency(coord:org.jboss.forge.addon.dependencies.Coordinate) {

    print( coord.getVersion() );

    let mvn:org.jboss.forge.addon.maven.projects.MavenFacet = $project.getFacet( facets.MavenFacet );

    try {

        let model = mvn.getModel();

        let md = model.getDependencies().stream().filter( d =>
            d.getGroupId() == coord.getGroupId() && d.getArtifactId() == coord.getArtifactId()
        ).findFirst();

        if( md.isPresent() ) {
            print("updating ....", coord);

            model.removeDependency( md.get() );

            md.get().setVersion( coord.getVersion() );

            model.addDependency( md.get() );
        }
        else {
           var db = DependencyBuilder.create()
                .setCoordinate(coord)
                ;

            print("adding ....", coord );

            model.addDependency( new MavenDependencyAdapter(db) );
        }

        mvn.setModel( model );
    }
    catch (e) {

        print(e);
    }

}

function execute( context:org.jboss.forge.addon.ui.context.UIExecutionContext ) {


    print("execute");

    var v = attrs.coord.getValue();

    var list = dps.resolve("" + v);

    if( list.isEmpty() ) {
        print( "dependency not found!", v);
        return;
    }

    var i = 0;
    if( context.getUIContext().getProvider().isGUI() ) {
        i = list.size() - 1;
    }
    else {

        i = 0;
        list.forEach( d => print("[" + (++i) + "] " + d) );


        var result = context.getPrompt().prompt("Choose dependency [" + i + "] 0 to skip");

        if (result) {
            i = parseInt(result);
            if( i == 0 ) return "skipped!";
        }

        installDependency(list.get(--i));
    }
}
