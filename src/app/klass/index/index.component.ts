import { Component, OnInit } from '@angular/core';
import { Klass } from '../../norm/entity/Klass';
import { Teacher } from '../../norm/entity/Teacher';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.sass'
})
export class IndexComponent implements OnInit {

  private url = 'http://localhost:8080/class';

  params = {
    name: ''
  };

  classes!: any;

  constructor(private httpClient: HttpClient) {

  }

  ngOnInit(): void {
    this.onQuery();
  }

  onQuery() : void {
    console.log('Query');
    this.httpClient.get(this.url, { params: this.params }).subscribe(data => {
      console.log('Request success', data);
      this.classes = data;
    }, () => {
      console.log(`Request to ${this.url} fail`);
    });
  }

}
