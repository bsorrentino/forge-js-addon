


declare module 'forge/facets' {
  export const JavaSourceFacet:org.jboss.forge.addon.parser.java.facets.JavaSourceFacet;
  export const MavenFacet:org.jboss.forge.addon.maven.projects.MavenFacet;
  export const MavenPluginFacet:org.jboss.forge.addon.maven.projects.MavenPluginFacet;

}

declare module 'forge/shell' {

  export function pwd():string;
  export function cd( dir:string ):void;

}
