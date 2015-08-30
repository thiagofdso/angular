angular.module("listaTelefonica").controller("novoContatoCtrl", function ($scope,$location,contatosAPI,operadoras,serialGenerator) {
    $scope.app = "Lista Telefonica";
    $scope.reverso = false;
    $scope.operadoras=operadoras.data;

    $scope.adicionarContato = function(contato){
        //$scope.contatos.push(angular.copy(contato));
        contato.serial = serialGenerator.generate();
        contatosAPI.saveContato(contato).success(function(data){
            delete $scope.contato;
            $scope.contatoForm.$setPristine();
//                    $scope.contatos.push(angular.copy(contato));
//            carregarContatos();
            $location.path("/contatos");
        }).error(function(data){
            console.log("error");
        });

    };

});