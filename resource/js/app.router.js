app.config(['$stateProvider', '$urlRouterProvider', '$provide','$ocLazyLoadProvider',
    function ($stateProvider, $urlRouterProvider, $provide ,$ocLazyLoadProvider) {
        app.constant = $provide.constant;
        $urlRouterProvider.otherwise("/index");
        $stateProvider
        .state('index', {
            url: '/index',
            views: {
                '': {
                    templateUrl: 'tpl/index.html',
                    controller: 'indexCtrl'
                }
            },
            resolve: { 
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        'js/controller/indexCtrl.js',
                        'js/service/indexModule.js'
                        ]);
                }]
            }
        })
        .state('newsDetail', {
            url: '/newsDetail',
            views: {
                '': {
                    templateUrl: 'tpl/newsDetail.html',
                    controller: 'newsDetailCtrl'
                }
            },
            resolve: { 
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        'js/controller/newsDetailCtrl.js',
                        'js/service/newsDetailModule.js'
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
                        'js/controller/searchCtrl.js',
                        'js/service/searchModule.js'
                        ]);
                }]
            }
        })
        .state('subsearch', {
            url: '/subsearch',
            views: {
                '': {
                    templateUrl: 'tpl/search_2.html',
                    controller: 'searchCtrl'
                }
            },
            resolve: { 
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        'js/controller/searchCtrl.js',
                        'js/service/searchModule.js'
                        ]);
                }]
            }
        })
        .state('subsearch_qy', {
            url: '/subsearch_qy',
            views: {
                '': {
                    templateUrl: 'tpl/search_2_qy.html',
                    controller: 'searchCtrl'
                }
            },
            resolve: { 
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        'js/controller/searchCtrl.js',
                        'js/service/searchModule.js'
                        ]);
                }]
            }
        })
        .state('gongshangSearchList', {
            url: '/gongshangSearchList',
            views: {
                '': {
                    templateUrl: 'tpl/gongshangSearchList.html',
                    controller: 'gongshangSearchListCtrl'
                }
            },
            resolve: { 
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        'js/controller/gongshangSearchListCtrl.js',
                        'js/service/searchListModule.js'
                        ]);
                }]
            }
        })
        .state('haiguanSearchList', {
            url: '/haiguanSearchList',
            views: {
                '': {
                    templateUrl: 'tpl/haiguanSearchList.html',
                    controller: 'haiguanSearchListCtrl'
                }
            },
            resolve: { 
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        'js/controller/haiguanSearchListCtrl.js',
                        'js/service/searchListModule.js'
                        ]);
                }]
            }
        })
        .state('haiguanSearchInfo', {
            url: '/haiguanSearchInfo',
            views: {
                '': {
                    templateUrl: 'tpl/haiguanSearchInfo.html',
                    controller: 'haiguanSearchInfoCtrl'
                }
            },
            resolve: { 
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        'js/controller/haiguanSearchInfoCtrl.js',
                        'js/service/searchListModule.js'
                        ]);
                }]
            }
        })
        .state('guojianSearchList', {
            url: '/guojianSearchList',
            views: {
                '': {
                    templateUrl: 'tpl/guojianSearchList.html',
                    controller: 'guojianSearchListCtrl'
                }
            },
            resolve: { 
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        'js/controller/guojianSearchListCtrl.js',
                        'js/service/searchListModule.js'
                        ]);
                }]
            }
        })
        .state('guoshuiSearchList', {
            url: '/guoshuiSearchList',
            views: {
                '': {
                    templateUrl: 'tpl/guoshuiSearchList.html',
                    controller: 'guoshuiSearchListCtrl'
                }
            },
            resolve: { 
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        'js/controller/guoshuiSearchListCtrl.js',
                        'js/service/searchListModule.js'
                        ]);
                }]
            }
        })
        .state('jckSearchList', {
            url: '/jckSearchList',
            views: {
                '': {
                    templateUrl: 'tpl/jckSearchList.html',
                    controller: 'jckSearchListCtrl'
                }
            },
            resolve: { 
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        'js/controller/jckSearchListCtrl.js',
                        'js/service/searchListModule.js'
                        ]);
                }]
            }
        })
        .state('searchList', {
            url: '/searchList',
            views: {
                '': {
                    templateUrl: 'tpl/searchList.html',
                    controller: 'searchListCtrl'
                }
            },
            resolve: { 
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        'js/controller/searchListCtrl.js',
                        'js/service/searchListModule.js'
                        ]);
                }]
            }
        })
        .state('airSearchList', {
            url: '/airSearchList',
            views: {
                '': {
                    templateUrl: 'tpl/airSearchList.html',
                    controller: 'airSearchListCtrl'
                }
            },
            resolve: { 
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        'js/controller/airSearchListCtrl.js',
                        'js/service/searchListModule.js'
                        ]);
                }]
            }
        })
        .state('personSearchList', {
            url: '/personSearchList',
            views: {
                '': {
                    templateUrl: 'tpl/personSearchList.html',
                    controller: 'personSearchListCtrl'
                }
            },
            resolve: { 
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        'js/controller/personSearchListCtrl.js',
                        'js/service/searchListModule.js'
                        ]);
                }]
            }
        })
        .state('searchListContent', {
            url: '/searchListContent',
            views: {
                '': {
                    templateUrl: 'tpl/searchListContent.html',
                    controller: 'searchListContentCtrl'
                }
            },
            resolve: { 
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        'js/controller/searchListContentCtrl.js',
                        'js/service/searchListContentModule.js'
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
                        'js/controller/loginCtrl.js',
                        'js/service/loginModule.js'
                        ]);
                }]
            }
        })
        .state('myMessage', {
            url: '/myMessage',
            views: {
                '': {
                    templateUrl: 'tpl/myMessage.html',
                    controller: 'myMessageCtrl'
                }
            },
            resolve: { 
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        'js/controller/myMessageCtrl.js',
                        'js/service/myMessageModule.js'
                        ]);
                }]
            }
        })
        .state('myMessageDetail', {
            url: '/myMessageDetail',
            views: {
                '': {
                    templateUrl: 'tpl/myMessageDetail.html',
                    controller: 'myMessageDetailCtrl'
                }
            },
            resolve: { 
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        'js/controller/myMessageDetailCtrl.js',
                        'js/service/myMessageDetailModule.js'
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
            }
        })
    }])
    // .config(['$locationProvider', function ($locationProvider) {

    //     $locationProvider.html5Mode({
    //       enabled: true,
    //       requireBase: false
    //     });
    // }])
;