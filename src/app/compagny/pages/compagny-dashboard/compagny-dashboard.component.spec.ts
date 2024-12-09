import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompagnyDashboardComponent } from './compagny-dashboard.component';

describe('CompagnyDashboardComponent', () => {
  let component: CompagnyDashboardComponent;
  let fixture: ComponentFixture<CompagnyDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompagnyDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompagnyDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
