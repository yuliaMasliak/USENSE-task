import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { StartComponent } from './start/start.component';
import { MainComponent } from './main/main.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [StartComponent, MainComponent],
  imports: [CoreRoutingModule, CommonModule, ReactiveFormsModule]
})
export class CoreModule {}
