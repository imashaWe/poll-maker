import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TostComponent } from './tost.component';

describe('TostComponent', () => {
  let component: TostComponent;
  let fixture: ComponentFixture<TostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
