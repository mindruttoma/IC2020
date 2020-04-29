import { NgModule } from '@angular/core';
import {HeaderComponent} from './shared/header/header.component';
import {FooterComponent} from './shared/footer/footer.component';
import {AboutusComponent} from './shared/aboutus/aboutus.component';
import { CommonModule } from '@angular/common';
import { RouterModule ,Routes} from '@angular/router';
import {SettingsComponent} from './settings/settings.component';
import { AdmintabComponent } from './admin/admintab/admintab.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ProductComponent}  from './user/product/product.component';
import { LoginComponent } from './user/login/login.component';
const routes: Routes = [
  {path: '',redirectTo: '/login',pathMatch:'full'},
  {path:'aboutus',component:AboutusComponent},
  {path: 'admin', component :AdmintabComponent},
  {path:'settings',component:SettingsComponent},
  {path:'product',component:ProductComponent},
  {path:'login',component:LoginComponent},
  {path: '**',redirectTo:'/login',pathMatch:'full'},
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
