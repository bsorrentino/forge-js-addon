/**
 * New node file
 */
//var project = require("forge/project");
import {Stream} from "./forge-types";

function  initializeUI( builder:org.jboss.forge.addon.ui.context.UIBuilder ):void {
      print( "initializeUI" );
  }

function execute( context:org.jboss.forge.addon.ui.context.UIExecutionContext ):string {

      var arr = [ 1,2,3,4,5,6,7,8,9];
      var f = arr.filter( (a) => a%2==0 );

      print( "filter", f );

      $project.getFacets().forEach( (f) => print( 'facet:', f) );

      var name = context.getPrompt().prompt( "give me name");

      print(  "prompt", name ,
              "componentFactory", $self.componentFactory,
              "dependencyResolver", $self.dependencyResolver
           );

      return "OK ";
}
