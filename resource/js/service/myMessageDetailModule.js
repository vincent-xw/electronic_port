app.factory('myMessageDetailLouder',function($http){
  return {
        'getListinfo':function(data){

          var url = '/bjport-web-interface/appmessage/getMessageDetail';

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