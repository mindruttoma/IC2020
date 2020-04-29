import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CustommmaterialModule } from './custommmaterial.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AboutusComponent } from './shared/aboutus/aboutus.component';
import {SettingsComponent} from './settings/settings.component';
import { HttpClientModule } from '@angular/common/http';
import {SetproductComponent} from './admin/setproduct/setproduct.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AdminordersComponent } from './admin/adminorders/adminorders.component';
import { AdminusersComponent } from './admin/adminusers/adminusers.component';
import { OrdersComponent } from './user/orders/orders.component';
import { CartsComponent } from './user/carts/carts.component';
import { UserComponent } from './user/user/user.component';
import { ProductComponent } from './user/product/product.component';
import { LoginComponent } from './user/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdmintabComponent } from './admin/admintab/admintab.component';
import { AdmincartsComponent } from './admin/admincarts/admincarts.component';

//firebase settings
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule} from '@angular/fire/auth';
import { environment } from '../environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutusComponent,
    SettingsComponent,
    SetproductComponent,
    AdminordersComponent,
    AdminusersComponent,
    OrdersComponent,
    CartsComponent,
    UserComponent,
    ProductComponent,
    LoginComponent,
    AdmintabComponent,
    AdmincartsComponent
 
    
  ],
  imports: [
    CustommmaterialModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase, 'OnlineStore'),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule
    
   
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
