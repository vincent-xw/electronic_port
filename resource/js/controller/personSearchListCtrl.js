app.controller('personSearchListCtrl',['$scope','$injector','$location',
	function($scope,$injector,$location){
		$injector.invoke(
			function (searchListLouder) {
				$scope.search = $location.search();
				console.log("air");
				$scope.searchData = {
					"pageNum":1,
					"inputstr":""
				}
				$scope.title="人员信息代理备案";
				$scope.searchFunction = function(){
					searchListLouder.getPersonList($scope.searchData).then(function(resp){

						var temp = [];
						$scope.ajaxData = resp.data;
			    		angular.copy($scope.regulationList,temp);
			    		$scope.regulationList = temp.concat(resp.data.dataValue);
						
					});
				}
				$scope.searchFunction();
				

				$scope.clickSearch = function(){
					$scope.searchData.pageNum = 1;
					$scope.searchData.inputstr = $scope.searchStr;
					$scope.regulationList = [];
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