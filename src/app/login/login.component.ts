import { Component } from '@angular/core';
import * as loginData from '../../assets/labels.json'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public form_data_1: FormGroup;
  
  constructor(fb:FormBuilder){ 
    this.form_data_1 = fb.group({
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@augustahitech\\.com$')]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$')]]
    });
  }
  login(){}
  credentialsLabel= loginData
  loginData=this.credentialsLabel.LOGIN;
  login_validation=this.credentialsLabel.VALIDATION
}
