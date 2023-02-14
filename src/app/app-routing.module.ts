import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './error404/error404.component';
import { GuardaLoginGuard } from './guards/guarda-login.guard';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { MaterialMotorComponent } from './secciones/material-motor/material-motor.component';

const routes: Routes = [
  {path:"",component:InicioComponent},
  {path:"login",component:LoginComponent},
  {path:"materialMotor", component:MaterialMotorComponent, canActivate:[GuardaLoginGuard]},
  {path:"**",component:Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//, canActivate:[GuardaLoginGuard]
