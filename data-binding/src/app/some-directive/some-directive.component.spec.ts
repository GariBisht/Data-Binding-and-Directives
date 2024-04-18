import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeDirectiveComponent } from './some-directive.component';

describe('SomeDirectiveComponent', () => {
  let component: SomeDirectiveComponent;
  let fixture: ComponentFixture<SomeDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SomeDirectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
