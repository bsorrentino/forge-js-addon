
# Example Forge Script - Generates a JS Command

# Clear the screen;
clear;

#rm -rf forge-example

#
# Create a new project in the current directory;
#
project-new --named forge-example --topLevelPackage org.bsc --type forge-addon --targetLocation .

#
# Create command
#
addon-new-js-command \
    --named InstallDepCommand \
    --categories test \
    --command-name install-dep \
    --target-package org.bsc \
    --require-project \
    --script samples/installDependency.js

addon-build-and-install --projectRoot forge-example
