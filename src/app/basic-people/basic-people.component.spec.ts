import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicPeopleComponent } from './basic-people.component';

describe('BasicPeopleComponent', () => {
  let component: BasicPeopleComponent;
  let fixture: ComponentFixture<BasicPeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicPeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
