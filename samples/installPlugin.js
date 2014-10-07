var facets = require("facets")();
var MavenPluginBuilder = org.jboss.forge.addon.maven.plugins.MavenPluginBuilder;
var CoordinateBuilder = org.jboss.forge.addon.dependencies.builder.CoordinateBuilder;
var ConfigurationBuilder = org.jboss.forge.addon.maven.plugins.ConfigurationBuilder;
var ConfigurationElementBuilder = org.jboss.forge.addon.maven.plugins.ConfigurationElementBuilder;
var ExecutionBuilder = org.jboss.forge.addon.maven.plugins.ExecutionBuilder;

print( "Install Plugin executing ....");

var String = java.lang.String;

var attrs = {};

attrs.gid = self.componentFactory.createInput("coordinate", String );
attrs.gid.label = "Coordinate GroupId:ArtifactId[:version]";
attrs.gid.required = true;
attrs.gid.defaultValue = 'net.orfjackal.retrolambda:retrolambda-maven-plugin';


function initializeUI( builder ) {

	print( "initialize UI");
	for( m in attrs ) {
		builder.add( attrs[m] );
	}
	print( "UI initialized!")

}



var result = "";

function installPlugin( cc ) {
	try {


			var pb = MavenPluginBuilder.create()
								.setCoordinate(cc)
								.addExecution(
									ExecutionBuilder.create()
										.addGoal("process-main")
										.addGoal("process-test")
									)
								;



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

function execute( context ) {

  var dps = require("dependencies");

  var list = dps.resolve("" + attrs.gid.value );

  if( list ) {
	var i = -1;
	var d = list.iterator();

    while( d.hasNext() ) {

      print( "[" + (++i) + "] " + d.next() );
    }

    result = context.prompt.prompt( "Choose dependency [" + i + "]" );

    //for( var m in facets ) { print(""+m); }


    if(result ) i = parseInt(result);

    var cc = list.get(i);

		installPlugin( cc );


  }
}

result;
