import * as shell from "forge/shell";
import * as installPlugin from "./installPlugin";
import {MavenPluginBuilder,ExecutionBuilder, ConfigurationBuilder} from "./ts/forge-types"
import { String, Arrays } from "./ts/forge-types";

print("Install Plugin executing ....", shell.pwd());


class Attributes {
    image_name:org.jboss.forge.addon.ui.input.UIInput<any>  
    image_alias:org.jboss.forge.addon.ui.input.UIInput<any>  
    build_contextDir:org.jboss.forge.addon.ui.input.UIInput<any>  
    assembly_descriptorRef:org.jboss.forge.addon.ui.input.UISelectOne<any>  
  
    constructor() {
        this.image_name = $self.getComponentFactory().createInput("image:name", String.class);
        this.image_name.setLabel( "image name" );
        this.image_name.setRequired( true );
  
        this.image_alias = $self.getComponentFactory().createInput("image:alias", String.class);
        this.image_alias.setLabel( "image alias" );
        this.image_alias.setRequired( false );
        this.image_alias.setDefaultValue( 'dockerfile' );
  
        this.build_contextDir = $self.getComponentFactory().createInput("build:contextDir", String.class);
        this.build_contextDir.setLabel( "Docker file dir from ${project.basedir}" );
        this.build_contextDir.setRequired( false );
        this.build_contextDir.setDefaultValue( 'src/main/docker' );

        this.assembly_descriptorRef = $self.getComponentFactory().createSelectOne("assembly:descriptorRef", String.class);
        this.assembly_descriptorRef.setLabel( "Assembly Descriptor Ref" );
        this.assembly_descriptorRef.setRequired( true );
    }

    initialize(  builder:org.jboss.forge.addon.ui.context.UIBuilder ) {
        builder.add( this.image_name);
        builder.add( this.image_alias);
        builder.add( this.build_contextDir);

        const choices = Arrays.asList( 
            'custom',
            'artifact-with-dependencies',
            'artifact',
            'project',
            'rootWar'
        )
        this.assembly_descriptorRef.setValueChoices( choices );

        builder.add( this.assembly_descriptorRef);
    }

  }
  
const attrs = new Attributes();

/**
 * 
 * @param builder 
 */
function initializeUI( builder:org.jboss.forge.addon.ui.context.UIBuilder ) {
    print( "initializeUI" );

    installPlugin.initializeUI( builder, 'io.fabric8:docker-maven-plugin' );

    attrs.initialize( builder );
    
}

/**
 * 
 * @param context 
 */
function execute( context:org.jboss.forge.addon.ui.context.UIExecutionContext ) {
 
    console.log( `image name = ${attrs.image_name.getValue()} `);

    let assembly = ConfigurationBuilder.create()
        .createConfigurationElement('assembly')
    if( attrs.assembly_descriptorRef.getSelectedIndex() > 0  ) {
        assembly.addChild( 'descriptorRef' ).setText( attrs.assembly_descriptorRef.getValue() )
    }
    else {
        const assembly_model = context.getPrompt().prompt("assembly model file from ${project.basedir}");
        assembly.addChild( 'descriptor' ).setText( '${project.basedir}/' + assembly_model )
    }

    installPlugin.execute( context, ( cc ) => {

        let images = ConfigurationBuilder.create()
                        .createConfigurationElement('images')
                        .addChild( 'image')
                            .addChild('name').setText( attrs.image_name.getValue() )
                            .getParentElement()
                            .addChild( 'alias' ).setText( attrs.image_alias.getValue() )
                            .getParentElement()
                            .addChild('build')
                                .addChild('contextDir').setText( '${project.basedir}/' + attrs.build_contextDir.getValue())
                                .getParentElement()
                                .addChild( assembly )
                            .getParentElement()
                        .getParentElement()
                            ;

        const config = ConfigurationBuilder.create()
                            .addConfigurationElement(images)
                            ;
                        
        const pb = MavenPluginBuilder.create()
                .setCoordinate(cc)
                .addExecution(
                        ExecutionBuilder.create()
                        .setPhase("package")
                        .addGoal("build")
                        .setConfig( config )
                        )
                ;

        return pb;
        
    });
    
    return "OK";
}

