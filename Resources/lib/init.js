(function(){
	MyApp.android = Ti.Platform.name == 'android';
	
	MyApp.init = function() {
		Ti.API.info('initializing app');
				
		MyApp.ui.openWindow();
				
		// Fetch an endpoint to emulate pulling down data from a server...
		MyApp.net.sendRequest('GET','http://www.google.com',false,function(resp) {
			
			// Using temp data to emulate parsing JSON from the endpoint.
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