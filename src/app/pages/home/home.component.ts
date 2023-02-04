import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  constructor(private userServices:UserService,private router:Router){

  }
  salir(){
    this.userServices.salir()
    .then(response=>{
      console.log(response)
      this.router.navigate(['login']);
    })
    .catch(
        error=>console.log(error)
      )
  }
}
