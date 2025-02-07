import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
  template: ` <div class="table">Table Component: {{ data }}</div> `,

  styles: `
  .table {
        border: 1px solid #ccc;
        padding: 16px;
        margin: 16px 0;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }`,
})
export class TableComponent {
  @Input() data: any;
}
