app.controller('indexCtrl',['$scope','$injector',
	function($scope,$injector){
		$injector.invoke(
			function (indexLouder) {
				var data = {
					"newType":"1",
					"pageNum":"1"
				}
				var swiper = null;
			    indexLouder.getListinfo(data).then(function(resp){
			    	$scope.newList = resp.data;
			    });
			    $scope.initSlider= function(){
			        swiper = new Swiper('.swiper-container', {
				        pagination: '.swiper-pagination',
				        autoplayDisableOnInteraction:false,
				        loop:false,
						autoplay:2000,
						observer:true,
						observeParents:true
				    });
			    }
			    indexLouder.getCarouselImages().then(function(resp){
			    	$scope.newImgList = resp.data.data;
			    });
			    

			    $scope.gotoDetail = function(id){
			    	location.href="#!/newsDetail?id="+id;
			    }
			}
		);
	}
]);