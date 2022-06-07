import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './component/add/add.component';
import { HotelListComponent } from './component/hotel-list/hotel-list.component';
import { UpdateComponent } from './component/update/update.component';


const newLocal = "update";
const routes: Routes = [
  {path: '', redirectTo:'hotelList' , pathMatch: 'full'},
  {path: 'hotelList', component: HotelListComponent},
  {path: 'update' ,component: UpdateComponent},
  {path: "add" , component:AddComponent}
   ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
