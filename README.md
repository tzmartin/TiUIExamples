# TiUIExamples

This app is a collection of various UI design patterns written as JavaScript modules for Titanium Mobile.  This will show you how to develop and implement factory components for event driven mobile applications.

There are currently 2 UI modules in this version.

THIS IS FOR iOS ONLY.  Sorry.  Android support is coming next. :-)

<b>Required:</b> Titanium Mobile SDK 1.7.x 
<http://developer.appcelerator.com/blog/2011/05/titanium-mobile-sdk-1-7-rc1.html>

For previous version, you may use the object literal modules instead (located in the modules folder).

![Screenshot 1](https://img.skitch.com/20110520-d1eeyexu28scp7xnpieenirwmd.jpg)

# The Modules

## 1. Heads Up Display (aka, HUD)
This is a basic implementation of an a heads up display, or modal view, that gracefully displays loading indicator and message.

![HUD Screen Shot](https://img.skitch.com/20110520-jmq5kfypf4q7gd5r2x95dbh286.jpg)

### Usage

```
var HUD = MyApp.mod.hud.init(MyApp.ui.win); // pass in the window to attach the HUD
HUD.show('YOUR MESSAGE');
setTimeout(function(){
	HUD.hide();
},2000);
```
### Methods

```
init(win);      // Properties: object - window  (required)
show(message);  // Properties: string - message (optional)
hide();         // Properties: none       
```
1. Initialize the module using the `init()` method and pass in a window object to attached the HUD.  
2. Show a HUD by calling `show()`, passing an optional message to the component.
3. You can remove a HUD by calling the `hide()` method.  This will call the remove() methods to the HUD on the window object.

Note: Replace 'MyApp' with your own app namespace.

## 2. Passcode Window
This module is designed to "lock down" an app by invoking a passcode screen and prompting a user to input a 4 digit code.  This is loosely based on Apple's internal passcode feature in iOS.

![Passcode Screen Shot](https://img.skitch.com/20110520-fd6mfdk1eypw2gseem11y4gj5w.jpg)

### Usage

```
var PIN = MyApp.mod.passcode.init({code:1234,barColor:'#0079C1'});
PIN.open({
	success:function(){
	// do something
},error:function(){
	// do something
}});
```

### Methods

```
init(code,barColor);  // Properties: integer - 4 digits (required); string - hex color value (optional)
open(success,error);  // Properties: object - success callback (optional), object - error callback (optional)
close();              // Properties: none
```
1. Initialize the module using the `init()` method and pass in a 4 digit number to validate against and optionally a color code. 
2. Show a passcode window by calling `open()`.  You can optionally pass in two callbacks: "success" and "error" that will be executed on each event.  This is where you can choose to allow a user to continue or not.

Note: Replace 'MyApp' with your own app namespace.

# Accessing the Module APIs

To access these modules from JavaScript, you would extend your app namespace in app.js and import the module using the global require() method:

```
// Extend your existing app namespace for your modules to exist
MyApp.mod = {};
MyApp.mod.hud = require('modules/hud');
MyApp.mod.passcode = require('modules/passcode.mod');
```

# Author

Terry Martin
Master Trainer, Appcelerator. Founder of Semantic Press.

* <http://twitter.com/tzmartin>
* <http://linkedin.com/in/terryzmartin>
* <http://semanticpress.com>

More modules to come.  Follow me on Twitter or contact me if you need a module developed.

# License

This content is released under the  MIT License.
http://www.opensource.org/licenses/mit-license.php

Enjoy! Stay tuned for more modules being added to this project.

![Hi](http://c.statcounter.com/6897643/0/9890c16f/1/)