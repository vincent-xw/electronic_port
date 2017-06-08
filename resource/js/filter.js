app.filter('to_trusted', ['$sce', function ($sce) {
        return function (text) {
            return $sce.trustAsHtml(text);
        }
    }]
  )
.filter('messageType', function(){

	return function(obj){
		var data = {
    		"1":"系统通知",
    		"2":"回执消息",
    		"6":"督办提醒"
    	};
    	return data[obj];
		
	};
})
.filter('creatorname', function(){

	return function(obj){
		if(obj === undefined){
			obj = "未知";
		}
    	return "【"+obj+"】";
		
	};
})
.filter('subject', function(){

	return function(obj){
		if(obj === undefined){
			obj = "未知";
		}
    	return obj;
		
	};
})
.filter('sex', function(){

	return function(obj){
		var data = {
    		"0":"女",
    		"1":"男"
    	};
    	return data[obj];
		
	};
})
;