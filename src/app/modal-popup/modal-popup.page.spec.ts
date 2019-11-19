import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalPopupPage } from './modal-popup.page';

describe('ModalPopupPage', () => {
  let component: ModalPopupPage;
  let fixture: ComponentFixture<ModalPopupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPopupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalPopupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
