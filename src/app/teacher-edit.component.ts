import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AppComponent } from "./app.component";

@Component({
    templateUrl: './teacher-edit.component.html'
})
export class TeacherEditComponent implements OnInit {

    public teacher: any = {};
    private url!: string;

    constructor(private route: ActivatedRoute, private httpClient: HttpClient, private appComponent: AppComponent) {

    }

    getUrl(): string {
        if (this.url === undefined) {
            const id = this.route.snapshot.paramMap.get('id');
            console.log(id);
            this.url = 'http://localhost:8080/teacher/' + id;        
        }
        return this.url;
    }

    ngOnInit(): void {
        this.httpClient.get(this.getUrl()).subscribe((data) => {
            this.teacher = data;
        }, () => {
            console.log(`Request fail to ${this.getUrl()}`);
        });
    }

    onSubmit() : void {
        console.log('submit');
        this.httpClient.put(this.getUrl(), this.teacher).subscribe((data) => {
            console.log('update success');
            this.appComponent.ngOnInit();
        }, () => {
            console.log(`Request fail to ${this.getUrl()}`);
        });
    }
}
