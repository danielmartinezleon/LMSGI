function comprobarPar(n) {
    if (n%2 == 0){
        alert(n+' es par');
    }else{
        alert(n+' es impar')
    }
}

let num = prompt('Diga un número');
comprobarPar(num);
