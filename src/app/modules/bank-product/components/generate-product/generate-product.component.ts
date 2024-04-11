import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BankProduct } from 'src/app/models/product-bank.model';
import { GenerateProductPresenter } from './presenter/generate-product.presenter';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-generate-product',
  templateUrl: './generate-product.component.html',
  styleUrls: ['./generate-product.component.scss']
})
export class GenerateProductComponent implements OnInit {

  formProduct: FormGroup;
  submitted = false;
  selectedProduct: BankProduct;

  receivedData: any;
  isUpdate = false;

  constructor(private formBuilder: FormBuilder,
    public generateProductPresenter: GenerateProductPresenter,
    private router: Router

  ) {

    this.receivedData = this.router.getCurrentNavigation();
    this.selectedProduct = {
      id: '',
      logo: '',
      name: '',
      description: '',
      dateRelease: '',
      dateRevision: '',
    };
    this.formProduct = this.formBuilder.group({
      id: ['', [Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10)]],
      name: ['', [Validators.required,
      Validators.minLength(5),
      Validators.maxLength(100)]],
      description: ['', [Validators.required,
      Validators.minLength(10),
      Validators.maxLength(200)]],
      logo: ['', [Validators.required]],
      dateRelease: ['', [Validators.required]],
      dateRevision: ['', [Validators.required]],
    });

    if (!this.receivedData?.extras?.state?.response?.data.product) {
      this.router.navigate(['/products/generate']);
    } else {
      this.selectedProduct = this.receivedData.extras.state.response.data.product;
      this.addValuesForm(this.selectedProduct);
      this.isUpdate = true;
    }
  }


  ngOnInit() {

    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state;
    if (!this.isUpdate) {
      this.formProduct.patchValue({
        id: this.selectedProduct.id,
        logo: this.selectedProduct.logo,
        name: this.selectedProduct.name,
        description: this.selectedProduct.description,
        dateRelease: this.selectedProduct.dateRelease,
        dateRevision: this.selectedProduct.dateRevision
      })
    }
  }


  clearForm() {
    this.formProduct.patchValue({
      id: '',
      name: '',
      description: '',
      logo: '',
      dataRelease: '',
      dataRevision: '',
    });
    this.submitted = false;
    if (this.formProduct.invalid) {
      return;
    }
  }

  formatDateString(inputDateString: any) {
    const date = new Date(inputDateString);
    const year = date.getUTCFullYear();
    const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
    const day = date.getUTCDate().toString().padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;

    return formattedDate;
  }

  addValuesForm(product: BankProduct) {
    console.log(product);
    this.formProduct.patchValue({
      id: product.id,
      name: product.name,
      description: product.description,
      logo: product.logo,
      dateRelease: this.formatDateString(product.dateRelease),
      dateRevision: this.formatDateString(product.dateRevision),
    });
  }

  get f() {
    return this.formProduct.controls;
  }

  saveProduct() {
    this.submitted = true;
    this.selectedProduct.id = this.formProduct.get('id')?.value;
    this.selectedProduct.name = this.formProduct.get('name')?.value;
    this.selectedProduct.logo = this.formProduct.get('logo')?.value;
    this.selectedProduct.description = this.formProduct.get('description')?.value;
    this.selectedProduct.dateRelease = this.formProduct.get('dateRelease')?.value;
    this.selectedProduct.dateRevision = this.formProduct.get('dateRevision')?.value;
    if (this.formProduct.invalid) {
      window.alert('Existen campos requeridos sin completar')
      return;
    } else {
      this.isUpdate ? this.generateProductPresenter.updateProduct(this.selectedProduct) :
        this.generateProductPresenter.saveProduct(this.selectedProduct);
    }
  }
}
