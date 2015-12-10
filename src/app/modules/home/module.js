(function() {

  'use strict';


  angular.module('ajusteMatricula.home', [
    'ui.router'
  ])
  .config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {

    var modulePath = 'app/modules/home/views/';

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: modulePath+'index.html',
        controller: 'HomeRetrieveCtrl'
    });

  }]);

}());
