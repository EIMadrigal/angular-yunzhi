import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    templateUrl: './teacher-edit.component.html'
})
export class TeacherEditComponent implements OnInit {

    public teacher: any;

    constructor(private route: ActivatedRoute, private httpClient: HttpClient) {

    }

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
        console.log(id);
        const url = 'http://localhost:8080/teacher/' + id;
        this.httpClient.get(url).subscribe((data) => {
            this.teacher = data;
        }, () => {
            console.log(`Request fail to ${url}`);
        });
    }
}
