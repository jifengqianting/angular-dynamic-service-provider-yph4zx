import { Injectable } from '@angular/core';
import { BaseTypeService } from './base-type.service';

@Injectable()
export class BService extends BaseTypeService {

  serviceName = 'Service B';
  constructor() {
    super();
    console.log('log from service b');
    this.sampleForm.get('name').setValue('test from B');
  }

}