app.controller('searchListContentCtrl',['$scope','$injector','$location',
	function($scope,$injector,$location){
		$injector.invoke(
			function (searchListContentLouder) {
				$scope.search = $location.search();
				$scope.title="高风险物品预警";
				$scope.searchData = {
					"inputstr":"",
					"pageNum":1
				}
				$scope.searchFunction = function(){
					searchListContentLouder.getRegulationList($scope.searchData).then(function(resp){
						
			    		$scope.regulationList = resp.data;
						
					});
				}
				$scope.searchFunction();
				$scope.clickSearch = function(){
					$scope.searchData.inputstr = $scope.searchStr;
					$scope.searchFunction();
				}
				$scope.loadMore = function(pageNum){
					$scope.searchData.pageNum=pageNum +1;
					$scope.searchFunction();

				}
			}
		);
	}
]);