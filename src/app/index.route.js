(function () {
    'use strict';

    angular
        .module('restPro')
        .config(routeConfig);

    function routeConfig($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/main/main.html',
                controller: 'MainController',
                controllerAs: 'main'
            })
            .when('/list', {
                templateUrl: 'app/listProducts/listProducts.html',
                controller: 'ListProductsController',
                controllerAs: 'list'
            })
            .when('/detail', {
                templateUrl: 'app/detailProducts/detailProducts.html',
                controller: 'DetailProductsController',
                controllerAs: 'detail'
            })
            .otherwise({
                redirectTo: '/'
            });
    }

})();