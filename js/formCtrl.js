angular.module("form").controller("formCtrl", function($http, $scope){
    //$scope.app = "form";
    
    $scope.contatos = [{ }];
        /*nome: '',
        telefone: '',
        email: '',
        observacao: '',
        endereco: {
            cep: '',
            logradouro: '',
            numero: '',
            complemento: '',
            bairro: '',
            cidade: '',
            uf: ''
        }*/
    
    $scope.adicionaContato = function(contato) {
        $scope.contatos.push(angular.copy(contato));
        //saveToStorage(contato);
        delete $scope.contato;
    };
    

    $scope.buscaCep = function() {
        $http({
            method: 'GET',
            url:'https://api.postmon.com.br/v1/cep/' + $scope.contato.endereco.cep ,
            
        }).then(function(response){
            $scope.errorMessage = null;
            $scope.contato.endereco.logradouro = response.data.logradouro;
            $scope.contato.endereco.bairro = response.data.bairro;
            $scope.contato.endereco.cidade = response.data.cidade;
            $scope.contato.endereco.uf = response.data.estado;
        }).catch(function(reject){
            $scope.errorMessage = "Cep não encontrado";
        });
    }

        /*$scope.saveToStorage = function($scope) {
            localStorage.setItem("lista_contato", JSON.stringify($scope.contato));
        }*/

});

