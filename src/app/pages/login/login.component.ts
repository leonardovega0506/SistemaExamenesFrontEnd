import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginData = {
    "username" : '',
    "password" : '',
  }

  constructor(private snack:MatSnackBar,private login:LoginService) { }

  ngOnInit(): void {
  }

  formSubmit(){
    if(this.loginData.username.trim() == '' || this.loginData.username.trim() == null){
      this.snack.open('El nombre de usuario es requerido !!','Aceptar',{
        duration:3000
      })
      
      return;
    }

    if(this.loginData.password.trim() == '' || this.loginData.password.trim() == null){
      this.snack.open('La contraseña es requerida !!','Aceptar',{
        duration:3000
      })
      return;
    }
    this.login.generateToken(this.loginData).subscribe(
      (data:any) =>{
        console.log(data);
        this.login.loginUser(data.token);
        this.login.getCurrentUser().subscribe(
          (user:any) =>{
            this.login.setUser(user);
            console.log(user);

            if(this.login.getUserRole() == "ADMIN"){
              //dashboard admin
              window.location.href = '/admin';
            }
            else if(this.login.getUserRole() == "NORMAL"){
              window.location.href = '/user-dashboard';
            }
            else{
              this.login.logout();
            }
          });
    },
    (error) =>{
      console.log(error);
      this.snack.open('Detalles invalidos, vuelva a intentar','Aceptar',{
        duration: 3000
      });
    });
  }
}
