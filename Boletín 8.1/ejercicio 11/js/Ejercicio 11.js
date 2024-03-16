function sumarArray(tam) {
    let numeros = new Array();
    let total = 0;
    let num = 0;

    for(let i = 0; i < tam; i++){
        num = parseInt(prompt('Diga un numero'));
        numeros[i]= num;
        total += numeros[i];
    }

    alert('El Array es: '+numeros+'\nEl total es: '+total);

    while(!isNaN(num)){
        num = parseInt(prompt('Diga un numero'));
        let primerNum = numeros.shift();
        total-= primerNum;
        numeros.push(num);
        total += num;
        alert('El Array es: '+numeros+'\nEl total es: '+total);
    }
}

let tam = prompt('Diga el tamaño del array');

sumarArray(tam);