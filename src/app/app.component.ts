import { Observable, tap } from 'rxjs';
import { IProduct } from './models/product';
import { Component, OnInit } from '@angular/core';
import {products as data} from './data/products';
import { ProductsService } from './services/products.service';
import { ModalService } from './services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}
