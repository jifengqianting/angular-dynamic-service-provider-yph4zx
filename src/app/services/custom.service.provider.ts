import { BaseTypeService } from './base-type.service';
import { AService } from './a.service';
import { BService } from './b.service';
import { EntityService } from './entity.service';

let customServiceFactory = (entityService: EntityService) => {
  switch (entityService.serviceType) {
    case 'a':
      return new AService();
    case 'b':
      return new BService();
    default:
      return new BaseTypeService();
  }
}

export let customServiceProvider = {
  provide: BaseTypeService,
  useFactory: customServiceFactory,
  deps: [EntityService]
}