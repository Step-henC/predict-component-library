import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictionsComponentLibraryComponent } from './predictions-component-library.component';

describe('PredictionsComponentLibraryComponent', () => {
  let component: PredictionsComponentLibraryComponent;
  let fixture: ComponentFixture<PredictionsComponentLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PredictionsComponentLibraryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PredictionsComponentLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
