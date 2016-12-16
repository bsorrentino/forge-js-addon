/*
clear
echo "clean project targets"
mvn $@ -o clean
echo -n "delete project's artifacts from local repo [y/N]"
read -n 1 del

#echo "$del"

if [ "$del" == "y" ] ; then
	echo -e "\nperform delete "
	
	mvn  $@ -fn -T2 -o \
	 org.codehaus.mojo:build-helper-maven-plugin:1.8:remove-project-artifact \
	 -Dbuildhelper.failOnError=false \
	 -Dbuildhelper.removeAll=true
	 
else
	echo -e "\nskip delete "
fi

echo -n "delete project's dependencies from local repo [y/N] "
read -n 1 del

#echo "$del"

if [ "$del" == "y" ] ; then
	echo -e "\nperform delete "
	
	mvn  $@ -fn -T2 -o \
	 org.apache.maven.plugins:maven-dependency-plugin:2.8:purge-local-repository \
	 -DreResolve=false \
	 -DsnapshotsOnly=false \
	 -Dverbose=true
	 
else
	echo -e "\nskip delete"
fi


*/

var facets  = require("forge/facets");
var project = require("forge/project");
var shell   = require("forge/shell");

var String  = java.lang.String;
var Boolean = java.lang.Boolean;

var input = {};

input.params = self.componentFactory.createInput("params", String );
input.params.label = "mvn parameters";
input.params.setDefaultValue( "-e" );
//input.params.required = true;

input.dlr = self.componentFactory.createInput("dlr", Boolean );
input.dlr.label = "Delete project's artifacts from local repo?";
input.dlr.required = true;

input.dld = self.componentFactory.createInput("dld", Boolean );
input.dld.label = "Delete project's dependencies from local repo ?";
input.dld.required = true;

function initializeUI( builder ) {
    
    builder.add( input.params );
    builder.add( input.dlr );
    builder.add( input.dld );
   
}

function execute( context ) {
   
    shell.cd( project.root.fullyQualifiedName );

    var mvn = project.facet( facets.MavenFacet );
    
    mvn.executeMaven( ["clean",  "-o", input.params.value ] );

    if( input.dlr.value ) {    
        print( "deleting project's artifact");
        mvn.executeMaven( 
                        ["org.codehaus.mojo:build-helper-maven-plugin:1.8:remove-project-artifact", 
                        "-Dbuildhelper.failOnError=false",
                        "-Dbuildhelper.removeAll=true",
                        "-fn", "-T2", "-o",  
                        input.params.value
                         ] );		 
    }
    
    if( input.dld.value ) {
        print( "deleting project's dependencies");
        mvn.executeMaven( 
                        ["org.apache.maven.plugins:maven-dependency-plugin:2.8:purge-local-repository", 
                         "-DreResolve=false",
                         "-DsnapshotsOnly=false",
                         "-Dverbose=false",
                         "-fn", "-T2", "-o",
                         input.params.value
                          ] );		 
    }
   
    return "OK ";
}


