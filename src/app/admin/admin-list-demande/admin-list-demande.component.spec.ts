import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListDemandeComponent } from './admin-list-demande.component';

describe('AdminListDemandeComponent', () => {
  let component: AdminListDemandeComponent;
  let fixture: ComponentFixture<AdminListDemandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminListDemandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
