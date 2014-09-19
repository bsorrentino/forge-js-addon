#type 
#
#forge> run <script> 
#
rm -rf /tmp/forge-test1
project-new --named forge-test1 --type addon --topLevelPackage org.bsc --targetLocation /tmp
addon-new-dynjs-command --named MyTest --targetPackage org.bsc --requireProject --script /Users/bsorrentino/WORKSPACES/GITHUB/FORGE/forge-dynjs-addon/samples/purgedeps.js 