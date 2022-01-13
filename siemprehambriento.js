function siempreHambriento(arreglo){
    let mensajeAConsola="";

    for(let i = 0 ; i < arreglo.length; i++){
        if(arreglo[i]==="comida"){
            if(i!==arreglo.length-1){
                mensajeAConsola+="delicioso, ";
            }
            else{
                mensajeAConsola+="delicioso";
            }
        }
    }
    if(mensajeAConsola===""){
        mensajeAConsola+="Tengo hambre";
    }

    console.log(mensajeAConsola);
}
siempreHambriento([4, 1, 5, 7, 2]);

siempreHambriento([3.14, "comida", "pastel", true, "comida", "comida"]);