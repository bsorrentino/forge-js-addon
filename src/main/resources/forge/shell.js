
var OSUtils = org.jboss.forge.furnace.util.OperatingSystemUtils;
var System = java.lang.System;

exports.pwd = function() {
                        return OSUtils.getWorkingDir();
                     }
		
exports.cd = function( dir ) {
                    return System.setProperty("user.dir", dir);
                }
		
		