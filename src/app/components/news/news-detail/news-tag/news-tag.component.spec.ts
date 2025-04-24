import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsTagComponent } from './news-tag.component';

describe('NewsTagComponent', () => {
  let component: NewsTagComponent;
  let fixture: ComponentFixture<NewsTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsTagComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
