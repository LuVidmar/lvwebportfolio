import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpossibleListComponent } from './impossible-list.component';

describe('ImpossibleListComponent', () => {
  let component: ImpossibleListComponent;
  let fixture: ComponentFixture<ImpossibleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpossibleListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpossibleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
