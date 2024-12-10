import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.sass'
})
export class IndexComponent implements OnInit {

  params = {
    name: ''
  };

  classes = [
    {
      name: 'CS01',
      teacher: {
        id: 1,
        name: 'San Zhang'
      }
    },
    {
      name: 'EE03',
      teacher: {
        id: 2,
        name: 'Si Li'
      }
    }
  ];

  constructor() {

  }

  ngOnInit(): void {
    
  }

  onQuery() : void {
    console.log('Query');
  }

}
