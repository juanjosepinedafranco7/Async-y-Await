function login(email, password) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            let emailCorrecto = "admin@correo.com";
            let passCorrecta = "123456";

            if(email === emailCorrecto && password === passCorrecta) {
                resolve("Login exitoso");
            } else {
                reject("Credenciales incorrectas");
            }
        }, 2000);
    });
}

async function startLogin() {
    let email = "admin@correo.com";
    let password = "123456";

    try {
        console.log("Verificando...");
        let mensaje = await login(email, password);
        console.log("✅", mensaje);
    } catch (error) {
        console.log("❌", error);
    }
}

startLogin();