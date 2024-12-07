import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent implements OnInit {

  constructor(private httpClient: HttpClient) {
    
  }

  teachers = new Array();

  ngOnInit(): void {
    const url = 'http://localhost:8080/teacher';

    const success = (response: any) => {
      console.log(response);
      this.teachers = response;
    }

    const error = function(response: object) {
      console.log(response);
      console.error('Request failed');
    }

    this.httpClient.get(url).subscribe(success, error);
  }

}
