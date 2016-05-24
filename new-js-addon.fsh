
# Example Forge Script - Generates a JS Command

# Clear the screen;
clear;

rm -rf /tmp/forge-test

#
# Create a new project in the current directory;
#
project-new --named forge-example --topLevelPackage org.bsc --type forge-addon --targetLocation /tmp

#
# Create command
#
addon-new-js-command  --named MyTest --categories test --command-name install-dep --target-package org.bsc --require-project \
  --script samples/installDependency.js

addon-build-and-install --projectRoot /tmp/forge-test
