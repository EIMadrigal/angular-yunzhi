import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-teacher-add',
    templateUrl: './teacher-add.component.html'
})
export class TeacherAddComponent implements OnInit {
    
    name!: string;
    username!: string;
    email!: string;
    gender!: boolean;
    
    ngOnInit(): void {

    }
}
