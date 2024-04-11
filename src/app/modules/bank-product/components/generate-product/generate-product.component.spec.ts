import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateProductComponent } from './generate-product.component';

describe('GenerateProductComponent', () => {
  let component: GenerateProductComponent;
  let fixture: ComponentFixture<GenerateProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenerateProductComponent]
    });
    fixture = TestBed.createComponent(GenerateProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
