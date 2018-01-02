
//declare function require<T>( module:string ):T;
declare var exports:any;



interface ForgeJSAddon {

  componentFactory:org.jboss.forge.addon.ui.input.InputComponentFactory;

  dependencyResolver:org.jboss.forge.addon.dependencies.DependencyResolver;
}

declare  var $self:ForgeJSAddon;

declare var $project:org.jboss.forge.addon.projects.Project;
