"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function initializeUI(builder) {
    print("initializeUI");
}
function execute(context) {
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var f = arr.filter(function (a) { return a % 2 == 0; });
    print("filter", f);
    $project.getFacets().forEach(function (f) { return print('facet:', f); });
    var name = context.getPrompt().prompt("give me name");
    print("prompt", name, "componentFactory", $self.componentFactory, "dependencyResolver", $self.dependencyResolver);
    return "OK ";
}
