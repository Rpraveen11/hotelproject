import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';

import { LoginComponent } from './component/login/login.component';
import { HotelListComponent } from './component/hotel-list/hotel-list.component';

import { HttpClientModule } from '@angular/common/http';
import { UpdateComponent } from './component/update/update.component';
import { AddComponent } from './component/add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

    LoginComponent,
    HotelListComponent,
    UpdateComponent,
    AddComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
