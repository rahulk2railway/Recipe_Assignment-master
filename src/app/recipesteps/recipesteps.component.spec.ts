import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipestepsComponent } from './recipesteps.component';

describe('RecipestepsComponent', () => {
  let component: RecipestepsComponent;
  let fixture: ComponentFixture<RecipestepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipestepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipestepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
