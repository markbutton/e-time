import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components';
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomeComponent, AlertComponent]
})
export class CoreModule { }
