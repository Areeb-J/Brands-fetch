import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MainHeaderComponent } from "./main-header.component";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ReactiveFormsModule],
  exports: [MainHeaderComponent],
  declarations: [MainHeaderComponent],
})
export class MainHeaderModule { }
export { MainHeaderComponent };


