function redondearElementos(unArray){
    for(let i = 0; i < unArray.length; i++){
        if (!isNaN(unArray[i])){
            unArray[i] = Math.round(unArray[i]);
        }else{
            unArray.splice(i, 1);
            i--;
        }
    }

    return unArray;
}

function eliminarExtremos(unArray){
    /*let min = Math.min(unArray);
    let max = Math.max(unArray);

    unArray.splice(min,1);
    unArray.splice(max,1);

    return unArray;*/
    let indexMax = 0;
    let indexMin = 0;

    for(let i = 0; i < unArray.length; i++){
        if(unArray[i]>unArray[indexMax]){
            indexMax=i;
        }
        
    }
    unArray.splice(indexMax,1);
    for(let i = 0; i < unArray.length; i++){
        if(unArray[i]<unArray[indexMin]){
            indexMin=i;
        }
        
    }
    unArray.splice(indexMin,1);        
       
    return unArray;
}

function parsearNotas(str){
    /*let array = str.split("");
   
    for(let i = 0; i < array.length; i++){
        if(isNaN(array[i]) && array[i] != "."){
            array = array.splice(i, 1);
        }
    }

    return array;*/
    let result = new Array();
    let listaJurados = str.split('#');

    for (let i = 0; i < listaJurados.length; i++) {
        result[i] = listaJurados[i].substring(listaJurados[i].indexOf(':')+1);

    }

    return result;

}

function principal(){
    let cadena = "Jurado1:4.56#Jurado2:nulo#Jurado3:9.28#Jurado4:3.34#Jurado5:5.9#Jurado6:7.32"
    
    let arrayNotas = parsearNotas(cadena);
    arrayNotas = redondearElementos(arrayNotas);
    arrayNotas = eliminarExtremos(arrayNotas);

    let suma = 0;

    for (let nota of arrayNotas) {
        suma+=nota;
    }

    alert(suma/arrayNotas.length);

   
}

principal();