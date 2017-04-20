app.controller('newsDetailCtrl',['$scope','$injector','$location',
	function($scope,$injector,$location){
		$injector.invoke(
			function (newsDetailLouder) {
				$scope.title="信息服务";

				$scope.newsId = $location.search('id');

				newsDetailLouder.getNewsinfo($scope.newsId).then(function(resp){
					$scope.newsInfo = resp.data;
				})
				
			}
		);
	}
]);