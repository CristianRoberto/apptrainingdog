import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddtiendaPage } from './addtienda.page';

describe('AddtiendaPage', () => {
  let component: AddtiendaPage;
  let fixture: ComponentFixture<AddtiendaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtiendaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddtiendaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
