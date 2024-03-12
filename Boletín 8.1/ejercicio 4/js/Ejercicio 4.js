let valores = [true, 5, false, "hola", "adios", 2];

if (valores[3].length > valores[4].length){
    alert("La más larga es "+valores[3]);
}else{
    alert("La más larga es "+valores[4]);
}


if (valores[0] > valores[2]){
    alert(valores[0]);
}else{
    alert(valores[2]);
}

alert(valores[1]+" más "+valores[5]+" da "+(valores[1]+valores[5]));
alert(valores[1]+" menos "+valores[5]+" da "+(valores[1]-valores[5]));
alert(valores[1]+" por "+valores[5]+" da "+valores[1]*valores[5]);
alert(valores[1]+" entre "+valores[5]+" da "+valores[1]/valores[5]);
alert("El resto de "+valores[1]+" entre "+valores[5]+" da "+valores[1]%valores[5]);