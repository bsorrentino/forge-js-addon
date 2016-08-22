/**
 * New node file
 */
//var project = require("forge/project");

var String = java.lang.String;
var JSCommand = org.bsc.commands.JSCommand;

var attrs = {};

attrs.step1 = self.componentFactory.createInput("input", String);
attrs.step1.label = "input step1";
attrs.step1.required = true;

attrs.step2 = self.componentFactory.createInput("input2", String);
attrs.step2.label = "input step2";
attrs.step2.required = true;

// Define Step2 Object (see @next function below)
var step2 =  {
	initializeUI:function( builder ) {
		
	    print( "initializeUI",  "Step2" );
	    
	    builder.add( attrs.step2 );

	},
	execute:function( context ) {

	    print( "execute", "Step2", attrs.step2.value );

	    return "OK2";
	}
	
}



// Initialize UI controls
function initializeUI( builder ) {

    print( "initializeUI" );
    builder.add( attrs.step1 );

}

// Execute Main step
function execute( context ) {

    print( "execute", attrs.step1.value );

    return "OK ";
}

// Add new step to Wizard
function next() {
	
	return new JSCommand(step2) ;
}

