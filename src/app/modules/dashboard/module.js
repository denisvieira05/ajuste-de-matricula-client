(function() {

    'use strict';

    angular
        .module('ajusteMatricula.dashboard', ['ui.router'])
        .config(config);


    function config($stateProvider, $urlRouterProvider) {

        var modulePath = 'app/modules/dashboard/views/';

        $stateProvider
          .state('dashboard', {
            url: '/dashboard',
            templateUrl: modulePath+'index.html',
            controller: 'DashboardRetrieveCtrl',
            controllerAs: 'vm',
            resolve: {
                DisciplinesPrepService: DisciplinesPrepService
            }
        });
    }

    function DisciplinesPrepService(DisciplinesService) {
        // return DisciplinesService.listar().then(function(data){
        //     console.log(data);
        //     return vm.disciplines;
        // })
        // .catch(function(error) {
        //    // Interpret error
        //    // Cope w/ timeout? retry? try alternate service?
        //    // Re-reject with appropriate error for a user to see
        // });
    }

}());
