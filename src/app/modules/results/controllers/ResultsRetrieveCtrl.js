(function () {
    'use strict';
    angular.module('ajusteMatricula.results').controller('ResultsRetrieveCtrl', ResultsRetrieveCtrl);

    ResultsRetrieveCtrl.$inject = ['$scope', '$rootScope', '$location', 'APP_SETTINGS','SemesterGridService'];

    function ResultsRetrieveCtrl($scope, $rootScope, $location, APP_SETTINGS,SemesterGridService) {

        var vm = this;
        vm.disciplines = [];

        // activate();

        function activate() {
            return generateDisciplines().then(function() {
                logger.info('Activated Disciplines View');
            });
        }

        function generateDisciplines() {
            return SemesterGridService.gerar('completedDisciplines').then(function(data){
                console.log(data);
                $scope.disciplinas = data;
                $scope.total = data.length;
            },
            function(){
                alert('erro');
            });
        }

    }
})();
