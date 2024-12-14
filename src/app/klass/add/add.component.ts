import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Klass } from '../../norm/entity/Klass';
import { Teacher } from '../../norm/entity/Teacher';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.sass'
})
export class AddComponent implements OnInit {

  name!: FormControl;
  teacherId!: FormControl;

  constructor(private httpClient: HttpClient) {

  }

  ngOnInit(): void {
    this.name = new FormControl('');
    this.teacherId = new FormControl();
  }

  onSubmit(): void {
    const url = 'http://localhost:8080/class';
    const klass = new Klass(undefined, this.name.value,
      new Teacher(parseInt(this.teacherId.value, 10), undefined, undefined)
    );
    this.httpClient.post(url, klass).subscribe(() => {
      console.log('save success');
    }, (response) => {
      console.log(`fail to ${url}` + response);
    });
  }
}
