# Forge Javascript Addon

Addon that allow to develop a [forge addon](http://forge.jboss.org/addons) using a JVM Javascript Engine.
> Currently [Rhino 1.7.7.1](https://github.com/mozilla/rhino) has supported through project [JVM-NPM](https://github.com/bsorrentino/jvm-npm)  
> **Nashorn** coming soon ...


## Available Commands

Command | Description
---- | ----
`js-eval`       |Evaluate a script
`js-eval-in-project` | Evaluate a script in project's scope
`addon-new-js-command` | Create a addon command (_java code_) from a script

###  js-eval

Evaluate a javascript

#### Parameters

param | Description
---- | ----
`--script`      | script's full path

#### Implicit Object(s)

Object(s) Available in the javascript

object | Description
---- | ----
`self`          | *the current Eval command instance*

### js-eval-in-project

Evaluate a script in project's scope

#### Parameters
param | Description
---- | ----
`--script`      | *script's full path*

#### Implicit Object(s)
Object(s) Available in the script

object | Description
---- | ----
`self`          | *the current EvalInProject command instance*
`$project`       | the current [Project](http://docs.jboss.org/forge/javadoc/2.6.1-SNAPSHOT/org/jboss/forge/addon/projects/Project.html) instance


### addon-new-js-command

Creates a addon command from a script. This command is very similar to *addon-new-ui-command* but it adds all required classes and dependencies to run the given script. So, this useful command, allows to wrap a script within a standard Forge command

#### Parameters
param | Description
---- | ----
`--script`      | *script's full path*
`--named`  | class name
`--requireProject` | whether the generated command require project is required
`--targetPackage`  | command target package
`--commandName`  | command name
`--categories` | command categories


### Getting started

#### Install

##### From GITHUB

```
addon-install-from-git --url https://github.com/bsorrentino/forge-js-addon.git --coordinate org.bsc:forge-js-addon`
```

##### From MAVEN

```
forge --install org.bsc:forge-js-addon,<version>`
```

All available version [here]( http://search.maven.org/#search%7Cgav%7C1%7Cg%3A%22org.bsc%22%20AND%20a%3A%22forge-js-addon%22)

#### Create new script command example (using CLI)
```
forge> project-new --named forge-test1
                   --type addon
                   --topLevelPackage org.bsc
                   --targetLocation _MY_OUTPUT_PATH_

forge> addon-new-js-command
          --named MyTest
          --targetPackage org.bsc
          --category test
          --requireProject
          --script _MY_SOURCE_PATH_/forge-dynjs-addon/samples/purgedeps.js

forge> addon-build-and-install --projectRoot _MY_OUTPUT_PATH_/forge-test1

```


#### Javascript basic template
```javascript
var input = {}; // object containing the UIInput(s)

function initializeUI( builder ) { // Initialize UI & fill input object

  print( "initialize UI");

}

function execute( context ) { // perform task using the input values

  print( "executeJS " );
}

```

### Examples

#### Print the values of required inputs
```javascript
var String = java.lang.String;
var Boolean = java.lang.Boolean;

print( "addon loaded!");

var input = {};

// initialize an UIInput (String)
input.string0 = self.componentFactory.createInput("string0", String );
input.string0.label = "Give me a string";
input.string0.required = true;

// initialize an UIInput (Boolean)
input.bool0 = self.componentFactory.createInput("bool0", Boolean );
input.bool0.label = "Give me boolean";
input.bool0.DefaultValue = true;

function initializeUI( builder ) {

	print( "initialize UI");
	for( m in input ) {
		builder.add( input[m] );
	}
	print( "UI initialized!")

}

function execute( context ) {

	print( "executeJS " );

	return "OK " +
         input.string0.value +
         " - " +
         input.bool0.value;
}
```

#### Require module(s)
```javascript

var project = require("forge/project"); // "forge/project" is a built-in module

print( "addon loaded!");

function initializeUI( builder ) {

}

function execute( context ) {
  project.forEachFacet( function(f) {
      print( 'facet:', f);
  });

  var facets = project.facets;
  if( facets.mavenfacet ) {

    // Perform clean,package on current open project
    facets.mavenfacet.executeMaven( ["clean",  "package"] );

  }
}
```

#### Develop a Module
```javascript

/**
Simple module that provide pwd & cd functions

Usage within script:
====================

var shell = require("shell");

*/

var OSUtils = org.jboss.forge.furnace.util.OperatingSystemUtils;
var System = java.lang.System;

exports.pwd = function() {
			return OSUtils.getWorkingDir();
}

exports.cd = function( dir ) {
			return System.setProperty("user.dir", dir);
}

```
