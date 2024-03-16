function comprobarMayusMinus(cadena){
    if(cadena == cadena.toUpperCase()){
        alert('La cadena es mayúscula');
    }else if(cadena == cadena.toLowerCase()){
        alert('La cadena es minúscula');
    }else{
        alert('La cadena tiene mayúsculas y minúsculas')
    }
}

let texto = prompt('Diga la cadena de texto:');
comprobarMayusMinus(texto);