import ProductsHero from '../components/products/ProductsHero'
import ProductCard from '../components/products/ProductCard'
import { products } from '../data/products'

const Products = () => {
  return (
    <div>
      <ProductsHero />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Katalog Produk</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products
