import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsTemplateComponent } from './newsTemplate/newsTemplate.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [NewsTemplateComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule
  ],
  exports: [NewsTemplateComponent]
})
export class SharedModule { }
