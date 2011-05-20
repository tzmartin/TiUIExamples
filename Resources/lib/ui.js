(function(){
	MyApp.ui = {};
	MyApp.ui.navGroup = false;
	MyApp.ui.win = false;
	MyApp.ui.table = false;
	MyApp.ui.data = [
		{title:'Heads Up Display (HUD)',hasDetail:true},
		{title:'Passcode Modal',hasDetail:true}
	];
	
	MyApp.ui.createWindow = function(modal,callb) {
		MyApp.ui.win = Ti.UI.createWindow({
			modal : (modal) ? true : false
		});
		if (callb){ callb(); }
	};
	MyApp.ui.createTableView = function(callb) {
		MyApp.ui.table = Ti.UI.createTableView({backgroundColor:'#FFF'});
		if (callb) { callb(); }
	};
	MyApp.ui.setupWindowHeader = function (win) {
		Ti.API.info('Android? '+MyApp.android);
		if (!MyApp.android) {
			win.barColor = '#0079C1';
			win.titleImage = Titanium.Filesystem.resourcesDirectory+'/images/headerTitleLogo.png';
			win.title = '';
		}
	};
	MyApp.ui.openWindow = function(modal) {	
			
		// Create Window
		MyApp.ui.createWindow(modal,function() {
			// Setup Window Header
			MyApp.ui.setupWindowHeader(MyApp.ui.win);
		});
		
		// Create TableView
		MyApp.ui.createTableView(function() {
			// Add Event Listeners
			MyApp.ui.table.addEventListener('click',function(e) {
				
				if (e.index == 0) {
					var HUD = MyApp.mod.hud.init(MyApp.ui.win);
					HUD.show('Doing Something');
					setTimeout(function(){
						HUD.hide();
					},2000);
				}
				
				if (e.index == 1) {
					var PIN = MyApp.mod.passcode.init({code:1234,barColor:'#0079C1'});
					PIN.open({
						success:function(){
						Ti.API.info('Success');
					},error:function(){
						Ti.API.info('failed');
					}});
				}
				
			});
		});
		
		// Set Default data
		MyApp.ui.table.setData(MyApp.ui.data);
		
		// Add UI components
		MyApp.ui.win.add(MyApp.ui.table);
		
		// Build Window
		var win = Ti.UI.createWindow({backgroundColor:'#FFF'});
		if (!MyApp.android) {
			// navigationGroup (iPhone only)
			MyApp.ui.navGroup = Titanium.UI.iPhone.createNavigationGroup({
			   window: MyApp.ui.win
			});
			win.add(MyApp.ui.navGroup);
		} else {
			win.add(MyApp.ui.win);
		}
		
		win.open();
	};

})();
