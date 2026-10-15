function sum(number1: number, number2: number) {
  return number1 + number2;
}
sum(1, 2);


const movies = ['Matrix', 'Vingadores', 'O Senhor dos Anéis'];

movies.map((movie) => {
  return `Filme: ${movie}`;
});