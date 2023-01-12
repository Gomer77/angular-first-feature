import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilerComponent } from './pages/profiler/profiler.component';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProfilerComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ]
})
export class UserModule { }
