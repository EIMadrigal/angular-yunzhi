import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { TeacherIndexComponent } from "./teacher-index.component";

@Component({
    selector: 'app-teacher-add',
    templateUrl: './teacher-add.component.html'
})
export class TeacherAddComponent implements OnInit {
    
    name!: string;
    username!: string;
    email!: string;
    gender!: boolean;

    constructor(private httpClient: HttpClient, private teacherIndexComponent: TeacherIndexComponent) {

    }
    
    ngOnInit(): void {

    }

    public onSubmit() : void {
        console.log('click submit button');
        const url = 'http://localhost:8080/teacher';
        const teacher = {
            name: this.name,
            username: this.username,
            email: this.email,
            gender: this.gender
        };

        console.log(teacher);

        this.httpClient.post(url, teacher).subscribe((response) => {
            console.log('request success');
            this.teacherIndexComponent.ngOnInit();
        }, (response) => {
            console.error('request fail', response);
        });
    }
}
