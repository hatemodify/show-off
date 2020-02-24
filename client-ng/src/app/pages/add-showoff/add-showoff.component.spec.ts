import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddShowoffComponent } from './add-showoff.component';

describe('AddShowoffComponent', () => {
  let component: AddShowoffComponent;
  let fixture: ComponentFixture<AddShowoffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddShowoffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddShowoffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
