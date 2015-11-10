(function() {
  'use strict';

  angular
    .module('restPro')
    .directive('restproNavbar', restproNavbar);

  /** @ngInject */
  function restproNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController() {
        var vm = this;
        vm.hola = "Hola soy el NavBar Controller!";
    }
  }

})();
