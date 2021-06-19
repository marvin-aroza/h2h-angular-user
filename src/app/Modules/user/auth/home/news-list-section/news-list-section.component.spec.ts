import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsListSectionComponent } from './news-list-section.component';

describe('NewsListSectionComponent', () => {
  let component: NewsListSectionComponent;
  let fixture: ComponentFixture<NewsListSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsListSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsListSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
