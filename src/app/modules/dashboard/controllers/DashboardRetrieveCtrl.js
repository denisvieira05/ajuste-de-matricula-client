(function () {
    'use strict';
    angular.module('ajusteMatricula.dashboard').controller('DashboardRetrieveCtrl', DashboardRetrieveCtrl);

    DashboardRetrieveCtrl.$inject = ['$scope', '$rootScope', '$location', 'APP_SETTINGS','DisciplinesPrepService'];

    function DashboardRetrieveCtrl($scope, $rootScope, $location, APP_SETTINGS,DisciplinesPrepService) {

        var vm = this;

        vm.disciplines = DisciplinesPrepService;


    //     // Other Option for call service when access route
    //
    //     vm.disciplines = [];
    //
    //     activate();
    //
    //     function activate() {
    //         return getDisciplines().then(function() {
    //             logger.info('Activated Disciplines View');
    //         });
    //     }
    //
    //     //////////////////////////////////////////////////////////
    //
    //    function getDisciplines(){
    //         return DisciplinesService.listar().then(function(data){
    //             console.log(data);
    //             vm.disciplines = data;
    //             return vm.disciplines;
    //         },
    //         function(){
    //             alert('erro');
    //         });
    //     }

    }
})();
