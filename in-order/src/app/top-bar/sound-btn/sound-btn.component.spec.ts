import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SoundBtnComponent} from './sound-btn.component';

describe('SoundBtnComponent', () => {
  let component: SoundBtnComponent;
  let fixture: ComponentFixture<SoundBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
                                     declarations: [SoundBtnComponent]
                                   })
           .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoundBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
