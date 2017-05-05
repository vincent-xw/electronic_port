app.controller('commonCtrl',['$scope','$injector',
	function($scope,$injector){
		$injector.invoke(
			function () {
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