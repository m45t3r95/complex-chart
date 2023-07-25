import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiLevelXAxisStackedBarChartComponent } from './multi-level-xaxis-stacked-bar-chart.component';

describe('MultiLevelXAxisStackedBarChartComponent', () => {
  let component: MultiLevelXAxisStackedBarChartComponent;
  let fixture: ComponentFixture<MultiLevelXAxisStackedBarChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultiLevelXAxisStackedBarChartComponent]
    });
    fixture = TestBed.createComponent(MultiLevelXAxisStackedBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
