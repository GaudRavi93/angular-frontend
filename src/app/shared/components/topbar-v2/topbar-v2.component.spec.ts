import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbarV2Component } from './topbar-v2.component';

describe('TopbarV2Component', () => {
  let component: TopbarV2Component;
  let fixture: ComponentFixture<TopbarV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopbarV2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopbarV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
