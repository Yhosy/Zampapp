import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeIzquierdaComponent } from './home-izquierda.component';

describe('HomeIzquierdaComponent', () => {
  let component: HomeIzquierdaComponent;
  let fixture: ComponentFixture<HomeIzquierdaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeIzquierdaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeIzquierdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
