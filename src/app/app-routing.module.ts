import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './shared/main/main.component';

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: '',
      component: MainComponent,
      loadChildren: () =>
        import('./modules/bank-product/bank-product.module').then(
          (m) => m.BankProductModule
        ),
    },
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
