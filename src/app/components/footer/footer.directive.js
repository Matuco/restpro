(function () {
    'use strict';

    angular
      .module('restPro')
      .directive('restproFooter', restproFooter);

    /** @ngInject */
    function restproFooter() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/footer/footer.html',
            scope: {
                creationDate: '='
            },
            controller: FooterController,
            controllerAs: 'fo',
            bindToController: true
        };

        return directive;

        /** @ngInject */
        function FooterController() {
            var vm = this;
            vm.hola = "Hola soy el Footer Controller";
        }
    }

})();