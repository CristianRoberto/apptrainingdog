import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalStorePage } from './modal-store.page';

describe('ModalStorePage', () => {
  let component: ModalStorePage;
  let fixture: ComponentFixture<ModalStorePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalStorePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalStorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
