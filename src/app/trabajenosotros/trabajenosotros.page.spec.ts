import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TrabajenosotrosPage } from './trabajenosotros.page';

describe('TrabajenosotrosPage', () => {
  let component: TrabajenosotrosPage;
  let fixture: ComponentFixture<TrabajenosotrosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrabajenosotrosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TrabajenosotrosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
