// This is a module class object literal, rather than a commonJS implementation.
// I added this to show an alternative method for creating modules.

MyApp.hud = function (win, path) {
  path = path || '';
  var t1 = Titanium.UI.create2DMatrix();
  t1 = t1.scale(2);
  var t2 = Titanium.UI.create2DMatrix();
  t2 = t2.scale(0);
  
  var veil = Ti.UI.createView({opacity:1});
  var _HUD = Ti.UI.createView({
    height: 100,
    width:200,
    backgroundColor:'#333',
    borderRadius:13,
    top: 'auto',
    left:'auto',
    opacity:0,
    transform:t1
  });
  _HUD.activity = Ti.UI.createActivityIndicator({
    top: 'auto',
    left: 'auto',
    width: 175,
    height: 75,
    message: '',
    color: 'white',
    style: MyApp.android ? null : Titanium.UI.iPhone.ActivityIndicatorStyle.BIG
  });

  _HUD.add(_HUD.activity);

  // Add Methods
  _HUD.show = function(msg) {
    _HUD.activity.message = msg;
    _HUD.activity.show();
    _HUD.animate({opacity:1,duration:200,transform:Titanium.UI.create2DMatrix().scale(1.0)});
  };
  _HUD.hide = function (callb) {
    _HUD.animate({opacity:0,duration:200,transform:Titanium.UI.create2DMatrix().scale(0)},function(){
      _HUD.activity.hide();
      win.remove(_HUD);
      win.remove(veil);
      _HUD = null;
      
      if (callb) {callb();}
    });
  };
  
  win.add(veil);
  win.add(_HUD);
  
  return _HUD;
};