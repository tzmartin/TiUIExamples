exports.init = function(win, path) {
	Ti.API.info('init');
	
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
    style: (Ti.Platform.name == 'android') ? null : Titanium.UI.iPhone.ActivityIndicatorStyle.BIG
  });

	// Extend Methods
	_HUD.show = function(msg) {
		Ti.API.info(msg);
	  _HUD.activity.message = msg;
	  _HUD.activity.show();
	  _HUD.animate({opacity:1,duration:200,transform:Titanium.UI.create2DMatrix().scale(1.0)});
	};
	
	_HUD.hide = function(callb) {
		Ti.API.info('Hiding HUD');
	  _HUD.animate({opacity:0,duration:200,transform:Titanium.UI.create2DMatrix().scale(0)},function(){
	    _HUD.activity.hide();
	    win.remove(_HUD);
	    win.remove(veil);
	    _HUD = null;

	    if (callb) {callb();}
	  });
	};

  _HUD.add(_HUD.activity);
  
  win.add(veil);
  win.add(_HUD);
  
  return _HUD;
};
