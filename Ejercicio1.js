function getUsers() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            let todoSalioBien = true; 
            
            if (todoSalioBien) {
                let usuarios = [
                    { id: 1, nombre: "Ana" },
                    { id: 2, nombre: "Luis" }
                ];
                resolve(usuarios); 
            } else {
                reject("Error al cargar usuarios"); 
            }
        }, 2000); 
    });
}

async function loadUsers() {
    try {
        console.log("Cargando...");
        let usuarios = await getUsers(); 
        console.log("Usuarios cargados:", usuarios);
    } catch (error) {
        console.log("Ups:", error); 
    }
}

loadUsers();