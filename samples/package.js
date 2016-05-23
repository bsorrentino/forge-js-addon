/**
 * New node file
 */

var facets = require("forge/facets");
var project = require("forge/project");

function initializeUI( builder ) {   
}

function execute( context ) {

    var mvn = project.facet( factes.MavenFacet );

    print( mvn.localRepositoryDirectory );

    mvn.executeMaven( ["clean",  "package"] );

    return "OK ";
}
