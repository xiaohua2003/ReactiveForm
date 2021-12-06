import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { passwordValidator } from './shared/password.validator';
import { forbiddenNameValidator } from './shared/user-name.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  registrationForm:FormGroup
  constructor(private fb: FormBuilder){
    
  }
  get email(){
    return this.registrationForm.get('email')
  }
  ngOnInit(){
    this.registrationForm=this.fb.group({
      userName:['yao', [Validators.required, Validators.minLength(3), forbiddenNameValidator(/xiao/)]],
      email:[''],
      subscribe:[false],
      passWord:[''],
      confirmPassword:[''],
      address:this.fb.group({
        city:[''],
        state:[''],
        postalCode:['']
      })
    }, {validator: passwordValidator});
    this.registrationForm.get('subscribe')?.valueChanges.subscribe(
      checkedValue=>{
        const email=this.registrationForm.get('email');
        if (checkedValue){
          email?.setValidators(Validators.required)
        }else{
          email?.clearValidators()
        }
        email?.updateValueAndValidity()
      }
    )
  }
 
  // registrationForm=new FormGroup({
  //   userName:new FormControl(''),
  //   passWord:new FormControl(''),
  //   confirmPassword:new FormControl(''),
  //   address: new FormGroup({
  //    city: new FormControl(''),
  //    state: new FormControl(''),
  //    postalCode: new FormControl('')
  //   })
  // })
  loadApi(){
    this.registrationForm.setValue({
      userName:'Emily',
      passWord:123,
      confirmPassword:123,
      address:{
        city:'edmonton',
        state:'alberta',
        postalCode:'t6j 3t2'
      }
    })
  }
}
