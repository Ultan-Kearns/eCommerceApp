import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutdoorsComponent } from './outdoors.component';

describe('OutdoorsComponent', () => {
  let component: OutdoorsComponent;
  let fixture: ComponentFixture<OutdoorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutdoorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutdoorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
