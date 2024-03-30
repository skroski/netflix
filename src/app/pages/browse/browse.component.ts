import { Component, inject } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [],
  template: `
    <p>
      browse works!
    </p>
  `,
  styleUrl: './browse.component.scss'
})
export class BrowseComponent {
  loginService = inject(LoginService)
  router = inject(Router)
  ngOnInit(): void {
    if (!this.loginService.isLoggedIn) {
      this.router.navigateByUrl('/login')
    }

  }

}
