import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './component/add/add.component';
import { HeaderComponent } from './component/header/header.component';
import { HotelListComponent } from './component/hotel-list/hotel-list.component';
import { LoginComponent } from './component/login/login.component';
import { RoomComponent } from './component/room/room.component';
import { UpdateComponent } from './component/update/update.component';


const newLocal = "update";
const routes: Routes = [
  {path: '', redirectTo:'hotelList' , pathMatch: 'full'},
  {path: 'hotelList', component: HotelListComponent},
  {path: 'updateUser' ,component: UpdateComponent},
  {path: "add" , component:AddComponent},
{path:"header",component:HeaderComponent},
{path :"login",component :LoginComponent},
{path :"room",component :RoomComponent}
   ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
