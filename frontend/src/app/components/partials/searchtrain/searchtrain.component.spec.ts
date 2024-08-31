import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchtrainComponent } from './searchtrain.component';

describe('SearchtrainComponent', () => {
  let component: SearchtrainComponent;
  let fixture: ComponentFixture<SearchtrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchtrainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchtrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
