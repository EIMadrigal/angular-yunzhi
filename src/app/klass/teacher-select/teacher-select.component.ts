import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Teacher } from '../../norm/entity/Teacher';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-teacher-select',
  templateUrl: './teacher-select.component.html',
  styleUrl: './teacher-select.component.sass'
})
export class TeacherSelectComponent implements OnInit {

  teachers!: Array<Teacher>;

  teacherSelect!: FormControl;

  @Output()
  selected = new EventEmitter<Teacher>();

  @Input()
  teacher!: { id: number };

  constructor(private httpClient: HttpClient) {

  }

  /**
   * 
   */
  ngOnInit(): void {
    this.teacherSelect = new FormControl();
    const url = 'http://localhost:8080/teacher';

    this.httpClient.get(url).subscribe((response: any) => {
      console.log(response);
      this.teachers = response;
      this.teachers.forEach((teacher) => {
        if (this.teacher) {
          if (teacher.id === this.teacher.id) {
            this.teacherSelect.setValue(teacher);
            console.log(teacher.id);
          }
        }
      });
    }, (response: object) => {
      console.log(response);
      console.error('Request failed');
    });
  }

  onChange() {
    console.log(this.teacherSelect.value);
    this.selected.emit(this.teacherSelect.value);
  }

}
