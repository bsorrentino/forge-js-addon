"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shell = require("forge/shell");
var installPlugin = require("./installPlugin");
var forge_types_1 = require("./forge-types");
print("Install Plugin executing ....", shell.pwd());
function initializeUI(builder) {
    print("initializeUI");
    installPlugin.initializeUI(builder, 'io.fabric8:vertx-maven-plugin');
}
function execute(context) {
    installPlugin.execute(context, function (cc) {
        var pb = forge_types_1.MavenPluginBuilder.create().setCoordinate(cc);
        var conf = pb.createConfiguration();
        conf.createConfigurationElement("config")
            .setText("src/main/config/application.json");
        conf.createConfigurationElement("redeploy")
            .setText("true");
        pb.addExecution(forge_types_1.ExecutionBuilder.create()
            .setId("vertx")
            .addGoal("initialize")
            .addGoal("package"));
        return pb;
    });
    return "OK";
}
