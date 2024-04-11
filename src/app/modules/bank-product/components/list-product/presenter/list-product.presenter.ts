import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BankProductService } from 'src/app/services/bank-product.service';
import { ListProductView } from '../list-product.view';
import { Presenter } from 'src/app/core/presenter';
import { BankProduct } from 'src/app/models/product-bank.model';
@Injectable({
    providedIn: 'root',
})
export class ListProductPresenter implements Presenter {
    view!: ListProductView;
    listProduct: BankProduct[] = [];
    originListProduct: BankProduct[] = [];
    totalItems = 0;
    constructor(
        private router: Router,
        private bankProductService: BankProductService
    ) {
    }

    findAllProducts() {
        this.bankProductService.findAllProducts().then((products: any) => {
            this.listProduct = [];
            products.forEach((element: any) => {
                this.listProduct.push({
                    id: element.id,
                    name: element.name,
                    logo: element.logo,
                    description: element.description,
                    dateRelease: element.date_release,
                    dateRevision: element.date_revision
                });
            });
            this.originListProduct = this.listProduct;
            this.totalItems = this.listProduct.length;
        });
    }

    deleteProduct(productId: any) {
        this.bankProductService.deleteProduct(productId).then((response: any) => {
            console.log(response);
        });
        this.findAllProducts();
    }
}