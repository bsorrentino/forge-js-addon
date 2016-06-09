

function initializeUI( builder ) {

}

function execute( context ) {

var facets = require("forge/facets");
var project = require("forge/project");


var Roaster = org.jboss.forge.roaster.Roaster;

var JavaClassSource = org.jboss.forge.roaster.model.source.JavaClassSource;


print( "Class " + Roaster + " jcs " + JavaClassSource );


var c = Roaster.create( JavaClassSource )
                    .setName("Test")
                    .setPublic()
                    ;


print( "Class " + c );

var jsf = project.facet( facets.JavaSourceFacet );

jsf.saveJavaSource( c );
print( "getBasePackageDirectory " + jsf.getBasePackageDirectory() );
print( "getBasePackage " + jsf.getBasePackage() );

return "OK";

}
