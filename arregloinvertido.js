function reverse(arr) {
    // tu código aquí
    for(let i=0;i<arr.length/2;i++){
        let sust = arr[i];
        arr[i]=arr[arr.length-(i+1)];
        arr[arr.length-(i+1)]=sust;
    }
    return arr;
}
   
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // esperamos de vuelta ["e", "d", "c", "b", "a"]