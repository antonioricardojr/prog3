(function(){
	var app = angular.module('App',['ui.bootstrap']);


	app.controller('livrosController', function ($scope){

		$scope.itensEditados = {};
		
		$scope.livros = db;
		$scope.indice = 0;
		$scope.livro = db[$scope.indice];

		$scope.myInterval = 3000;

		$scope.proximo = function () {
			if ( $scope.indice < db.length - 1){
				$scope.indice+=1;
			}else{
				$scope.indice = 0;
			}
			$scope.livro = db[$scope.indice];
		}

		$scope.anterior = function () {
			if ( $scope.indice > 0){
				$scope.indice-=1;
			}else{
				$scope.indice = db.length - 1;
			}
			$scope.livro = db[$scope.indice];
		}

		$scope.toggleEditing = function(livro){
    		$scope.itensEditados[livro.id] = 
    		!$scope.itensEditados[livro.id] || true;
  		};

		$scope.editar = function (livro){
			$scope.livro = livro;
			
		}

		$scope.update = function () {

			// $scope.livros[$scope.indice] = $scope.livro;
		}

		$scope.adicionar = function () {


		}
	});

})();