import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOffComponent } from './show-off.component';

describe('ShowOffComponent', () => {
  let component: ShowOffComponent;
  let fixture: ComponentFixture<ShowOffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowOffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
