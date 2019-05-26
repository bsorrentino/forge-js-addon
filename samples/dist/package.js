"use strict";
/**
 * New node file
 */
Object.defineProperty(exports, "__esModule", { value: true });
var facets = require("forge/facets");
var forge_types_1 = require("./ts/forge-types");
function initializeUI(builder) {
}
function execute(context) {
    var mvn = $project.getFacet(facets.MavenFacet);
    print(mvn.getLocalRepositoryDirectory());
    mvn.executeMaven(forge_types_1.Arrays.asList("clean", "package"));
    return "OK ";
}
