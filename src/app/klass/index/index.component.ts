import { Component, OnInit } from '@angular/core';
import { Klass } from '../../norm/entity/Klass';
import { Teacher } from '../../norm/entity/Teacher';

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
    new Klass(1, 'CS01', new Teacher(1, 'San Zhang', 'sanz')),
    new Klass(2, 'EE03', new Teacher(2, 'Si Li', 'sil')),
  ];

  constructor() {

  }

  ngOnInit(): void {
    
  }

  onQuery() : void {
    console.log('Query');
  }

}
