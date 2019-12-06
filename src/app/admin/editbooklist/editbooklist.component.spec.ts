import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditbooklistComponent } from './editbooklist.component';

describe('EditbooklistComponent', () => {
  let component: EditbooklistComponent;
  let fixture: ComponentFixture<EditbooklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditbooklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditbooklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
