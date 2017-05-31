app.controller('commonCtrl',['$scope','$injector','$location',
	function($scope,$injector){
		$injector.invoke(
			function ($location) {
				(function(){
					$scope.icon = {
						"xxfw":"./res/img/xxfw.png",
						"wdxx":"./res/img/wdxx.png",
						"ywcx":"./res/img/ywcx.png"
					};
					var path = $location.path();
					var pathContainer = [
						["/index","/newsDetail"],
						["/search","/searchList","/searchListContent"],
						["/login","/myMessage","/myMessageDetail"]
					];
					var i = 0,j = 0;
					for(i = 0;i < pathContainer.length;i++){
						for(j = 0;j < pathContainer[i].length; j++){
							if(path == pathContainer[i][j]){
								if(i == 0){
									$scope.icon.xxfw = "./res/img/xxfw_a.png";
								}else if(i == 1){
									$scope.icon.ywcx = "./res/img/ywcx_a.png";
								}else{
									$scope.icon.wdxx = "./res/img/wdxx_a.png";
								}
							}
						}
					}
				})();
				
				$scope.gotopanel = function(id){
					window.location.href = "#!"+id;
				}
				$scope.goback = function(){
					history.go(-1);
				}
				$scope.gotologin = function(){
					window.location.href = "#!/login";
				}
			}
		);
	}
]);