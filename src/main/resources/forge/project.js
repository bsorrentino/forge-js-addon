/*
    "mvn": java.lang.Class.forName('org.jboss.forge.addon.maven.projects.MavenFacet'),
    "mvnPlugin": java.lang.Class.forName('org.jboss.forge.addon.maven.projects.MavenPluginFacet')
*/

if( typeof project === "undefined" ) {	
        print( "WARN: project is undefined!");
        throw "project is undefined!";
}

exports.root = project.root;

exports.forEachFacet = function( cb ) {
    
    var i = project.getFacets().iterator();

    while( i.hasNext() ) {
        cb( i.next() );
    }	
    
}

exports.facet = function( facetClass ) {
    
    if( !project.hasFacet( facetClass ) ) {
        throw "project doesn't support facet " + facetClass;
    }
    return project.getFacet( facetClass );
    
}

function _facets() {
	
    var facets = {};

    var pattern = /^([A-Za-z]+)/;

    var i = project.getFacets().iterator();

    while( i.hasNext() ) {

        var facet = i.next(), 
                n = facet.class.simpleName, 
                g = pattern.exec(n); 
        
        if( g ) {
            
            facets[g[0].replace("Impl", "").toLowerCase()] = facet;
        }
        else {
            
            print( "WARN: " + n + ",DOESN'T MATCH ");
        }

    }	

    return facets;
	
}

exports.facets = _facets();
