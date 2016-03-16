(function(){
	var app = angular.module('App',['ui.bootstrap']);


	app.controller('livrosController', function ($scope){

		$scope.is_add = true;

		$scope.itensEditados = {};
		
		$scope.livros = db;
		$scope.indice = 0;
		$scope.livro = db[$scope.indice];

		$scope.temp_livro = {
				titulo: 'Digite um novo título',
				autores: [''],
				descricao: 'Digite uma descrição sobre o livro.',
				url: '',
				preco: 0,
		};

		$scope.proximo = function () {
			if ( $scope.indice < db.length - 1){
				$scope.indice+=1;
			}else{
				$scope.indice = 0;
			}
			$scope.livro = db[$scope.indice];
		};

		$scope.anterior = function () {
			if ( $scope.indice > 0){
				$scope.indice-=1;
			}else{
				$scope.indice = db.length - 1;
			}
			$scope.livro = db[$scope.indice];
		};
		

		$scope.adicionar = function (){

		}
	});

})();