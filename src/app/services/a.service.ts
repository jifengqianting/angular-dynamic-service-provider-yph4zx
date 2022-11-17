import { Injectable } from '@angular/core';
import {BaseTypeService} from './base-type.service';
import { FormBuilder } from '@angular/forms';

@Injectable()
export class AService extends BaseTypeService {

  serviceName = 'Service A';
  constructor(private fb: FormBuilder) {
    super();
    console.log('log from service a');
    this.sampleForm.get('name').setValue('test from A');
  }
}