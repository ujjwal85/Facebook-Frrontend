import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckvalideComponent } from './checkvalide.component';

describe('CheckvalideComponent', () => {
  let component: CheckvalideComponent;
  let fixture: ComponentFixture<CheckvalideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckvalideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckvalideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
