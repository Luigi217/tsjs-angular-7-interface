
import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {
    canActivate() {
        console.log('logged ? =' + localStorage.getItem('logged'));
        if ( localStorage.getItem('logged') === 'true') {
          console.log('access granted');
          return true;
        } else {
          console.log('access denied');
          return false;
        }
    }
}
