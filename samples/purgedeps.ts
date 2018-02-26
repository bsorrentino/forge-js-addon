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

class Attributes {
  params:org.jboss.forge.addon.ui.input.UIInput<any>
  dlr:org.jboss.forge.addon.ui.input.UIInput<any>
  dld:org.jboss.forge.addon.ui.input.UIInput<any>

  constructor(  ) {
    this.params = $self.componentFactory.createInput("params", String.class );
    this.params.setLabel("mvn parameters");
    this.params.setDefaultValue( "-e" );

    this.dlr = $self.componentFactory.createInput("dlr", Boolean.class );
    this.dlr.setLabel ( "Delete project's artifacts from local repo?");
    this.dlr.setRequired(true);

    this.dld = $self.componentFactory.createInput("dld", Boolean.class );
    this.dld.setLabel("Delete project's dependencies from local repo ?");
    this.dld.setRequired(true);
  }
}

var attrs = new Attributes();

function initializeUI( builder:any ) {

    builder.add( attrs.params );
    builder.add( attrs.dlr );
    builder.add( attrs.dld );

}

function execute( context:any ) {

    shell.cd( $project.getRoot().getFullyQualifiedName() );

    let mvn:org.jboss.forge.addon.maven.projects.MavenFacet = $project.getFacet( facets.MavenFacet );

    mvn.executeMaven( <any>["clean",  "-o", attrs.params.getValue() ] );

    if( attrs.dlr.getValue() ) {
        print( "deleting project's artifact");
        mvn.executeMaven( <any>
                        ["org.codehaus.mojo:build-helper-maven-plugin:1.8:remove-project-artifact",
                        "-Dbuildhelper.failOnError=false",
                        "-Dbuildhelper.removeAll=true",
                        "-fn", "-T2", "-o",
                        attrs.params.getValue()
                         ] );
    }

    if( attrs.dld.getValue() ) {
        print( "deleting project's dependencies");
        mvn.executeMaven( <any>
                        ["org.apache.maven.plugins:maven-dependency-plugin:2.8:purge-local-repository",
                         "-DreResolve=false",
                         "-DsnapshotsOnly=false",
                         "-Dverbose=false",
                         "-fn", "-T2", "-o",
                         attrs.params.getValue()
                          ] );
    }

    return "OK ";
}
