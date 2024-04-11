import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BankProductService } from 'src/app/services/bank-product.service';
import { Presenter } from 'src/app/core/presenter';
import { BankProduct } from 'src/app/models/product-bank.model';
import { GenerateProductView } from '../generate-product.view';
@Injectable({
    providedIn: 'root',
})
export class GenerateProductPresenter implements Presenter {
    view!: GenerateProductView;
    bankProduct: BankProduct = {};
    constructor(
        private router: Router,
        private bankProductService: BankProductService
    ) {
    }

    saveProduct(bankProduct: BankProduct) {
        const product = {
            "id": bankProduct.id,
            "name": bankProduct.name,
            "description": bankProduct.description,
            "logo": bankProduct.logo,
            "date_release": bankProduct.dateRelease,
            "date_revision": bankProduct.dateRevision,
        }
        console.log(product);
        console.log(JSON.parse(JSON.stringify(product)));
        this.bankProductService.saveProduct(product).then((products: any) => {
            this.bankProduct = {};
            this.router.navigate(['/products/list']);
        });
    }


    updateProduct(bankProduct: BankProduct) {
        const product = {
            "id": bankProduct.id,
            "name": bankProduct.name,
            "description": bankProduct.description,
            "logo": bankProduct.logo,
            "date_release": bankProduct.dateRelease,
            "date_revision": bankProduct.dateRevision,
        }
        console.log(product);
        console.log(JSON.parse(JSON.stringify(product)));
        this.bankProductService.updateProduct(product).then((products: any) => {
            this.bankProduct = {};
            this.router.navigate(['/products/list']);
        });
    }

}