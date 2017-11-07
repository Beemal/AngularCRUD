import {Injectable} from '@angular/core';
import {Item} from '../../interfaces/item';
import {Http, Headers} from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class ItemService{
    constructor(private _http: Http){}
    getItems(){
        return this._http.get('http://localhost:4200/api/items').map(res=>res.json());
    }
    addItem(newItem: Item){
        let headers = new Headers();
        headers.append('content-type','application/json');
        return this._http.post('http://localhost:4200/api/items', JSON.stringify(newItem), {headers: headers}).map(res=>res.json());
    }
    updateItem(item: Item){
        let headers = new Headers();
        headers.append('content-type','application/json');
        return this._http.put('http://localhost:4200/api/items'+ item._id, JSON.stringify(item), {headers: headers}).map(res=>res.json());
    }
    deleteItem(id: any){
        let headers = new Headers();
        headers.append('content-type','application/json');
        return this._http.delete('http://localhost:4200/api/items'+id).map(res=>res.json());
   
    }
}