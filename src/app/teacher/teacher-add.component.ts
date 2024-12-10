import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { TeacherIndexComponent } from "./teacher-index.component";
import { Router } from "@angular/router";
import { AppComponent } from "../app.component";

@Component({
    templateUrl: './teacher-add.component.html'
})
export class TeacherAddComponent implements OnInit {
    
    name!: string;
    username!: string;
    email!: string;
    gender!: boolean;
    message = '';

    constructor(private httpClient: HttpClient,
        private appComponent: AppComponent,
        private router: Router) {

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
            this.appComponent.ngOnInit();
            this.router.navigate(['./']);
        }, (response) => {
            this.showMessage('Error');
            console.error('request fail', response);
        });
    }

    public showMessage(message = 'Error') : void {
        this.message = message;
        setTimeout(() => {
            this.message = '';
        }, 1500);
    }
}
