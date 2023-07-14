import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { UserService } from '../user.service';//specify the userservice file path 
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm!:FormGroup;
  isSubmitted=false;
  returnUrl='';
  invalid=false;
  constructor(private formBuilder:FormBuilder,private userservice:UserService,private route:Router){
    this.loginForm=this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
    });

  }
  get fc(){
    return this.loginForm.controls;
  }
  submit(){
    this.isSubmitted=true;
    if(this.loginForm.invalid) return;
    this.userservice.login({email:this.fc['email'].value,password:this.fc['password'].value}).subscribe((res:any)=>{
      if(res['msg']!=-1){
      this.route.navigateByUrl("/");//routing to home page
    }
    else{
      this.invalid=true;

    }
    })
  }


}