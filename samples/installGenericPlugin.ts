
import * as installPlugin from "./installPlugin";
import {MavenPluginBuilder} from "./ts/forge-types"

print("Install Plugin executing ....");

function initializeUI( builder:org.jboss.forge.addon.ui.context.UIBuilder ) {

    installPlugin.initializeUI( builder );

}

function execute( context:org.jboss.forge.addon.ui.context.UIExecutionContext ) {
    print("execute");

    installPlugin.execute( context , ( cc ) => MavenPluginBuilder.create().setCoordinate(cc) );
}
