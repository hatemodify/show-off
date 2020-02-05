import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListShowOffComponent } from './list-show-off.component';

describe('ListShowOffComponent', () => {
  let component: ListShowOffComponent;
  let fixture: ComponentFixture<ListShowOffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListShowOffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListShowOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
