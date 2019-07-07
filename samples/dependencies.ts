
import  {DependencyQueryBuilder} from "./ts/forge-types" ;

export function resolve( qry:string ):List<org.jboss.forge.addon.dependencies.Coordinate> {

        var dq = DependencyQueryBuilder.create( qry );

        return $self.getDependencyResolver().resolveVersions(dq);
}

export function resolveFromRepo( qry:string, repo:any ):List<org.jboss.forge.addon.dependencies.Coordinate> {

        let DR:any = Java.type("org.jboss.forge.addon.dependencies.DependencyRepository");

        let dq = DependencyQueryBuilder.create( qry )
                //.setScopeType("")
                //.setFilter( function(dep) { return true; } )
                  .setRepositories( new DR( repo.id, repo.url ) )
        ;

        return $self.getDependencyResolver().resolveVersions(dq);
}
