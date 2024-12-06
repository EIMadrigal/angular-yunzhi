import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {

  constructor(private httpClient: HttpClient) {
    httpClient.get('http://localhost:8080/helloWorld').subscribe((data) => {
      console.log('Request successful');
      console.log(data);
      this.title = data as string;
    }, error);
  }

  title = 'angular-yunzhi';
}

function success(data: any) {
  
}

function error(data: any) {
  console.log('Request failed');
  console.log(data);
}
