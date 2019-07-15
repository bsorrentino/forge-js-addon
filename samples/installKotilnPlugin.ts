import * as installPlugin from "./installPlugin";
import { ConfigurationBuilder, ExecutionBuilder, MavenPluginBuilder } from "./ts/forge-types";
import facets = require("forge/facets");
import { chooseAndInstallDependency }  from "./installDependency";


function updateProperties() {
    
    const mvn = $project.getFacet( facets.MavenFacet ) as org.jboss.forge.addon.maven.projects.MavenFacet;
    const model = mvn.getModel();
    const props = model.getProperties();

    if( !props.containsKey( 'kotlin.compiler.incremental' ) ) {
        props.setProperty( 'kotlin.compiler.incremental', 'true');    
    };
  
    mvn.setModel( model );

}

/**
 * 
 */
class UIAttributes {
  
    constructor() {}

    initialize(  builder:org.jboss.forge.addon.ui.context.UIBuilder ) {}

}
  
const attrs = new UIAttributes();

/**
 * 
 * @param builder 
 */
function initializeUI( builder:org.jboss.forge.addon.ui.context.UIBuilder ) {
    installPlugin.initializeUI( builder, 'org.jetbrains.kotlin:kotlin-maven-plugin' );
    attrs.initialize( builder ); 
}

/**
 * 
 * @param context 
 */
function execute( context:org.jboss.forge.addon.ui.context.UIExecutionContext ) {

    chooseAndInstallDependency( context, 'org.jetbrains.kotlin:kotlin-stdlib' );

    updateProperties();

    installPlugin.execute( context, ( cc ) => {

        const sourceDirs = ConfigurationBuilder.create()
        .createConfigurationElement('sourceDirs')
        .addChild('sourceDir').setText('${project.basedir}/src/main/kotlin')
        .getParentElement()
        .addChild('sourceDir').setText('${project.basedir}/src/main/java')
        .getParentElement()
        ;

        const config = ConfigurationBuilder.create()
                            .addConfigurationElement(sourceDirs)
                            ;
        
        const compile =  ExecutionBuilder.create()
                            .setId('compile')
                            .addGoal('compile')
                            .setConfig( config )    
        const test_compile =  ExecutionBuilder.create()
                            .setId('test-compile')
                            .addGoal('test-compile')
                            .setConfig( config )    

        const pb = MavenPluginBuilder.create()
                .setCoordinate(cc)
                .addExecution( compile )
                .addExecution( test_compile )
                ;

        return pb;
        
    });
    
    return "OK";
}

