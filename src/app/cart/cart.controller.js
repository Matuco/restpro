//(function() {
//  'use strict';

//  angular
//    .module('restPro')
//    .controller('CartController', MainController);

//  /** @ngInject */
//  function cartController($timeout, webDevTec, toastr) {
//    var vm = this;

//    vm.awesomeThings = [];
//    vm.classAnimation = '';
//    vm.creationDate = 1445463788991;
//    vm.showToastr = showToastr;
//    vm.testTexto = "Hola estoy desde un controller!";

//    activate();

//    function activate() {
//      getWebDevTec();
//      $timeout(function() {
//        vm.classAnimation = 'rubberBand';
//      }, 4000);
//    }

//    function showToastr() {
//      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
//      vm.classAnimation = '';
//    }

//    function getWebDevTec() {
//      vm.awesomeThings = webDevTec.getTec();

//      angular.forEach(vm.awesomeThings, function(awesomeThing) {
//        awesomeThing.rank = Math.random();
//      });
//    }
//  }
//  })();