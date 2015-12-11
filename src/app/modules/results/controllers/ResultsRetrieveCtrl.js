(function () {
    'use strict';
    angular.module('ajusteMatricula.results').controller('ResultsRetrieveCtrl', ResultsRetrieveCtrl);

    ResultsRetrieveCtrl.$inject = ['$scope', '$rootScope', '$location', 'APP_SETTINGS','GradeService'];

    function ResultsRetrieveCtrl($scope, $rootScope, $location, APP_SETTINGS,DisciplinasService) {

        var vm = this;
        vm.disciplines = [];

        activate();

        function activate() {
            return generateDisciplines().then(function() {
                logger.info('Activated Disciplines View');
            });
        }

        var generateDisciplines = function(){
            return GradeService.listar(completedDisciplines).then(function(data){
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
