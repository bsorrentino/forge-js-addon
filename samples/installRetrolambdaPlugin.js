var installPlugin = require("./installPlugin");


print("Install Plugin executing ....");


function initializeUI( builder ) {

    installPlugin.initializeUI( builder, 'net.orfjackal.retrolambda:retrolambda-maven-plugin' );

}

function execute( context ) {

    installPlugin.execute( context );
}

