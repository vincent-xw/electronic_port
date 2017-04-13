app.config(['$stateProvider', '$urlRouterProvider', '$provide','$ocLazyLoadProvider',
    function ($stateProvider, $urlRouterProvider, $provide ,$ocLazyLoadProvider) {
        app.constant = $provide.constant;
        $urlRouterProvider.otherwise("/404");
        $stateProvider
        .state('index', {
            url: '',
            views: {
                '': {
                    templateUrl: 'tpl/index.html',
                    controller: 'indexCtrl'
                }
            },
            resolve: { 
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        'css/index.css',
                        'js/controller/indexCtrl.js',
                        'js/service/indexModule.js',
                        'js/controller/commonCtrl.js'
                        ]);
                }]
            }
        })
        .state('search', {
            url: '/search',
            views: {
                '': {
                    templateUrl: 'tpl/search.html',
                    controller: 'searchCtrl'
                }
            },
            resolve: { 
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        'css/search.css',
                        'js/controller/searchCtrl.js',
                        'js/service/searchModule.js',
                        'js/controller/commonCtrl.js'
                        ]);
                }]
            }
        })
        .state('login', {
            url: '/login',
            views: {
                '': {
                    templateUrl: 'tpl/login.html',
                    controller: 'loginCtrl'
                }
            },
            resolve: { 
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        'css/login.css',
                        'js/controller/loginCtrl.js',
                        'js/service/loginModule.js',
                        'js/controller/commonCtrl.js'
                        ]);
                }]
            }
        })
        .state('404', {
            url: '/404',
            views: {
                '': {
                    templateUrl: 'tpl/404.html'
                }
            },
            resolve: { 
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        'js/controller/commonCtrl.js'
                        ]);
                }]
            }
        })
    }]);