/**
    * @description      :
    * @author           :
    * @group            :
    * @created          : 18/11/2023 - 21:55:06
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 18/11/2023
    * - Author          :
    * - Modification    :
**/
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'module-a',
    loadChildren: () => import('./pages/module-a/module-a.module').then(m => m.ModuleAModule)
  },
  {
    path: 'module-b',
    loadChildren: () => import('./pages/module-b/module-b.module').then(m => m.ModuleBModule)
  },
  {
    path: 'module-c',
    loadChildren: () => import('./pages/module-c/module-c.module').then(m => m.ModuleCModule)
  },
  {
    path : '**',
    redirectTo : 'module-a',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
