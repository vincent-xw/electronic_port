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