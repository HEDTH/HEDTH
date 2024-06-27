const matejs ={};
function sumar(a, b){
    return a + b;
}
function restar(a, b){
    return a- b;
}
function multiplicar(a, b){
    return a * b;
}
function dividir(a, b){
    if(b !== 0){
        return a / b;
    }else{
        return "no se puede dividir entre cero";
    }
}

matejs.sumar=sumar
matejs.restar=restar
matejs.multiplicar=multiplicar
matejs.dividir=dividir
module.exports=matejs;


/*
console.log(sumar(5,5));
console.log(restar(10,5));
console.log(multiplicar(5,5));
console.log(dividir(10,2));  //no se puede dividir entre cero
*/

