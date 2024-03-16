function ordenarMayorAMenor(array) {
    array.sort((a,b) => b-a);

    return array;
}

let numeros = [5, 2, 8, 1, 9];

alert('El array es: '+numeros+'\nEl array ordenado de mayor a menor es: '+ordenarMayorAMenor(numeros));