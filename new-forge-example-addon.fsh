
# Example Forge Script - Generates a JS Command

# Clear the screen;
clear;

rm -rf forge-example

#
# Create a new project in the current directory;
#
project-new --named forge-example --topLevelPackage org.bsc --type forge-addon --version 0.1.2 --targetLocation .

#
# Create InstallDepCommand command
#
addon-new-js-command \
    --named InstallDepCommand \
    --categories test \
    --command-name install-dep \
    --target-package org.bsc \
    --require-project \
    --script './samples/installDependency.js'

#
# Create install-plugin command
#

addon-new-js-command \
    --named InstallPluginCommand \
    --categories test \
    --command-name install-plugin \
    --target-package org.bsc \
    --require-project \
    --script './samples/installGenericPlugin.js'

addon-new-js-command \
    --named InstallRetrolambdaPluginCommand \
    --categories test \
    --command-name install-retrolambda \
    --target-package org.bsc \
    --require-project \
    --script './samples/installRetrolambdaPlugin.js'

addon-build-and-install --projectRoot ./forge-example
