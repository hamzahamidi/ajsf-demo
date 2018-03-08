webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-card {\n  margin: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">Service Catalog</mat-toolbar>\n<mat-card>\n  <mat-card-header>\n    <h4>\n      <b>p-rabbitmq</b>\n    </h4>\n  </mat-card-header>\n  <mat-card-content>\n    <p>RabbitMQ is a robust and scalable high-performance multi-protocol messaging broker.</p>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-raised-button color=\"primary\" (click)=\"openDialogServiceParams()\">Edit service parameters</button>\n  </mat-card-actions>\n</mat-card>\n<mat-card>\n  <mat-card-header>\n    <h4>\n      <b>p-mysql</b>\n    </h4>\n  </mat-card-header>\n  <mat-card-content>\n    <p>MySQL databases on demand.</p>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-raised-button color=\"primary\" (click)=\"openDialogServiceParams()\">Edit service parameters</button>\n  </mat-card-actions>\n</mat-card>\n<mat-card>\n  <mat-card-header>\n    <h4>\n      <b>mongodb26</b>\n    </h4>\n  </mat-card-header>\n  <mat-card-content>\n    <p>MongoDB 2.6 service for application development and testing.</p>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-raised-button color=\"primary\" (click)=\"openDialogServiceParams()\">Edit service parameters</button>\n  </mat-card-actions>\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AppServiceParamsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var AppComponent = /** @class */ (function () {
    function AppComponent(dialog) {
        this.dialog = dialog;
    }
    AppComponent.prototype.openDialogServiceParams = function () {
        var dialogRef = this.dialog.open(AppServiceParamsComponent, {
            height: '600px',
            width: '600px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDialog */]])
    ], AppComponent);
    return AppComponent;
}());

var AppServiceParamsComponent = /** @class */ (function () {
    function AppServiceParamsComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.selectedFramework = 'material-design';
        this.schema = {
            'type': 'object',
            'title': 'test',
            'required': ['name', 'Description', 'bindable', 'simpleUrl'],
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
                'email': {
                    'id': 'Email',
                    'title': 'Email',
                    'type': 'string',
                    'pattern': '^\\S+@\\S+$',
                    'validationMessages': {
                        'pattern': 'Invalid Email.'
                    }
                },
                'directory': {
                    'id': 'directory',
                    'title': 'directory',
                    'type': 'string',
                    'pattern': '^(.+)/([^/]+)$',
                    'default': '/var/vcap/store/cassandra',
                    'validationMessages': {
                        'pattern': 'Invalid directory.'
                    }
                },
                'title': {
                    'type': 'string',
                    'enum': ['dr', 'jr', 'sir', 'mrs', 'mr', 'NaN', 'dj']
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
    AppServiceParamsComponent.prototype.ngAfterViewInit = function () {
        console.log(this.container);
        console.log(this.container.nativeElement);
        var container = document.getElementById('jsoneditor');
        var options = {
            mode: 'code'
        };
        this.editor = new JSONEditor(this.container.nativeElement, options);
        var json = {};
        this.editor.set(json);
    };
    AppServiceParamsComponent.prototype.submit = function ($event) {
        console.log($event);
        alert(JSON.stringify($event, null, 2));
        this.dialogRef.close();
    };
    AppServiceParamsComponent.prototype.done = function () {
        var output = this.editor.get();
        alert(JSON.stringify(output, null, 2));
        console.log(output);
        this.dialogRef.close();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* ViewChild */])('jsoneditor'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], AppServiceParamsComponent.prototype, "container", void 0);
    AppServiceParamsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-service-params-component',
            template: "\n  <div>\n  <mat-grid-list cols=\"2\" rowHeight=\"5:1\">\n  <mat-grid-tile></mat-grid-tile>\n  <mat-grid-tile>\n  <button style=\"position: fixed ;z-index: 9999 ;\" mat-raised-button color=\"accent\" \n  (click)=\"generatedFormOrJsonEditor=!generatedFormOrJsonEditor\"> \n  <span *ngIf=\"generatedFormOrJsonEditor\">Switch to Json Editor</span>\n  <span *ngIf=\"!generatedFormOrJsonEditor\">Switch to Generated Forms</span>\n  </button>\n  </mat-grid-tile>\n  </mat-grid-list> \n  </div>\n  <div [hidden]=\"generatedFormOrJsonEditor\">\n  <div #jsoneditor style=\"height: 400px;\"></div>\n  <button style=\"margin:5px;\" mat-raised-button color=\"accent\" \n  (click)=\"done()\"> Done\n  </button>\n  </div> \n  <div [hidden]=\"!generatedFormOrJsonEditor\">\n  <mat-card class=\"card\">\n  <json-schema-form\n  loadExternalAssets=\"true\"\n  [schema]=\"schema\"\n  [framework]=\"selectedFramework\"\n  (onSubmit)=\"submit($event)\">\n  </json-schema-form>\n  </mat-card>\n  </div>"
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatDialogRef */], Object])
    ], AppServiceParamsComponent);
    return AppServiceParamsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_cdk_table__ = __webpack_require__("../../../cdk/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_json_schema_form__ = __webpack_require__("../../../../angular2-json-schema-form/angular2-json-schema-form.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["H" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_2__app_component__["b" /* AppServiceParamsComponent */]
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__app_component__["b" /* AppServiceParamsComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_6_angular2_json_schema_form__["b" /* MaterialDesignFrameworkModule */],
                __WEBPACK_IMPORTED_MODULE_6_angular2_json_schema_form__["a" /* JsonSchemaFormModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6_angular2_json_schema_form__["b" /* MaterialDesignFrameworkModule */]),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["g" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["E" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["h" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["j" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["l" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["n" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["o" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["p" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["q" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["r" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["s" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["t" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["u" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["v" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["w" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["x" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["y" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["z" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["B" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["A" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["C" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["D" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["F" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["G" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["H" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["I" /* MatTooltipModule */],
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map