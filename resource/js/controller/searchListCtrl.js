app.controller('searchListCtrl',['$scope','$injector','$location',
	function($scope,$injector,$location){
		$injector.invoke(
			function (searchListLouder) {
				$scope.search = $location.search();
				if($scope.search.type == "regulation"){
					$scope.title="口岸法规政策";
					$scope.searchData = {
						"pageNum":"1",
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
						"pageNum":"1",
						"inputstr":""
					}
					$scope.searchFunction = function(){
						searchListLouder.getGuideList($scope.searchData).then(function(resp){

							var temp = [];
				    		angular.copy($scope.regulationList,temp);
				    		$scope.regulationList = temp.concat(resp.data);
							
						});
					}
					$scope.searchFunction();
				}else if($scope.search.type == "risk"){
					$scope.title="高风险物品预警";
					$scope.searchData = {
						"pageNum":"1",
						"inputstr":""
					}
					$scope.searchFunction = function(){
						searchListLouder.getRiskList($scope.searchData).then(function(resp){
							
							var temp = [];
				    		angular.copy($scope.regulationList,temp);
				    		$scope.regulationList = temp.concat(resp.data);
							
						});
					}
					$scope.searchFunction();
				}
				$scope.clickSearch = function(){
					$scope.searchData.pageNum = "0";
					$scope.searchData.inputstr = $scope.searchStr;
					$scope.searchFunction();
				}
				$('.contentDetail').dropload({
				    scrollArea : window,
				    loadDownFn : function(me){
				    	$scope.searchData.pageNum=$scope.searchData.pageNum  - 0 + 1 ;
				    	$scope.searchData.pageNum=$scope.searchData.pageNum +"";
				        $scope.searchFunction();
				    }
				});
				$scope.title="查询列表";
			}
		);
	}
]);