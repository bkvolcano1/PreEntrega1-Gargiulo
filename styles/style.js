function productos() {
    let producto = prompt("Ingrese producto: ");
    if (producto == "") {
        alert("No se ingreso producto");
    }
    
    while (producto != "fin") {
        let marca = prompt("Ingrese marca: ");
        if (marca == "") {
            alert("No se ingreso marca");
            
        }
        else if (marca == "gibson") {
            alert("El precio de una Gibson es de 3000 usd en adelante");
            
        }else if (marca == "epiphone") {
            alert("El precio de una Epiphone es de 200 usd en adelante");
            
        }else if (marca == "fender") {
            alert("El precio de una Fender es de 2800 usd en adelante");
            
        }else if (marca == "squier") {
            alert("El precio de una Squier es de 600 usd en adelante")
            
        }else{
            alert("Precio sin definir");
        }
        let modelo = prompt("Ingrese modelo: ");
        if (modelo == "") {
            alert("No se ingreso modelo");
            
        }
        let origen = prompt("Ingrese origen: ");
        if (origen == "") {
            alert("No se ingreso origen");
        }

        alert("Se ingreso el producto: "+ producto+" ,marca: "+ marca + " ,modelo: "+ modelo + " y origen: "+ origen+".");
        
        console.log("El registro de lo ingresado en orden de producto, marca, modelo y origen: " +producto+", "+marca+", "+modelo+", "+origen+"."
        );
        producto = prompt("Ingrese producto: ");
        if (producto == "") {
            alert("No se ingreso producto");
        }  
    } 
}
productos();


