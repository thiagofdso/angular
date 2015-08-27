angular.module("listaTelefonica").factory("contatosAPI",function($http,config){
    var _getContatos = function(){
        return $http.get(config.baseURL + "/contatos");
    };
    var _saveContato= function(contato){
        return $http.post(config.baseURL + "/contatos/add",contato);
    };
    var _deleteContato= function(contatos){
        return $http.post(config.baseURL + "/contatos/del",contatos);
    };
    return{
        getContatos : _getContatos,
        saveContato : _saveContato,
        deleteContato: _deleteContato
    };
});
