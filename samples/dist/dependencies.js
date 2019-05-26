"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var forge_types_1 = require("./ts/forge-types");
function resolve(qry) {
    var dq = forge_types_1.DependencyQueryBuilder.create(qry);
    return $self.dependencyResolver.resolveVersions(dq);
}
exports.resolve = resolve;
function resolveFromRepo(qry, repo) {
    var DR = Java.type("org.jboss.forge.addon.dependencies.DependencyRepository");
    var dq = forge_types_1.DependencyQueryBuilder.create(qry)
        //.setScopeType("")
        //.setFilter( function(dep) { return true; } )
        .setRepositories(new DR(repo.id, repo.url));
    return $self.dependencyResolver.resolveVersions(dq);
}
exports.resolveFromRepo = resolveFromRepo;
