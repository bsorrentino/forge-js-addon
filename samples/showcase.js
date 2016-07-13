/**
 * New node file
 */
var project = require("forge/project");


function initializeUI( builder ) {

    print( "initializeUI" );

}

function execute( context ) {

    var arr = [ 1,2,3,4,5,6,7,8,9];
    var f = arr.filter( function(a) {
        
        return a%2==0;
    });
    print( "filter", f );
    
    var f1 = arr.find( function(a) { return a==7; } );
    print( "find", f1 );

    project.forEachFacet( function(f) {
    
        print( 'facet:', f);
    });
    
    var name = context.prompt.prompt( "give me name");

    print(  "prompt", name ,
            "componentFactory", self.componentFactory, 
            "dependencyResolver", self.dependencyResolver 
         );

    return "OK ";
}
