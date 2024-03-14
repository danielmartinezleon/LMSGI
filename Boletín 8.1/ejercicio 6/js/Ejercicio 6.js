let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D',
'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

let numDNI = prompt('Diga el número de su DNI');
let letDNI = prompt('Diga la letra de su DNI');

if(numDNI <= 0 || numDNI > 99999999){
    alert('Este número no está dentro del rango');
}else{
    let numLetra = numDNI%23;
        if(letDNI != letras[numLetra]){
            alert('La letra indicada no es correcta');
        }else{
            alert('El número y letra indicados son correctos');
        }
}