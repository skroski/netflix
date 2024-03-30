import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService)
  const  router = inject(Router)
    if (!loginService.isLoggedIn) {
      return router.createUrlTree(["/login"]);
    }else{
      return true;
    }

};
