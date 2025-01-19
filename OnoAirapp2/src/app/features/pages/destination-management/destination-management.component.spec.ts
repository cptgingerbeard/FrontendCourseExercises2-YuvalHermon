import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationManagementComponent } from './destination-management.component';

describe('DestinationManagementComponent', () => {
  let component: DestinationManagementComponent;
  let fixture: ComponentFixture<DestinationManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DestinationManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DestinationManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
