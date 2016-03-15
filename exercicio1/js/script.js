(function(){
	var app = angular.module('App',[]);


	app.controller('livrosController', function ($scope){
		
		$scope.livros = db;
		$scope.indice = 0;
		$scope.livro = db[$scope.indice];

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

		$scope.update = function () {

			// $scope.livros[$scope.indice] = $scope.livro;
		}

		$scope.adicionar = function () {


		}
	});









})();