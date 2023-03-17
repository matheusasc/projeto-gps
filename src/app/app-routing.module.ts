import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {DetalhesComponent} from "./detalhes/detalhes.component";

const routes: Routes = [

  {
    path:'',
    children:[
      {
        path:'Home',
        title:'Home',
        component: HomeComponent,
      },
      {
        path:'Detalhes',
        title:'Detalhes',
        component: DetalhesComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
