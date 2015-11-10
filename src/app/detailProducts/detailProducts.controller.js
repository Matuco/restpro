(function() {
  'use strict';

  angular
    .module('restPro')
    .controller('DetailProductsController', DetailProductsController);

  /** @ngInject */
  function DetailProductsController($routeParams, dataFactoryPlatos) {
    var vm = this;

    vm.platoid = $routeParams.id;

    vm.plato = {}
    vm.categoria;
    vm.subCategoria;

    dataFactoryPlatos.getPlato(vm.platoid)
      .then(function (response) {
          vm.plato = response.data;
          console.log("Entro a Factory Service. Plato : " + vm.platoid);          
      }, function (error) {
          vm.plato = error || "Llamada a la API para Platos por categoria fallo!";
      });
  }
})();
