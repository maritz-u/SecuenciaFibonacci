function secuenciaFibonacci(max) {
    let fib = [0, 1];
    while (true) {
        let siguiente = fib[fib.length - 1] + fib[fib.length - 2];
        if (siguiente > max) break;
        fib.push(siguiente);
    }
    return fib;
}

function mostrarSecuenciaFibonacci() {
    let fibonacci = secuenciaFibonacci(1000);
    console.log("Secuencia de Fibonacci entre 0 y 1000:");
    console.log(fibonacci.join(", "));
    
  let pares = fibonacci.filter(num => num % 2 === 0);
    console.log("\nNúmeros pares en la secuencia de Fibonacci entre 0 y 1000:");
    console.log(pares.join(", "));
    

  let impares = fibonacci.filter(num => num % 2 !== 0);
    console.log("\nNúmeros impares en la secuencia de Fibonacci entre 0 y 1000:");
    console.log(impares.join(", "));
}

mostrarSecuenciaFibonacci();
