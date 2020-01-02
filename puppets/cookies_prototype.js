function CookieManager(){

}

CookieManager.prototype.set = function(cookie_name, valor, dominio,path, expiration){
   // Função que cria ou atualiza cookies
   // @param cookie_name - Nome do cookie que será criado
   // @param valor - Valor do cookie
   // @param dominio (opt)- domínio onde deve ser gravado o cookie
   // @param path (opt)- Path onde deve ser gravado o cookie
   // @param expiration (opt)- expiração do cookie
   // Implement me!
this.cookie_name = document.cookie;
this.expirations=new Date()
this.dominio=location.href;
this.path=location.pathname;

};

CookieManager.prototype.get = function(cookie_name){
   // Função que retorna o valor de um cookie

   // Implement me!
};

CookieManager.prototype.delete = function(cookie_name){
   // Função que deleta um cookie

   // Implement me!
};

cm = new CookieManager();
c.set('cookie', 'valor');
