var System = java.lang.System;
print("Install Plugin executing ....", System.getProperty("user.dir"));
var installPlugin = require("./installPlugin");
function initializeUI(builder) {
    print("initializeUI");
    installPlugin.initializeUI(builder, 'io.fabric8:vertx-maven-plugin');
}
function execute(context) {
    var MavenPluginBuilder = org.jboss.forge.addon.maven.plugins.MavenPluginBuilder, ExecutionBuilder = org.jboss.forge.addon.maven.plugins.ExecutionBuilder, ConfigurationBuilder = org.jboss.forge.addon.maven.plugins.ConfigurationBuilder;
    installPlugin.execute(context, function (cc) {
        var pb = MavenPluginBuilder.create().setCoordinate(cc);
        var conf = pb.createConfiguration();
        conf.createConfigurationElement("config")
            .setText("src/main/config/application.json");
        conf.createConfigurationElement("redeploy")
            .setText("true");
        pb.addExecution(ExecutionBuilder.create()
            .setId("vertx")
            .addGoal("initialize")
            .addGoal("package"));
        return pb;
    });
    return "OK";
}
