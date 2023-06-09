import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ExplotionComponent} from './explotion.component';

describe('ExplotionComponent', () => {
  let component: ExplotionComponent;
  let fixture: ComponentFixture<ExplotionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
                                     declarations: [ExplotionComponent]
                                   })
           .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
