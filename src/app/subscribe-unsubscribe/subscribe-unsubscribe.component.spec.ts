import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeUnsubscribeComponent } from './subscribe-unsubscribe.component';

describe('SubscribeUnsubscribeComponent', () => {
  let component: SubscribeUnsubscribeComponent;
  let fixture: ComponentFixture<SubscribeUnsubscribeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscribeUnsubscribeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribeUnsubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
