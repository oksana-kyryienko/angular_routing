import { NavigationComponent } from './components/navigation/navigation.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { GlobalErrorComponent } from './components/global-error/global-error.component';
import { ModalComponent } from './components/modal/modal.component';
import { ProductComponent } from './components/product/product.component';
import { FocusDirective } from './directives/focus.directive';
import { FilterProductsPipe } from './pipes/filter-products.pipe';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    GlobalErrorComponent,
    FilterProductsPipe,
    ModalComponent,
    CreateProductComponent,
    FocusDirective,
    AboutPageComponent,
    ProductPageComponent,
    NavigationComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
