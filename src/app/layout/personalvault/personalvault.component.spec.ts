import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalvaultComponent } from './personalvault.component';

describe('PersonalvaultComponent', () => {
  let component: PersonalvaultComponent;
  let fixture: ComponentFixture<PersonalvaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalvaultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalvaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
