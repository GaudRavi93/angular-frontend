import { Injectable } from '@angular/core';
import { Product } from '../interface/Product';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })

export class DashboardService {

    constructor(private http: HttpClient) { }

    getProductsSmall() {
        return this.http.get<any>('assets/demo/data/products-small.json')
            .toPromise()
            .then(res => res.data as Product[])
            .then(data => data);
    }
}
