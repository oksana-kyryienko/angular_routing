import { ModalService } from './../../services/modal.service';
import { ProductsService } from './../../services/products.service';
import { Component, Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
})


export class CreateProductComponent implements OnInit {

  constructor(

    private productService: ProductsService,
    private modalService: ModalService
    ) {

  }

  form = new FormGroup({
    title: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(5)
    ])
  })

  get title () {
    return this.form.controls.title as FormControl;
  }

  ngOnInit(): void {

  }

  submit() {
    this.productService.create({
      title: this.form.value.title as string,
      price: 13.5,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic',
      id: 0,
      rating: {
        rate: 42,
        count: 1
      }
    }).subscribe(() => {
      this.modalService.close();
    })
  }

}
