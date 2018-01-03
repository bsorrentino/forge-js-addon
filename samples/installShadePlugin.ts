import * as installPlugin from "./installPlugin";
import {MavenPluginBuilder,ExecutionBuilder, ConfigurationBuilder} from "./forge-types"


print("Install Plugin executing ....");


function initializeUI( builder:any ):void {

    installPlugin.initializeUI( builder, 'org.apache.maven.plugins:maven-shade-plugin' );

}

function execute( context:any ):any {

    installPlugin.execute( context, function( cc ) {
 
        var pb = MavenPluginBuilder.create()
                .setCoordinate(cc)
                .addExecution(
                        ExecutionBuilder.create()
                        .setPhase("package")
                        .addGoal("shade")
                        .setConfig( ConfigurationBuilder.create() 
                        		
                        		)
                        )
                ;

        return pb;
        
    });
    
    return {
    	
    	 initializeUI:function( builder:any ) {
    	 }, 
    	 execute:function( context:any ) {
    	 }
    }
}

