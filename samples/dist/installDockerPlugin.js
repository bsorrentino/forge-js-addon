"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shell = require("forge/shell");
var installPlugin = require("./installPlugin");
var forge_types_1 = require("./forge-types");
print("Install Plugin executing ....", shell.pwd());
function initializeUI(builder) {
    print("initializeUI");
    installPlugin.initializeUI(builder, 'io.fabric8:docker-maven-plugin');
}
function execute(context) {
    installPlugin.execute(context, function (cc) {
        var pb = forge_types_1.MavenPluginBuilder.create()
            .setCoordinate(cc)
            .addExecution(forge_types_1.ExecutionBuilder.create()
            .setPhase("package")
            .addGoal("build")
            .setConfig(forge_types_1.ConfigurationBuilder.create()
        //.createConfigurationElement("images")
        //.addChild("image")
        ));
        return pb;
    });
    return "OK";
}
