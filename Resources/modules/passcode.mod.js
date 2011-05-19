var _OBJ = {};
exports.init = function(args) {
	Ti.API.info('init');
	// Set defaults
	_OBJ.code = '0000';
	_OBJ.barColor = false;
	_OBJ.success = false;
	_OBJ.error = false;
	
	// Process Args
	if (args) {
		_OBJ.code = (args.code) ? args.code : false;
		_OBJ.success = (args.success) ? args.success : false;
		_OBJ.error = (args.error) ? args.error : false;
		_OBJ.barColor = (args.barColor) ? args.barColor : false;
	}
	
	// Methods
	_OBJ.open = function(args) {			
		// Build Window
		_OBJ.win = Ti.UI.createWindow({
			backgroundColor:'#FFF',
			title:'Passcode'
		});
		if (_OBJ.barColor) {
			_OBJ.win.barColor = _OBJ.barColor;
		}
		// Process Args
		if (args) {
			_OBJ.success = (args.success) ? args.success : false;
			_OBJ.error = (args.error) ? args.error : false;
		}
		// Add View
		_OBJ.win.add(View.mainView);
		// Open Window
		_OBJ.win.open({modal:true});
		_OBJ.win.addEventListener('open',function(){
			View.field0.focus();
		});
	};
	
	_OBJ.close = function() {
		View.clear();
		_OBJ.win.close();
	};
	return _OBJ;
};

var View = {
	name : 'Passcode',
	code : '',
	code1 : '',
	code2 : '',
	code3 : '',
	code4 : '',
	clicks : 0,
	mainView : Titanium.UI.createView({
		top:0,
  	width:400,
  	height:400,
  	opacity:1,
		backgroundGradient:{type:'linear',colors:[{color:'#FFF',position:0.0},{color:'#F3F3F3',position:0.05},{color:'#F3F3F3',position:1.0}]},
  	visible:true
	}),
	box : Titanium.UI.createView({
		top:70,
  	width:270,
  	height:40,
  	opacity:1,
  	visible:true,
		layout:'horizontal'
	}),
	label1 : Ti.UI.createLabel({
		text:'Enter Unlock Code',
		color:'#2A2B2A',
		width:'auto',
		height:50,
		font:{fontSize:22,fontWeight:'bold',fontFamily:'Helvetica Neue'},
		top:15,
		shadowColor:'#FFF',
	  shadowOffset:{x:1,y:1}
	}),
	field0 : Titanium.UI.createTextField({
		width:0,
		height:0,
		returnKeyType:Titanium.UI.RETURNKEY_DONE,
		enableReturnKey:true,
		keyboardType:Titanium.UI.KEYBOARD_NUMBER_PAD,
		autocorrect:false
	}),
	field1 : Titanium.UI.createTextField({
		id:'textfield1',
		value:'',
		color:'#336699',
		backgroundColor:'#FFF',
		borderColor:'#999',
		returnKeyType:Titanium.UI.RETURNKEY_DONE,
		enableReturnKey:true,
		keyboardType:Titanium.UI.KEYBOARD_NUMBER_PAD,
		autocorrect:false,
		enabled:false,
		passwordMask:true,
		top:0,
		left:0,
		width:60,
		height:60,
		font:{fontSize:28,fontWeight:'bold',fontFamily:'Helvetica Neue'},
		textAlign:'center',
		clearOnEdit:true,
		borderStyle:Titanium.UI.INPUT_BORDERSTYLE_NONE,
		clearButtonMode:Titanium.UI.INPUT_BUTTONMODE_NEVER
	}),
	field2 : Titanium.UI.createTextField({
		id:'textfield2',
		value:'',
		color:'#336699',
		backgroundColor:'#FFF',
		borderColor:'#999',
		returnKeyType:Titanium.UI.RETURNKEY_DONE,
		enableReturnKey:true,
		keyboardType:Titanium.UI.KEYBOARD_NUMBER_PAD,
		autocorrect:false,
		enabled:false,
		passwordMask:true,
		top:0,
		left:10,
		width:60,
		height:60,
		font:{fontSize:28,fontWeight:'bold',fontFamily:'Helvetica Neue'},
		textAlign:'center',
		clearOnEdit:true,
		borderStyle:Titanium.UI.INPUT_BORDERSTYLE_NONE,
		clearButtonMode:Titanium.UI.INPUT_BUTTONMODE_NEVER
	}),
	field3 : Titanium.UI.createTextField({
		id:'textfield3',
		value:'',
		color:'#336699',
		backgroundColor:'#FFF',
		borderColor:'#999',
		returnKeyType:Titanium.UI.RETURNKEY_DONE,
		enableReturnKey:true,
		keyboardType:Titanium.UI.KEYBOARD_NUMBER_PAD,
		autocorrect:false,
		enabled:false,
		passwordMask:true,
		top:0,
		left:10,
		width:60,
		height:60,
		font:{fontSize:28,fontWeight:'bold',fontFamily:'Helvetica Neue'},
		textAlign:'center',
		clearOnEdit:true,
		borderStyle:Titanium.UI.INPUT_BORDERSTYLE_NONE,
		clearButtonMode:Titanium.UI.INPUT_BUTTONMODE_NEVER
	}),
	field4 : Titanium.UI.createTextField({
		id:'textfield4',
		value:'',
		color:'#336699',
		backgroundColor:'#FFF',
		borderColor:'#999',
		returnKeyType:Titanium.UI.RETURNKEY_DONE,
		enableReturnKey:true,
		keyboardType:Titanium.UI.KEYBOARD_NUMBER_PAD,
		autocorrect:false,
		enabled:false,
		passwordMask:true,
		top:0,
		left:10,
		width:60,
		height:60,
		font:{fontSize:28,fontWeight:'bold',fontFamily:'Helvetica Neue'},
		textAlign:'center',
		clearOnEdit:true,
		borderStyle:Titanium.UI.INPUT_BORDERSTYLE_NONE,
		clearButtonMode:Titanium.UI.INPUT_BUTTONMODE_NEVER
	}),
	initialize : function(){
		Ti.API.info('Initializing View "'+this.name+'"');
		
		this.mainView.add(this.label1);
		this.mainView.add(this.field0);			
		
		this.box.add(this.field1);
		this.box.add(this.field2);
		this.box.add(this.field3);
		this.box.add(this.field4);
		
		this.mainView.add(this.box);								
	},
	registerEvents : function(){
		
		View.field0.addEventListener('change',function(e){
			switch(View.field0.value.length) {
				case 1:
					View.field1.value = e.value.substring(0,1);
					break;
				case 2:
					View.field2.value = e.value.substring(1,2);
					break;
				case 3:
					View.field3.value = e.value.substring(2,3);
					break;
				case 4:
					View.field4.value = e.value.substring(3,4);
					View.code = View.field1.value+View.field2.value+View.field3.value+View.field4.value;
					View.validate(View.code);
					break;
			}
		});

	},
	clear : function() {
		View.field0.value = '';
		View.field1.value = '';
		View.field2.value = '';
		View.field3.value = '';
		View.field4.value = '';
	},
	shake : function() {
		var t1 = Ti.UI.create2DMatrix().translate(-20,0);
		var a = Titanium.UI.createAnimation({
			transform:t1,
			duration:50,
			autoreverse:true,
			repeat:5
		});
		View.mainView.animate(a);
	},
	validate : function(code) {
		// Validate Code

		if (_OBJ.code != false) {
			Titanium.API.log('info',''+_OBJ.code+ ' = '+View.code);

			if (_OBJ.code >= 0) {
				// 
				if (_OBJ.code == View.code) {
					// Match!
					_OBJ.close();
					if (_OBJ.success) {_OBJ.success();}			
				} else {
					View.clear();
					View.shake();
					if (_OBJ.error) {_OBJ.error();}
				}
			} else {
				Titanium.API.log('info','No security code is set.  Restart and use code: '+View.code);
				alert('Error','No security code is set.');
			}
		} else {
			Ti.API.info('There is no code set. Try passing in {code:1234} into init();');
		}
	}
};

View.initialize();
View.registerEvents();