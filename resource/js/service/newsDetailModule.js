app.factory('newsDetailLouder',function($http){
  return {
        'getNewsinfo':function(data){

          var url = '/bjport-web-interface/appnews/getNewDetails';

          return $http.post(url,data).then(

              function(resp){

                return resp;

              },
              function(resp){

                return resp;

              });
        },
        'getRegulationInfo':function(data){

          var url = '/bjport-web-interface/apppolicy/getPolicyDetail';

          return $http.post(url,data).then(

              function(resp){

                return resp;

              },
              function(resp){

                return resp;

              });
        },
        'getGuideInfo':function(data){

          var url = '/bjport-web-interface/appguide/getGuideDetail';

          return $http.post(url,data).then(

              function(resp){

                return resp;

              },
              function(resp){

                return resp;

              });
        }
      };
  });