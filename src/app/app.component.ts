import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {

  constructor(private httpClient: HttpClient) {
    
  }

  title = 'angular-yunzhi';

  teachers = new Array(
    {
      id: 1,
      name: 'San Zhang',
      username: 'sanz',
      email: 'San.Zhang@google.com',
      gender: 'M'
    },
    {
      id: 2,
      name: 'Si Li',
      username: 'sil',
      email: 'Si.Li@alibaba.com',
      gender: 'F'
    }
  );
}
