import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JumbotroneComponent } from './jumbotrone.component';

describe('JumbotroneComponent', () => {
  let component: JumbotroneComponent;
  let fixture: ComponentFixture<JumbotroneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JumbotroneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JumbotroneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
