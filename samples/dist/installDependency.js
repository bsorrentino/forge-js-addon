"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var facets = require("forge/facets");
var dps = require("./dependencies");
var forge_types_1 = require("./ts/forge-types");
var Attributes = /** @class */ (function () {
    function Attributes() {
        this.coord = $self.componentFactory.createInput("coordinate", forge_types_1.String.class);
        this.coord.setLabel("Coordinate GroupId:ArtifactId[:version]");
        this.coord.setRequired(true);
    }
    return Attributes;
}());
var attrs = new Attributes();
function initializeUI(builder) {
    print("initialize UI");
    builder.add(attrs.coord);
}
function installDependency(coord) {
    print(coord.getVersion());
    var mvn = $project.getFacet(facets.MavenFacet);
    try {
        var model = mvn.getModel();
        var md = model.getDependencies().stream().filter(function (d) {
            return d.getGroupId() == coord.getGroupId() && d.getArtifactId() == coord.getArtifactId();
        }).findFirst();
        if (md.isPresent()) {
            print("updating ....", coord);
            model.removeDependency(md.get());
            md.get().setVersion(coord.getVersion());
            model.addDependency(md.get());
        }
        else {
            var db = forge_types_1.DependencyBuilder.create()
                .setCoordinate(coord);
            print("adding ....", coord);
            model.addDependency(new forge_types_1.MavenDependencyAdapter(db));
        }
        mvn.setModel(model);
    }
    catch (e) {
        print(e);
    }
}
function execute(context) {
    print("execute");
    var v = attrs.coord.getValue();
    var list = dps.resolve("" + v);
    if (list.isEmpty()) {
        print("dependency not found!", v);
        return;
    }
    var i = 0;
    if (context.getUIContext().getProvider().isGUI()) {
        i = list.size() - 1;
    }
    else {
        i = 0;
        list.forEach(function (d) { return print("[" + (++i) + "] " + d); });
        var result = context.getPrompt().prompt("Choose dependency [" + i + "] 0 to skip");
        if (result) {
            i = parseInt(result);
            if (i == 0)
                return "skipped!";
        }
        installDependency(list.get(--i));
    }
}
