import { Component } from '@angular/core';
import { BG_IMG_URL, LOGO_URL } from '../../constants/config';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgStyle],
  template: `
    <div class="h-screen" [ngStyle]="{ 'background-image': 'url(' + bgUrl + ')' }">
      <div class="login-container">
        <div class="login-card">
          <h2 class="heading">Entrar</h2>
          <form >
            <div class="form-field">
              <input type="text" class="input" name="email" placeholder="Email ou Telefone" />
            </div>
            <div class="form-field">
              <input type="password" class="input" name="Password"  placeholder="Password" />
            </div>
            <div class="action-field">
              <button class="login-btn">Entrar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `,
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  logoUrl = LOGO_URL;
  bgUrl = BG_IMG_URL;
}
