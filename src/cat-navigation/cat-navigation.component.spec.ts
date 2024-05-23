import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatNavigationComponent } from './cat-navigation.component';

describe('CatNavigationComponent', () => {
  let component: CatNavigationComponent;
  let fixture: ComponentFixture<CatNavigationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatNavigationComponent]
    });
    fixture = TestBed.createComponent(CatNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
