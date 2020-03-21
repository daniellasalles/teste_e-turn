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
    console.log($scope.contatos);

    $scope.buscaCep = function() {
        $http({
            method: 'GET',
            url:'api.postmon.com.br/v1/cep/' + $scope.contato.endereco.cep,
            
        }).then(function(data){
            $scope.contato.endereco.logradouro = data.logradouro;
        });

    }

        /*$scope.saveToStorage = function($scope) {
            localStorage.setItem("lista_contato", JSON.stringify($scope.contato));
        }*/

});

