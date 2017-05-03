app.controller('searchListCtrl',['$scope','$injector','$location',
	function($scope,$injector,$location){
		$injector.invoke(
			function (searchListLouder) {
				$scope.search = $location.search();
				if($scope.search.type == "regulation"){
					$scope.title="口岸法规政策";
					$scope.searchData = {
						"pageNum":1,
						"inputstr":""
					}
					$scope.searchFunction = function(){
						searchListLouder.getRegulationList($scope.searchData).then(function(resp){
							var temp = [];
				    		angular.copy($scope.regulationList,temp);
				    		$scope.regulationList = temp.concat(resp.data);
							
						});
					}
					$scope.searchFunction();
					
					
				}else if($scope.search.type == "guide"){
					$scope.title="企业办事指南";
					$scope.searchData = {
						"pageNum":1,
						"inputstr":""
					}
					$scope.searchFunction = function(){
						searchListLouder.getGuideList($scope.searchData).then(function(resp){
							var temp = [];
				    		angular.copy($scope.guideList,temp);
				    		$scope.guideList = temp.concat(resp.data);
							
						});
					}
					$scope.searchFunction();
				}
				$scope.clickSearch = function(){
					$scope.searchData.pageNum = 0;
					$scope.searchData.inputstr = $scope.searchStr;
					$scope.searchFunction();
				}
				$('.contentDetail').dropload({
				    scrollArea : window,
				    loadDownFn : function(me){
				    	$scope.searchData.pageNum +=1;
				        $scope.searchFunction();
				    }
				});
				$scope.title="查询列表";
			}
		);
	}
]);