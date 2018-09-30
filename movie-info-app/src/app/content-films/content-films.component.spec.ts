import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentFilmsComponent } from './content-films.component';

describe('ContentFilmsComponent', () => {
  let component: ContentFilmsComponent;
  let fixture: ComponentFixture<ContentFilmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentFilmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
