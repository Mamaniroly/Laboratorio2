function retornoObjeto(name, ci, email) {
    return { name: name,
        ci: ci,
        email: email
    };
}
var objeto = retornoObjeto('Roly', '8651186', 'rolymamani@gmail.com');
console.log(objeto);
