import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicHorsesComponent } from './basic-horses.component';

describe('BasicHorsesComponent', () => {
  let component: BasicHorsesComponent;
  let fixture: ComponentFixture<BasicHorsesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicHorsesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicHorsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
