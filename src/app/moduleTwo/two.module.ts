import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { TwoComponent } from './two/two.component';
import { OnlyNumberDirective } from './two/onlynumber.directive';

import { UserService } from '../user.service';

const twoRoutes: Routes = [
  { path: '', component: TwoComponent},
];
@NgModule({
  declarations: [
    TwoComponent,
    OnlyNumberDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(twoRoutes),

  ],
  providers: [ UserService ]
})
export default class TwoModule { }
