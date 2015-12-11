(function() {

  'use strict';

  angular
      .module('ajusteMatricula.results', ['ui.router'])
      .config(config);


  function config($stateProvider, $urlRouterProvider) {

    var modulePath = 'app/modules/results/views/';

    $stateProvider
      .state('results', {
        url: '/results',
        templateUrl: modulePath+'index.html',
        controller: 'ResultsRetrieveCtrl',
        controllerAs: 'vm'
    });

  }

}());
