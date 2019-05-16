import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthServiceService} from "../../../services/auth-service.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    protected username ?: string;
    protected password ?: string;

    protected loginForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder, private authService: AuthServiceService) {
      this.loginForm = this.formBuilder.group({
          username: ['', Validators.required],
          password: ['', Validators.compose([Validators.required])]
      });
  }

  ngOnInit() {
      this.authService.initAuth();
      if (this.authService.isLogged) {
          this.router.navigate(['/home']);
      }

  }

}
