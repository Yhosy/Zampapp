import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDerechaComponent } from './home-derecha.component';

describe('HomeDerechaComponent', () => {
  let component: HomeDerechaComponent;
  let fixture: ComponentFixture<HomeDerechaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeDerechaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDerechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
