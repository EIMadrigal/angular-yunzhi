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

    this.httpClient.get(url).subscribe((response: any) => {
      console.log(response);
      this.teachers = response;
    }, (response: object) => {
      console.log(response);
      console.error('Request failed');
    });
  }

}
