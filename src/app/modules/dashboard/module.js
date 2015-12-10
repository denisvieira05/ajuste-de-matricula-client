(function() {

  'use strict';


  angular.module('ajusteMatricula.dashboard', [
    'ui.router'
  ])
  .config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {

    var modulePath = 'app/modules/dashboard/views/';

    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: modulePath+'index.html',
        controller: 'DashboardRetrieveCtrl'
    });

  }]);

}());
