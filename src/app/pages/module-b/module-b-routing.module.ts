/**
    * @description      :
    * @author           :
    * @group            :
    * @created          : 18/11/2023 - 21:55:37
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 18/11/2023
    * - Author          :
    * - Modification    :
**/
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';

const routes: Routes = [
  {
    path : 'component-a',
    component : Page1Component
  },
  {
    path : 'component-b',
    component : Page2Component
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleBRoutingModule { }
