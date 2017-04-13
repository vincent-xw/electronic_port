app.config(['$stateProvider', '$urlRouterProvider', '$provide','$ocLazyLoadProvider',
    function ($stateProvider, $urlRouterProvider, $provide ,$ocLazyLoadProvider) {
        app.constant = $provide.constant;
        $urlRouterProvider.otherwise("/404");
        $stateProvider
        .state('index', {
            url: '/',
            views: {
                '': {
                    templateUrl: '/tpl/index.html',
                    controller: 'indexCtrl'
                }
            },
            resolve: { 
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load(['/css/index.css','/js/controller/indexCtrl.js','/js/service/indexModule.js']);
                }]
            }
        })
        .state('404', {
            url: '/404',
            views: {
                '': {
                    templateUrl: '/tpl/404.html'
                }
            }
        })
    }]);