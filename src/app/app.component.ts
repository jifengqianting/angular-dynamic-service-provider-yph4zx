import { Component, ViewChild, ComponentFactoryResolver, OnInit } from '@angular/core';
import { EntityService } from './services/entity.service';
import { EntityDirective } from './entity.directive';
import { EntityComponent } from './entity/entity.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  serviceType: string;
  @ViewChild(EntityDirective) entityHost: EntityDirective;
  constructor(private entityService: EntityService,
    private componentFactoryResolver: ComponentFactoryResolver) {
    this.serviceType = this.entityService.serviceType;
  }
  ngOnInit() {
    this.loadComponent();
  }
  changeType(event) {
    console.log('Type changed - ' + this.serviceType);
    this.entityService.updateServiceType(this.serviceType);
    this.loadComponent();
  }
  loadComponent() {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(EntityComponent);
    let viewContainerRef = this.entityHost.viewContRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
  }
}
