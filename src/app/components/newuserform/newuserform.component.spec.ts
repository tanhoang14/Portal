import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewuserformComponent } from './newuserform.component';

describe('NewuserformComponent', () => {
  let component: NewuserformComponent;
  let fixture: ComponentFixture<NewuserformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewuserformComponent]
    });
    fixture = TestBed.createComponent(NewuserformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
