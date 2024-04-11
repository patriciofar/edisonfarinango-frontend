import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './shared/main/main.component';
import { TopBarComponent } from './shared/top-bar/top-bar.component';
import { BankProductService } from './services/bank-product.service';
import { BankProductModule } from './modules/bank-product/bank-product.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BankProductModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
