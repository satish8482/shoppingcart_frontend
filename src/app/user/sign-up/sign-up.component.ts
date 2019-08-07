import { Component, OnInit } from '@angular/core';
import {UserService} from '../../shared/user.service'
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers:[UserService]
})
export class SignUpComponent implements OnInit {

  constructor(private userService:UserService) { }
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showsuccessMessage:boolean
  servererrorMessage:string
  ngOnInit() {
  }

  onSubmit(form:NgForm){
    this.userService.postUser(form.value).subscribe(
      res=>{
        this.showsuccessMessage=true
        setTimeout(() => {
          this.showsuccessMessage=false
        },4000);
        this.resetForm(form)
      },
      err=>{
      if(err.status===422){
        this.servererrorMessage=err.error.join('<br/>');
        
      }
      else{
        this.servererrorMessage='Something went wrong. Please contact admin'
      }
      }
    )
  }


  resetForm(form:NgForm){
    this.userService.selectedUser={
      fullName:'',
      email:'',
      password:''
    }
  form.resetForm();
  this.servererrorMessage='';
  }
}
