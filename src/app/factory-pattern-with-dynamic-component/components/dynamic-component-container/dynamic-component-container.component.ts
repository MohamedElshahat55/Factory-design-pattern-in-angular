import { Component } from '@angular/core';
import { DynamicComponentHostComponent } from '../dynamic-component-host/dynamic-component-host.component';
import { FormsModule } from '@angular/forms';
import { ComponentData } from '../../model/component-data.model';

@Component({
  selector: 'app-dynamic-component-container',
  standalone: true,
  imports: [DynamicComponentHostComponent, FormsModule],
  template: `
    <h1>Dynamic Component Example</h1>
    <label for="componentType">Select Component Type:</label>
    <select
      id="componentType"
      [(ngModel)]="selectedType"
      (change)="onTypeChange()"
    >
      @for (type of ['chart', 'table', 'card']; track type) {
      <option [value]="type">{{ type }}</option>
      }
    </select>

    <app-dynamic-component-host [componentData]="componentData" />
  `,
  styles: ``,
})
export class DynamicComponentContainerComponent {
  selectedType: string = 'chart'; // Default selection
  componentData: ComponentData = {
    type: this.selectedType,
    data: 'Sample Data',
  };

  onTypeChange() {
    // Update the componentData when the selection changes
    this.componentData = {
      type: this.selectedType,
      data: 'Sample Data',
    };
  }
}
