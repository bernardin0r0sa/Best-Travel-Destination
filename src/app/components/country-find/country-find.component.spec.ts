import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryFindComponent } from './country-find.component';

describe('CountryFindComponent', () => {
  let component: CountryFindComponent;
  let fixture: ComponentFixture<CountryFindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryFindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryFindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
