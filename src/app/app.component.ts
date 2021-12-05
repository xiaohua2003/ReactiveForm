import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  registrationForm=new FormGroup({
    userName:new FormControl(''),
    passWord:new FormControl(''),
    confirmPassword:new FormControl(''),
    address: new FormGroup({
     city: new FormControl(''),
     state: new FormControl(''),
     postalCode: new FormControl('')
    })
  })
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
