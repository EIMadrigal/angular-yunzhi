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

const routes: Routes = [
    {
        path: '',
        component: IndexComponent
    },
    {
        path: 'add',
        component: AddComponent
    }
];

@NgModule({
  declarations: [
    IndexComponent,
    AddComponent
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
    // provideHttpClientTesting()
  ]
})
export class KlassModule {

}
