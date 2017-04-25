app.controller('loginCtrl',['$scope','$injector','storageService',
	function($scope,$injector){
		$injector.invoke(
			function (loginLouder,storageService) {
				$scope.title="登录";
				$scope.login = function(data){
					var data = {
						"userNo":data.userNo,
						"userPwd":data.userPwd
					};
					$scope.loginTips = false;
					loginLouder.login(data).then(function(resp){
						$scope.loginTips = true;
						if(resp.data.code == "200"){
							storageService.setUserInfo(resp.data.data);
							window.location.href="#!/myMessage";
						}else{
							$scope.loginTips = false;
							alert('登录失败');
						}
					});
				}
			}
		);
	}
]);