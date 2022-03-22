import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifComponent } from './lif.component';

describe('LifComponent', () => {
  let component: LifComponent;
  let fixture: ComponentFixture<LifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
