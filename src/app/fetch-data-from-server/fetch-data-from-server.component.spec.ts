import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchDataFromServerComponent } from './fetch-data-from-server.component';

describe('FetchDataFromServerComponent', () => {
  let component: FetchDataFromServerComponent;
  let fixture: ComponentFixture<FetchDataFromServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FetchDataFromServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchDataFromServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
