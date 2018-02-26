"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var facets = require("forge/facets");
var shell = require("forge/shell");
var forge_types_1 = require("./forge-types");
var Boolean = Java.type("java.lang.Boolean");
var Attributes = /** @class */ (function () {
    function Attributes() {
        this.params = $self.componentFactory.createInput("params", forge_types_1.String.class);
        this.params.setLabel("mvn parameters");
        this.params.setDefaultValue("-e");
        this.dlr = $self.componentFactory.createInput("dlr", Boolean.class);
        this.dlr.setLabel("Delete project's artifacts from local repo?");
        this.dlr.setRequired(true);
        this.dld = $self.componentFactory.createInput("dld", Boolean.class);
        this.dld.setLabel("Delete project's dependencies from local repo ?");
        this.dld.setRequired(true);
    }
    return Attributes;
}());
var attrs = new Attributes();
function initializeUI(builder) {
    builder.add(attrs.params);
    builder.add(attrs.dlr);
    builder.add(attrs.dld);
}
function execute(context) {
    shell.cd($project.getRoot().getFullyQualifiedName());
    var mvn = $project.getFacet(facets.MavenFacet);
    mvn.executeMaven(["clean", "-o", attrs.params.getValue()]);
    if (attrs.dlr.getValue()) {
        print("deleting project's artifact");
        mvn.executeMaven(["org.codehaus.mojo:build-helper-maven-plugin:1.8:remove-project-artifact",
            "-Dbuildhelper.failOnError=false",
            "-Dbuildhelper.removeAll=true",
            "-fn", "-T2", "-o",
            attrs.params.getValue()
        ]);
    }
    if (attrs.dld.getValue()) {
        print("deleting project's dependencies");
        mvn.executeMaven(["org.apache.maven.plugins:maven-dependency-plugin:2.8:purge-local-repository",
            "-DreResolve=false",
            "-DsnapshotsOnly=false",
            "-Dverbose=false",
            "-fn", "-T2", "-o",
            attrs.params.getValue()
        ]);
    }
    return "OK ";
}
