import { Component } from '@angular/core';
import { CartAction, CartItem } from './model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    cart: CartItem[] = []

    process(action: CartAction) {
        let i = this.cart.find(item => item.item == action.item)
        if (action.quantity > 0) {
            if (!i) {
                let newItem: CartItem = { ...action }
                // // item: action.item,
                // quantity: action.quantity
                this.cart.push(newItem)
            } else {
                if (i.quantity >= 0) {
                    i.quantity += action.quantity
                }
            }
        } else {
            if (!i) {
                let newItem: CartItem = {
                    item: action.item,
                    quantity: 0
                }
            } else if (i.quantity > 0) {
                i.quantity += action.quantity
                if (i.quantity === 0) {
                    for (var n = this.cart.length - 1; n >= 0; n--) {
                        if (this.cart[n].quantity === 0) {
                            this.cart.splice(n, 1)
                        }
                    }
                }
            }
        }
    }
}
