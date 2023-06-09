import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BigMessageComponent} from './big-message.component';

describe('BigMessageComponent', () => {
  let component: BigMessageComponent;
  let fixture: ComponentFixture<BigMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
                                     declarations: [BigMessageComponent]
                                   })
           .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
