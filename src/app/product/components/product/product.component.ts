import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit, OnDestroy, DoCheck } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';
import { CartService } from 'src/app/core/services/cart/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements  OnInit, OnDestroy, /*OnChanges*/ DoCheck {

  @Input()
  product: Product;
  @Output()
  productClicked: EventEmitter<any> = new EventEmitter();

  today = new Date();

  constructor(
    private cartService: CartService
  ) {
    // console.log('1. constructor');
  }

  // ngOnChanges(changes: SimpleChanges) {
    // console.log('2. ngOnChanges', changes);
  // }

  ngOnInit() {
    // console.log('3. ngOnInit');
  }

  ngDoCheck() {
    // console.log('4. ngDoCheck');
  }

  ngOnDestroy() {
    // console.log('5. ngOnDestroy');
  }

  addCart() {
    // console.log('añadir al carrito');
    // this.productClicked.emit(this.product.id);
    this.cartService.addCart(this.product);
  }

}
