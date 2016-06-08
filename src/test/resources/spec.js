var Paths = java.nio.file.Paths,
    System = java.lang.System
        ;

var cwd = Paths.get(
            System.getProperty('user.dir'),
           'src/test/resources/lib')
           .toString()
            ;

System.setProperty('user.dir', cwd); // set current dir

// Load the NPM module loader into the global scope
load('src/main/resources/scripting/jvm-rhino-npm.js');

require.root = cwd;
require.paths = [];

load('src/test/resources/jvm-jasmine.js');

beforeEach( function() {
  require.cache = [];
});


describe("require test with relative path ./", function() {

  it("should be defined", function() {
    var db = require('./DependencyBuilder');
    expect(db).toBeDefined();
  });
  
  it("introspection should be defined", function() {
    var ix = require('introspection');
    expect(ix).toBeDefined();
    expect(ix.printC).toBeDefined()
    expect(typeof ix.printC).toBe('function')
    
  });
  
  it("moduleA ", function() {
    var ma = require('moduleA');
    expect(ma).toBeDefined();
    
  });

  it("moduleB ", function() {
    var mb = require('moduleB');
    expect(mb).toBeDefined();
    expect(mb).toEqual( "ModuleB ModuleB.1");
    
    
  });
  
  
});


report();