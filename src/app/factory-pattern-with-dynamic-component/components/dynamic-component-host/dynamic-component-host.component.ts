import { Component, ComponentRef, effect, inject, input, viewChild, ViewContainerRef } from "@angular/core";

import { ComponentData } from "../../model/component-data.model";
import { ComponentFactoryService } from "../../services/component-factory.service";

@Component({
  selector: "app-dynamic-component-host",
  standalone: true,
  imports: [],
  template: ` <ng-container #container></ng-container> `,
  styles: ``,
})
export class DynamicComponentHostComponent {
  componentFactoryService = inject(ComponentFactoryService);

  componentData = input<ComponentData>();

  container = viewChild("container", { read: ViewContainerRef });

  constructor() {
    effect(() => {
      if (this.componentData() && this.container()) {
        this.loadComponent();
      }
    })
  }

  loadComponent() {
    // Clear the container
    this.container()!.clear();

    // Get the component factory
    const componentFactory = this.componentFactoryService.getComponent(this.componentData()!);

    // Create the component
    const componentRef: ComponentRef<any> = this.container()!.createComponent(componentFactory);

    // Pass data to the component
    componentRef.instance.data = this.componentData()!.data;
  }
}
