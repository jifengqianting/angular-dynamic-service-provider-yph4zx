import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AService } from './services/a.service';
import { BService } from './services/b.service';
import { EntityService } from './services/entity.service';
import { EntityComponent } from './entity/entity.component';
import { EntityDirective } from './entity.directive';
import { BaseTypeService } from './services/base-type.service';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [AppComponent, EntityComponent, EntityDirective],
  bootstrap: [AppComponent],
  providers: [AService, BService, EntityService, BaseTypeService],
  entryComponents: [EntityComponent]
})
export class AppModule { }
