import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FirstComponent} from './first/first.component'
import { SecondeComponent } from './seconde/seconde.component';
import { ThirdComponent } from './third/third.component';
import { FourthComponent } from './fourth/fourth.component';
import { FifthComponent } from './fifth/fifth.component';

const routes: Routes = [
  {path:'first',component:FirstComponent},
  {path:'seconde',component:SecondeComponent},
  {path:'third',component:ThirdComponent},
  {path:'fourth',component:FourthComponent},
  {path:'fifth',component:FifthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
