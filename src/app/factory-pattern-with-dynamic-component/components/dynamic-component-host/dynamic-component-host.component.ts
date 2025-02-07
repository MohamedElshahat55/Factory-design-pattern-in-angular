import {
  AfterViewInit,
  Component,
  ComponentRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ComponentFactoryService } from '../../services/component-factory.service';
import { ComponentData } from '../../model/component-data.model';

@Component({
  selector: 'app-dynamic-component-host',
  standalone: true,
  imports: [],
  template: ` <ng-container #container></ng-container> `,
  styles: ``,
})
export class DynamicComponentHostComponent implements AfterViewInit, OnChanges {
  @ViewChild('container', { read: ViewContainerRef })
  container!: ViewContainerRef;
  @Input() componentData!: ComponentData;
  constructor(private componentFactoryService: ComponentFactoryService) {}

  ngAfterViewInit() {
    this.loadComponent();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['componentData'] && this.container) {
      this.loadComponent();
    }
  }

  loadComponent() {
    // Clear the container
    this.container.clear();

    // Get the component factory
    const componentFactory = this.componentFactoryService.getComponent(
      this.componentData
    );

    // Create the component
    const componentRef: ComponentRef<any> =
      this.container.createComponent(componentFactory);

    // Pass data to the component
    componentRef.instance.data = this.componentData.data;
  }
}
