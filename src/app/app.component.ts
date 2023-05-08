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
                i.quantity += action.quantity
            }

        }
    }
}
