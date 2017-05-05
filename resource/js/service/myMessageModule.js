app.factory('myMessageLouder',function($http){
  return {
        'getListinfo':function(data){

          var url = '/bjport-web-interface/appmessage/getMessageList';

          return $http.post(url,data).then(

              function(resp){

                return resp.data;

              },
              function(resp){

                return resp.data;

              });
        },
        'delMessage':function(data){

          var url = '/bjport-web-interface/appmessage/delMessage';

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