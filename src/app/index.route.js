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
            .when('/list/:categoria', {
                templateUrl: 'app/listProducts/listProducts.html',
                controller: 'ListProductsController',
                controllerAs: 'list'
            })
            .when('/detail/:id', {
                templateUrl: 'app/detailProducts/detailProducts.html',
                controller: 'DetailProductsController',
                controllerAs: 'detail'
            })
            .when('/cart', {
                templateUrl: 'app/cart/cart.html',
                controller: 'CartController',
                controllerAs: 'cart'
            })
            .otherwise({
                redirectTo: '/'
            });
    }

})();