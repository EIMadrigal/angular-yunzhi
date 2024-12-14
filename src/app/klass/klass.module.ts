import { NgModule } from "@angular/core";
import { IndexComponent } from './index/index.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from "../app-routing.module";
import { provideHttpClient } from "@angular/common/http";
import { provideHttpClientTesting } from "@angular/common/http/testing";
import { AddComponent } from './add/add.component';
import { RouterModule, Routes } from "@angular/router";
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
    {
        path: '',
        component: IndexComponent
    },
    {
        path: 'add',
        component: AddComponent
    },
    {
        path: 'edit/:id',
        component: EditComponent
    }
];

@NgModule({
  declarations: [
    IndexComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    // BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    provideHttpClient(),
    // only use if need test http request, otherwise req will be captured by test code and can't see the response at 4200
    // provideHttpClientTesting()
  ]
})
export class KlassModule {

}
