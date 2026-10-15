
function prices(price: number, tax: number): number {
    return (price + tax) * 1.27;
}
const priceIof = prices(25, 5);
console.log(priceIof); // Output: 38.1