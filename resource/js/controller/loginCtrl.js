app.controller('loginCtrl',['$scope','$injector','storageService',
	function($scope,$injector){
		$injector.invoke(
			function (loginLouder,storageService) {
				$scope.loginInfo = storageService.getUserInfo();

				$scope.status = storageService.getUserInfo() == -1?false:true;
				$scope.logout = function(){
					storageService.clearInfo();
					location.reload(true);
				}
				$scope.title="登录";
				$scope.loginTips = "登录";
				$scope.login = function(data){
					var data = {
						"userNo":data.userNo,
						"userPwd":data.userPwd
					};
					$scope.loginTips = "登录中";
					loginLouder.login(data).then(function(resp){
						$scope.loginTips = "登录";
						if(resp.data.code == "200"){
							
							storageService.setUserInfo(resp.data.data);
							window.location.href="#!/myMessage";
						}else{
							
							alert('登录失败');
						}
					});
				}
			}
		);
	}
]);