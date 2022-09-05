import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirendrequiestComponent } from './firendrequiest.component';

describe('FirendrequiestComponent', () => {
  let component: FirendrequiestComponent;
  let fixture: ComponentFixture<FirendrequiestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirendrequiestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirendrequiestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
