app.controller('newsDetailCtrl',['$scope','$injector','$location',
	function($scope,$injector,$location){
		$injector.invoke(
			function (newsDetailLouder) {
				$scope.search = $location.search();
				if($scope.search.type="regulation"){
					$scope.title="口岸政策法规";
					

					var data = {
						"guid":$scope.search.id
					};
					$scope.newsInfo = {};
					newsDetailLouder.getRegulationInfo(data).then(function(resp){
						var data = resp.data.data;
						$scope.newsInfo.data = {
							"newsTitle":data.subject,
							"newsSource":data.publishingDepartment,
							"creatorname":data.modifiername,
							"releaseTime":data.modifytime,
							"newsOwner":data.orgname,
							"newsContent":data.policyContent,
						};

					});
				}else if($scope.search.type="guide"){
					$scope.title="企业办事指南";
					

					var data = {
						"guid":$scope.search.id
					};
					$scope.newsInfo = {};
					newsDetailLouder.getGuideInfo(data).then(function(resp){
						var data = resp.data.data;
						$scope.newsInfo.data = {
							"newsTitle":data.subject,
							"newsSource":data.publishingDepartment,
							"creatorname":data.modifiername,
							"releaseTime":data.modifytime,
							"newsOwner":data.orgname,
							"newsContent":data.policyContent,
						};

					});
				}else{
					$scope.title="信息服务";

					$scope.search = $location.search();

					var data = {
						"guid":$scope.search.id
					};
					newsDetailLouder.getNewsinfo(data).then(function(resp){
						$scope.newsInfo = resp.data;
					});
				}
				
				
			}
		);
	}
]);