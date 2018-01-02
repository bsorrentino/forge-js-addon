"use strict";
/// <reference path="forge-js-addon.d.ts"/>
Object.defineProperty(exports, "__esModule", { value: true });
var forge_types_1 = require("./forge-types");
function resolve(qry) {
    var dq = forge_types_1.DependencyQueryBuilder.create(qry);
    return $self.dependencyResolver.resolveVersions(dq);
}
exports.resolve = resolve;
function resolveFromRepo(qry, repo) {
    var DR = Java.type("org.jboss.forge.addon.dependencies.DependencyRepository");
    var dq = forge_types_1.DependencyQueryBuilder.create(qry)
        .setRepositories(new DR(repo.id, repo.url));
    return $self.dependencyResolver.resolveVersions(dq);
}
exports.resolveFromRepo = resolveFromRepo;
