"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var facets = require("forge/facets");
var dps = require("./dependencies");
var forge_types_1 = require("./ts/forge-types");
var Attributes = /** @class */ (function () {
    function Attributes() {
        this.gid = $self.componentFactory.createInput("coordinate", forge_types_1.String.class);
        this.gid.setLabel("Coordinate GroupId:ArtifactId[:version]");
        this.gid.setRequired(true);
    }
    return Attributes;
}());
var attrs = new Attributes();
function initializeUI(builder, defaultValue) {
    print("installPlugin initialize UI ");
    if (defaultValue) {
        attrs.gid.setDefaultValue(defaultValue);
    }
    builder.add(attrs.gid);
    print("UI initialized!");
}
exports.initializeUI = initializeUI;
/**
 *
 * @param {type} cc
 * @param {type} pb - Plugin
 *
 */
function installPlugin(cc, pb) {
    print("installPlugin");
    var mvn = $project.getFacet(facets.MavenPluginFacet);
    try {
        if (mvn.hasPlugin(cc)) {
            print("updating ....", cc);
            mvn.updatePlugin(pb);
        }
        else {
            print("adding ....", cc);
            mvn.addPlugin(pb);
        }
    }
    catch (e) {
        print("installPlugin", e);
    }
}
exports.installPlugin = installPlugin;
/**
 *
 * @param {type} context
 * @param {type} pb - callback function: ( coordinate ) -> Plugin
 *
 */
function execute(context, cb) {
    print("execute");
    var list = dps.resolve("" + attrs.gid.getValue());
    if (list.isEmpty()) {
        print("dependency not found!", attrs.gid.getValue());
        return;
    }
    var i = 0;
    if (context.getUIContext().getProvider().isGUI()) {
        i = list.size() - 1;
    }
    else {
        i = 0;
        list.forEach(function (d) {
            print("[" + (++i) + "] " + d);
        });
        var result = context.getPrompt().prompt("Choose dependency [" + i + "] 0 to skip");
        if (result) {
            i = parseInt(result);
            if (i == 0)
                return "skipped!";
        }
        var cc = list.get(--i);
        installPlugin(cc, cb(cc));
    }
}
exports.execute = execute;
