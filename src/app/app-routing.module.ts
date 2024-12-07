import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherAddComponent } from './teacher-add.component';
import { TeacherEditComponent } from './teacher-edit.component';

const routes: Routes = [
  {
    path: 'add',
    component: TeacherAddComponent
  },
  {
    path: 'edit/:id',
    component: TeacherEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
