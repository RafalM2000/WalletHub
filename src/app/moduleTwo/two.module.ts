import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { TwoComponent } from './two/two.component';

import { UserService } from '../user.service';

const twoRoutes: Routes = [
  { path: 'two', component: TwoComponent},
]
@NgModule({
  declarations: [
    TwoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(twoRoutes),
    BrowserAnimationsModule
  ],
  providers: [ UserService ]
})
export class TwoModule { }