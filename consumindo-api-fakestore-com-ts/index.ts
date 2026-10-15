type Product = { // tipo de dado para os produtos. ajuda a evitar erros antes mesmo de rodar o programa, pois o TypeScript vai avisar se algum dado estiver fora do padrão.
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: { // objeto aninhado
        rate: number
        count: number
    }
}

// Promise<Product[]> = essa função retorna uma promessa que, quando resolve,
// entrega um array de Product.
async function getProducts(): Promise<Product[]> {
    const response = await fetch('https://fakestoreapi.com/products')

    if (!response.ok) {
        throw new Error('Falha ao buscar os produtos')
    }

    // Aqui estamos dizendo explicitamente que o resultado do JSON é um array de Product.
    const products: Product[] = await response.json()
    return products
}

async function renderProducts(): Promise<void> {
    try {
        const products = await getProducts()

        products.forEach(product => {
            console.log(`Título: ${product.title}`)
            console.log(`Preço: $${product.price}`)
            console.log('-----------------------')
        })
    } catch (error) {
        console.error('Erro ao carregar produtos', error)
    }
}

renderProducts()