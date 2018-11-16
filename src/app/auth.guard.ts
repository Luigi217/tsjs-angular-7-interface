import { CanActivate } from '@angular/router/src/utils/preactivation';


export class AuthGuard implements CanActivate {
    canActivate() {
        console.log('Ok');
        return false;
    }
}