import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankProductComponent } from './bank-product.component';
import { BankProductRoutingModule } from './bank-product-routing.module';
import { ListProductComponent } from './components/list-product/list-product.component';
import { HttpClientModule } from '@angular/common/http';
import { ListProductPresenter } from './components/list-product/presenter/list-product.presenter';
import { GenerateProductComponent } from './components/generate-product/generate-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BankProductComponent,
    ListProductComponent,
    GenerateProductComponent
  ],
  imports: [
    CommonModule,
    BankProductRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ListProductPresenter]
})
export class BankProductModule { }
