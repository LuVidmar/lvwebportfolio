import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionloaderComponent } from './sectionloader.component';

describe('SectionloaderComponent', () => {
  let component: SectionloaderComponent;
  let fixture: ComponentFixture<SectionloaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionloaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
