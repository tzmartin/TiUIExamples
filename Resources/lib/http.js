// An easter egg!
// Here's an object module class for XHR requests.

(function() {
	MyApp.net = {};
	MyApp.net.lastHttpResult = false;
	MyApp.net.apiRequestTries = 0;
	
	/*
		method, url, data, success(), error()
	*/
	MyApp.net.sendRequest = function(method,url,data,success,error) {
		var http = Titanium.Network.createHTTPClient({
			timeout: 10000
		});

		if (method == 'GET') {
			for (var i in data) {
				if (data.hasOwnProperty(i)) {
					url += '/' + escape(i) + '/' + escape(data[i]);
				}
			}
			data = {};
		}

		http.ondatastream = function (e) {
			//MyF.log('http.ondatastream('+method+') ' + e.progress);
		};
		http.onsendstream = function (e) {
			Ti.API.info('http.onsendtream('+method+') ' + e.progress);
		};

		http.onload = function () {
			var resp;
			try {
				resp = JSON.parse(this.responseText);
				MyApp.net.lastHttpResult = resp;
			} catch (e) {
				resp = false;
			}
			if (resp) {
				http = null;
				
				// Do something...
				
			}

		};

		http.onerror = function () {
			http = null;
			MyF.log('http error for '+method);
			alert("A Small Problem...",'We could not connect to the server.  Please ensure you have a working internet connection and try again.');
			if (error) {
				error(null);
			}
		};

		Ti.API.info('URL('+method+'): ' + url);
		http.open(method, url, true);
		http.send(data);
	};
})();