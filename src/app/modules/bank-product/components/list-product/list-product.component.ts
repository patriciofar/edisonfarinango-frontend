import { Component, OnInit } from '@angular/core';
import { ListProductView } from './list-product.view';
import { Router } from '@angular/router';
import { ListProductPresenter } from './presenter/list-product.presenter';
import { BankProduct } from 'src/app/models/product-bank.model';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements ListProductView, OnInit {

  value = '';
  listProduct = [];
  showMenu = false;
  isShowModal = false;
  selectedProduct: BankProduct = {};
  selectedRowIndex: number | null = null;
  searchProduct = '';

  constructor(public router: Router,
    public listProductPresenter: ListProductPresenter
  ) {
  }

  ngOnInit(): void {
    this.listProductPresenter.findAllProducts();
  }

  generateProduct() {
    console.log('change route');
    this.router.navigate(['/products/list']);
  }

  deleteProduct() {
    console.log('delete route');
  }

  showContextMenu(index: number) {
    this.showMenu = true;
    this.selectedRowIndex = this.selectedRowIndex === index ? null : index;
  }


  showModalDelete(product: any) {
    console.log(product);
    this.selectedProduct = product;
    this.isShowModal = true;
    this.showMenu = false;
  }

  closeModalProduct() {
    this.isShowModal = false;
    this.selectedProduct = {};
  }

  confirmDeleteProduct() {
    this.listProductPresenter.deleteProduct(this.selectedProduct.id);
    this.isShowModal = false;
  }


  showModalUpdate(product: any) {
    this.router.navigate(['/products/generate'], {
      state: {
        response: { data: { product } },
      },
    });
  }

  filterProducts() {
    this.listProductPresenter.listProduct = this.listProductPresenter.originListProduct.filter((item: any) => item.name.toLowerCase().includes(this.searchProduct.toLowerCase()));
  }

}
