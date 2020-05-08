import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CartPPage } from './cart-p.page';

describe('CartPPage', () => {
  let component: CartPPage;
  let fixture: ComponentFixture<CartPPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartPPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CartPPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
