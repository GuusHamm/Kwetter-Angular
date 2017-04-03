import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlernateKweetComponent } from './alernate-kweet.component';

describe('AlernateKweetComponent', () => {
  let component: AlernateKweetComponent;
  let fixture: ComponentFixture<AlernateKweetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlernateKweetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlernateKweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
