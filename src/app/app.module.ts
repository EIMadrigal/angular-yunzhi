import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { TeacherAddComponent } from './teacher/teacher-add.component';
import { FormsModule } from '@angular/forms';
import { TeacherEditComponent } from './teacher/teacher-edit.component';
import { TeacherIndexComponent } from './teacher/teacher-index.component';
import { RouterModule } from '@angular/router';
import { KlassModule } from './klass/klass.module';

@NgModule({
  declarations: [
    AppComponent,
    TeacherAddComponent,
    TeacherEditComponent,
    TeacherIndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    KlassModule
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
