/**
 * New node file
 */


function initializeUI( builder ) {
}

function execute( context ) {

	var name = context.prompt.prompt( "give me name");

	print( "prompt: ", name );
        
        print(  
                "componentFactory", componentFactory, 
                "dependencyResolver", dependencyResolver 
             );

	return "OK ";
}
