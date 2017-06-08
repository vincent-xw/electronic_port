app.controller('haiguanSearchInfoCtrl',['$scope','$injector','$location',
	function($scope,$injector,$location){
		$injector.invoke(
			function (searchListLouder) {
				$scope.search = $location.search();
				$scope.title="海关查询企业信息";
				var data = {
					"inputstr":$scope.search.id
				};
				searchListLouder.getHaiguanInfo(data).then(function(resp){
					$scope.haiguanInfo = resp.data.data;
				});
			}
		);
	}
]);