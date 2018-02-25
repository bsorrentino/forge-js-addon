import facets = require("forge/facets");
import {
  Roaster,
  JavaClassSource
} from "./forge-types"


function initializeUI( builder:org.jboss.forge.addon.ui.context.UIBuilder ) {

}

function execute( context:org.jboss.forge.addon.ui.context.UIExecutionContext ) {


print( "Class " + Roaster + " jcs " + JavaClassSource );


let c =
  Roaster.create<org.jboss.forge.roaster.model.source.JavaClassSource>( JavaClassSource.class );

  c.setName("Test");
  c.setPublic();

  print( "Class " + c );

  let jsf = $project.getFacet<org.jboss.forge.addon.parser.java.facets.JavaSourceFacet>( facets.JavaSourceFacet );

  jsf.saveJavaSource( c );

  print( "getBasePackageDirectory " + jsf.getBasePackageDirectory() );
  print( "getBasePackage " + jsf.getBasePackage() );

  return "OK";

}
