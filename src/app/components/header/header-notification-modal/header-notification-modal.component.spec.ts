import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNotificationModalComponent } from './header-notification-modal.component';

describe('HeaderNotificationModalComponent', () => {
  let component: HeaderNotificationModalComponent;
  let fixture: ComponentFixture<HeaderNotificationModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderNotificationModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderNotificationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
