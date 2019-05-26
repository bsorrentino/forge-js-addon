"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var installPlugin = require("./installPlugin");
var forge_types_1 = require("./ts/forge-types");
print("Install Plugin executing ....");
function initializeUI(builder) {
    installPlugin.initializeUI(builder, 'org.apache.maven.plugins:maven-shade-plugin');
}
function execute(context) {
    installPlugin.execute(context, function (cc) {
        var pb = forge_types_1.MavenPluginBuilder.create()
            .setCoordinate(cc)
            .addExecution(forge_types_1.ExecutionBuilder.create()
            .setPhase("package")
            .addGoal("shade")
            .setConfig(forge_types_1.ConfigurationBuilder.create()));
        return pb;
    });
    return {
        initializeUI: function (builder) {
        },
        execute: function (context) {
        }
    };
}
