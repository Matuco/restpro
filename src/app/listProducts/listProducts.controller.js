(function () {
    'use strict';

    angular.module('restPro')
      .controller('ListProductsController', ListProductsController);

    /** @ngInject */
    function ListProductsController($routeParams, dataFactoryPlatos) {
        var vm = this;        
        vm.categoria = $routeParams.categoria; //Categoría 
        vm.platos = [];

        dataFactoryPlatos.getPlatosCategoria(vm.categoria)
        .then(function (response) {
            vm.platos = response.data;
            console.log("Entro a Factory Service. Categoria : " + vm.categoria + '(' + response.data.length + ')');
            console.log();
        }, function (error) {
            vm.platos = error || "Llamada a la API para Platos por categoria fallo!";
        });
    }
})();
