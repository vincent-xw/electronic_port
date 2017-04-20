app.factory('newsDetailLouder',function($http){
  return {
        'getNewsinfo':function(){

          var url = 'res/data/newsDetailInfo.json';

          return $http.get(url).then(

              function(resp){

                return resp;

              },
              function(resp){

                return resp;

              });
        }
      };
  });