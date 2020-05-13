import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdmincliPage } from './admincli.page';

describe('AdmincliPage', () => {
  let component: AdmincliPage;
  let fixture: ComponentFixture<AdmincliPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmincliPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdmincliPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
