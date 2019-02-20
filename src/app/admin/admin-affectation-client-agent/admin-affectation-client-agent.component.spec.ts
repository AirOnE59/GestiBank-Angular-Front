import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAffectationClientAgentComponent } from './admin-affectation-client-agent.component';

describe('AdminAffectationClientAgentComponent', () => {
  let component: AdminAffectationClientAgentComponent;
  let fixture: ComponentFixture<AdminAffectationClientAgentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAffectationClientAgentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAffectationClientAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
