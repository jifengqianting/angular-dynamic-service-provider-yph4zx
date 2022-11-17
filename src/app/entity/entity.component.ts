import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { customServiceProvider } from '../services/custom.service.provider';
import { BaseTypeService } from '../services/base-type.service';

@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.css'],
  providers: [customServiceProvider]
})
export class EntityComponent implements OnInit {
  entityForm: FormGroup;
  constructor(private serv: BaseTypeService) { }

  ngOnInit() {
    this.entityForm = this.serv.sampleForm;
  }

}