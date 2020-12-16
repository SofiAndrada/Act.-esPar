function esParOImpar(numero){
    if(numero===0){
        return 'Debes ingresar un numero distinto';
    }
    return numero % 2 === 0 ? "El numero es par": "El numero es impar";
}
console.log (esParOImpar(8));