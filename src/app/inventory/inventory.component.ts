import { Component, Output } from '@angular/core';
import { CartAction } from '../model';
import { Subject } from 'rxjs';

const FRUITS: string[] = [
    'acorn_squash', 'apple', 'bell_pepper', 'blueberries', 'broccoli',
    'carrot', 'celery', 'chili_pepper', 'corn', 'eggplant', 'harold',
    'lettuce', 'mushroom', 'onion', 'potato', 'pumpkin', 'radish', 'squash',
    'strawberry', 'sugar_snap', 'tomato', 'zucchini'
]

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent {

    fruits = FRUITS

    @Output()
    onItemSelection = new Subject<CartAction>

    increment(i: number) {
        const action: CartAction = {
            item: this.fruits[i],
            quantity: 1
        }
        this.onItemSelection.next(action)
    }

    decrement(i: number) {
        const action: CartAction = {
            item: this.fruits[i],
            quantity: -1
        }
        this.onItemSelection.next(action)
    }
}
