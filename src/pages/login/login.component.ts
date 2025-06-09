import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../app/services/user.service';
import { User } from '../../app/model/user.model';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  
  
  fb = inject(FormBuilder);
  userService = inject(UserService)
  loginObj : User = new User;
  
  
  ngOnInit(): void {
    
  }
  

  loginForm = this.fb.group({
    username : [''],
    password : [''],
    select : [''],
    checktype : [''],
  })

  onSubmit(){
    console.log(this.loginObj);
    
  }
}
