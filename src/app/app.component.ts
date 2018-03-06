import { Component, Inject, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
declare let JSONEditor;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public dialog: MatDialog) { }

  openDialogServiceParams(): void {
    const dialogRef = this.dialog.open(AppServiceParamsComponent, {
      height: '600px',
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'app-service-params-component',
  template: `
  <div>
  <mat-grid-list cols="2" rowHeight="5:1">
  <mat-grid-tile></mat-grid-tile>
  <mat-grid-tile>
  <button style="position: fixed ;z-index: 9999 ;" mat-raised-button color="accent" 
  (click)="generatedFormOrJsonEditor=!generatedFormOrJsonEditor"> 
  <span *ngIf="generatedFormOrJsonEditor">Switch to Json Editor</span>
  <span *ngIf="!generatedFormOrJsonEditor">Switch to Generated Forms</span>
  </button>
  </mat-grid-tile>
  </mat-grid-list> 
  </div>
  <div [hidden]="generatedFormOrJsonEditor">
  <div #jsoneditor style="height: 400px;"></div>
  <button style="margin:5px;" mat-raised-button color="accent" 
  (click)="done()"> Done
  </button>
  </div> 
  <div [hidden]="!generatedFormOrJsonEditor">
  <mat-card class="card">
  <json-schema-form
  loadExternalAssets="true"
  [schema]="schema"
  [framework]="selectedFramework"
  (onSubmit)="submit($event)">
  </json-schema-form>
  </mat-card>
  </div>`
})
export class AppServiceParamsComponent implements AfterViewInit {
  generatedFormOrJsonEditor: boolean;
  selectedFramework = 'material-design';
  @ViewChild('jsoneditor') container: ElementRef;
  editor;
  schema = {
    'type': 'object',
    'title': 'test',
    'required': ['name', 'Description', 'bindable', 'simpleUrl', 'numbers'],
    'properties': {
      'name': {
        'id': 'Name',
        'title': 'Name',
        'type': 'string',
        'pattern': '^[a-zA-Z]+$',
        'description': 'name of the service instance should contain only letters',
        'validationMessages': {
          'pattern': 'Only letters'
        },
        'options': {
          'dependencies': [{
            'id': 'Description',
            'value': 'ok'
          }]
        }
      },
      'Description': {
        'id': 'Description',
        'title': 'Description',
        'type': 'string',
        'maxLength': 20,
        'validationMessages': {
          'pattern': 'max 20 characters'
        }
      },
      'bindable': {
        'id': 'bindable',
        'title': 'bindable',
        'type': 'boolean'
      },
      'simpleUrl': {
        'id': 'simpleUrl',
        'title': 'simpleUrl',
        'type': 'string',
        'pattern': '^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?',
        'validationMessages': {
          'pattern': 'URL invalide'
        }
      },
      'numbers': {
        'title': 'numbers',
        'type': 'number',
        'validationMessage': 'Invalid number'
      },
      'email': {
        'id': 'Email',
        'title': 'Email',
        'type': 'string',
        'pattern': '^\\S+@\\S+$',
        'validationMessage': 'Invalid Email.'
      },
      'directory': {
        'id': 'directory',
        'title': 'directory',
        'type': 'string',
        'pattern': '^(.+)/([^/]+)$',
        'default': '/var/vcap/store/cassandra',
        'validationMessage': 'Invalid directory.'
      },
      'title': {
        'type': 'string',
        'enum': ['dr', 'jr', 'sir', 'mrs', 'mr', 'NaN', 'dj']
      },
      'comment': {
        'id': 'Comment',
        'title': 'Comment',
        'type': 'string',
        'maxLength': 20,
        'validationMessage': 'Max 20'
      },
      'arr': {
        'type': 'array',
        'items': {
          'type': 'object',
          'required': [],
          'properties': {
            'site': {
              'type': 'string'
            },
            'url': {
              'type': 'boolean'
            }
          }
        }
      }

    }
  };

  constructor(
    public dialogRef: MatDialogRef<AppServiceParamsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngAfterViewInit() {
    console.log(this.container);
    console.log(this.container.nativeElement);
    const container = document.getElementById('jsoneditor');
    const options = {
      mode: 'code'
    };
    this.editor = new JSONEditor(this.container.nativeElement, options);
    const json = {};
    this.editor.set(json);

  }

  submit($event) {
    console.log($event);
    alert(JSON.stringify($event, null, 2));
    this.dialogRef.close();
  }

  done() {
    const output = this.editor.get();
    alert(JSON.stringify(output, null, 2));
    console.log(output);
    this.dialogRef.close();
  }
}
