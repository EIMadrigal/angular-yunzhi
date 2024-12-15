import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Klass } from '../../norm/entity/Klass';
import { Teacher } from '../../norm/entity/Teacher';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.sass'
})
export class AddComponent implements OnInit {

  name!: FormControl;
  teacherId!: FormControl;
  teacher!: Teacher;

  constructor(private httpClient: HttpClient, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.name = new FormControl('');
    // this.teacherId = new FormControl();
  }

  onSubmit(): void {
    const url = 'http://localhost:8080/class';
    const klass = new Klass(undefined, this.name.value,
      this.teacher
    );
    this.httpClient.post(url, klass).subscribe(() => {
      console.log('save success');
      this.router.navigate(['../'], { relativeTo: this.route });
    }, (response) => {
      console.log(`fail to ${url}` + response);
    });
  }

  onTeacherSelected(teacher: Teacher) {
    console.log(teacher);
    this.teacher = teacher;
  }
}
