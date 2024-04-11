import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductComponent } from './components/list-product/list-product.component';
import { BankProductComponent } from './bank-product.component';
import { GenerateProductComponent } from './components/generate-product/generate-product.component';

const routes: Routes = [
    {
        path: 'products',
        component: BankProductComponent,
        children: [{
            path: 'list',
            component: ListProductComponent
        },{
            path: 'generate',
            component: GenerateProductComponent
        }]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BankProductRoutingModule { }
