app.controller('indexCtrl',['$scope','$injector',
	function($scope,$injector){
		$injector.invoke(
			function (indexLouder) {
				
			    indexLouder.getListinfo().then(function(resp){
			    	$scope.newList = resp.data;
			    });
			    indexLouder.getCarouselImages().then(function(resp){
			    	$scope.newImgList = resp.data;
			    	var swiper = new Swiper('.swiper-container', {
				        pagination: '.swiper-pagination',
				        paginationClickable: true,
				        autoplayDisableOnInteraction:false,
				        loop:true,
						autoplay:2000,
						observer:true,
   						observeParents:true
				    });
			    });
			    $scope.tabs = {
			    	"tab1":true,
			    	"tab2":false,
			    	"tab3":false,
			    	"switchTab":function(id){
			    		this.tab1 = false;
			    		this.tab2 = false;
			    		this.tab3 = false;
			    		this["tab"+id] = true;
			    		
			    	}
			    }
			    $scope.gotoDetail = function(id){
			    	location.href="#!/newsDetail?id="+id;
			    }
			}
		);
	}
]);