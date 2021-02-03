import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsteroidManagerComponent } from './asteroid-manager.component';

describe('AsteroidManagerComponent', () => {
  let component: AsteroidManagerComponent;
  let fixture: ComponentFixture<AsteroidManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsteroidManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsteroidManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
