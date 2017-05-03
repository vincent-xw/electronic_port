app.factory('searchListLouder',function($http){
  return {
        'getRegulationList':function(data){

          var url = '/bjport-web-interface/apppolicy/getPolicyList';

          return $http.post(url,data).then(

              function(resp){

                return resp.data;

              },
              function(resp){

                return resp.data;

              });
        },
        'getGuideList':function(data){

          var url = '/bjport-web-interface/appguide/getGuideList';

          return $http.post(url,data).then(

              function(resp){

                return resp.data;

              },
              function(resp){

                return resp.data;

              });
        }
      };
  });