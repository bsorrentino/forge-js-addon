
import * as shell from "forge/shell";
import * as installPlugin from "./installPlugin";
import {MavenPluginBuilder,ExecutionBuilder, ConfigurationBuilder} from "./ts/forge-types"

print("Install Plugin executing ....", shell.pwd());

function initializeUI( builder:any ) {
    print( "initializeUI" );

    installPlugin.initializeUI( builder, 'io.fabric8:vertx-maven-plugin' );

}

function execute( context:any ) {

    installPlugin.execute( context, ( cc ) => {
        
        var pb = MavenPluginBuilder.create().setCoordinate(cc);

                let conf = pb.createConfiguration();

                conf.createConfigurationElement("config")
                        .setText("src/main/config/application.json")
                        ;

                conf.createConfigurationElement("redeploy")
                        .setText("true")
                        ;

                pb.addExecution(
                            ExecutionBuilder.create()
                            .setId("vertx")
                            .addGoal("initialize")
                            .addGoal("package")
                        )
                        ;

        return pb;
        
    });
    
    return "OK";
}

