import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user!:string;
  pass!:string;

  usuario = "javier";
  contraseña= "isaac";

  login(){
    if (this.user == this.usuario && this.pass == this.contraseña) {
      this.guardarDatos();

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Usuario y contraseña validas',
        showConfirmButton: false,
        timer: 1500
      })

    }else{
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'El usuario o contraseña es incorrecto',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }

  guardarDatos(){
    localStorage.setItem('usuario',this.usuario)
    localStorage.setItem('login',"true")
    // this.globalDataService.globalVariable = true;
  }
}
