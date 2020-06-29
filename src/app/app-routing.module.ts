import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'login', 
    pathMatch: 'full' 
  },
  { 
    path: 'login', 
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
  },
  {
    path: 'student-create',
    loadChildren: () => import('./student-create/student-create.module').then( m => m.StudentCreatePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'student-edit',
    loadChildren: () => import('./student-edit/student-edit.module').then( m => m.StudentEditPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'student-list',
    loadChildren: () => import('./student-list/student-list.module').then( m => m.StudentListPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'student-detail',
    loadChildren: () => import('./student-detail/student-detail.module').then( m => m.StudentDetailPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
