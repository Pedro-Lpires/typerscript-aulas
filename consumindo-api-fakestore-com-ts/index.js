"use strict";
// Promise<Product[]> = essa função retorna uma promessa que, quando resolve,
// entrega um array de Product.
async function getProducts() {
    const response = await fetch('https://fakestoreapi.com/products');
    if (!response.ok) {
        throw new Error('Falha ao buscar os produtos');
    }
    // Aqui estamos dizendo explicitamente que o resultado do JSON é um array de Product.
    const products = await response.json();
    return products;
}
async function renderProducts() {
    try {
        const products = await getProducts();
        products.forEach(product => {
            console.log(`Título: ${product.title}`);
            console.log(`Preço: $${product.price}`);
            console.log('-----------------------');
        });
    }
    catch (error) {
        console.error('Erro ao carregar produtos', error);
    }
}
renderProducts();
