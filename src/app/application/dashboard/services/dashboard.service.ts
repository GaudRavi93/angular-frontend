import { Observable } from 'rxjs';
import { User } from '../interface/User';
import { Injectable } from '@angular/core';
import { Product } from '../interface/Product';
import { HttpClient } from '@angular/common/http';
const API_URL = '/api';

@Injectable({ providedIn: 'root' })

export class DashboardService {

    constructor(private http: HttpClient) { }

    getProductsSmall() {
        return this.http.get<any>('assets/demo/data/products-small.json')
            .toPromise()
            .then(res => res.data as Product[])
            .then(data => data);
    }

    getAllUsers(): Observable<User[]> {
        return this.http.get<User[]>(`${API_URL}/users`);
    }
}
