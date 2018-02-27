import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  schema;
  selectedFramework = 'material-design';

  constructor() { }

  ngOnInit() {
    this.schema = {
      'type': 'object',
      'title': 'test',
      'properties': {
        'name': {
          'id': 'Name',
          'title': 'Name',
          'type': 'string',
          'pattern': '^[a-zA-Z]+$',
          'description': 'name of the service instance should match ...',
          'validationMessage': 'Only letters',
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
          'validationMessage': 'Max 20'
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
          'pattern': '^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?'
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
        'graduate': {
          'title': 'Graduate?',
          'type': 'string',
          'enum': ['Yes', 'No'],
          'options': {
            'dependencies': [{
              'id': 'minimumEligibilityAge',
              'value': 'Yes'
            },
            {
              'id': 'courseName',
              'value': 'No'
            }
            ]
          }
        },
        'minimumEligibilityAge': {
          'id': 'minimumEligibilityAge',
          'title': 'Enter Age',
          'type': 'number',
          'options': {
            'hide_display': true
          }
        },
        'courseName': {
          'id': 'courseName',
          'title': 'Enter Graduation Course Name',
          'type': 'string',
          'condition': false
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
  }
}
