/**
 * New node file
 */

import * as facets  from "forge/facets";


function initializeUI( builder:any ) {   
}

function execute( context:any ):any {

    var mvn = $project.getFacet( facets.MavenFacet ) as org.jboss.forge.addon.maven.projects.MavenFacet;

    print( mvn.getLocalRepositoryDirectory() );

    mvn.executeMaven( ["clean",  "package"] );

    return "OK ";
}
