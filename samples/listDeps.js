var facets = require("facets")();
var MavenPluginBuilder = org.jboss.forge.addon.maven.plugins.MavenPluginBuilder;
var CoordinateBuilder = org.jboss.forge.addon.dependencies.builder.CoordinateBuilder;

print( "test executing ....");

var String = java.lang.String;

var attrs = {};

attrs.gid = self.componentFactory.createInput("groupId", String );
attrs.gid.label = "GroupId";
attrs.gid.required = true;

attrs.aid = self.componentFactory.createInput("artifactId", String );
attrs.aid.label = "ArtifactId";
attrs.aid.required = true;

function initializeUI( builder ) {

	print( "initialize UI");
	for( m in attrs ) {
		builder.add( attrs[m] );
	}
	print( "UI initialized!")

}

var result = "";
function execute( context ) {

  var dps = require("dependencies");

  var list = dps.resolve("" + attrs.gid.value+":"+attrs.aid.value);

  if( list ) {
	var i = -1;
	var d = list.iterator();

    while( d.hasNext() ) {

      print( "[" + (++i) + "] " + d.next() );
    }

    result = context.prompt.prompt( "Choose dependency [" + i + "]" );
    
    //for( var m in facets ) { print(""+m); }
    
    try {
    	
    	
        if(result ) i = parseInt(result);

        var cc = list.get(i);
        
        
        var pb = MavenPluginBuilder.create().setCoordinate(cc);
        
        if( facets.mavenpluginfacet.hasPlugin(cc)) {
            print( "updating ...." + cc );
            facets.mavenpluginfacet.updatePlugin(pb)        	        	
        }
        else {
            print( "adding ...." + cc );
            facets.mavenpluginfacet.addPlugin(pb)        	
        }
    	
    }
    catch(e) {
    	
    	print(e);
    }
    
  }
}

result;
