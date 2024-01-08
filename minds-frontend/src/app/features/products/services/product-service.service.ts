import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/core/models/Product';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private router = inject(Router);
  //private http = inject(HttpClient)

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  public list(): Observable<Product[]>{
    const url = `${this.baseUrl}/produto/all`;

    return this.http.get<Product[]>(url);
  }

  public create(product: Product): Observable<Product>{
    const url = `${this.baseUrl}/produto/new`;

    return this.http.post<Product>(url, product);
  }

  public update(product: Product): Observable<Product>{
    const url = `${this.baseUrl}/produto/edit/${product.codProd}`;

    return this.http.put<Product>(url, product);
  }

  public delete(id: Number){
    const url = `${environment.baseUrl}/produto/${id}`;

    return this.http.delete(url);
  }

}
