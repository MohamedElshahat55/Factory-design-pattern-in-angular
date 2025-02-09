import { Injectable } from '@angular/core';

import { ChartComponent } from '../components/chart/chart.component';
import { TableComponent } from '../components/table/table.component';
import { CardComponent } from '../components/card/card.component';
import { ComponentData } from '../model/component-data.model';

@Injectable({
  providedIn: 'root',
})
export class ComponentFactoryService {
  getComponent(componentData: ComponentData) {
    switch (componentData.type) {
      case 'chart':
        return ChartComponent;
      case 'table':
        return TableComponent;
      case 'card':
        return CardComponent;
      default:
        throw new Error('Unknown component type');
    }
  }
}
