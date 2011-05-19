# TiUIExamples

## Description

This app is a collection of various UI design patterns written as JavaScript modules for Titanium Mobile.  This will show you how to develop and implement factory components for event driven mobile applications.

THIS IS FOR iOS ONLY.  Sorry.  Android support is coming next.

## Accessing the Module API

To access these modules from JavaScript, you would extend your app namespace in app.js:

    // Extend your existing app namespace for your modules to exist
	  MyApp.mod = {};
    MyApp.mod.hud = require('modules/hud');
    MyApp.mod.passcode = require('modules/passcode.mod');

## Usage

### MyApp.mod.hud
```
    var HUD = MyApp.mod.hud.init(MyApp.ui.win); // pass in the window to attach the HUD
		HUD.show('YOUR MESSAGE');
		setTimeout(function(){
			HUD.hide();
		},2000);
```

### MyApp.mod.passcode
```
    var PIN = MyApp.mod.passcode.init({code:1234,barColor:'#0079C1'});
		PIN.open({
			success:function(){
			Ti.API.info('Success');
		},error:function(){
			Ti.API.info('failed');
		}});
```

## Author

Terry Martin
http://twitter.com/tzmartin
http://linkedin.com/in/terryzmartin

## License

This content is released under the  MIT License.
http://www.opensource.org/licenses/mit-license.php

Enjoy!
