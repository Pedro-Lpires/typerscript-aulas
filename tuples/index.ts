const stringNumber: [string, number] = ["pedro", 123]; // aqui estamos definindo que a tupla stringNumber só pode receber uma string e um número, nessa ordem. Se tentarmos colocar outro tipo de dado, o TypeScript vai nos dar um erro. e a ordem importante, se tentarmos colocar um número antes da string, o TypeScript também vai nos dar um erro. tuples tbm recebem valores opcionais, que são definidos com o operador "?" após o tipo. Por exemplo, se quisermos que a tupla stringNumber possa receber um terceiro valor opcional do tipo boolean, podemos fazer assim:
const stringNumberOptional: [string, number, boolean?] = ["pedro", 123]; // aqui estamos definindo que a tupla stringNumberOptional só pode receber uma string e um número, nessa ordem, e um terceiro valor opcional do tipo boolean.


