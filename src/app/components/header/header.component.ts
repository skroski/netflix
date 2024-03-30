import { Component } from '@angular/core';
import { LOGO_URL } from '../../constants/config';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
   <div class="header">
    <img [src]="logoUrl" alt="logo" class="w-52" />
  </div>
  `,
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  logoUrl = LOGO_URL;
}
