import { NgModule } from '@angular/core';
import { DemoComponent } from './components/demo/demo.component';
import { CommonModule } from '@angular/common';
import { DemoRoutingModule } from './demo-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    DemoRoutingModule
  ]
})
export class DemoModule {}
