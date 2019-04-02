import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoCentralComponent } from './logo-central.component';

describe('LogoCentralComponent', () => {
  let component: LogoCentralComponent;
  let fixture: ComponentFixture<LogoCentralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoCentralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoCentralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
