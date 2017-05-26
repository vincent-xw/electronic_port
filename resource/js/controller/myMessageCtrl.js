app.controller('myMessageCtrl',['$scope','$injector','storageService',
	function($scope,$injector){
		$injector.invoke(
			function (myMessageLouder,storageService) {
				$scope.title="测试messageheader";
				if(storageService.getUserInfo() == -1){
					window.location.href="#!/login";
				}else{
					$scope.searchData = {
						"pageNum":1,
						"inputstr":$scope.inputstr
					}
					$scope.listInfo = [];
					$scope.searchFunction = function(){
						myMessageLouder.getListinfo($scope.searchData).then(function(resp){
							if(resp.data){
								$scope.ajaxData = resp.data;
								var temp = [];
					    		angular.copy($scope.listInfo,temp);
					    		$scope.listInfo = temp.concat(resp.data.dataValue);
							}else{
								$scope.ajaxData = {
									"pageNum":0,
									"pageCount":0
								};
								$scope.listInfo = [];
							}
							
						});
					}
					$scope.searchFunction();
				}
				$scope.clickSearch = function(){
					$scope.searchData.pageNum = 0;
					$scope.searchData.inputstr = $scope.searchStr;
					$scope.searchFunction();
				}
				$scope.loadMore = function(pageNum){
					$scope.searchData.pageNum=pageNum +1;
					$scope.searchFunction();
				}
				$scope.gotoDetail = function(data){
					window.location.href = "#!/myMessageDetail?id="+data.guid;
				}
				$scope.delMessage = function(data){
					var data = {
						"guid":data.guid
					};
					if(confirm("确定要删除这条消息吗?")){
						myMessageLouder.delMessage(data).then(function(resp){
							if(resp.code == 200){
								alert("消息删除成功");
								$scope.searchFunction();
							}else{
								if(resp.msg != ""){
									alert(resp.msg);
								}else{
									alert("删除失败，可能是网络问题，请稍后再试");
								}
							}
						});
					}
				}
			}
		);
	}
]);