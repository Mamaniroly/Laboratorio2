function retornoObjeto (name: string, ci: string, email: string) {
    return {name : name,
            ci : ci,
            email: email
            }
}

let objeto = retornoObjeto ('Roly', '8651186', 'rolymamani@gmail.com')

console.log(objeto)
