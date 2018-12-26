import { ChangeDetectionStrategy } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent } from './simple.component';

describe('SimpleComponent', () => {
  let component: SimpleComponent;
  let fixture: ComponentFixture<SimpleComponent>;

  beforeEach(async(() => { //
    TestBed.configureTestingModule({
      declarations: [
        SimpleComponent
      ]
    }).overrideComponent(SimpleComponent, {
      set: { changeDetection: ChangeDetectionStrategy.Default } // for detectChanges() issue
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(SimpleComponent);
      component = fixture.componentInstance;
    })
  }));


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('testing Spies',() => {
    let spyOnSetTitle: any;
    let spyOnSetDescription: any;
    let spyOnSetNumber: any;

    beforeEach(() => {
      spyOnSetTitle = spyOn(component, 'setTitle').and.callThrough();
      spyOnSetDescription = spyOn(component, 'setDescription').and.callThrough();
    });

    it('should be fetch methods called and template changes', () => {

      component.setTitle('Hello');
      expect(spyOnSetTitle).toHaveBeenCalled();

      component.setDescription('This is a simple description');
      expect(spyOnSetDescription).toHaveBeenCalled();

      spyOnSetNumber = spyOn(component,'setRandomNumber').and.callFake(() => {
        component.randomNumber = 13;
      });
      component.setRandomNumber();
      expect(spyOnSetNumber).toHaveBeenCalled();
      expect(component.randomNumber).toBe(13);

      fixture.changeDetectorRef.detectChanges();  // detectChanges() issue
      let divs = fixture.nativeElement.querySelectorAll('div');
      expect(divs[1].textContent).toContain('My random number is 13');

      let h2 = fixture.nativeElement.querySelector('h2');
      expect(h2.textContent).toContain('Hello');

    });

    it('should have template changes', () => {
      let nativeElemt = fixture.nativeElement;
      let allDivs = nativeElemt.querySelectorAll('div');
      // expect(h2.textContent).toContain('Hello');
    })

  })

});
