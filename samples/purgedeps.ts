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

import * as facets  from "forge/facets";
import * as shell   from "forge/shell";
import {String} from "./forge-types"

const Boolean:{ readonly class:any } = Java.type("java.lang.Boolean");

let params = $self.componentFactory.createInput("params", String.class );
params.setLabel("mvn parameters");
params.setDefaultValue( "-e" );
//input.params.required = true;

let dlr = $self.componentFactory.createInput("dlr", Boolean.class );
dlr.setLabel ( "Delete project's artifacts from local repo?");
dlr.setRequired(true);

let dld = $self.componentFactory.createInput("dld", Boolean );
dld.setLabel("Delete project's dependencies from local repo ?");
dld.setRequired(true);

function initializeUI( builder:any ) {
    
    builder.add( params );
    builder.add( dlr );
    builder.add( dld );
   
}

function execute( context:any ) {
   
    shell.cd( $project.getRoot().getFullyQualifiedName() );

    var mvn = $project.getFacet( facets.MavenFacet );
    
    mvn.executeMaven( ["clean",  "-o", params.getValue() ] );

    if( dlr.getValue() ) {    
        print( "deleting project's artifact");
        mvn.executeMaven( 
                        ["org.codehaus.mojo:build-helper-maven-plugin:1.8:remove-project-artifact", 
                        "-Dbuildhelper.failOnError=false",
                        "-Dbuildhelper.removeAll=true",
                        "-fn", "-T2", "-o",  
                        params.getValue()
                         ] );		 
    }
    
    if( dld.getValue() ) {
        print( "deleting project's dependencies");
        mvn.executeMaven( 
                        ["org.apache.maven.plugins:maven-dependency-plugin:2.8:purge-local-repository", 
                         "-DreResolve=false",
                         "-DsnapshotsOnly=false",
                         "-Dverbose=false",
                         "-fn", "-T2", "-o",
                         params.getValue()
                          ] );		 
    }
   
    return "OK ";
}


