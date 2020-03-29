angular.module("form").controller("formCtrl", function($http, $scope){
    // Cria array para armazenar dados ddos contatos cadastrados
    $scope.contatos = [{ }];
    

    // Adiciona os dados do novo contato no array de contatos
    $scope.adicionaContato = function(contato, contatos) {
        $scope.contatos.push(angular.copy(contato));
        delete $scope.contato;
    };
    
    // Faz a busca do CEP usando a API Postmon
    $scope.buscaCep = function() {
        $http({
            method: 'GET',
            url:'https://api.postmon.com.br/v1/cep/' + $scope.contato.endereco.cep,

        // Caso a conexão seja bem sucedida, preenche automaticamente os campos de endereço com o resultado encontrado
        }).then(function(response){
            $scope.errorMessage = null;
            $scope.contato.endereco.logradouro = response.data.logradouro;
            $scope.contato.endereco.bairro = response.data.bairro;
            $scope.contato.endereco.cidade = response.data.cidade;
            $scope.contato.endereco.uf = response.data.estado;

        // Caso aconteça erro na conexão, retorna alerta de erro
        }).catch(function(reject){
            $scope.errorCep = "Cep não encontrado";
        });
    }

});

