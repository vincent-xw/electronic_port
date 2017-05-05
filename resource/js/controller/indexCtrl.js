app.controller('indexCtrl',['$scope','$injector',
	function($scope,$injector){
		$injector.invoke(
			function (indexLouder) {
				$scope.title = "北京国际贸易单一窗口";
				var data = {
					"newType":"1",
					"pageNum":1
				}
			    $scope.tabs = {
			    	"tab1":true,
			    	"tab2":false,
			    	"tab3":false,
			    	"switchTab":function(id){
			    		this.tab1 = false;
			    		this.tab2 = false;
			    		this.tab3 = false;
			    		this["tab"+id] = true;
			    		this.loadInfo({
			    			"newType":""+id,
			    			"pageNum":1
			    		})
			    		
			    	},
			    	"loadInfo":function(data){
					    indexLouder.getListinfo(data).then(function(resp){
					    	$scope.newList = resp.data;
					    });
					    if(data.newType == 1){
					    	var swiper = null;
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
						    	$scope.newImgList = resp.data;
						    	$scope.initSlider();
						    });
					    }
					    
			    	}
			    }
				$scope.tabs.loadInfo(data);
			    $scope.gotoDetail = function(id){
			    	location.href="#!/newsDetail?id="+id;
			    }
			}
		);
	}
]);