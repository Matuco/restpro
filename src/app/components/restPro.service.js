(function () {
    'use strict';

    angular.module('restPro')
    .factory('dataFactoryPlatos', ['$http', function ($http) {

        //var urlBase = 'http://localhost:14941/api/platos'; //URL Desarrollo
        var urlBase = 'http://restpromanager.azurewebsites.net/api/platos'; //URL Producción
        var dataFactory = {};

        dataFactory.getPlatos = function () {
            return $http.get(urlBase);
        };

        dataFactory.getPlatosCategoria = function (categoria) {
            return $http.get(urlBase + '/' + categoria);
        };

        dataFactory.getPlato = function (id) {
            return $http.get(urlBase + '/' + id);
        };

        //dataFactory.insertCustomer = function (cust) {
        //    return $http.post(urlBase, cust);
        //};

        //dataFactory.updateCustomer = function (cust) {
        //    return $http.put(urlBase + '/' + cust.ID, cust)
        //};

        //dataFactory.deleteCustomer = function (id) {
        //    return $http.delete(urlBase + '/' + id);
        //};

        //dataFactory.getOrders = function (id) {
        //    return $http.get(urlBase + '/' + id + '/orders');
        //};

        return dataFactory;
    }]);

})();