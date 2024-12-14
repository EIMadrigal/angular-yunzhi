import { NgModule } from "@angular/core";
import { IndexComponent } from './index/index.component';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from "../app-routing.module";
import { provideHttpClient } from "@angular/common/http";
import { provideHttpClientTesting } from "@angular/common/http/testing";

@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    provideHttpClient(),
    provideHttpClientTesting()
  ]
})
export class KlassModule {

}
