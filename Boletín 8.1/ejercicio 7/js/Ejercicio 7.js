let num = prompt('Diga de que número quiere el factorial:');
let total = 1;

for (let i = 1; i <= num; i++) {
    total *= i;
}

alert('El factorial de '+num+' es: '+total);