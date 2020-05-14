import { NgModule } from '@angular/core';
import {HeaderComponent} from './shared/header/header.component';
import {FooterComponent} from './shared/footer/footer.component';
import {AboutusComponent} from './shared/aboutus/aboutus.component';
import { CommonModule } from '@angular/common';
import { RouterModule ,Routes} from '@angular/router';
import {SettingsComponent} from './settings/settings.component';
import { AdmintabComponent } from './admin/admintab/admintab.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ProductGridComponent } from './shared/aboutus/product-grid/product-grid.component';
import { AccessoryGridComponent } from './shared/aboutus/accessory-grid/accessory-grid.component';
//import { LoginComponent } from './user/login/login.component';
import { LoginComponent } from './shared/auth/login/login.component';
import { RegistrationComponent } from './shared/auth/registration/registration.component';
const routes: Routes = [
 // {path: '',redirectTo: '/login',pathMatch:'full'},
 // {path:'aboutus',component:AboutusComponent},
  {path: 'admin', component :AdmintabComponent },
  {path:'settings',component:SettingsComponent},
 
 // {path:'login',component:LoginComponent},
 // {path: '**',redirectTo:'/login',pathMatch:'full'},
  {
    path: 'login',
    component: LoginComponent  
  },
  {
    path: 'products',
    component: ProductGridComponent  
  },
  {
    path: 'accessories',
    component: AccessoryGridComponent  
  },
  {
    path: 'register',
    component: RegistrationComponent
  },
  {
    path: 'aboutus',
    component: AboutusComponent
  },
  {
    path: '',
    redirectTo: '/aboutus',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [
  CommonModule,  
  MatTabsModule,
  RouterModule.forRoot(routes)
],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
