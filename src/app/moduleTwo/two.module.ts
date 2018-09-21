import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

// import { AppComponent } from '../app.component';
// import { MenuComponent } from '../menu/menu.component';

import { TwoComponent } from './two/two.component';

import { UserService } from '../user.service';
// import { HomeComponent } from './home/home.component';
// import { OneDetailsComponent } from './one-details/one-details.component';

const twoRoutes: Routes = [
  // { path: 'login', component: LoginComponent },
  // { path: 'home', component: HomeComponent },
  // { path: 'one', component: OneComponent},
  { path: 'two', component: TwoComponent},
  // { path: '', redirectTo: '/login', pathMatch: 'full'},
  // { path: '**', redirectTo: '/login', pathMatch: 'full'}
]


@NgModule({
  declarations: [
    // AppComponent,
    // LoginComponent,
    // MenuComponent,
    // OneComponent,
    TwoComponent,
    // HomeComponent,
    // OneDetailsComponent
  ],
  imports: [
    CommonModule,
    // ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(twoRoutes),
    BrowserAnimationsModule
  ],
  providers: [ UserService ],
  bootstrap: []
})
export class TwoModule { }