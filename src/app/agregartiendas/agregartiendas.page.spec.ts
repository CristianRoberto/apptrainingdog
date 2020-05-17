import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgregartiendasPage } from './agregartiendas.page';

describe('AgregartiendasPage', () => {
  let component: AgregartiendasPage;
  let fixture: ComponentFixture<AgregartiendasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregartiendasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgregartiendasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
