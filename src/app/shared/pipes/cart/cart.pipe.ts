import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';
import { CartService } from 'src/app/core/services/cart/cart.service';

@Pipe({
  name: 'cart'
})
export class CartPipe implements PipeTransform {
  products: Product[];

  constructor(
    private cartService: CartService
  ) { }

  transform(value: Product): any {
    let count = 0;
    this.cartService.cart$.subscribe(products => products.forEach(prod => count += prod.id === value.id ? 1 : 0));
    return count;
  }

}
