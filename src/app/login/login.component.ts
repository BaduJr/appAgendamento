import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup ({
    login: new FormControl(),
    senha: new FormControl()
  });
  
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      login: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  login(): void {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value);

      console.log('this.authService.isLoggedIn',this.authService.isLoggedIn);

      // if(this.authService.isLoggedIn
      //   .pipe(take(1),
      //     map((isLoggedIn: boolean) => {
      //       if (!isLoggedIn){
      //         return true;
      //       }
      //       return false;
      //     })
      //   )){
      //   alert('Login ou senha incorretos');
      // }
    }
  }
}