import { Injectable, NotFoundException } from '@nestjs/common';
import { IProduct } from 'src/interfaces/IProducts';

@Injectable()
export class ProductsService {
    private products: IProduct[] = [
        {id: 1, name: 'Laptop', amount: 5, price: 1000, category: 'tecnologia', description: 'portatil ASUS Vivobook'},
        {id: 2, name: 'Earphones', amount: 3, price: 500, category: 'tecnologia', description: 'Audifonos inalambricos'},
        {id: 3, name: 'keyboard', amount: 6, price: 2000, category: 'tecnologia', description: 'Teclado mecanico ergonomico gamer'},
        {id: 4, name: 'Mouse', amount: 4, price: 1500, category: 'tecnologia', description: 'Mouse ergonomico Gamer'}
    ]

    findAll(): IProduct[] {
        return this.products
    }

    findOne(id: number){
        const productFind = this.products.find((product) => product.id === id)
        if (!productFind) throw new NotFoundException ('Producto no encontrado')
            return productFind
    }
}
