/**
 * New node file
 */
var project = require("forge/project");


var JSCommand = org.bsc.commands.JSCommand;

function next() {

	return new JSCommand( {

		initializeUI:function( builder ) {

		    print( "initializeUI_1" );

		},
		execute:function( context ) {

		    print( "execute_1" );

		}

	});
}

function initializeUI( builder ) {

    print( "initializeUI" );

}

function execute( context ) {

    print( "execute" );

    return "OK ";
}
