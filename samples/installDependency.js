var facets = require("forge/facets");
var project = require("forge/project");

var DependencyBuilder           = org.jboss.forge.addon.dependencies.builder.DependencyBuilder
var CoordinateBuilder           = org.jboss.forge.addon.dependencies.builder.CoordinateBuilder;
var ConfigurationBuilder        = org.jboss.forge.addon.maven.plugins.ConfigurationBuilder;
var ConfigurationElementBuilder = org.jboss.forge.addon.maven.plugins.ConfigurationElementBuilder;
var ExecutionBuilder            = org.jboss.forge.addon.maven.plugins.ExecutionBuilder;
var MavenDependencyAdapter      = org.jboss.forge.addon.maven.dependencies.MavenDependencyAdapter;

var String = java.lang.String;

var attrs = {};

attrs.coord = self.componentFactory.createInput("coordinate", String);
attrs.coord.label = "Coordinate GroupId:ArtifactId[:version]";
attrs.coord.required = true;

print( "load");

function initializeUI(builder ) {
    
    print("initialize UI");
    builder.add(attrs.coord);
    
}

function installDependency(coord) {
    
    print( coord.version );
    
    var mvn = project.facet( facets.MavenFacet );
    
    try {

        var model = mvn.getModel();
        
        var md = model.dependencies.toArray().find( function(d) {
            
            return d.groupId == coord.groupId && d.artifactId == coord.artifactId ;
        });        
        
        if( md != null ) {
            print("updating ....", coord);
        
            model.removeDependency( md );
            
            md.version = coord.version;
            
            model.addDependency( md );
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

function execute( context ) {

    var dps = require("dependencies");
    
    print("execute");
 
    var v = attrs.coord.value;
    
    var list = dps.resolve("" + v);
    //var list = dps.resolve("junit:junit");
    
    if( list.length == 0 ) {
        print( "dependency not found!", v);
        return;
    }
    
    var i ;
    if( context.getUIContext().getProvider().isGUI() ) {
        i = list.length - 1;
    }
    else {

        i = 0;
        list.forEach( function(d) {
            print("[" + (++i) + "] " + d);        
        });
  
        var result = context.prompt.prompt("Choose dependency [" + i + "] 0 to skip");

        if (result) {
            i = parseInt(result);
            if( i == 0 ) return "skipped!";
        }
        
        installDependency(list[i]);
    }
}


