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
import { ProductComponent } from './shared/aboutus/product/product.component';
import { ProductGridComponent } from './shared/aboutus/product-grid/product-grid.component';
import { AccessoryComponent } from './shared/aboutus/accessory/accessory.component';
import { AccessoryGridComponent } from './shared/aboutus/accessory-grid/accessory-grid.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';


//import { LoginComponent } from './user/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdmintabComponent } from './admin/admintab/admintab.component';



//firebase settings
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule} from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { RegistrationComponent } from './shared/auth/registration/registration.component';
import { LoginComponent } from './shared/auth/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutusComponent,
    SettingsComponent,
    ProductComponent,
    ProductGridComponent,
    AccessoryComponent,
    AccessoryGridComponent,
    LoginComponent,
    AdmintabComponent,
   
    RegistrationComponent,
 
    
  ],
  imports: [
    CustommmaterialModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule
    
   
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
