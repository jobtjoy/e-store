import { Injectable } from '@angular/core';
import { Store } from '@core/store';
import { CartState, intialState } from './cart-state';
import { LogService } from '@core/log.service';

@Injectable({ providedIn: 'root' })
export class CartStore extends Store<CartState> {
  constructor(private logService: LogService) {
    super(intialState);
  }

  addCartItem(cartItemToAdd: import('./cart-item').CartItem) {
    console.log('[Cart] Add Cart Item');

    const newState = {
      ...this.state, // cartItems
      cartItems: [].concat(this.state.cartItems, cartItemToAdd)
    };

    this.setState(newState);
  }
}
