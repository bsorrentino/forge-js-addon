var Paths = java.nio.file.Paths,
    System = java.lang.System
        ;

var cwd ;

if( !lookup_in_classloader ) {
    
    cwd = Paths.get(
                System.getProperty('user.dir'),
               'src/test/resources')
               .toString()
                ;

    System.setProperty('user.dir', cwd); // set current dir
    

}
else  {
    
    cwd = "";
}


require.root = cwd;
require.paths = [];

load('src/test/resources/jasmine/jvm-jasmine.js');

beforeEach( function() {
  require.debug = false;
  require.cache = [];
});


describe("require test with relative path ./", function() {

  it("should be defined", function() {
    var db = require('./DependencyBuilder');
    expect(db).toBeDefined();
  });
  
  it("introspection should be defined", function() {
    var ix = require('introspection/introspection');
    expect(ix).toBeDefined();
    expect(ix.printC).toBeDefined()
    expect(typeof ix.printC).toBe('function')
    
  });
  
  it("moduleA ", function() {
    require.debug = true
    
    var ma = require('moduleA');
    expect(ma).toBeDefined();
    
    
  });

  it("moduleB ", function() {
    require.debug = false
    var mb = require('moduleB');
    expect(mb).toBeDefined();
    expect(mb).toEqual( "ModuleB ModuleB.1");
    
    
  });
  
  
});

describe("Load forge utilities", function() {

  it("facets should be defined", function() {
    var db = require('forge/facets');
    expect(db).toBeDefined();
  });


});

report();