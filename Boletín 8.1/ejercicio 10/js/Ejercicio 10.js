function esPalindromo(cadena) {
    cadena = cadena.toLowerCase().replace(/ /g, '');

    if(cadena == cadena.split('').reverse().join('')) {
        alert('Es palindromo')
    }else{
        alert('No es palindromo');
    }
}

let texto = prompt('Diga el texto:');

esPalindromo(texto);