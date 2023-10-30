import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrjectvaultComponent } from './prjectvault.component';

describe('PrjectvaultComponent', () => {
  let component: PrjectvaultComponent;
  let fixture: ComponentFixture<PrjectvaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrjectvaultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrjectvaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
