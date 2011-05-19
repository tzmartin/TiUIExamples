MyApp.passcode = {};
MyApp.passcode._OBJ = {};
MyApp.passcode.init = function(args) {
	Ti.API.info('init obj');

	MyApp.passcode._OBJ.code = (args.code) ? args.code : false;
	MyApp.passcode._OBJ.success = false;
	MyApp.passcode._OBJ.error = false;
	
	// Methods
	MyApp.passcode._OBJ.open = function(args) {
		// Register Callbacks
		if (args) {
			MyApp.passcode._OBJ.success = (args.success) ? args.success : false;
			MyApp.passcode._OBJ.error = (args.error) ? args.error : false;
		}
			
		// Build Window
		MyApp.passcode._OBJ.win = Ti.UI.createWindow({
			backgroundColor:'#FFF',
			title:'Passcode'
		});
		MyApp.passcode._OBJ.win.add(MyApp.passcode.view.mainView);
		MyApp.passcode._OBJ.win.open({modal:true});
		MyApp.passcode._OBJ.win.addEventListener('open',function(){
			MyApp.passcode.view.field0.focus();
		});
	};
	
	MyApp.passcode._OBJ.close = function() {
		MyApp.passcode.view.clear();
		MyApp.passcode._OBJ.win.close();
	};
	return MyApp.passcode._OBJ;
};

MyApp.passcode.view = {
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
		
		MyApp.passcode.view.field0.addEventListener('change',function(e){
			switch(MyApp.passcode.view.field0.value.length) {
				case 1:
					MyApp.passcode.view.field1.value = e.value.substring(0,1);
					break;
				case 2:
					MyApp.passcode.view.field2.value = e.value.substring(1,2);
					break;
				case 3:
					MyApp.passcode.view.field3.value = e.value.substring(2,3);
					break;
				case 4:
					MyApp.passcode.view.field4.value = e.value.substring(3,4);
					MyApp.passcode.view.code = MyApp.passcode.view.field1.value+MyApp.passcode.view.field2.value+MyApp.passcode.view.field3.value+MyApp.passcode.view.field4.value;
					MyApp.passcode.view.validate(MyApp.passcode.view.code);
					break;
			}
		});

	},
	clear : function() {
		MyApp.passcode.view.field0.value = '';
		MyApp.passcode.view.field1.value = '';
		MyApp.passcode.view.field2.value = '';
		MyApp.passcode.view.field3.value = '';
		MyApp.passcode.view.field4.value = '';
	},
	shake : function() {
		var t1 = Ti.UI.create2DMatrix().translate(-20,0);
		var a = Titanium.UI.createAnimation({
			transform:t1,
			duration:50,
			autoreverse:true,
			repeat:5
		});
		MyApp.passcode.view.mainView.animate(a);
	},
	validate : function(code) {
		// Validate Code

		if (MyApp.passcode._OBJ.code != false) {
			Titanium.API.log('info',''+MyApp.passcode._OBJ.code+ ' = '+MyApp.passcode.view.code);

			if (MyApp.passcode._OBJ.code >= 0) {
				// 
				if (MyApp.passcode._OBJ.code == MyApp.passcode.view.code) {
					// Match!
					MyApp.passcode._OBJ.close();
					if (MyApp.passcode._OBJ.success) {MyApp.passcode._OBJ.success();}			
				} else {
					MyApp.passcode.view.clear();
					MyApp.passcode.view.shake();
					if (MyApp.passcode._OBJ.error) {MyApp.passcode._OBJ.error();}
				}
			} else {
				Titanium.API.log('info','No security code is set.  Restart and use code: '+MyApp.passcode.view.code);
				alert('Error','No security code is set.');
			}
		} else {
			Ti.API.info('There is no code set. Try passing in {code:1234} into init();');
		}
	}
};

MyApp.passcode.view.initialize();
MyApp.passcode.view.registerEvents();