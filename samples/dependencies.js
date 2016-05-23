
var DependencyQueryBuilder = org.jboss.forge.addon.dependencies.builder.DependencyQueryBuilder;

exports.resolve = function( qry ) {

        var dq = DependencyQueryBuilder.create( qry );

        var cd = self.dependencyResolver.resolveVersions(dq);

        return cd.toArray();
}
