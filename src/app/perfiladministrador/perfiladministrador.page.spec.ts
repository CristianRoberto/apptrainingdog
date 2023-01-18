import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PerfiladministradorPage } from './perfiladministrador.page';

describe('PerfiladministradorPage', () => {
  let component: PerfiladministradorPage;
  let fixture: ComponentFixture<PerfiladministradorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfiladministradorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PerfiladministradorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
