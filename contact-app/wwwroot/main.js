(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _contactlist_contactlist_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactlist/contactlist.component */ "./src/app/contactlist/contactlist.component.ts");
/* harmony import */ var _contactform_contactform_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contactform/contactform.component */ "./src/app/contactform/contactform.component.ts");
/* harmony import */ var _application_list_application_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./application-list/application-list.component */ "./src/app/application-list/application-list.component.ts");
/* harmony import */ var _application_form_application_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./application-form/application-form.component */ "./src/app/application-form/application-form.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var appRoutes = [
    { path: '', pathMatch: 'full', component: _application_list_application_list_component__WEBPACK_IMPORTED_MODULE_4__["ApplicationListComponent"] },
    { path: 'contactform', component: _contactform_contactform_component__WEBPACK_IMPORTED_MODULE_3__["ContactformComponent"] },
    { path: 'contacts', component: _contactlist_contactlist_component__WEBPACK_IMPORTED_MODULE_2__["ContactlistComponent"] },
    { path: 'applications', component: _application_list_application_list_component__WEBPACK_IMPORTED_MODULE_4__["ApplicationListComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: 'applicationform', component: _application_form_application_form_component__WEBPACK_IMPORTED_MODULE_5__["ApplicationFormComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->  \n\n\n<div class='container-fluid'>\n        <div class='row'>\n          <div class='col-sm-3'>\n            <app-menu></app-menu>\n          </div>\n          <div class='col-sm-9 body-content'>\n                <mat-toolbar> <span> Nethealth Accounts</span> </mat-toolbar>  \n                <router-outlet></router-outlet>\n          </div>\n        </div>\n      </div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.material.module.ts":
/*!****************************************!*\
  !*** ./src/app/app.material.module.ts ***!
  \****************************************/
/*! exports provided: AppMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppMaterialModule", function() { return AppMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppMaterialModule = /** @class */ (function () {
    function AppMaterialModule() {
    }
    AppMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"]
            ],
        })
    ], AppMaterialModule);
    return AppMaterialModule;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _app_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! .//app.material.module */ "./src/app/app.material.module.ts");
/* harmony import */ var _contactform_contactform_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contactform/contactform.component */ "./src/app/contactform/contactform.component.ts");
/* harmony import */ var _contactlist_contactlist_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contactlist/contactlist.component */ "./src/app/contactlist/contactlist.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _services_contact_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/contact.service */ "./src/app/services/contact.service.ts");
/* harmony import */ var _services_application_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/application.service */ "./src/app/services/application.service.ts");
/* harmony import */ var _application_list_application_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./application-list/application-list.component */ "./src/app/application-list/application-list.component.ts");
/* harmony import */ var _application_form_application_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./application-form/application-form.component */ "./src/app/application-form/application-form.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _contactform_contactform_component__WEBPACK_IMPORTED_MODULE_8__["ContactformComponent"],
                _contactlist_contactlist_component__WEBPACK_IMPORTED_MODULE_9__["ContactlistComponent"],
                _application_list_application_list_component__WEBPACK_IMPORTED_MODULE_13__["ApplicationListComponent"],
                _application_form_application_form_component__WEBPACK_IMPORTED_MODULE_14__["ApplicationFormComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_15__["MenuComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _app_material_module__WEBPACK_IMPORTED_MODULE_7__["AppMaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"]
            ],
            providers: [
                _services_contact_service__WEBPACK_IMPORTED_MODULE_11__["ContactService"],
                _services_application_service__WEBPACK_IMPORTED_MODULE_12__["ApplicationService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/application-form/application-form.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/application-form/application-form.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contact-form {\r\n    min-width: 150px;\r\n    max-width:700px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .control-field {\r\n    width: 100%;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/application-form/application-form.component.html":
/*!******************************************************************!*\
  !*** ./src/app/application-form/application-form.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form  (ngSubmit)=\"onSubmit(applicationFrm)\"  [formGroup]=\"applicationFrm\" class=\"application-form\">\n  <h2 mat-dialog-title>{{data.modalTitle}}</h2>  \n  <mat-dialog-content>\n      <div>\n          <mat-form-field class=\"control-field\">\n          <mat-label>Client ID</mat-label>\n          <input matInput placeholder=\"Client ID\" formControlName=\"clientID\">        \n          <mat-error *ngIf=\"formErrors.clientID\">\n            {{ formErrors.clientID }}\n          </mat-error>\n        </mat-form-field>\n      </div>\n  <div>\n      <mat-form-field class=\"control-field\">\n      <mat-label>Client Name</mat-label>\n      <input matInput placeholder=\"Client Name\" formControlName=\"clientName\">   \n      <mat-error *ngIf=\"formErrors.clientName\">\n        {{ formErrors.clientName }}\n      </mat-error>\n    </mat-form-field>\n  </div>\n  <div>\n    <mat-form-field class=\"control-field\">\n      <mat-label>Client Uri</mat-label>\n      <input type=\"url\" matInput placeholder=\"clientUri\" formControlName=\"clientUri\">\n      <mat-error *ngIf=\"formErrors.clientUri\">\n        {{ formErrors.clientUri }}\n      </mat-error>\n    </mat-form-field>  \n  </div>\n  <div>\n  <mat-form-field class=\"control-field\">\n      <mat-label>Secret</mat-label>\n      <input type=\"text\" matInput placeholder=\"secret\" formControlName=\"secret\">\n      <mat-error *ngIf=\"formErrors.secret\">\n        {{ formErrors.secret }}\n      </mat-error>\n    </mat-form-field> \n  </div>   \n  <div>    \n    <mat-form-field class=\"control-field\">\n        <mat-label>Redirect Uri</mat-label>\n        <input type=\"url\" matInput placeholder=\"redirectUri\" formControlName=\"redirectUri\">\n        <mat-error *ngIf=\"formErrors.redirectUri\">\n          {{ formErrors.redirectUri }}\n        </mat-error>\n      </mat-form-field>    \n    </div>  \n    <div>    \n        <mat-form-field class=\"control-field\">\n            <mat-label>Post Logout Redirect Uri</mat-label>\n            <input type=\"url\" matInput placeholder=\"postLogoutRedirectUri\" formControlName=\"postLogoutRedirectUri\">\n            <mat-error *ngIf=\"formErrors.postLogoutRedirectUri\">\n              {{ formErrors.postLogoutRedirectUri }}\n            </mat-error>\n          </mat-form-field>    \n        </div> \n</mat-dialog-content>\n<mat-dialog-actions>\n  <div>\n  \n    <button type=\"button\" mat-raised-button color=\"warn\" (click)=\"dialogRef.close()\">Cancel</button>&nbsp;\n    <button type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"applicationFrm.invalid\">{{data.modalBtnTitle}}</button>\n  </div>\n</mat-dialog-actions>\n  </form>"

/***/ }),

/***/ "./src/app/application-form/application-form.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/application-form/application-form.component.ts ***!
  \****************************************************************/
/*! exports provided: ApplicationFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationFormComponent", function() { return ApplicationFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_application_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/application.service */ "./src/app/services/application.service.ts");
/* harmony import */ var _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/DBOperation */ "./src/app/shared/DBOperation.ts");
/* harmony import */ var _shared_Global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/Global */ "./src/app/shared/Global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var ApplicationFormComponent = /** @class */ (function () {
    function ApplicationFormComponent(data, fb, _applicationService, dialogRef) {
        this.data = data;
        this.fb = fb;
        this._applicationService = _applicationService;
        this.dialogRef = dialogRef;
        this.indLoading = false;
        // form errors model
        this.formErrors = {
            'clientID': '',
            'clientName': '',
            'clientUri': '',
            'secret': '',
            'redirectUri': '',
            'postLogoutRedirectUri': ''
        };
        // custom valdiation messages
        // tslint:disable-next-line:member-ordering
        this.validationMessages = {
            'clientID': {
                'required': 'Client ID is required.'
            },
            'clientName': {
                'maxlength': 'Client Name cannot be more than 50 characters long.',
                'required': 'Client Name is required.'
            },
            'clientUri': {
                'required': 'Client Uri is required.'
            },
            'secret': {
                'required': 'Secret is required.'
            },
            'redirectUri': {
                'required': 'redirectUri is required.'
            },
            'postLogoutRedirectUri': {
                'required': 'Post Logout Redirect Uri is required.'
            }
        };
    }
    ApplicationFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.applicationFrm = this.fb.group({
            id: [''],
            clientID: [''],
            clientName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)]],
            clientUri: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            secret: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            redirectUri: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            postLogoutRedirectUri: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
        // subscribe on value changed event of form to show validation message
        this.applicationFrm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
        if (this.data.dbops === _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].create) {
            this.applicationFrm.reset();
        }
        else {
            this.applicationFrm.setValue(this.data.application);
        }
        this.SetControlsState(this.data.dbops === _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].delete ? false : true);
    };
    // form value change event
    ApplicationFormComponent.prototype.onValueChanged = function (data) {
        if (!this.applicationFrm) {
            return;
        }
        var form = this.applicationFrm;
        // tslint:disable-next-line:forin
        for (var field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = form.get(field);
            // setup custom validation message to form
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                // tslint:disable-next-line:forin
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    ApplicationFormComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        var applicationData = this.mapDateData(formData.value);
        switch (this.data.dbops) {
            case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].create:
                this._applicationService.create(_shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].BASE_APPLICATION_ENDPOINT + 'Create', applicationData).subscribe(function (data) {
                    // Success
                    if (data.message) {
                        _this.dialogRef.close('success');
                    }
                    else {
                        _this.dialogRef.close('error');
                    }
                }, function (error) {
                    _this.dialogRef.close('error');
                });
                break;
            case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].update:
                this._applicationService.update(_shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].BASE_APPLICATION_ENDPOINT + 'Update', applicationData.clientID, applicationData).subscribe(function (data) {
                    // Success
                    if (data.message) {
                        _this.dialogRef.close('success');
                    }
                    else {
                        _this.dialogRef.close('error');
                    }
                }, function (error) {
                    _this.dialogRef.close('error');
                });
                break;
            case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].delete:
                this._applicationService.delete(_shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].BASE_APPLICATION_ENDPOINT + 'Delete', applicationData.clientID).subscribe(function (data) {
                    // Success
                    if (data.message) {
                        _this.dialogRef.close('success');
                    }
                    else {
                        _this.dialogRef.close('error');
                    }
                }, function (error) {
                    _this.dialogRef.close('error');
                });
                break;
        }
    };
    ApplicationFormComponent.prototype.SetControlsState = function (isEnable) {
        isEnable ? this.applicationFrm.enable() : this.applicationFrm.disable();
    };
    ApplicationFormComponent.prototype.mapDateData = function (application) {
        if (!application.id)
            application.id = 0;
        return application;
    };
    ApplicationFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-application-form',
            template: __webpack_require__(/*! ./application-form.component.html */ "./src/app/application-form/application-form.component.html"),
            styles: [__webpack_require__(/*! ./application-form.component.css */ "./src/app/application-form/application-form.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_application_service__WEBPACK_IMPORTED_MODULE_3__["ApplicationService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], ApplicationFormComponent);
    return ApplicationFormComponent;
}());



/***/ }),

/***/ "./src/app/application-list/application-list.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/application-list/application-list.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spinner{\r\n    top: 45%;\r\n    left: 47%;\r\n    position: fixed;\r\n  }\r\n  .applicationlist-container, #paginator {\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-width: 300px;\r\n    max-width: 1200px;\r\n    max-height: 700px;\r\n    overflow: auto;\r\n    margin: 0 auto;\r\n  }\r\n  table {\r\n    width: 100%;\r\n  }\r\n  th.mat-sort-header-sorted {\r\n    color: black;\r\n  }"

/***/ }),

/***/ "./src/app/application-list/application-list.component.html":
/*!******************************************************************!*\
  !*** ./src/app/application-list/application-list.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner\" *ngIf=\"loadingState; else applicationlist\">\n  <mat-spinner></mat-spinner>\n</div>\n<ng-template class=\"applicationlist\" #applicationlist>\n  <h2 style=\"text-align: center;\">Application List</h2>\n  <div class=\"applicationlist-container mat-elevation-z8\">\n    <div>\n      <button title=\"Create\" mat-raised-button color=\"accent\" (click)=\"addApplication()\">Create</button>\n    </div>\n    <table mat-table #table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\n\n        <ng-container matColumnDef=\"clientID\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Client ID </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.clientID}} </td>\n          </ng-container>\n      <!-- Name Column -->\n      <ng-container matColumnDef=\"clientName\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Cient Name </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.clientName}} </td>\n      </ng-container>\n\n      <!-- Email Column -->\n      <ng-container matColumnDef=\"clientUri\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Client Uri </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.clientUri}} </td>\n      </ng-container>\n\n      <!-- Gender Column -->\n      <ng-container matColumnDef=\"redirectUri\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Redirect Uri </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.redirectUri}} </td>\n      </ng-container>\n\n      <!-- Birth Column -->\n      <ng-container matColumnDef=\"postLogoutRedirectUri\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Post Logout Redirect Uri </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.postLogoutRedirectUri}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"action\">\n        <th mat-header-cell *matHeaderCellDef> Action </th>\n        <td mat-cell *matCellDef=\"let element\">\n          <button title=\"Edit\" mat-raised-button color=\"primary\" (click)=\"editApplication(element.clientID)\">Edit</button>\n          <button title=\"Delete\" mat-raised-button color=\"warn\" (click)=\"deleteApplication(element.clientID)\">Delete</button>\n        </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n\n  </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/application-list/application-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/application-list/application-list.component.ts ***!
  \****************************************************************/
/*! exports provided: ApplicationListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationListComponent", function() { return ApplicationListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_application_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/application.service */ "./src/app/services/application.service.ts");
/* harmony import */ var _shared_DBOperation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/DBOperation */ "./src/app/shared/DBOperation.ts");
/* harmony import */ var _shared_Global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/Global */ "./src/app/shared/Global.ts");
/* harmony import */ var _application_form_application_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../application-form/application-form.component */ "./src/app/application-form/application-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ApplicationListComponent = /** @class */ (function () {
    function ApplicationListComponent(snackBar, _applicationService, dialog) {
        this.snackBar = snackBar;
        this._applicationService = _applicationService;
        this.dialog = dialog;
        // set columns that will need to show in listing table  
        this.displayedColumns = ['clientID', 'clientName', 'clientUri', 'redirectUri', 'postLogoutRedirectUri', 'action'];
        // setting up datasource for material table
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
    }
    ApplicationListComponent.prototype.ngOnInit = function () {
        this.loadingState = true;
        this.loadApplications();
        this.dataSource.sort = this.sort;
    };
    ApplicationListComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_application_form_application_form_component__WEBPACK_IMPORTED_MODULE_5__["ApplicationFormComponent"], {
            width: '700px',
            data: { dbops: this.dbops, modalTitle: this.modalTitle, modalBtnTitle: this.modalBtnTitle, application: this.application }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            if (result === 'success') {
                _this.loadingState = true;
                _this.loadApplications();
                switch (_this.dbops) {
                    case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_3__["DBOperation"].create:
                        _this.showMessage('Data successfully added.');
                        break;
                    case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_3__["DBOperation"].update:
                        _this.showMessage('Data successfully updated.');
                        break;
                    case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_3__["DBOperation"].delete:
                        _this.showMessage('Data successfully deleted.');
                        break;
                }
            }
            else if (result === 'error') {
                _this.showMessage('There is some issue in saving records, please contact to system administrator!');
            }
            else {
                // this.showMessage('Please try again, something went wrong');
            }
        });
    };
    ApplicationListComponent.prototype.loadApplications = function () {
        var _this = this;
        this._applicationService.getAll(_shared_Global__WEBPACK_IMPORTED_MODULE_4__["Global"].BASE_APPLICATION_ENDPOINT + 'GetAll')
            .subscribe(function (applications) {
            _this.loadingState = false;
            _this.dataSource.data = applications;
        });
    };
    ApplicationListComponent.prototype.addApplication = function () {
        this.dbops = _shared_DBOperation__WEBPACK_IMPORTED_MODULE_3__["DBOperation"].create;
        this.modalTitle = 'Add New Application';
        this.modalBtnTitle = 'Add';
        this.openDialog();
    };
    ApplicationListComponent.prototype.editApplication = function (clientID) {
        this.dbops = _shared_DBOperation__WEBPACK_IMPORTED_MODULE_3__["DBOperation"].update;
        this.modalTitle = 'Edit Application';
        this.modalBtnTitle = 'Update';
        this.application = this.dataSource.data.filter(function (x) { return x.clientID === clientID; })[0];
        this.openDialog();
    };
    ApplicationListComponent.prototype.deleteApplication = function (clientID) {
        this.dbops = _shared_DBOperation__WEBPACK_IMPORTED_MODULE_3__["DBOperation"].delete;
        this.modalTitle = 'Confirm to Delete ?';
        this.modalBtnTitle = 'Delete';
        this.application = this.dataSource.data.filter(function (x) { return x.clientID === clientID; })[0];
        this.openDialog();
    };
    ApplicationListComponent.prototype.showMessage = function (msg) {
        this.snackBar.open(msg, '', {
            duration: 3000
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], ApplicationListComponent.prototype, "sort", void 0);
    ApplicationListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-application-list',
            template: __webpack_require__(/*! ./application-list.component.html */ "./src/app/application-list/application-list.component.html"),
            styles: [__webpack_require__(/*! ./application-list.component.css */ "./src/app/application-list/application-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"], _services_application_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], ApplicationListComponent);
    return ApplicationListComponent;
}());



/***/ }),

/***/ "./src/app/contactform/contactform.component.css":
/*!*******************************************************!*\
  !*** ./src/app/contactform/contactform.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contact-form {\r\n    min-width: 150px;\r\n    max-width:700px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .control-field {\r\n    width: 100%;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/contactform/contactform.component.html":
/*!********************************************************!*\
  !*** ./src/app/contactform/contactform.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form  (ngSubmit)=\"onSubmit(contactFrm)\"  [formGroup]=\"contactFrm\" class=\"contact-form\">\n  <h2 mat-dialog-title>{{data.modalTitle}}</h2>  \n  <mat-dialog-content>\n  <div>\n      <mat-form-field class=\"control-field\">\n      <mat-label>Name</mat-label>\n      <input matInput placeholder=\"Name\" formControlName=\"name\">\n      <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->\n      <!-- <mat-hint>Hint</mat-hint> -->\n      <mat-error *ngIf=\"formErrors.name\">\n        {{ formErrors.name }}\n      </mat-error>\n    </mat-form-field>\n  </div>\n  <div>\n    <mat-form-field class=\"control-field\">\n      <mat-label>Email</mat-label>\n      <input type=\"email\" matInput placeholder=\"email\" formControlName=\"email\">\n      <mat-error *ngIf=\"formErrors.email\">\n        {{ formErrors.email }}\n      </mat-error>\n    </mat-form-field>\n  \n  </div>\n    <p>\n        <mat-radio-group class=\"contact-radio-group\" formControlName=\"gender\" >\n            <mat-radio-button class=\"contact-radio-button\" *ngFor=\"let gndr of genders\" [value]=\"gndr.id\">\n              {{ gndr.name }}\n            </mat-radio-button>\n          </mat-radio-group>\n          <mat-error *ngIf=\"formErrors.gender\">\n            {{ formErrors.gender }}\n          </mat-error>\n        </p>  \n    \n  <div>\n    <mat-form-field >\n      <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a birthday\" formControlName=\"birth\">\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n      <mat-datepicker #picker></mat-datepicker>\n    \n    <mat-error *ngIf=\"formErrors.birth \">\n      {{ formErrors.birth }}\n    </mat-error>\n    </mat-form-field>\n  </div>\n  <div>\n    <mat-form-field  class=\"control-field\">\n      <mat-select placeholder=\"Select a Technology\" formControlName=\"techno\">\n        <mat-option>-- None --</mat-option>\n        <mat-option *ngFor=\"let techno  of technologies\" [value]=\"techno\">\n          {{ techno }}\n        </mat-option>\n      </mat-select>\n      <mat-error *ngIf=\"formErrors.techno \">\n        {{ formErrors.techno }}\n      </mat-error>\n    </mat-form-field>\n  </div>\n  <div>\n    <mat-form-field  class=\"control-field\">\n      <textarea matInput placeholder=\"Message...\" formControlName=\"message\"></textarea>\n      <mat-error *ngIf=\"formErrors.message \">\n        {{ formErrors.message }}\n      </mat-error>\n    </mat-form-field>\n  </div>\n</mat-dialog-content>\n<mat-dialog-actions>\n  <div>\n  \n    <button type=\"button\" mat-raised-button color=\"warn\" (click)=\"dialogRef.close()\">Cancel</button>&nbsp;\n    <button type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"contactFrm.invalid\">{{data.modalBtnTitle}}</button>\n  </div>\n</mat-dialog-actions>\n  </form>"

/***/ }),

/***/ "./src/app/contactform/contactform.component.ts":
/*!******************************************************!*\
  !*** ./src/app/contactform/contactform.component.ts ***!
  \******************************************************/
/*! exports provided: ContactformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactformComponent", function() { return ContactformComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_contact_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/contact.service */ "./src/app/services/contact.service.ts");
/* harmony import */ var _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/DBOperation */ "./src/app/shared/DBOperation.ts");
/* harmony import */ var _shared_Global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/Global */ "./src/app/shared/Global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var ContactformComponent = /** @class */ (function () {
    function ContactformComponent(data, fb, _contactService, dialogRef) {
        this.data = data;
        this.fb = fb;
        this._contactService = _contactService;
        this.dialogRef = dialogRef;
        this.indLoading = false;
        // contact: IContact;
        this.genders = [];
        this.technologies = [];
        // form errors model
        // tslint:disable-next-line:member-ordering
        this.formErrors = {
            'name': '',
            'email': '',
            'gender': '',
            'birth': '',
            'techno': '',
            'message': ''
        };
        // custom valdiation messages
        // tslint:disable-next-line:member-ordering
        this.validationMessages = {
            'name': {
                'maxlength': 'Name cannot be more than 50 characters long.',
                'required': 'Name is required.'
            },
            'email': {
                'email': 'Invalid email format.',
                'required': 'Email is required.'
            },
            'gender': {
                'required': 'Gender is required.'
            },
            'techno': {
                'required': 'Technology is required.'
            },
            'birth': {
                'required': 'Birthday is required.'
            },
            'message': {
                'required': 'message is required.'
            }
        };
    }
    ContactformComponent.prototype.ngOnInit = function () {
        var _this = this;
        // built contact form
        this.contactFrm = this.fb.group({
            id: [''],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            gender: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            birth: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            techno: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            message: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
        this.genders = _shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].genders;
        this.technologies = _shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].technologies;
        // subscribe on value changed event of form to show validation message
        this.contactFrm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
        if (this.data.dbops === _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].create) {
            this.contactFrm.reset();
        }
        else {
            this.contactFrm.setValue(this.data.contact);
        }
        this.SetControlsState(this.data.dbops === _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].delete ? false : true);
    };
    // form value change event
    ContactformComponent.prototype.onValueChanged = function (data) {
        if (!this.contactFrm) {
            return;
        }
        var form = this.contactFrm;
        // tslint:disable-next-line:forin
        for (var field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = form.get(field);
            // setup custom validation message to form
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                // tslint:disable-next-line:forin
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    ContactformComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        var contactData = this.mapDateData(formData.value);
        switch (this.data.dbops) {
            case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].create:
                this._contactService.addContact(_shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].BASE_USER_ENDPOINT + 'addContact', contactData).subscribe(function (data) {
                    // Success
                    if (data.message) {
                        _this.dialogRef.close('success');
                    }
                    else {
                        _this.dialogRef.close('error');
                    }
                }, function (error) {
                    _this.dialogRef.close('error');
                });
                break;
            case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].update:
                this._contactService.updateContact(_shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].BASE_USER_ENDPOINT + 'updateContact', contactData.id, contactData).subscribe(function (data) {
                    // Success
                    if (data.message) {
                        _this.dialogRef.close('success');
                    }
                    else {
                        _this.dialogRef.close('error');
                    }
                }, function (error) {
                    _this.dialogRef.close('error');
                });
                break;
            case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].delete:
                this._contactService.deleteContact(_shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].BASE_USER_ENDPOINT + 'deleteContact', contactData.id).subscribe(function (data) {
                    // Success
                    if (data.message) {
                        _this.dialogRef.close('success');
                    }
                    else {
                        _this.dialogRef.close('error');
                    }
                }, function (error) {
                    _this.dialogRef.close('error');
                });
                break;
        }
    };
    ContactformComponent.prototype.SetControlsState = function (isEnable) {
        isEnable ? this.contactFrm.enable() : this.contactFrm.disable();
    };
    ContactformComponent.prototype.mapDateData = function (contact) {
        contact.birth = new Date(contact.birth).toISOString();
        return contact;
    };
    ContactformComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contactform',
            template: __webpack_require__(/*! ./contactform.component.html */ "./src/app/contactform/contactform.component.html"),
            styles: [__webpack_require__(/*! ./contactform.component.css */ "./src/app/contactform/contactform.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_contact_service__WEBPACK_IMPORTED_MODULE_3__["ContactService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], ContactformComponent);
    return ContactformComponent;
}());



/***/ }),

/***/ "./src/app/contactlist/contactlist.component.css":
/*!*******************************************************!*\
  !*** ./src/app/contactlist/contactlist.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .contactlist{\r\n  text-align: center;\r\n} */\r\n\r\n.spinner{\r\n    top: 45%;\r\n    left: 47%;\r\n    position: fixed;\r\n  }\r\n\r\n.contactlist-container, #paginator {\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-width: 300px;\r\n    max-width: 1200px;\r\n    max-height: 700px;\r\n    overflow: auto;\r\n    margin: 0 auto;\r\n  }"

/***/ }),

/***/ "./src/app/contactlist/contactlist.component.html":
/*!********************************************************!*\
  !*** ./src/app/contactlist/contactlist.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner\" *ngIf=\"loadingState; else contactlist\">\n  <mat-spinner></mat-spinner>\n  </div>\n  <ng-template class=\"contactlist\" #contactlist>\n    <h2 style=\"text-align: center;\">Contact List</h2>\n    <div class=\"contactlist-container mat-elevation-z8\">\n      <div><button title=\"Create\" mat-raised-button color=\"accent\" (click)=\"addContact()\">Create</button></div>\n      <table mat-table #table [dataSource]=\"dataSource\">\n  \n        <!-- Id Column -->\n        <!-- <ng-container matColumnDef=\"id\">\n        <th mat-header-cell *matHeaderCellDef> Id </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\n      </ng-container> -->\n  \n        <!-- Name Column -->\n        <ng-container matColumnDef=\"name\">\n          <th mat-header-cell *matHeaderCellDef> Name </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n        </ng-container>\n  \n        <!-- Email Column -->\n        <ng-container matColumnDef=\"email\">\n          <th mat-header-cell *matHeaderCellDef> Email </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.email}} </td>\n        </ng-container>\n  \n        <!-- Gender Column -->\n        <ng-container matColumnDef=\"gender\">\n          <th mat-header-cell *matHeaderCellDef> Gender </th>\n          <td mat-cell *matCellDef=\"let element\"> {{getGender(element.gender)}} </td>\n        </ng-container>\n  \n        <!-- Birth Column -->\n        <ng-container matColumnDef=\"birth\">\n          <th mat-header-cell *matHeaderCellDef> Birthday </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.birth | date: 'MM-dd-yyyy' }} </td>\n        </ng-container>\n  \n        <!-- Technology Column -->\n        <ng-container matColumnDef=\"techno\">\n          <th mat-header-cell *matHeaderCellDef> Technology </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.techno}} </td>\n        </ng-container>\n  \n        <!-- Message Column -->\n        <ng-container matColumnDef=\"message\">\n          <th mat-header-cell *matHeaderCellDef> Message </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.message}} </td>\n        </ng-container>\n  \n        <ng-container matColumnDef=\"action\">\n          <th mat-header-cell *matHeaderCellDef> Action </th>\n          <td mat-cell *matCellDef=\"let element\">\n            <button title=\"Edit\" mat-raised-button color=\"primary\" (click)=\"editContact(element.id)\">Edit</button>\n            <button title=\"Delete\" mat-raised-button color=\"warn\" (click)=\"deleteContact(element.id)\">Delete</button>\n          </td>\n        </ng-container>\n  \n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n      </table>\n  \n    </div>\n  </ng-template>"

/***/ }),

/***/ "./src/app/contactlist/contactlist.component.ts":
/*!******************************************************!*\
  !*** ./src/app/contactlist/contactlist.component.ts ***!
  \******************************************************/
/*! exports provided: ContactlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactlistComponent", function() { return ContactlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _contactform_contactform_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contactform/contactform.component */ "./src/app/contactform/contactform.component.ts");
/* harmony import */ var _services_contact_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/contact.service */ "./src/app/services/contact.service.ts");
/* harmony import */ var _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/DBOperation */ "./src/app/shared/DBOperation.ts");
/* harmony import */ var _shared_Global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/Global */ "./src/app/shared/Global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ContactlistComponent = /** @class */ (function () {
    function ContactlistComponent(snackBar, _contactService, dialog) {
        this.snackBar = snackBar;
        this._contactService = _contactService;
        this.dialog = dialog;
        // set columns that will need to show in listing table
        this.displayedColumns = ['name', 'email', 'gender', 'birth', 'techno', 'message', 'action'];
        // setting up datasource for material table
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
    }
    ContactlistComponent.prototype.ngOnInit = function () {
        this.loadingState = true;
        this.loadContacts();
    };
    ContactlistComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_contactform_contactform_component__WEBPACK_IMPORTED_MODULE_2__["ContactformComponent"], {
            width: '700px',
            data: { dbops: this.dbops, modalTitle: this.modalTitle, modalBtnTitle: this.modalBtnTitle, contact: this.contact }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            if (result === 'success') {
                _this.loadingState = true;
                _this.loadContacts();
                switch (_this.dbops) {
                    case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].create:
                        _this.showMessage('Data successfully added.');
                        break;
                    case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].update:
                        _this.showMessage('Data successfully updated.');
                        break;
                    case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].delete:
                        _this.showMessage('Data successfully deleted.');
                        break;
                }
            }
            else if (result === 'error') {
                _this.showMessage('There is some issue in saving records, please contact to system administrator!');
            }
            else {
                // this.showMessage('Please try again, something went wrong');
            }
        });
    };
    ContactlistComponent.prototype.loadContacts = function () {
        var _this = this;
        this._contactService.getAllContact(_shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].BASE_USER_ENDPOINT + 'getAllContact')
            .subscribe(function (contacts) {
            _this.loadingState = false;
            _this.dataSource.data = contacts;
        });
    };
    ContactlistComponent.prototype.getGender = function (gender) {
        return _shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].genders.filter(function (ele) { return ele.id === gender; }).map(function (ele) { return ele.name; })[0];
    };
    ContactlistComponent.prototype.addContact = function () {
        this.dbops = _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].create;
        this.modalTitle = 'Add New Contact';
        this.modalBtnTitle = 'Add';
        this.openDialog();
    };
    ContactlistComponent.prototype.editContact = function (id) {
        this.dbops = _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].update;
        this.modalTitle = 'Edit Contact';
        this.modalBtnTitle = 'Update';
        this.contact = this.dataSource.data.filter(function (x) { return x.id === id; })[0];
        this.openDialog();
    };
    ContactlistComponent.prototype.deleteContact = function (id) {
        this.dbops = _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].delete;
        this.modalTitle = 'Confirm to Delete ?';
        this.modalBtnTitle = 'Delete';
        this.contact = this.dataSource.data.filter(function (x) { return x.id === id; })[0];
        this.openDialog();
    };
    ContactlistComponent.prototype.showMessage = function (msg) {
        this.snackBar.open(msg, '', {
            duration: 3000
        });
    };
    ContactlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contactlist',
            template: __webpack_require__(/*! ./contactlist.component.html */ "./src/app/contactlist/contactlist.component.html"),
            styles: [__webpack_require__(/*! ./contactlist.component.css */ "./src/app/contactlist/contactlist.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"], _services_contact_service__WEBPACK_IMPORTED_MODULE_3__["ContactService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], ContactlistComponent);
    return ContactlistComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside>\n  <strong>Nethealth Accounnt</strong>\n  <p>This utility is designed to register external Applications.</p>\n</aside>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li .glyphicon {\r\n    margin-right: 10px;\r\n}\r\n\r\n/* Highlighting rules for nav menu items */\r\n\r\nli.link-active a,\r\nli.link-active a:hover,\r\nli.link-active a:focus {\r\n    background-color: #4189C7;\r\n    color: white;\r\n}\r\n\r\n/* Keep the nav menu independent of scrolling and on top of other items */\r\n\r\n.main-nav {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: 1;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    /* On small screens, convert the nav menu to a vertical sidebar */\r\n    .main-nav {\r\n        height: 100%;\r\n        width: calc(25% - 20px);\r\n    }\r\n    .navbar {\r\n        border-radius: 0px;\r\n        border-width: 0px;\r\n        height: 100%;\r\n    }\r\n    .navbar-header {\r\n        float: none;\r\n    }\r\n    .navbar-collapse {\r\n        border-top: 1px solid #444;\r\n        padding: 0px;\r\n    }\r\n    .navbar ul {\r\n        float: none;\r\n    }\r\n    .navbar li {\r\n        float: none;\r\n        font-size: 15px;\r\n        margin: 6px;\r\n    }\r\n    .navbar li a {\r\n        padding: 10px 16px;\r\n        border-radius: 4px;\r\n    }\r\n    .navbar a {\r\n        /* If a menu item's text is too long, truncate it */\r\n        width: 100%;\r\n        white-space: nowrap;\r\n        overflow: hidden;\r\n        text-overflow: ellipsis;\r\n    }\r\n}\r\n"

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='main-nav'>\n    <div class='navbar navbar-inverse'>\n        <div class='navbar-header'>\n            <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse' [attr.aria-expanded]='isExpanded' (click)='toggle()'>\n                <span class='sr-only'>Toggle navigation</span>\n                <span class='icon-bar'></span>\n                <span class='icon-bar'></span>\n                <span class='icon-bar'></span>\n            </button>\n            <a class='navbar-brand' [routerLink]='[\"/\"]'>Accounts</a>\n        </div>\n        <div class='clearfix'></div>\n        <div class='navbar-collapse collapse' [ngClass]='{ \"in\": isExpanded }'>\n            <ul class='nav navbar-nav'>\n                <li [routerLinkActive]='[\"link-active\"]' [routerLinkActiveOptions]='{ exact: true }'>\n                    <a [routerLink]='[\"/home\"]' (click)='collapse()'>\n                        <span class='glyphicon glyphicon-home'></span> Home\n                    </a>\n                </li>\n                <li [routerLinkActive]='[\"link-active\"]'>\n                    <a [routerLink]='[\"/applications\"]' (click)='collapse()'>\n                        <span class='glyphicon glyphicon-education'></span> Clients\n                    </a>\n                </li>   \n                <li [routerLinkActive]='[\"link-active\"]'>\n                    <a [routerLink]='[\"/contacts\"]' (click)='collapse()'>\n                        <span class='glyphicon glyphicon-user'></span> Contact\n                    </a>\n                </li>               \n            </ul>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
        this.isExpanded = false;
    }
    MenuComponent.prototype.collapse = function () {
        this.isExpanded = false;
    };
    MenuComponent.prototype.toggle = function () {
        this.isExpanded = !this.isExpanded;
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
        })
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/services/application.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/application.service.ts ***!
  \*************************************************/
/*! exports provided: ApplicationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationService", function() { return ApplicationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
var ApplicationService = /** @class */ (function () {
    function ApplicationService(http) {
        this.http = http;
    }
    // get all contact data    
    ApplicationService.prototype.getAll = function (url) {
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // insert new contact details    
    ApplicationService.prototype.create = function (url, application) {
        return this.http.post(url, JSON.stringify(application), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // update contact details    
    ApplicationService.prototype.update = function (url, clientId, application) {
        var newurl = url + "?clientId=" + clientId;
        return this.http.put(newurl, application, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // delete contact information    
    ApplicationService.prototype.delete = function (url, clientId) {
        var newurl = url + "?clientId=" + clientId; // DELETE api/contact?id=42    
        return this.http.delete(newurl, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // custom handler    
    ApplicationService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.    
            console.error('An error occurred:', error.error.message);
        }
        else {
            // the backend returned an unsuccessful response code.    
            // the response body may contain clues as to what went wrong,    
            console.error("Backend returned code " + error.status + ", " + ("body was: " + error.error));
        }
        // return an observable with a user-facing error message    
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    };
    ApplicationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ApplicationService);
    return ApplicationService;
}());



/***/ }),

/***/ "./src/app/services/contact.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/contact.service.ts ***!
  \*********************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
var ContactService = /** @class */ (function () {
    function ContactService(http) {
        this.http = http;
    }
    // get all contact data    
    ContactService.prototype.getAllContact = function (url) {
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // insert new contact details    
    ContactService.prototype.addContact = function (url, contact) {
        return this.http.post(url, JSON.stringify(contact), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // update contact details    
    ContactService.prototype.updateContact = function (url, id, contact) {
        var newurl = url + "?id=" + id;
        return this.http.put(newurl, contact, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // delete contact information    
    ContactService.prototype.deleteContact = function (url, id) {
        var newurl = url + "?id=" + id; // DELETE api/contact?id=42    
        return this.http.delete(newurl, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // custom handler    
    ContactService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.    
            console.error('An error occurred:', error.error.message);
        }
        else {
            // the backend returned an unsuccessful response code.    
            // the response body may contain clues as to what went wrong,    
            console.error("Backend returned code " + error.status + ", " + ("body was: " + error.error));
        }
        // return an observable with a user-facing error message    
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    };
    ContactService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ContactService);
    return ContactService;
}());



/***/ }),

/***/ "./src/app/shared/DBOperation.ts":
/*!***************************************!*\
  !*** ./src/app/shared/DBOperation.ts ***!
  \***************************************/
/*! exports provided: DBOperation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DBOperation", function() { return DBOperation; });
var DBOperation;
(function (DBOperation) {
    DBOperation[DBOperation["create"] = 1] = "create";
    DBOperation[DBOperation["update"] = 2] = "update";
    DBOperation[DBOperation["delete"] = 3] = "delete";
})(DBOperation || (DBOperation = {}));


/***/ }),

/***/ "./src/app/shared/Global.ts":
/*!**********************************!*\
  !*** ./src/app/shared/Global.ts ***!
  \**********************************/
/*! exports provided: Global */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Global", function() { return Global; });
var Global = /** @class */ (function () {
    function Global() {
    }
    Global.BASE_USER_ENDPOINT = 'api/contact/';
    Global.BASE_APPLICATION_ENDPOINT = 'api/application/';
    Global.genders = [{
            name: 'Male',
            id: 0,
        }, {
            name: 'Female',
            id: 1
        }];
    Global.technologies = ['JavaScript', 'SharePoint', 'C#'];
    return Global;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Source\core\angular\contact-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map