import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriggerPassComponent } from './trigger-pass.component';

describe('TriggerPassComponent', () => {
  let component: TriggerPassComponent;
  let fixture: ComponentFixture<TriggerPassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TriggerPassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TriggerPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
