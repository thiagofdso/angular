        angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope,contatosAPI,contatos) {
            $scope.app = "Lista Telefonica";
            $scope.reverso = false;
            $scope.contatos=contatos.data;

            $scope.apagarContatos = function(contatos){
                contatosAPI.deleteContato(contatos).success(function(dados){
                    contatosAPI.getContatos().success(function(data,status){
                        $scope.contatos=data;
                    }).error(function (data,status){
                        $scope.error = "Não foi possível carregar os dados";
                    });
                });

            }
            $scope.isContatoSelecionado = function (contatos) {
                return contatos.some(function (contato) {
                    return contato.selecionado;
                });
            };
            $scope.ordenarPor = function(campo) {
                if ($scope.criterioDeOrdenacao == campo) {
                    $scope.reverso = !$scope.reverso;
                }else{
                    $scope.reverso = false;
                }
                $scope.criterioDeOrdenacao = campo;

            };
        });