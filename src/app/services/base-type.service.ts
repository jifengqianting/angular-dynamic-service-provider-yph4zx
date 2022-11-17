import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable()
export class BaseTypeService {
  sampleForm: FormGroup;
  constructor() {
    console.log('Base type service');
    this.sampleForm = new FormGroup({
      name: new FormControl('')
    })
  }

}