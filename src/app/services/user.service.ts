import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  login:number=0;

  users:Array<User>=[
    {
      usuario:"javi",
      password:"123",
      login:0
    },
    {
      usuario:"nat",
      password:"123",
      login:0
    },
    {
      usuario:"pepe",
      password:"123",
      login:0
    },
  ]

  checkLogin(usuarioFormulario:string, passwordFormulario:string){
    const usuarioEncontrado = this.users.find((user) => user.usuario === usuarioFormulario);
    const passwordEncontrao = this.users.find((user) => user.password === passwordFormulario);
    console.log(usuarioEncontrado);
    if(usuarioEncontrado && passwordEncontrao){
      let pos=this.users.findIndex(u=>u.usuario==usuarioFormulario);
      this.users[pos].login=1;
    }
  }

  getLogin(){
    return this.login;
  }
}
