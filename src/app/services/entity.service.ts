import { Injectable } from '@angular/core';

@Injectable()
export class EntityService {
  serviceType = 'a';
  constructor() { }

  updateServiceType(servType: string) {
    this.serviceType = servType;
  }

}