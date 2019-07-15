
import * as installPlugin from "./installPlugin";
import {MavenPluginBuilder} from "./ts/forge-types"

function initializeUI( builder:org.jboss.forge.addon.ui.context.UIBuilder ) {
    installPlugin.initializeUI( builder );
}

function execute( context:org.jboss.forge.addon.ui.context.UIExecutionContext ) {
    installPlugin.execute( context , ( cc ) => MavenPluginBuilder.create().setCoordinate(cc) );
}
