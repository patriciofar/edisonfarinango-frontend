import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BankProductService {

  constructor(private http: HttpClient) { }




  findAllProducts() {
    const headers = new HttpHeaders({
      'authorId': environment.authorized
    });
    return new Promise((resolve, reject) => {
      this.http.get(environment.apiUrl + '/bp/products', { headers }).subscribe(data => {
        resolve(data);
      }, error => {
        reject(error)
      });
    });
  }


  deleteProduct(productId: string): Promise<any> {
    const headers = new HttpHeaders({
      'authorId': environment.authorized
    });

    return new Promise((resolve, reject) => {
      this.http.delete(environment.apiUrl + `/bp/products?id=${productId}`, { headers }).subscribe(data => {
        console.log(data);
        resolve(data);
      }, error => {
        reject(error)
      });
    });
  }

  saveProduct(product: any) {
    const headers = new HttpHeaders({
      'authorId': environment.authorized
    });
    return new Promise((resolve, reject) => {
      this.http.post(environment.apiUrl + '/bp/products', product, { headers }).subscribe(data => {
        resolve(data);
      }, error => {
        reject(error)
      });
    });
  }

  updateProduct(product: any) {
    const headers = new HttpHeaders({
      'authorId': environment.authorized
    });
    return new Promise((resolve, reject) => {
      this.http.put(environment.apiUrl + '/bp/products', product, { headers }).subscribe(data => {
        resolve(data);
      }, error => {
        reject(error)
      });
    });
  }


  
}
