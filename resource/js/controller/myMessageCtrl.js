app.controller('myMessageCtrl',['$scope','$injector','storageService',
	function($scope,$injector){
		$injector.invoke(
			function (myMessageLouder,storageService) {
				$scope.title="测试messageheader";
				if(storageService.getUserInfo() == -1){
					window.location.href="#!/login";
				}else{
					var data = {
						"pageNum":"1",
						"inputstr":$scope.inputstr
					}
					myMessageLouder.getListinfo(data).then(function(resp){
						if(resp.data.code == 401){
							window.location.href = "#!/login"
						}else{
							$scope.listInfo = resp.data;
						}
						
					});
				}
			}
		);
	}
]);