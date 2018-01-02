/// <reference path="forge-js-addon.d.ts"/>

import  {DependencyQueryBuilder} from "./forge-types" ;

export function resolve( qry:string ):java.util.List<org.jboss.forge.addon.dependencies.Coordinate> {

        var dq = DependencyQueryBuilder.create( qry );

        return $self.dependencyResolver.resolveVersions(dq);
}

export function resolveFromRepo( qry:string, repo:any ):java.util.List<org.jboss.forge.addon.dependencies.Coordinate> {

        let DR:any = Java.type("org.jboss.forge.addon.dependencies.DependencyRepository");

        let dq = DependencyQueryBuilder.create( qry )
                //.setScopeType("")
                //.setFilter( function(dep) { return true; } )
                  .setRepositories( new DR( repo.id, repo.url ) )
        ;

        return $self.dependencyResolver.resolveVersions(dq);
}
