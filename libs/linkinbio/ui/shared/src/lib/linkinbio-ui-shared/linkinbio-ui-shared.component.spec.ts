import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkinbioUiSharedComponent } from './linkinbio-ui-shared.component';

describe('LinkinbioUiSharedComponent', () => {
  let component: LinkinbioUiSharedComponent;
  let fixture: ComponentFixture<LinkinbioUiSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkinbioUiSharedComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(LinkinbioUiSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
