import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalfaqsComponent } from './portalfaqs.component';

describe('PortalfaqsComponent', () => {
  let component: PortalfaqsComponent;
  let fixture: ComponentFixture<PortalfaqsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortalfaqsComponent]
    });
    fixture = TestBed.createComponent(PortalfaqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
