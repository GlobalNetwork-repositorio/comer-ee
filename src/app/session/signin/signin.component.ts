import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  providers : [SessionService]
})
export class SigninComponent implements OnInit {

  public model = { 'username': '', 'password': '' };
  public form: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private loginService: SessionService) {}

  
  ngOnInit() {
    localStorage.clear();
    this.form = this.fb.group ( {
      uname: [null , Validators.compose ( [ Validators.required ] )] , password: [null , Validators.compose ( [ Validators.required ] )]
    } );
  }

 


  onSubmit() {
    debugger;
    let request;
   
    this.model.username = this.form.controls.uname.value;
    this.model.password = this.form.controls.password.value;

    this.loginService.sendCredentials(this.model)
    .subscribe(
    res => {
  
      // debugger;
       request = res;
       let x = JSON.stringify(res)
       let y = JSON.parse(x);
       if (y.sucess == true) {
         localStorage.setItem("currentUserName", this.model.username);
         localStorage.setItem("token", y.token);
         localStorage.setItem("anno",y.anno);
         localStorage.setItem("numeroEntrega",y.numeroEntrega)
         this.router.navigate ( [ '/' ] );
       } else {
         localStorage.clear();
         
       }
  
     
  
  
    }
  
    )


    
  }

}
