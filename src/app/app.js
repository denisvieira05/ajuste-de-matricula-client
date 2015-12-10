(function(){
        angular.module('ajusteMatricula', [

        // App Components

        // App Modules Dependencies
        'ajusteMatricula.dashboard',
        'ajusteMatricula.home',

        // External Dependencies
        'ui.router'
    ])
    .config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {

          $urlRouterProvider.otherwise("/");

    }]);
})();
