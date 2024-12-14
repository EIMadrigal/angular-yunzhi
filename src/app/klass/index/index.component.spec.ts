import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexComponent } from './index.component';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { Klass } from '../../norm/entity/Klass';
import { Teacher } from '../../norm/entity/Teacher';

describe('IndexComponent', () => {
  let component: IndexComponent;
  let fixture: ComponentFixture<IndexComponent>;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndexComponent],
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    fixture = TestBed.createComponent(IndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // bug here, can't capture the mock response in index.component.ts
  it('should create', () => {
    expect(component).toBeTruthy();
    
    // component.onQuery().subscribe((res) => 
    //   expect(res).toEqual(classes, 'should return expected result'), fail
    // );

    // component.onQuery();

    const req = httpTestingController.expectOne('http://localhost:8080/class?name=');
    expect(req.request.method).toEqual('GET');
    expect(req.request.urlWithParams).toEqual('http://localhost:8080/class?name=');
    expect(component.onQuery()).toHaveBeenCalled();

    const classes = [
      new Klass(1, 'CS01', new Teacher(1, 'San Zhang', 'sanz')),
      new Klass(2, 'EE03', new Teacher(2, 'Si Li', 'sil')),
    ];

    req.flush(classes);
    fixture.detectChanges();

  });
});
