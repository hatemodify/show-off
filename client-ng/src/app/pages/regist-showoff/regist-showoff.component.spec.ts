import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistShowoffComponent } from './regist-showoff.component';

describe('RegistShowoffComponent', () => {
  let component: RegistShowoffComponent;
  let fixture: ComponentFixture<RegistShowoffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistShowoffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistShowoffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
