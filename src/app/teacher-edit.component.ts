import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AppComponent } from "./app.component";

@Component({
    templateUrl: './teacher-edit.component.html'
})
export class TeacherEditComponent implements OnInit {

    public teacher: any = {};
    private url!: string;
    private id!: number;

    constructor(private route: ActivatedRoute,
        private httpClient: HttpClient,
        private appComponent: AppComponent,
        private router: Router) {

    }

    getUrl(): string {    
        return 'http://localhost:8080/teacher/' + this.id;        
    }

    load() : void {
        console.log('loading teacher data');
        this.httpClient.get(this.getUrl()).subscribe((data) => {
            this.teacher = data;
        }, () => {
            console.log(`Request fail to ${this.getUrl()}`);
        });
    }

    ngOnInit(): void {
        this.route.params.subscribe(data => {
            console.log('route param changed and get notified');
            this.id = data["id"];
            this.load();
        });
    }

    onSubmit() : void {
        console.log('submit');
        this.httpClient.put(this.getUrl(), this.teacher).subscribe((data) => {
            console.log('update success');
            this.appComponent.ngOnInit();
            this.router.navigate(['/']);
        }, () => {
            console.log(`Request fail to ${this.getUrl()}`);
        });
    }
}
