import { Component, OnInit } from '@angular/core';
import { Item } from '../interfaces/item';
import { ItemService } from '../services/item/item.service';

@Component({
    selector: 'items',
    templateUrl: './item.component.html'
})
export class ItemsComponent implements OnInit {
    title: String;
    items: Item[];
    constructor(private _itemService: ItemService) { }
    addItem(title: String) {
        let _item: any = { title: title, isDone: false, _id: 0 };

        this._itemService.addItem(_item)
            .subscribe((item => {
                this.items.push(item);
                this.title = '';
            }));
    }

    updateItem(item: Item) {
        var _item = { _id: item._id, title: item.title, isDone: item.isDone };
        this._itemService.updateItem(_item).subscribe((data) => {
            item.isDone = !item.isDone;
        });
    }
    deleteItem(id: String) {
        var items = this.items;
        this._itemService.deleteItem(id).subscribe((data) => {
            if (data.n == 1) {
                for (let i = 0; i < items.length; i++) {
                    if (items[i]._id == id) {
                        items.splice(i, 1);
                    }
                }
            }
        })

    }

    ngOnInit() {
        this._itemService.getItems().subscribe((items) => {
            this.items = items;
        });
    }
}
