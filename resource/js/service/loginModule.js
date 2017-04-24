app.factory('loginLouder',function($http){
  return {
        'login':function(data){

          var url = '/bjport-web-interface/applogin/login';

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