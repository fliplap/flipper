import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    protected username ?: string;
    protected password ?: string;

    protected loginForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) {
      this.loginForm = this.formBuilder.group({
          username: ['', Validators.required],
          password: ['', Validators.compose([Validators.required])]
      });
  }

  ngOnInit() {
  }

}
