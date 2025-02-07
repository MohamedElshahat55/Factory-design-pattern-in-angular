import { Injectable, ComponentFactoryResolver } from '@angular/core';
import { ChartComponent } from '../components/chart/chart.component';
import { TableComponent } from '../components/table/table.component';
import { CardComponent } from '../components/card/card.component';
import { ComponentData } from '../model/component-data.model';

@Injectable({
  providedIn: 'root',
})
export class ComponentFactoryService {
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  getComponent(componentData: ComponentData) {
    switch (componentData.type) {
      case 'chart':
        return this.componentFactoryResolver.resolveComponentFactory(
          ChartComponent
        );
      case 'table':
        return this.componentFactoryResolver.resolveComponentFactory(
          TableComponent
        );
      case 'card':
        return this.componentFactoryResolver.resolveComponentFactory(
          CardComponent
        );
      default:
        throw new Error('Unknown component type');
    }
  }
}
