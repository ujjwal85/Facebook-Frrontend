import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfprofileComponent } from './selfprofile.component';

describe('SelfprofileComponent', () => {
  let component: SelfprofileComponent;
  let fixture: ComponentFixture<SelfprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelfprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelfprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
