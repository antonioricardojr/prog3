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

		$scope.novoLivro = function () {

			var novo_livro = {
				titulo: 'Digite o Título do Livro',
				autores: ['Digite o autor do livro'],
				descricao: 'Digite uma descrição sobre o livro',
				url: '<url da imagem do livro>',
				preco: -1
			}

			$scope.livro = novo_livro;

		}

		$scope.cancela = function () {

			$scope.livro = db[$scope.indice];
		}


		$scope.adiciona = function () {

			$scope.livros.push($scope.livro);
			$scope.indice = $scope.livros.length - 1;
			$scope.livro = $scope.livros[$scope.indice];
		}

		$scope.remove = function () {

			var livro_removido = $scope.livros.splice($scope.index, 1);
			$scope.proximo();
		}

	});









})();