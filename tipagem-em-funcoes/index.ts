function greet(name: string) {
  console.log(`Hello, ${name}!`);  
} 
greet("Pedro");    

function doubleNumber(num: number): number { // aqui eu especifiquei que a função recebe um parâmetro do tipo number e retorna um valor do tipo number.
  return num * 2;
}
const resultado = doubleNumber(5);
console.log(resultado); // Output: 10