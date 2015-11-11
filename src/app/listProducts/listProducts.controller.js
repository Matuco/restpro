(function () {
    'use strict';

    angular.module('restPro')
      .controller('ListProductsController', ListProductsController);

    /** @ngInject */
    function ListProductsController($routeParams, dataFactoryPlatos) {
        var vm = this;        
        vm.categoria = $routeParams.categoria; //Categoría
        vm.categoriacorto = "";
        vm.platos = [];

        dataFactoryPlatos.getPlatosCategoria(vm.categoria)
        .then(function (response) {
            vm.platos = response.data;
            console.log("Entro a Factory Service. Categoria : " + vm.categoria + '(' + response.data.length + ')');
            if (vm.platos.length > 0) {
            vm.categoriacorto = vm.platos[0].CategoriaCorto;
            console.log("Categoria Corto : " + vm.categoriacorto);
        };
        }, function (error) {
            vm.platos = error || "Llamada a la API para Platos por categoria fallo!";
        });
        
        
    }
})();
