import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { AppMaterialModule } from './/app.material.module';
import { ContactformComponent } from './contactform/contactform.component';
import { ContactlistComponent } from './contactlist/contactlist.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactService } from './services/contact.service';
import { ApplicationService } from './services/application.service';
import { ApplicationListComponent } from './application-list/application-list.component';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactformComponent,
    ContactlistComponent,
    ApplicationListComponent,
    ApplicationFormComponent,
    MenuComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,    
    HttpClientModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    AppRoutingModule    
  ],
  providers: [
    ContactService, 
    ApplicationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
