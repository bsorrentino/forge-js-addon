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

function execute( context ) {

  var dps = require("dependencies");

  var list = dps.resolve("" + attrs.gid.value+":"+attrs.aid.value);

  if( list ) {
    var i = list.iterator();

    while( i.hasNext() ) {

      print( "" + i.next() );
    }

  }
}

"OK";
