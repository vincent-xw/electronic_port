app.controller('loginCtrl',['$scope','$injector','storageService',
	function($scope,$injector){
		$injector.invoke(
			function (loginLouder) {
				$scope.title="登录";
				$scope.login = function(data){
					var data = {
						"userNo":data.userNo,
						"userPwd":data.userPwd
					};
					loginLouder.login(data).then(function(resp){
						if(resp.data.code == "200"){
							storageService.setUserInfo(resp.data.formData);
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