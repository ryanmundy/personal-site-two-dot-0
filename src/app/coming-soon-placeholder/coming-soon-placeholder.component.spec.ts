import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComingSoonPlaceholderComponent } from './coming-soon-placeholder.component';

describe('ComingSoonPlaceholderComponent', () => {
  let component: ComingSoonPlaceholderComponent;
  let fixture: ComponentFixture<ComingSoonPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComingSoonPlaceholderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComingSoonPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
