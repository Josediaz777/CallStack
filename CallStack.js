
// Al iniciar esta funcion y recibir el parametro antes mencionado imprimiremos en la consola el numero del billete actual
// Para asegurarnos de que continue el ciclo volvemos a ejecutar la funcion de contar billetes pero con el numero actualizado.
function guardarBillete(a){
    console.log(`billete numero ${a}`)
    contarBilletes(a)
}

// Al inicio de esta funcion agrego un condicional para que verifique que el parametro sea menor o igual a 0 para finalizar
// De lo contrario esta ejecutara otra funcion pero ahora enviando como parametro el mismo numero restandeole uno.
function contarBilletes(b){ 
    if (b <= 0){
        return;
    }
    guardarBillete(b - 1);
}

// En esta linea  ejecuto otra funcion pero ahora enviando como parametro el numero 3
function GuardarDinero(){
    contarBilletes(3)
}
// Esta funcion es donde yo declaro el breakpoint para que desde esa linea se comience a ejecutar
GuardarDinero();
