function fibonacciArray(n) {
    // [0, 1] son los valores inciales del arreglos para calcular el resto
    var fibArr = [0, 1];
    while(fibArr.length<n){
        let largo =  fibArr.length;
        fibArr.push(fibArr[largo-2]+fibArr[largo-1]);
    }
    // tu código aquí
    return fibArr;
}
   
var result = fibonacciArray(10);
console.log(result); // esperamos de vuelta[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]