"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * New node file
 */
var forge_types_1 = require("./ts/forge-types");
var Attributes = /** @class */ (function () {
    function Attributes() {
        this.step1 = $self.componentFactory.createInput("input", forge_types_1.String);
        this.step1.setLabel("input step1");
        this.step1.setRequired(true);
        this.step2 = $self.componentFactory.createInput("input2", forge_types_1.String);
        this.step1.setLabel("input step2");
        this.step1.setRequired(true);
    }
    return Attributes;
}());
var attrs = new Attributes();
// Define Step2 Object (see @next function below)
var step2 = {
    initializeUI: function (builder) {
        print("initializeUI", "Step2");
        builder.add(attrs.step2);
    },
    execute: function (context) {
        print("execute", "Step2", attrs.step2.getValue());
        return "OK2";
    }
};
// Initialize UI controls
function initializeUI(builder) {
    print("initializeUI");
    builder.add(attrs.step1);
}
// Execute Main step
function execute(context) {
    print("execute", attrs.step1.getValue());
    return "OK ";
}
var JSCommand = Java.type("org.bsc.commands.JSCommand");
// Add new step to Wizard
function next() {
    return new JSCommand(step2);
}
