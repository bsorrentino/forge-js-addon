"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var installPlugin = require("./installPlugin");
var forge_types_1 = require("./forge-types");
print("Install Plugin executing ....");
function initializeUI(builder) {
    installPlugin.initializeUI(builder);
}
function execute(context) {
    print("execute");
    installPlugin.execute(context, function (cc) { return forge_types_1.MavenPluginBuilder.create().setCoordinate(cc); });
}
