import * as shell from "forge/shell";
import * as installPlugin from "./installPlugin";
import {MavenPluginBuilder,ExecutionBuilder, ConfigurationBuilder} from "./ts/forge-types"


print("Install Plugin executing ....", shell.pwd());

function initializeUI( builder:any ) {
    print( "initializeUI" );

    installPlugin.initializeUI( builder, 'io.fabric8:docker-maven-plugin' );

}

function execute( context:any ) {

    installPlugin.execute( context, function( cc ) {
 
        var pb = MavenPluginBuilder.create()
                .setCoordinate(cc)
                .addExecution(
                        ExecutionBuilder.create()
                        .setPhase("package")
                        .addGoal("build")
                        .setConfig( ConfigurationBuilder.create() 
                        		//.createConfigurationElement("images")
                        			//.addChild("image")
                        		)
                        )
                ;

        return pb;
        
    });
    
    return "OK";
}

