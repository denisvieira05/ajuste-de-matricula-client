(function() {

	'use strict';

	angular.module('projetointegrador')
	.factory('DisciplinasService', ['$http', '$location','$q','localStorageService', function($http, $location,$q,localStorageService) {

		var listar = function(sequencial){

			var retorno = $q.defer();

			$http.get('http://projetoifal.herokuapp.com/api/disciplinas?periodo='+sequencial).success(function(data) {

				retorno.resolve(data);
			})
			.error(function() {

				alert("Aconteceu algo ruim! Verifique sua conexão de internet");
			});

			return retorno.promise;

		}

        var salvar = function (sigla) {

        	var retorno = $q.defer();

			var siglaToJson = function (){

	    		return angular.toJson({
				    "sigla": sigla
				});
			};

 		    var username = localStorageService.get('username');


			console.log('usuario recuperado :'+username);

			$http.post('http://projetoifal.herokuapp.com/api/users/'+username+'/disciplinas', siglaToJson())
			.success(function(result) {


				retorno.resolve(result);
				console.log(result);
			})
			.error(function() {

				alert("Aconteceu algo ruim! Verifique sua conexão de internet");
			});


			return retorno.promise;

        }

        var excluir = function (siglaDisc){

        	//var retorno = $q.defer();

			var siglaToJson = function (){

	    		return angular.toJson({
				  "sigla": siglaDisc
				});
			};

 		    var username = localStorageService.get('username');


			console.log('usuario recuperado : '+username+'SIGLA:'+siglaToJson());

			  // $http.delete("http://projetoifal.herokuapp.com/api/users/"+username+"/disciplinas", { 'sigla': siglaDisc }).success(function(result) {
			  //     console.log(result);
			  //     $scope.resultDelete = result;
			  // }).error(function() {
			  //     console.log("error");
			  // });


			$http({
		        method: "delete",
		        url: "http://projetoifal.herokuapp.com/api/users/"+username+"/disciplinas",
		        data: siglaToJson(),
		        headers: {'Content-Type': 'application/json'}
		    })
			// $http.delete('http://projetoifal.herokuapp.com/api/users/'+username+'/disciplinas', siglaToJson(),[header:])
			// .success(function(result) {

			// 	retorno.resolve(result);
			// 	console.log(result);
			// })
			// .error(function() {

			// 	alert("Aconteceu algo ruim! Verifique sua conexão de internet");
			// });


			//return retorno.promise;


		}

        function atualizar (disciplina) {



		}

		return {

			listar: listar,
			salvar: salvar,
			excluir: excluir,
			atualizar: atualizar
		};

	}]);


}());
