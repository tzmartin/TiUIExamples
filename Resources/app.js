var MyApp = {};
Ti.include('lib/init.js');
Ti.include('lib/ui.js');
Ti.include('lib/http.js');

MyApp.mod = {};
MyApp.mod.hud = require('modules/hud');
MyApp.mod.passcode = require('modules/passcode.mod');

// Run App
MyApp.init();
