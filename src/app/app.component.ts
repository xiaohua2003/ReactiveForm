import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private fb: FormBuilder){
    
  }
  registrationForm=this.fb.group({
    userName:['yao', [Validators.required, Validators.minLength(3)]],
    passWord:[''],
    confirmPassword:[''],
    address:this.fb.group({
      city:[''],
      state:[''],
      postalCode:['']
    })
  })
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
