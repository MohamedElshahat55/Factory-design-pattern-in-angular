import { Routes } from '@angular/router';
import { ProductPageComponent } from './factory-pattern/product-page/product-page.component';
import { DynamicComponentContainerComponent } from './factory-pattern-with-dynamic-component/components/dynamic-component-container/dynamic-component-container.component';
import { OldApproachComponent } from './without-factory-design-pattern/old-approach/old-approach.component';

export const routes: Routes = [
  { path: '', redirectTo: 'old-approach', pathMatch: 'full' },
  { path: 'old-approach', component: OldApproachComponent },
  { path: 'factory-pattern', component: ProductPageComponent },
  {
    path: 'factory-pattern-with-dynamic-component',
    component: DynamicComponentContainerComponent,
  },
];
