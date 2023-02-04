import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  formRegister!:FormGroup;

  constructor(private userservice:UserService,private router:Router){

    this.formRegister = new FormGroup
    ({
      email: new FormControl(),
      password: new FormControl(),
    })
  }

  ngOnInit(){

  }

  registrar(){
    // console.log(this.formRegister.value)
    this.userservice.registrarUsuario(this.formRegister.value)
    .then(response=>{
        console.log(response)
    })
    .catch(
      error=>console.log(error)
    )
    
  }
}
