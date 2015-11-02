(function() {
  'use strict';

  angular
    .module('restPro')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;
  }

    var a = $(".nav-bg").offset().top;

$(document).scroll(function(){
    if($(this).scrollTop() > a)
    {   
       $('.nav-bg').css({"background":"rgba(255,255,255,0.85)"});
    } else {
       $('.nav-bg').css({"background":"transparent"});
    }
});
    
})();
