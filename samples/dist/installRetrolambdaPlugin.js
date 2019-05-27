"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var installPlugin = require("./installPlugin");
var forge_types_1 = require("./ts/forge-types");
print("Install Plugin executing ....");
function initializeUI(builder) {
    installPlugin.initializeUI(builder, 'net.orfjackal.retrolambda:retrolambda-maven-plugin');
}
function execute(context) {
    installPlugin.execute(context, function (cc) {
        var pb = forge_types_1.MavenPluginBuilder.create()
            .setCoordinate(cc)
            .addExecution(forge_types_1.ExecutionBuilder.create()
            .addGoal("process-main")
            .addGoal("process-test"));
        return pb;
    });
}
