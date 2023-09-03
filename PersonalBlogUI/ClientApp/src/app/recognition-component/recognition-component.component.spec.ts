import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecognitionComponentComponent } from './recognition-component.component';

describe('RecognitionComponentComponent', () => {
  let component: RecognitionComponentComponent;
  let fixture: ComponentFixture<RecognitionComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecognitionComponentComponent]
    });
    fixture = TestBed.createComponent(RecognitionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
