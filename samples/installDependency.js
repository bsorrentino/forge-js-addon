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
    
    var mvn = project.facet( facets.MavenFacet );
    
    try {

        var model = mvn.getModel();
        
        var db = DependencyBuilder.create()
                .setCoordinate(coord)
                ;
        var c = db.coordinate;
        
        var dep = model.dependencies.toArray().find( function(d) {
            
            return d.groupId == c.groupId && d.artifactId == c.artifactId ;
        });        
        
        if( dep != null ) {
            print("updating ....", coord);
        
            model.removeDependency( dep );
            
            dep.version = db.version;
            
            model.addDependency( dep );
        }
        else {
            print("adding ....", coord);
            
            model.addDependency( new MavenDependencyAdapter(db) );
        }    
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

        i = -1;
        list.forEach( function(d) {
            print("[" + (++i) + "] " + d);        
        });
  
        var result = context.prompt.prompt("Choose dependency [" + i + "]");

        if (result) {
            i = parseInt(result);
        }

        installDependency(list[i]);
    }
}


