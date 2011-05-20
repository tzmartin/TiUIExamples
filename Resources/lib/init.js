(function(){
	MyApp.android = Ti.Platform.name == 'android';
	
	MyApp.init = function() {
		Ti.API.info('initializing app');
				
		MyApp.ui.openWindow();
				
		// Fetch Data
		MyApp.net.sendRequest('GET','http://www.google.com',false,function(resp) {
			// Temp Data
			var data2 = [{title:'Title1'},{title:'Title2'}];
			MyApp.ui.data = data2;
			
			// Success callback
			MyApp.ui.table.setData(MyApp.ui.data);
			
		},function(resp) {
			// Error callback
			//alert(resp);
		});
	};

})();