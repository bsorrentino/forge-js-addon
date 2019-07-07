/**
 * New node file
 */
import {
   String
 } from "./ts/forge-types"



class Attributes {
  step1:org.jboss.forge.addon.ui.input.UIInput<any>;
  step2:org.jboss.forge.addon.ui.input.UIInput<any>;

  constructor(  ) {
		this.step1 = $self.getComponentFactory().createInput("input", String);
		this.step1.setLabel("input step1");
		this.step1.setRequired( true );

		this.step2 = $self.getComponentFactory().createInput("input2", String);
		this.step1.setLabel("input step2");
		this.step1.setRequired( true );

  }
}

var attrs = new Attributes();



// Define Step2 Object (see @next function below)
var step2 =  {
	initializeUI:function( builder:any ) {

	    print( "initializeUI",  "Step2" );

	    builder.add( attrs.step2 );

	},
	execute:function( context:any ) {

	    print( "execute", "Step2", attrs.step2.getValue() );

	    return "OK2";
	}

}



// Initialize UI controls
function initializeUI( builder:any ) {

    print( "initializeUI" );
    builder.add( attrs.step1 );

}

// Execute Main step
function execute( context:any ) {

    print( "execute", attrs.step1.getValue() );

    return "OK ";
}

const JSCommand:any = Java.type("org.bsc.commands.JSCommand");

// Add new step to Wizard
function next() {

	return new JSCommand(step2) ;
}
