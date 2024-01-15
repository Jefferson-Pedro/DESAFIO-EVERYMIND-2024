import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, delay, first } from 'rxjs';
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

    return this.http.get<Product[]>(url).pipe(
      first(),
      delay(20000)
    );
  }

  public getPageList(page?: number, size?: number): Observable<any>{
    if (page == 0 && size == 0) {
      (page = 0), (size = 5);
    }

    const url = `${environment.baseUrl}/produto?page=${page}&size=${size}`;

    return this.http.get<Product>(url).pipe(
      first(),
      delay(20000)
    );;
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
