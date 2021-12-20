import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDisplayComponent } from './product-display/product-display.component';
import { ProductInsertComponent } from './product-insert/product-insert.component';
import { ProductUpdateComponent } from './product-update/product-update.component';

const routes: Routes = [
  {path:'display',component:ProductDisplayComponent},
  {path:'insert',component:ProductInsertComponent},
  {path:'display/update/:id',component:ProductUpdateComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
