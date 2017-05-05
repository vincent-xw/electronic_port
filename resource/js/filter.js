app.filter('to_trusted', ['$sce', function ($sce) {
        return function (text) {
            return $sce.trustAsHtml(text);
        }
    }]
  )
	.filter('messageType', function(){

		return function(obj){
			console.log(obj);
			var data = {
	    		"1":"系统通知",
	    		"2":"回执消息"
	    	};
	    	return data[obj];
			
		};
	})
 ;