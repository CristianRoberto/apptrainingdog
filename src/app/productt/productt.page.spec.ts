import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProducttPage } from './productt.page';

describe('ProducttPage', () => {
  let component: ProducttPage;
  let fixture: ComponentFixture<ProducttPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProducttPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProducttPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
