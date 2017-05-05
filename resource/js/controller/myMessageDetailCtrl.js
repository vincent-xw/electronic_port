app.controller('myMessageDetailCtrl',['$scope','$injector','$location',
	function($scope,$injector){
		$injector.invoke(
			function (myMessageDetailLouder,$location) {
				$scope.title="消息详情";
				$scope.search = $location.search();
				var data = {
					"guid":$scope.search.id
				};
				$scope.searchFunction = function(){
					myMessageDetailLouder.getListinfo(data).then(function(resp){
						
			    		$scope.listInfo = resp.data;
						
					});
				}
				$scope.searchFunction();
				
				
			}
		);
	}
]);