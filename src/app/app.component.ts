import { Component } from '@angular/core';
import schema from './schema.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedFramework: string = 'no-framework';
  schema: any;

  constructor() {
    this.schema = schema;    
  }
  
  onSubmit($event) {
    console.log($event);
    alert(JSON.stringify($event, null, 2));
  }
}
