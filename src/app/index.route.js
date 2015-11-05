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
            .when('/listSelection', {
                templateUrl: 'app/listProducts-Selection/listProducts-Selection.html',
                controller: 'ListProductsSelectionController',
                controllerAs: 'listSelection'
            })
            .when('/detail', {
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