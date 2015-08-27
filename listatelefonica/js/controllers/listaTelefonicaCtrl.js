        angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope,contatosAPI,operadorasAPI,serialGenerator) {
            $scope.app = "Lista Telefonica";
            $scope.reverso = false;
            $scope.contatos=[];
            $scope.operadoras=[];
            var carregarContatos = function(){
                contatosAPI.getContatos().success(function(data,status){
                 $scope.contatos=data;
              }).error(function (data,status){
                    $scope.error = "Não foi possível carregar os dados";
                });
            };
            var carregarOperadoras = function(){
                operadorasAPI.getOperadoras().success(function(data,status){
                    $scope.operadoras=data;
                });
            };

            $scope.adicionarContato = function(contato){
                //$scope.contatos.push(angular.copy(contato));
                contato.serial = serialGenerator.generate();
                contatosAPI.saveContato(contato).success(function(data){
                    delete $scope.contato;
                    $scope.contatoForm.$setPristine();
//                    $scope.contatos.push(angular.copy(contato));
                    carregarContatos();
                }).error(function(data){
                   console.log("error");
                });

            };
            $scope.apagarContatos = function(contatos){
                contatosAPI.deleteContato(contatos).success(function(data){
                    carregarContatos();
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
            carregarContatos();
            carregarOperadoras();
        });