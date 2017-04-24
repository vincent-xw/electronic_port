app.factory('indexLouder',function($http){
  return {
        'getListinfo':function(data){

          var url = '/bjport-web-interface/appnews/getNews';


          return $http.post(url,data).then(

              function(resp){

                return resp;

              },
              function(resp){

                return resp;

              });
        },
        'getCarouselImages':function(){

          var url = '/bjport-web-interface/appimages/getImages';

          return $http.post(url).then(

              function(resp){

                return resp;

              },
              function(resp){

                return resp;

              });
        }
      };
  });