"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var facets = require("forge/facets");
var forge_types_1 = require("./forge-types");
function initializeUI(builder) {
}
function execute(context) {
    print("Class " + forge_types_1.Roaster + " jcs " + forge_types_1.JavaClassSource);
    var c = forge_types_1.Roaster.create(forge_types_1.JavaClassSource.class);
    c.setName("Test");
    c.setPublic();
    print("Class " + c);
    var jsf = $project.getFacet(facets.JavaSourceFacet);
    jsf.saveJavaSource(c);
    print("getBasePackageDirectory " + jsf.getBasePackageDirectory());
    print("getBasePackage " + jsf.getBasePackage());
    return "OK";
}
