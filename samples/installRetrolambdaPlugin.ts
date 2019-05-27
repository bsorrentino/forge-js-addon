import * as installPlugin from "./installPlugin";
import {MavenPluginBuilder,ExecutionBuilder, ConfigurationBuilder} from "./ts/forge-types"


print("Install Plugin executing ....");


function initializeUI( builder:any ) {

    installPlugin.initializeUI( builder, 'net.orfjackal.retrolambda:retrolambda-maven-plugin' );

}

function execute( context:any ) {

    installPlugin.execute( context, function( cc ) {
 
        var pb = MavenPluginBuilder.create()
                .setCoordinate(cc)
                .addExecution(
                        ExecutionBuilder.create()
                        .addGoal("process-main")
                        .addGoal("process-test")
                        )
                ;

        return pb;
        
    });
}

