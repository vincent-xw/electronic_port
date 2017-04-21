app.controller('newsDetailCtrl',['$scope','$injector','$location',
	function($scope,$injector,$location){
		$injector.invoke(
			function (newsDetailLouder) {
				$scope.title="信息服务";

				$scope.newsId = $location.search();

				var data = {
					"guid":$scope.newsId.id
				};
				newsDetailLouder.getNewsinfo(data).then(function(resp){
					$scope.newsInfo = resp.data;
				})
				
			}
		);
	}
]);