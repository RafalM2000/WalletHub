import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';


@Injectable({
    providedIn: 'root'
  })

export class AuthGuard implements CanActivate {

    constructor(private _router: Router) {}

    canActivate() {
        if (localStorage.getItem && localStorage.getItem('IsUsereAuthorised') === 'Yes') {
            return true;
        }
        if (!localStorage.getItem || localStorage.getItem('IsUsereAuthorised') !== 'Yes') {
            this._router.navigate(['/login']);
            return false;
        }
    }
}
