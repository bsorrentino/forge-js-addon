/**
 *
 */
/*
		"mvn": java.lang.Class.forName('org.jboss.forge.addon.maven.projects.MavenFacet'),
		"mvnPlugin": java.lang.Class.forName('org.jboss.forge.addon.maven.projects.MavenPluginFacet')
*/

//exports.facets =
module.exports =
function() {


	var facets = {};

	if( typeof project == "undefined" ){
		print( "WARN: project is undefined!");
		throw "project is undefined!";
	}

	var pattern = /^([A-Za-z]+)Impl|^([A-Za-z]+)/;

	var i = project.getFacets().iterator();

	while( i.hasNext() ) {

			var facet = i.next(),
			n = facet.class.simpleName;
			g = pattern.exec(n);
			if( g ) {

				var m = g[1] || g[0];

				facets[m] = facet;

				print( n + " = " + m );

			}else print( "WARN: " + n + ",DOESN'T MATCH ");

	}

	return facets;

}
