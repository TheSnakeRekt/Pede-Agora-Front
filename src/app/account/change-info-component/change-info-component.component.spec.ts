import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeInfoComponentComponent } from './change-info-component.component';

describe('ChangeInfoComponentComponent', () => {
  let component: ChangeInfoComponentComponent;
  let fixture: ComponentFixture<ChangeInfoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeInfoComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeInfoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
