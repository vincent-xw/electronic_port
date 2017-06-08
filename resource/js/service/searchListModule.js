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
        },
        'getRiskList':function(data){

          var url = '/bjport-web-interface/appgfxyq/getGfxyq';

          return $http.post(url,data).then(

              function(resp){

                return resp.data;

              },
              function(resp){

                return resp.data;

              });
        },
        'getAirList':function(data){

          var url = '/bjport-web-interface/apphkgs/getHkgs';

          return $http.post(url,data).then(

              function(resp){

                return resp.data;

              },
              function(resp){

                return resp.data;

              });
        },
        'getPersonList':function(data){

          var url = '/bjport-web-interface/apphkgs/getPerson';

          return $http.post(url,data).then(

              function(resp){

                return resp.data;

              },
              function(resp){

                return resp.data;

              });
        },
        'getGongshangList':function(data){

          var url = '/bjport-web-interface/appqyzx/getGs';

          return $http.post(url,data).then(

              function(resp){

                return resp.data;

              },
              function(resp){

                return resp.data;

              });
        },
        'getHaiguanList':function(data){

          var url = '/bjport-web-interface/appqyzx/getHg';

          return $http.post(url,data).then(

              function(resp){

                return resp.data;

              },
              function(resp){

                return resp.data;

              });
        },
        'getHaiguanInfo':function(data){

          var url = '/bjport-web-interface/appqyzx/getHgDt';

          return $http.post(url,data).then(

              function(resp){

                return resp.data;

              },
              function(resp){

                return resp.data;

              });
        },
        'getguojianList':function(data){

          var url = '/bjport-web-interface/appqyzx/getGj';

          return $http.post(url,data).then(

              function(resp){

                return resp.data;

              },
              function(resp){

                return resp.data;

              });
        },
        'getjckList':function(data){

          var url = '/bjport-web-interface/appjck/getJckqy';

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