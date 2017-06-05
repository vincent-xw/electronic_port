app.directive('repeatFinish',function(){
    return {
        link: function(scope,element,attr){
            console.log(scope.$index)
            if(scope.$last == true){
                scope.$eval( attr.repeatFinish );
            }
        }
    }
});
app.directive('ngEnter', function () {
      return function (scope, element, attrs) {
          element.bind("keydown keypress", function (event) {
              if (event.which === 13) {
                  scope.$apply(function () {
                      scope.$eval(attrs.ngEnter);
                  });
                  event.preventDefault();
              }
          });
      };
  });
