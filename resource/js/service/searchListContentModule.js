app.factory('searchListContentLouder',function($http){
  return {
        'getRegulationList':function(data){

          var url = '/bjport-web-interface/appgfxyq/getGfxyq';

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