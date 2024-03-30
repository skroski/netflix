import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { BG_IMG_URL, LOGO_URL } from '../../constants/config';
import { HeaderComponent } from "../../components/header/header.component";
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    standalone: true,
    template: `
    <div class="h-screen" [ngStyle]="{ 'background-image': 'url(' + bgUrl + ')' }">
    <app-header></app-header>
      <div class="login-container">
        <div class="login-card">
          <h2 class="heading">Entrar</h2>
          <form (ngSubmit)="onSubmit()" >
            <div class="form-field">
              <input type="text" class="input" name="email" [(ngModel)]="email" placeholder="Email ou Telefone" />
            </div>
            <div class="form-field">
              <input type="password" class="input" [(ngModel)]="password" name="Password"  placeholder="Senha" />
            </div>
            <div class="action-field">
              <button class="login-btn">Entrar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `,
    styleUrl: './login.component.scss',
    imports: [CommonModule, HeaderComponent, FormsModule]
})
export class LoginComponent {
  logoUrl = LOGO_URL;
  bgUrl = BG_IMG_URL;

  email!: string;
  password!: string;

  loginService = inject(LoginService);
  router = inject(Router)

  onSubmit(){
    //validate email and password
    if (!this.email || this.password) {
      alert("digite email ou senha")
      return
    }
    console.log(this.email,this.password);
    // se email e senha estiver correto vamos logar o usuario
    this.loginService.login(this.email, this.password);
    // agora o usuario está logado e podemos direcionar para o dashboard do sistema.
    this.router.navigateByUrl('/browse')
  }

}
