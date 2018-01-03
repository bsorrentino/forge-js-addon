"use strict";
/**
 * New node file
 */
Object.defineProperty(exports, "__esModule", { value: true });
var facets = require("forge/facets");
function initializeUI(builder) {
}
function execute(context) {
    var mvn = $project.getFacet(facets.MavenFacet);
    print(mvn.getLocalRepositoryDirectory());
    mvn.executeMaven(["clean", "package"]);
    return "OK ";
}
