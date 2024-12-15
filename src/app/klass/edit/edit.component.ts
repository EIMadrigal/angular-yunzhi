import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Klass } from '../../norm/entity/Klass';
import { ActivatedRoute, Router } from '@angular/router';
import { Teacher } from '../../norm/entity/Teacher';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.sass'
})
export class EditComponent implements OnInit {

  formGroup!: FormGroup;
  private url!: string;
  teacher!: Teacher;

  constructor(private httpClient: HttpClient, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      name: new FormControl(),
      teacherId: new FormControl()
    });
    this.route.params.subscribe((param) => {
      this.setUrlById(param["id"]);
      this.loadData();
    });
  }

  private setUrlById(id: number): void {
    this.url = `http://localhost:8080/class/${id}`;
  }

  private getUrl(): string {
    return this.url;
  }

  loadData(): void {
    this.httpClient.get(this.getUrl()).subscribe((klass: any) => {
      console.log('Request success');
      this.formGroup.setValue({ name: klass.name, teacherId: klass.teacher.id });
      this.teacher = klass.teacher;
    }, () => {
      console.log(`fail to ${this.getUrl()}`);
    });
  }

  onSubmit(): void {
    const data = {
      name: this.formGroup.value.name,
      teacher: { id: this.formGroup.value.teacherId }
    };
    this.httpClient.put(this.getUrl(), data).subscribe(() => {
      this.router.navigate(['../../'], { relativeTo: this.route });
    }, () => {
      console.error('error');
    });
  }

  onSelected(teacher: Teacher) {
    this.teacher = teacher;
  }

}
