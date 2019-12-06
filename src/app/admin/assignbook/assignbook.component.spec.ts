import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignbookComponent } from './assignbook.component';

describe('AssignbookComponent', () => {
  let component: AssignbookComponent;
  let fixture: ComponentFixture<AssignbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
