import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailShowoffComponent } from './detail-showoff.component';

describe('DetailShowoffComponent', () => {
  let component: DetailShowoffComponent;
  let fixture: ComponentFixture<DetailShowoffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailShowoffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailShowoffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
