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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fonts.googleapis.com/css?family=Arimo&display=swap\" rel=\"stylesheet\">\n<header class=\"animated fadeInDown\" class=\"banner\">  \n  <nav class=\"navbar navbar-expand-lg navbar-dark\">\n    <a class=\"navbar-brand\" id=\"logo\" [routerLink]=\"['']\">\n      <img src=\"assets\\img\\logo.png\"> \n      <span> TOUCAN AIR</span>\n      </a> \n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" (click)=\"toggleNavbar()\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span><i class=\"fas fa-ellipsis-v\"></i></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\"\n      [ngClass]=\"{ 'show': navbarOpen }\">\n        <ul class=\"navbar-nav mr-auto\" data-toggle=\"collapse\" data-target=\".nav-collapse\">\n            <li class=\"nav-item dropdown center\" data-toggle=\"collapse\" data-target=\".navbar-collapse.show\">\n                <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"true\">About</a>\n                <div class=\"dropdown-menu\" >\n                  <a class=\"dropdown-item\" routerLink=\"/about\" >Toucan Air </a>\n                  <div class=\"dropdown-divider\"></div>\n                  <a class=\"dropdown-item\" routerLink=\"/team\" >Our Team</a>\n                </div>\n            </li>\n            <li class=\"nav-item\" data-toggle=\"collapse\" data-target=\".navbar-collapse.show\">\n              <a class=\"nav-link\" routerLink=\"/quality\"  >Quality</a>\n            </li>\n            <li class=\"nav-item\" data-toggle=\"collapse\" data-target=\".navbar-collapse.show\">\n                <a class=\"nav-link\" routerLink=\"/shopForParts\" >Shop for Parts</a>\n                \n              </li>\n            <li class=\"nav-item\" data-toggle=\"collapse\" data-target=\".navbar-collapse.show\">\n              <a class=\"nav-link\" routerLink=\"/contact\" >Contact</a>\n            </li>\n            <li class=\"nav-item\">\n            <form class=\"form-inline my-2 my-lg-0\" id=\"search-nav\">\n              <input class=\"form-control mr-sm-2 searchNav\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\" style=\"font-size: 14px;\">\n              <button class=\"btn btn-outline-danger my-2 my-sm-0 btnNav\" type=\"submit\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"><i class=\"fas fa-search\"></i></button>\n            </form>\n            </li>\n            <li class=\"nav-item\" id=\"login\">\n              <!-- <a class=\"nav-link\" routerLink=\" \" (click)=\"ShowLogin()\" >Log In</a> -->\n            </li>\n        </ul>\n      </div>\n  </nav>\n</header>\n<ng-template #template>\n            <div class=\"modalHeader\" >\n              <h4>Please Sign in</h4>\n              <i class=\"fas fa-plane\" id=\"avatar\"></i>\n              <button #btnClose type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"HideLogin()\" >\n                  <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"modalBody\">\n                <form>\n                  <p>What is your Username or Email Address?</p>\n                  <input type=\"text\" name=\"user\" placeholder=\"ToucanAir or toucanair@gmail.com\"  #userN>\n                  <small id=\"emailHelp\" class=\"form-text text-muted\">Have a Toucan Air account? You can see better offers.</small>\n                  <p>What is  your Password?</p>\n                  <div id=\"passw\">\n                    <input type=\"password\" name=\"passw\" placeholder=\"Password\" #passW>\n                    <a id=\"forgot\" href=\"#\" data-toggle=\"collapse\">Forgot Password?</a>\n                  </div>\n                </form>\n                  <div id=\"email\" class=\"collapse\">\n                      <input type=\"text\" name=\"VerifEmail\" placeholder=\"Introduce your Verfication Email\">\n                  </div>\n                  <small id=\"regst\" class=\"form-text text-muted\">\n                      <a [routerLink]=\"['/Register']\" (click)=\"HideLogin()\" style=\"font-weight: bold; color:black;\">NEW USER? Click to create your account!</a>\n                  </small>\n                  <small id=\"terms\" class=\"form-text text-muted\">\n                      <a href=\"#\">Terms of Use </a>&<a href=\"#\"> Privacy Policy</a>\n                  </small>\n            </div>\n            <div class=\"modalFooter\">\n                  <button type=\"button\" class=\"btn btn-danger\" id=\"close-modal\" data-dismiss=\"modal\" (click)=\"HideLogin()\">Cancel</button>\n                  <button type=\"submit\" class=\"btn btn-success\" data-dismiss=\"modal\" (click)=\"ValidateLogin(userN.value,passW.value)\" [routerLink]=\"['/LogIn']\">Continue</button>\n            </div>        \n</ng-template>\n\n<section class=\"web_homePage\" >  \n  <router-outlet></router-outlet>   \n</section>  \n\n<footer>\n    <div class=\"socialcontainer\">\n        <ul class=\"icons\">\n          <li><a id=twitter class=\"fab fa-twitter fa-2x\" href=\"https://twitter.com/ToucanAir\" target=\"_blank\"></a></li>\n          <li><a id=facebook class=\"fab fa-facebook fa-2x\" href=\"https://www.facebook.com/TOUCANAIR/\" target=\"_blank\"></a></li>\n          <li><a id=insta class=\"fab fa-instagram fa-2x\" href=\"https://www.instagram.com/toucanairllc/\" target=\"_blank\"></a></li>\n          <li><a id=mail class=\"far fa-envelope fa-2x\" data-toggle=\"modal\" data-target=\"#exampleModalEmail\" ></a></li>\n          <li><a id=linkedin class=\"fab fa-linkedin fa-2x\" href=\"https://www.linkedin.com/company/toucan-air/\" target=\"_blank\"></a></li> \n        </ul>\n      </div>\n      <div class=\"modal fade\" id=\"exampleModalEmail\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n          <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\" style=\"color: black;\">\n                <div class=\"modal-header\">\n                    <h5 class=\"modal-title\" id=\"exampleModalLabel\">New message</h5>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                      <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                  </div>\n                  <div class=\"modal-body\">\n                    <form [formGroup]=\"emailForm\" (ngSubmit)=\"onSubmit()\" style=\"text-align: left;\">\n                      <div class=\"form-group\">\n                          <div id=\"title\" >   \n                              <h3>Email Us</h3>\n                            </div>\n                          <label for=\"name\">Full Name</label>\n                          <input name=\"name\" type=\"text\" class=\"form-control\" [formControl]=\"nameCtrl\" required minlength=\"4\">\n                            \n                          <div *ngIf=\"nameCtrl.invalid && (nameCtrl.dirty || nameCtrl.touched)\"\n                                  class=\"alert alert-danger\">\n  \n                                <div *ngIf=\"nameCtrl.errors.required\">\n                                 Name is Required\n                                </div>\n\n                                <div *ngIf=\"nameCtrl.errors.minlength\">\n                                  Name must be at least 4 characters long.\n                                </div>\n                            </div>\n                      </div>\n                      <div class=\"form-group\">\n                        <label for=\"company\">Company</label>\n                        <input name=\"company\" type=\"text\" class=\"form-control\" [formControl]=\"companyCtrl\" required>\n                          \n                        <div *ngIf=\"companyCtrl.invalid && (companyCtrl.dirty || companyCtrl.touched)\"\n                                class=\"alert alert-danger\">\n\n                              <div *ngIf=\"companyCtrl.errors.required\">\n                                Company is Required\n                              </div>\n                          </div>\n                      </div>\n                      <div class=\"form-group\">\n                        <label for=\"email\">Email</label>\n                        <input name=\"email\" type=\"email\" class=\"form-control\" [formControl]=\"emailCtrl\" required minlength=\"10\">\n                          \n                        <div *ngIf=\"emailCtrl.invalid && (emailCtrl.dirty || emailCtrl.touched)\"\n                                class=\"alert alert-danger\">\n\n                              <div *ngIf=\"emailCtrl.errors.required\">\n                                Email is Required\n                              </div>\n                              <div *ngIf=\"emailCtrl.errors.email\">\n                                Introduce a Correct Email Address\n                              </div>\n                          </div>\n                      </div>\n                      <div class=\"form-group\">\n                        <label for=\"phone\">Phone</label>\n                        <input name=\"phone\" type=\"number\" class=\"form-control\" [formControl]=\"phoneCtrl\" placeholder=\"(000)-000-0000\" required minlength=\"10\" maxlength=\"10\">\n                          \n                        <div *ngIf=\"phoneCtrl.invalid && (phoneCtrl.dirty || phoneCtrl.touched)\"\n                                class=\"alert alert-danger\">\n\n                              <div *ngIf=\"phoneCtrl.errors.required\">\n                                Phone is Required\n                              </div>\n                              <div *ngIf=\"phoneCtrl.errors.minlength\">\n                                Introduce a correct Phone Number.\n                              </div>\n                          </div>\n                      </div>\n                      <div class=\"form-group\">\n                        <label for=\"message\">Message</label>\n                        <textarea maxlength=\"100\" name=\"message\" type=\"text\" rows=\"5\" class=\"form-control\" [formControl]=\"messageCtrl\" required placeholder=\"Type...\" minlength=\"4\">\n                        </textarea>\n                        <div *ngIf=\"messageCtrl.invalid && (messageCtrl.dirty || messageCtrl.touched)\"\n                                class=\"alert alert-danger\">\n\n                              <div *ngIf=\"messageCtrl.errors.required\">\n                                A message is Required\n                              </div>\n                              <div *ngIf=\"messageCtrl.errors.minlength\">\n                                Message must be longer.\n                              </div>\n                          </div>\n                          <div class=\"form-group\">\n                            <re-captcha name=\"captcha\" required [formControl]=\"captchaCtrl\" siteKey=\"6LfNxqgUAAAAAOtZdmImEz-cChz3b3R75TmwdOTL\">\n                            </re-captcha>\n                          </div>\n                      </div> \n                    </form>\n                  </div>\n                  <div class=\"modal-footer\">\n                    \n                    <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\n                    <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!emailForm.valid\" (click)=\"onSubmit(); emailForm.reset()\" id=\"btnCaptcha\">Send</button>\n                  </div>\n            </div>\n          </div>\n        </div> \n      <div class=\"copyright\">\n       &copy;Toucan Air. 2019 All Rights Reserved.\n    </div>\n</footer>\n\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/message.service */ "./src/app/services/message.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);







var AppComponent = /** @class */ (function () {
    function AppComponent(document, modalService, MessageService) {
        this.modalService = modalService;
        this.MessageService = MessageService;
        this.Users = [];
    }
    AppComponent.prototype.resolved = function (captchaResponse) {
        console.log('Resolved captcha with response: ${captchaResponse}:');
    };
    AppComponent.prototype.onSubmit = function () {
        console.log(this.emailForm.value);
        this.MessageService.sendMessage(this.emailForm.value).subscribe(function () {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                type: 'success',
                title: 'Your Message was Sent',
                showConfirmButton: false,
                timer: 1500
            });
        });
    };
    ;
    AppComponent.prototype.toggleNavbar = function () {
        this.navbarOpen = true;
        this.navbarOpen = !this.navbarOpen;
    };
    AppComponent.prototype.ShowLogin = function () {
        this.modalRef = this.modalService.show(this.modal);
    };
    AppComponent.prototype.HideLogin = function () {
        this.modalRef.hide();
    };
    AppComponent.prototype.ShowEmail = function () {
        this.modalRef = this.modalService.show(this.modal);
    };
    AppComponent.prototype.ValidateLogin = function (username, password) {
        /*alert(username + " " + password + this.Users.length);*/
        var i = 0;
        /* ConnectString(username,password);*/
        while (i <= this.Users.length) {
            if (username == this.Users[i].Username && password == this.Users[i].Password) {
                alert("Welcome " + this.Users[i].FirstName + " " + this.Users[i].LastName);
                this.HideLogin();
                return true;
            }
            else {
                i++;
            }
        }
        alert(" Invalid Username ");
    };
    AppComponent.prototype.ngOnInit = function () {
        this.nameCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(4)]);
        this.companyCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required);
        this.emailCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]);
        this.phoneCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(10)]);
        this.messageCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(4)]);
        this.captchaCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.emailForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            name: this.nameCtrl,
            company: this.companyCtrl,
            email: this.emailCtrl,
            phone: this.phoneCtrl,
            message: this.messageCtrl,
            captcha: this.captchaCtrl
        });
        var usersObj = {
            Id: '1',
            FirstName: 'Barbara',
            LastName: 'Rodrigues',
            Company: 'Toucan',
            Phone: '123',
            Email: 'a@g.com',
            Country: 'USA',
            Username: 'barb2908',
            Password: '1234'
        };
        var usersObj2 = {
            Id: '2',
            FirstName: 'Toucan Air',
            LastName: ' LLC',
            Company: 'Toucan Air',
            Phone: '123',
            Email: 'a@g.com',
            Country: 'USA',
            Username: 'toucan',
            Password: '0000'
        };
        this.Users.push(usersObj);
        this.Users.push(usersObj2);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('template'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], AppComponent.prototype, "modal", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            _services_message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"]])
    ], AppComponent);
    return AppComponent;
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-recaptcha */ "./node_modules/ng-recaptcha/index.js");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng_recaptcha__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ng_recaptcha_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-recaptcha/forms */ "./node_modules/ng-recaptcha/forms.js");
/* harmony import */ var ng_recaptcha_forms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng_recaptcha_forms__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_smart_popover__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-smart-popover */ "./node_modules/ngx-smart-popover/fesm5/ngx-smart-popover.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/message.service */ "./src/app/services/message.service.ts");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"],
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["routingComponents"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRouting"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                ngx_smart_popover__WEBPACK_IMPORTED_MODULE_11__["PopoverModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                ng_recaptcha_forms__WEBPACK_IMPORTED_MODULE_2__["RecaptchaFormsModule"],
                ng_recaptcha__WEBPACK_IMPORTED_MODULE_1__["RecaptchaModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["ModalModule"].forRoot(),
                _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyDdm1demIJQoIhp41B6C5zSSsud_xtn8Uc'
                })
            ],
            providers: [
                _services_message_service__WEBPACK_IMPORTED_MODULE_14__["MessageService"],
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_12__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_12__["HashLocationStrategy"] }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRouting, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRouting", function() { return AppRouting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_shop_shop_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/shop/shop.component */ "./src/app/components/shop/shop.component.ts");
/* harmony import */ var _components_team_team_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/team/team.component */ "./src/app/components/team/team.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_error_error_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/error/error.component */ "./src/app/components/error/error.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_quality_quality_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/quality/quality.component */ "./src/app/components/quality/quality.component.ts");












var appRoutes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"] },
    { path: 'about', component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"] },
    { path: 'shopForParts', component: _components_shop_shop_component__WEBPACK_IMPORTED_MODULE_4__["ShopComponent"] },
    { path: 'team', component: _components_team_team_component__WEBPACK_IMPORTED_MODULE_5__["TeamComponent"] },
    { path: 'contact', component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"] },
    { path: 'logIn', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"] },
    { path: 'quality', component: _components_quality_quality_component__WEBPACK_IMPORTED_MODULE_11__["QualityComponent"] },
    { path: '**', component: _components_error_error_component__WEBPACK_IMPORTED_MODULE_8__["ErrorComponent"] }
];
var AppRouting = /** @class */ (function () {
    function AppRouting() {
    }
    AppRouting = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRouting);
    return AppRouting;
}());

var routingComponents = [_components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"], _components_about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"], _components_shop_shop_component__WEBPACK_IMPORTED_MODULE_4__["ShopComponent"], _components_team_team_component__WEBPACK_IMPORTED_MODULE_5__["TeamComponent"], _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], _components_register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"], _components_quality_quality_component__WEBPACK_IMPORTED_MODULE_11__["QualityComponent"], _components_error_error_component__WEBPACK_IMPORTED_MODULE_8__["ErrorComponent"]];


/***/ }),

/***/ "./src/app/components/about/about.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/about/about.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/about/about.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"mid3\">\r\n\r\n</section>\r\n<section id=\"contentAbout\">\r\n    <div id=\"title\">   \r\n        <h2>Our History</h2>\r\n        <div class=\"aboutText\">\r\n            <p>Founded in 2015, Toucan Air provides worldwide sales, \r\n            distribution and exchange of spare parts for commercial airliners,\r\n            specializing in Boeing and Airbus passenger aircraft.  \r\n            We provide repair management and management of consignments on behalf of \r\n            airlines and other parts distributors.  Toucan Air takes a global approach \r\n            to its work, and has fluent English, German, and Spanish speaking staff on \r\n            hand to assist our clients with their needs. Toucan Air has been approved by \r\n            the U.S. Government as a contractor to the United States Air Force and Navy, \r\n            CAGE #7HJL8.\r\n            </p>\r\n        </div>\r\n        <div id=\"title\">   \r\n            <h2>Who We Are</h2>\r\n            <div class=\"aboutText\">\r\n                <p>Toucan Air is a family and privately-owned Aviation Components Provider with headquarters in Pompano Beach Florida U.S.A.​</p>\r\n                <p>Our Family Values of honesty, courtesy and respect, combined with the speed, flexibility and adaptability of a small company, are the key pillars of our business.​ Our vision is to leave a legacy of business success, respect and honesty for generations to come. </p>\r\n                <p>We always focus on our customer’s needs; we are constantly transforming & adapting our aviation services to deliver the best solutions to our customers. Our mission is to help our customer become more profitable by providing unmatched service, quality products and price. Our customers' success is our success.</p> \r\n            </div>   \r\n        </div> \r\n        \r\n    </div>        \r\n</section>"

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/components/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/components/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/contact/contact.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/contact/contact.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/contact/contact.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/contact/contact.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<script src=\"https://www.google.com/recaptcha/api.js\" async defer></script>\n<section id=\"mid2\">\n\n</section>\n\n<section id=\"contentContact\">\n    <div id=\"title\">   \n      <h2>Contact Us</h2>\n    </div>\n    <div id=\"CompContact\">\n        <div class=\"row \">\n                <div class=\"col-6 minCont\">\n                  <div class=\"container \">\n                    <form [formGroup]=\"emailForm\" (ngSubmit)=\"onSubmit()\">\n                      <div id=\"title\" >   \n                        <h3>Email Us</h3>\n                      </div>\n                      <div class=\"form-group\">\n                          <label for=\"name\">Full Name</label>\n                          <input name=\"name\" type=\"text\" class=\"form-control\" [formControl]=\"nameCtrl\" required minlength=\"4\">\n                            \n                          <div *ngIf=\"nameCtrl.invalid && (nameCtrl.dirty || nameCtrl.touched)\"\n                                  class=\"alert alert-danger\">\n  \n                                <div *ngIf=\"nameCtrl.errors.required\">\n                                 Name is Required\n                                </div>\n\n                                <div *ngIf=\"nameCtrl.errors.minlength\">\n                                  Name must be at least 4 characters long.\n                                </div>\n                            </div>\n                      </div>\n                      <div class=\"form-group\">\n                        <label for=\"company\">Company</label>\n                        <input name=\"company\" type=\"text\" class=\"form-control\" [formControl]=\"companyCtrl\" required>\n                          \n                        <div *ngIf=\"companyCtrl.invalid && (companyCtrl.dirty || companyCtrl.touched)\"\n                                class=\"alert alert-danger\">\n\n                              <div *ngIf=\"companyCtrl.errors.required\">\n                                Company is Required\n                              </div>\n                          </div>\n                      </div>\n                      <div class=\"form-group\">\n                        <label for=\"email\">Email</label>\n                        <input name=\"email\" type=\"email\" class=\"form-control\" [formControl]=\"emailCtrl\" required minlength=\"10\">\n                          \n                        <div *ngIf=\"emailCtrl.invalid && (emailCtrl.dirty || emailCtrl.touched)\"\n                                class=\"alert alert-danger\">\n\n                              <div *ngIf=\"emailCtrl.errors.required\">\n                                Email is Required\n                              </div>\n                              <div *ngIf=\"emailCtrl.errors.email\">\n                                Introduce a Correct Email Address\n                              </div>\n                          </div>\n                      </div>\n                      <div class=\"form-group\">\n                        <label for=\"phone\">Phone</label>\n                        <input name=\"phone\" type=\"text\" class=\"form-control\" [formControl]=\"phoneCtrl\" placeholder=\"(000)-000-0000\" required minlength=\"10\" maxlength=\"10\">\n                          \n                        <div *ngIf=\"phoneCtrl.invalid && (phoneCtrl.dirty || phoneCtrl.touched)\"\n                                class=\"alert alert-danger\">\n\n                              <div *ngIf=\"phoneCtrl.errors.required\">\n                                Phone is Required\n                              </div>\n                              <div *ngIf=\"phoneCtrl.errors.minlength\">\n                                Introduce a correct Phone Number.\n                              </div>\n                          </div>\n                      </div>\n                      <div class=\"form-group\">\n                        <label for=\"message\">Message</label>\n                        <textarea maxlength=\"100\" name=\"message\" type=\"text\" rows=\"5\" class=\"form-control\" [formControl]=\"messageCtrl\" required placeholder=\"Type...\" minlength=\"4\">\n                        </textarea>\n                        <div *ngIf=\"messageCtrl.invalid && (messageCtrl.dirty || messageCtrl.touched)\"\n                                class=\"alert alert-danger\">\n\n                              <div *ngIf=\"messageCtrl.errors.required\">\n                                A message is Required\n                              </div>\n                              <div *ngIf=\"messageCtrl.errors.minlength\">\n                                Message must be longer.\n                              </div>\n                          </div>\n                          <div class=\"form-group\">\n                            <re-captcha name=\"captcha\" required [formControl]=\"captchaCtrl\" siteKey=\"6LfNxqgUAAAAAOtZdmImEz-cChz3b3R75TmwdOTL\">\n                            </re-captcha>\n                          </div>\n                      </div> \n                    </form>\n                    <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!emailForm.valid\" (click)=\"onSubmit(); emailForm.reset()\" id=\"btnCaptcha\">Send</button>                                                                                 \n                 </div>\n                </div> \n                <div class=\"col-6 minCont\">\n                        <div class=\"container\">\n                            <div id=\"title\" >   \n                                    <h3>Reach Out</h3>\n                            </div>\n                            <div class=\"col-4 Contact\">\n                                    <i class=\"fas fa-map-marker-alt fa-3x icon\"></i>\n                                    <h4 class=\"font-weight-bold\">Office Address</h4>\n                                    <p>2749 NW 19th Street</p>\n                                    <p>Pompano Beach, FL.</p>\n                                    <p>33069, United States.</p>\n                            </div>\n                            <div class=\"col-4 Contact\">\n                                    <i class=\"fas fa-phone fa-3x icon\"></i>\n                                    <h4 class=\"font-weight-bold\">Phone Number</h4>\n                                    <p>Main: (754) 802-9210</p>\n                                    <p><strong style=\"color: red;\">AOG:</strong> (954) 864-1136</p>\n                                    <p>Fax: (754) 703-7249</p>\n                            </div>\n                            <div class=\"col-4 Contact\">\n                                    <i class=\"far fa-calendar-alt fa-3x icon\"></i>\n                                    <h4 class=\"font-weight-bold\">Schedule</h4>\n                                    <p>Mon-Fri 8:00am to 6pm</p>\n                                    <p><strong style=\"color: red;\">AOG</strong> 24/7/365</p>\n                                    <p>UTC-4 (Summer) UTC-5 (Winter)</p>\n                            </div>\n                            <div class=\"col-12\">\n                                    <img src=\"assets\\img\\warehouse1.jpg\" alt=\"Toucan Air\" style=\"width: 100%;\"/>\n                            </div>\n                        </div>                        \n                </div>\n        </div>   \n        <div class=\"row\" >\n            <div class=\"col-12\"  >\n                <agm-map id=\"contentMap\" [zoom]=\"15\" [latitude]=\"latitude\" [longitude]=\"longitude\" [fullscreenControl]='true' [mapTypeControl]='true' >\n                <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\"></agm-marker>\n                </agm-map >   \n            </div> \n        </div>\n    </div>  \n</section>"

/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/message.service */ "./src/app/services/message.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);





var ContactComponent = /** @class */ (function () {
    function ContactComponent(MessageService) {
        this.MessageService = MessageService;
        this.latitude = 26.255796;
        this.longitude = -80.163417;
    }
    ContactComponent.prototype.resolved = function (captchaResponse) {
        console.log('Resolved captcha with response: ${captchaResponse}:');
    };
    ContactComponent.prototype.onSubmit = function () {
        console.log(this.emailForm.value);
        this.MessageService.sendMessage(this.emailForm.value).subscribe(function () {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                type: 'success',
                title: 'Your Message was Sent',
                showConfirmButton: false,
                timer: 1500
            });
        });
    };
    ;
    ContactComponent.prototype.ngOnInit = function () {
        this.nameCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(4)]);
        this.companyCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
        this.emailCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(10)]);
        this.phoneCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(10)]);
        this.messageCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(4)]);
        this.captchaCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.emailForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: this.nameCtrl,
            company: this.companyCtrl,
            email: this.emailCtrl,
            phone: this.phoneCtrl,
            message: this.messageCtrl,
            captcha: this.captchaCtrl
        });
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/components/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/components/contact/contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/error/error.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/error/error.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXJyb3IvZXJyb3IuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/error/error.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/error/error.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  error works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/error/error.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/error/error.component.ts ***!
  \*****************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-error',
            template: __webpack_require__(/*! ./error.component.html */ "./src/app/components/error/error.component.html"),
            styles: [__webpack_require__(/*! ./error.component.css */ "./src/app/components/error/error.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <section id=\"slider\">\n    <div><img src=\"assets/img/airplane6.jpg\" alt=\"...\">\n        <p class=\"caption1\">Your <strong>TRUSTED</strong> aircraft parts <strong>SUPPLIER</strong></p>\n    </div>\n    <div><img src=\"assets/img/window2.png\">\n        <p class=\"caption2\">We offer<strong> Repair</strong> and <strong>Consignment</strong>  Management\n        throughout partnership with workshops</p>\n    </div>\n    <div><img src=\"assets/img/global2.jpg\">\n        <p class=\"caption3\">We stock the most on-demand <strong> parts </strong> for\n        <strong>BOEING</strong>, <strong>AIRBUS</strong>, and regional aircraft parts</p>\n    </div>\n    <div><img src=\"assets/img/welcome2.jpg\">\n        <p class=\"caption9\">Certified by the <strong>TAC2000</strong> and other agencies.</p>\n    </div>\n</section>\n-->\n\n  <div id=\"demo\" class=\"carousel slide\" data-ride=\"carousel\">\n    <!-- Indicators -->\n    <ul class=\"carousel-indicators\">\n      <li data-target=\"#demo\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#demo\" data-slide-to=\"1\"></li>\n      <li data-target=\"#demo\" data-slide-to=\"2\"></li>\n      <li data-target=\"#demo\" data-slide-to=\"3\"></li>\n    </ul>\n    \n    <!-- The slideshow -->\n    <div class=\"carousel-inner\">\n      <div class=\"carousel-item active\">\n        <img src=\"assets/img/engine32.jpg\" alt=\"ToucanAir\" width=\"1100\" height=\"500\">\n        <p class=\"caption1\">Your <strong style=\"color: darkorange;\">trusted</strong> aircraft parts <strong style=\"color: darkorange;\">supplier</strong></p>\n      </div>\n      <div class=\"carousel-item\">\n        <img src=\"assets/img/window22.png\" alt=\"ToucanAir\" width=\"1100\" height=\"500\">\n        <p class=\"caption2\">We offer repair and consignment management\n          throughout partnership with workshops</p>\n      </div>\n      <div class=\"carousel-item\">\n        <img src=\"assets/img/global22.jpg\" alt=\"ToucanAir\" width=\"1100\" height=\"500\">\n        <p class=\"caption3\">We stock the most on-demand parts for\n          <strong>Boeing</strong>, <strong>Airbus</strong>, and regional aircraft parts</p>\n      </div>\n      <div class=\"carousel-item\">\n          <img src=\"assets/img/welcome22.jpg\" alt=\"ToucanAir\" width=\"1100\" height=\"500\">\n          <p class=\"caption9\">Serving your most urgent requirement 24 hours 365 days a year</p>\n      </div>\n    </div>\n    \n    <!-- Left and right controls -->\n    <a class=\"carousel-control-prev\" href=\"#demo\" data-slide=\"prev\">\n      <span class=\"carousel-control-prev-icon\"></span>\n    </a>\n    <a class=\"carousel-control-next\" href=\"#demo\" data-slide=\"next\">\n      <span class=\"carousel-control-next-icon\"></span>\n    </a>\n  </div>\n <!-- <div class=\"LoadToucan\" *ngIf='showloader'>\n    <img src=\"assets/img/touca.gif\" width=\"220\" height=\"200\"style=\"border-radius: 136px;\" >\n  </div>-->\n<section id=\"contentHome\">\n  <div id=\"CompAbout\">\n      <div class=\"row\">\n          <div class=\"col homeCard\" id=\"AbPrice\">\n              <i class=\"far fa-thumbs-up fa-5x\"></i>\n              <h4>Best Prices</h4>\n              <div class=\"detail\"> Our ability to form key partnerships with vendors and certified \n                FAA &amp; EASA repair stations worldwide has given us the opportunity to offer our customers the most \n                competitive prices in the market.\n              </div>\n          </div>\n          <div class=\"col homeCard\" id=\"AbQa\">\n              <i class=\"fas fa-fighter-jet fa-5x\"></i>\n              <h4>High Quality</h4>\n              <div class=\"detail\" > We integrate Quality into each aspect \n                of our operation. Toucan Air has effective internal procedures; achieving \n                greater efficiency, consistency and productivity.      \n              </div>\n          </div>\n          <div class=\"col homeCard\" id=\"AbWorld\">\n              <i class=\"fas fa-globe-americas fa-5x\"></i>\n              <h4>Global Logistics Network</h4>\n              <div class=\"detail\" > We can ship worldwide including Hazmat or overweight shipments, thanks to\n                  our key logistical contacts. You can rest assured your shipment will arrive safe and on time when\n                  needed where needed.\n              </div>\n          </div>\n      </div>\n      <div class=\"row\">\n          <div class=\"col homeCard\" id=\"AbTime\">\n              <i class=\"far fa-clock fa-5x\"></i>\n              <h4>24/7/365 Support</h4>\n              <div class=\"detail\"  > 3:00 AM AOG? No problem! One of our staff will be able to assist you at the most\n                  crucial times, and thanks to our logistical support we are able to ship at any time to anywhere in\n                  the world.\n              </div>\n          </div>\n          <div class=\"col homeCard\" id=\"AbMng\">\n              <i class=\"fab fa-slideshare fa-5x\"></i>\n              <h4>Consignment Management</h4>\n              <div class=\"detail\" > We can manage your parts surplus either\n                 by purchasing your stock, or by holding it on consignment and trading \n                 it on your behalf, maximizing the financial benefits for both parties.     \n              </div>\n          </div>\n          <div class=\"col homeCard\" id=\"AbInv\">\n              <i class=\"fas fa-coins fa-5x\"></i>\n              <h4>Investments</h4>\n              <div class=\"detail\" > Toucan Air offers Capital Management on a broad spectrum of aviation assets for\n                  investors around the globe. Our capital management services utilizes extensive market intel and\n                  technical data gathered to quickly start making you profits on your investment. \n              </div>\n          </div>\n          <div class=\"col homeCard\" id=\"AbInv\">\n              <i class=\"fas fa-tools fa-5x\"></i>\n              <h4>Repair Management</h4>\n              <div class=\"detail\"  > Let us oversee every aspect of the Repair \n                Process. We ensure the best quality work, and offer the most competitive pricing\n                 and delivery on time. \n              </div>\n          </div>\n      </div>\n  </div> \n </section>\n<!--<section id=\"mid5\">\n  <div class=\"dark\"> \n      <div id=\"titleMid\">   \n        <h2>Subscribe to get Offers</h2>\n        <p>Lorem ipsum dolor sit amet, cons ec tetur ducimus orem ipsum</p>\n      </div>\n      <div class=\"input-group mb-3\" id=\"InputSusc\">\n          <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"Enter a Email Address\" aria-label=\"Enter a Email Address\" aria-describedby=\"basic-addon2\">\n          <div class=\"input-group-append\">\n             <button type=\"button\" class=\"btn btn-success btn-sm\">Suscribe</button>\n          </div>\n      </div>\n  </div>\n</section>-->\n\n<section id=\"contentDesc\" class=\"description\">\n    <div class=\"contentDesc1\">\n        <div class=\"desc1\">\n              <div id=\"desc\" class=\"carousel slide\" data-ride=\"carousel\">\n                <!-- Indicators -->\n                <ul class=\"carousel-indicators\">\n                  <li data-target=\"#desc\" data-slide-to=\"0\" class=\"active\"></li>\n                  <li data-target=\"#desc\" data-slide-to=\"1\"></li>\n                  <li data-target=\"#desc\" data-slide-to=\"2\"></li>\n                  <li data-target=\"#desc\" data-slide-to=\"3\"></li>\n                </ul>\n                \n                <!-- The slideshow -->\n                <div class=\"carousel-inner\">\n                  <div class=\"carousel-item active\">\n                    <img src=\"assets/img/parte1.png\" alt=\"ToucanAirParts\">\n                  </div>\n                  <div class=\"carousel-item\">\n                    <img src=\"assets/img/parte2.png\" alt=\"ToucanAirParts\">\n                  </div>\n                  <div class=\"carousel-item\">\n                    <img src=\"assets/img/parte3.png\" alt=\"ToucanAirParts\">\n                  </div>\n                  <div class=\"carousel-item\">\n                    <img src=\"assets/img/parte4.png\" alt=\"ToucanAirParts\">\n                  </div>\n                </div>\n              </div>\n        </div>\n        <div class=\"descImg\">\n          <img src=\"assets/img/airplane3.jpg\" width=\"750\" height=\"500\">\n        </div>\n    </div>\n    <!--\n    <div class=\"contentDesc2\">\n      <div class=\"descImg2\">\n        <img src=\"assets/img/airplane5.jpg\" width=\"750\" height=\"400\">\n      </div>\n      <div class=\"desc2\">\n        <h3>Terms and Conditions </h3>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere veritatis inventore eum, cupiditate esse debitis consectetur nisi harum. Tempore, assumenda ducimus vero totam labore. Ipsam, eos odit eaque, voluptatum minima, odio eveniet soluta saepe, culpa quo enim omnis iusto. Possimus, at numquam beatae non atque?</p>\n      </div>\n    </div>-->\n</section>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.showloader = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.setTimer();
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        if (this.subscription && this.subscription instanceof rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]) {
            this.subscription.unsubscribe();
        }
    };
    HomeComponent.prototype.setTimer = function () {
        var _this = this;
        // set showloader to true to show loading div on view
        this.showloader = true;
        this.timer = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(5000); // 5000 millisecond means 5 seconds
        this.subscription = this.timer.subscribe(function () {
            // set showloader to false to hide loading div from view after 5 seconds
            _this.showloader = false;
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fade', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(500)]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(500)]),
                ])
            ],
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"profile\">\n  <div class=\"container touc-profile\">\n      <form method=\"post\">\n          <div class=\"row\">\n              <div class=\"col-md-4\">\n                  <div class=\"profile-img\">\n                      <img src=\"assets\\img\\prueba2.jpg\" alt=\"\" />\n                      <div class=\"file btn btn-lg btn-primary\">\n                          Change Photo\n                          <input type=\"file\" name=\"file\"/>\n                      </div>\n                  </div>\n              </div>\n              <div class=\"col-md-6\">\n                  <div class=\"profile-head\">\n                              <h5>\n                                  Barbara Rodrigues\n                              </h5>\n                              <h6>\n                                  Web Developer and Designer Toucan Air\n                              </h6>\n                              <p class=\"profile-rating\">REWARDS : <span>1000</span></p>\n                      <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\n                          <li class=\"nav-item\">\n                              <a class=\"nav-link active\" id=\"home-tab\" data-toggle=\"tab\" href=\"#home\" role=\"tab\" aria-controls=\"home\" aria-selected=\"true\">Personal</a>\n                          </li>\n                          <li class=\"nav-item\">\n                              <a class=\"nav-link\" id=\"profile-tab\" data-toggle=\"tab\" href=\"#profile\" role=\"tab\" aria-controls=\"profile\" aria-selected=\"false\">Recent</a>\n                          </li>\n                      </ul>\n                  </div>\n              </div>\n              <div class=\"col-md-2\">\n                  <input type=\"submit\" class=\"profile-edit-btn\" name=\"btnAddMore\" value=\"Edit Profile\" [routerLink]=\"['/LogIn']\"/>\n              </div>\n          </div>\n          <div class=\"row\">\n              <div class=\"col-md-4\">\n                  <div class=\"profile-work\">\n                      <p>LISTS</p>\n                      <a href=\"\">Browsing History</a><br/>\n                      <a href=\"\">Recently Viewed</a><br/>\n                      <a href=\"\">Favorite Parts</a>\n                      <p>YOUR ORDERS</p>\n                      <a href=\"\">Orders placed</a><br/>\n                      <a href=\"\">Buy Again</a><br/>\n                      <a href=\"\">Open Orders</a><br/>\n                      <a href=\"\">Cancelled Orders</a><br/>\n                  </div>\n              </div>\n              <div class=\"col-md-8\">\n                  <div class=\"tab-content profile-tab\" id=\"myTabContent\">\n                      <div class=\"tab-pane fade show active\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\n                                  <div class=\"row\">\n                                      <div class=\"col-md-6\">\n                                          <label>Username</label>\n                                      </div>\n                                      <div class=\"col-md-6\">\n                                          <p>barb2908</p>\n                                      </div>\n                                  </div>\n                                  <div class=\"row\">\n                                      <div class=\"col-md-6\">\n                                          <label>Name</label>\n                                      </div>\n                                      <div class=\"col-md-6\">\n                                          <p>Barbara Rodrigues</p>\n                                      </div>\n                                  </div>\n                                  <div class=\"row\">\n                                      <div class=\"col-md-6\">\n                                          <label>Email</label>\n                                      </div>\n                                      <div class=\"col-md-6\">\n                                          <p>barbara29rp@gmail.com</p>\n                                      </div>\n                                  </div>\n                                  <div class=\"row\">\n                                      <div class=\"col-md-6\">\n                                          <label>Phone</label>\n                                      </div>\n                                      <div class=\"col-md-6\">\n                                          <p>123 456 7890</p>\n                                      </div>\n                                  </div>\n                                  <div class=\"row\">\n                                      <div class=\"col-md-6\">\n                                          <label>Company</label>\n                                      </div>\n                                      <div class=\"col-md-6\">\n                                          <p>Toucan Air</p>\n                                      </div>\n                                  </div>\n                      </div>\n                      <div class=\"tab-pane fade\" id=\"profile\" role=\"tabpanel\" aria-labelledby=\"profile-tab\">\n                                  <div class=\"row\">\n                                      <div class=\"card\" style=\"width: 90%; margin-bottom: 25px\">\n                                          <div class=\"card-header\">\n                                            Parts\n                                          </div>\n                                          <div class=\"card-body\">\n                                            <h5 class=\"card-title\">Special title treatment</h5>\n                                            <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n                                            <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n                                          </div>\n                                        </div>\n                                  </div>\n                                  <div class=\"row\">\n                                      <div class=\"card\" style=\"width: 90%; margin-bottom: 25px\">\n                                          <div class=\"card-header\">\n                                            Quotes\n                                          </div>\n                                          <div class=\"card-body\">\n                                            <h5 class=\"card-title\">Special title treatment</h5>\n                                            <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n                                            <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n                                          </div>\n                                        </div>\n                                  </div>\n                                  <div class=\"row\">\n                                      <div class=\"card\" style=\"width: 90%; margin-bottom: 25px\">\n                                          <div class=\"card-header\">\n                                            Pending\n                                          </div>\n                                          <div class=\"card-body\">\n                                              <blockquote class=\"card-text\">\n                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n                                              </blockquote>\n                                          </div>\n                                      </div>\n                                  </div>\n                          <div class=\"row\">\n                          </div>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </form>           \n  </div>\n</section>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/quality/quality.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/quality/quality.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcXVhbGl0eS9xdWFsaXR5LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/quality/quality.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/quality/quality.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"mid5\">\n\n</section>\n<div class=\"quality\">\n    <div id=\"title\">   \n        <h2>Quality Management</h2>\n           <div class=\"card-group\">\n              <div class=\"card qualityCards\" style=\"margin: 3%;\">\n                  <img class=\"card-img-top\" src=\"assets/img/C130.jpg\" alt=\"Card image cap\" >\n                  <div class=\"card-header bg-dark text-white \">Forms</div>\n                  <div class=\"card-body\">\n                    <div class=\"list-group\">\n                        <a href=\"https://toucanair.com/docsToucan/Credit%20Card%20Authorization%20TA%20Form%20v.1.0%20May%202018.pdf\" class=\"list-group-item list-group-item-action downFile\" target=\"_blank\">Credit Card Authorization <i class=\"fas fa-download downFile\"></i></a>\n                        <a href=\"https://toucanair.com/docsToucan/New%20Customer%20Credit%20Application%20-%20TA%20Form%20v1.1%20June%202019.pdf\" class=\"list-group-item list-group-item-action downFile\" target=\"_blank\">New Customer Credit Application <i class=\"fas fa-download downFile\"></i></a>\n                        <a href=\"https://toucanair.com/docsToucan/End-User%20Compliance%20with%20USA%20Regulations%20-%20TA%20Form%20v1.0%20Aug%202018.pdf\" class=\"list-group-item list-group-item-action downFile\" target=\"_blank\">End-User Compliance with USA Regulations <i class=\"fas fa-download downFile\"></i></a>\n                      </div>\n                  </div>\n                </div>\n              <div class=\"card qualityCards\" style=\"margin: 3%;\">\n                <img class=\"card-img-top\" src=\"assets/img/C130.jpg\" alt=\"Card image cap\" >\n                <div class=\"card-header bg-dark text-white\">Certificates</div>\n                <div class=\"card-body\">\n                  <div class=\"list-group\">\n                      <a href=\"https://toucanair.com/docsToucan/Quality%20Certificate%20TAC%202000%202017-2019%20Toucan%20Air.pdf\" class=\"list-group-item list-group-item-action downFile\" target=\"_blank\">Quality Certificate TAC2000 <i class=\"fas fa-download downFile\"></i></a>\n                      <a href=\"https://toucanair.com/docsToucan/2019%20Resale%20Tax%20Certificate%20Toucan%20Air.pdf\" class=\"list-group-item list-group-item-action downFile\" target=\"_blank\">2019 Resale Tax Certificate <i class=\"fas fa-download downFile\"></i></a>\n                      <a href=\"https://toucanair.com/docsToucan/Minority%20Supplier%20Certificate%202019-2020%20Toucan%20Air.pdf\" class=\"list-group-item list-group-item-action downFile\" target=\"_blank\">Minority Supplier Certificate <i class=\"fas fa-download downFile\"></i></a>\n                      <a href=\"https://toucanair.com/docsToucan/Drug-Free%20Workplace%20Toucan%20Air.pdf\" class=\"list-group-item list-group-item-action downFile\" target=\"_blank\">Drug-Free Workplace Certificate <i class=\"fas fa-download downFile\"></i></a>\n                  </div>\n                </div>\n              </div>\n              <div class=\"card qualityCards\" style=\"margin: 3%;\">\n                <img class=\"card-img-top\" src=\"assets/img/C130.jpg\" alt=\"Card image cap\">\n                <div class=\"card-header bg-dark text-white\">Terms & Conditions</div>\n                <div class=\"card-body\">\n                  <div class=\"list-group\">\n                      <a href=\"\" class=\"list-group-item list-group-item-action downFile\" data-toggle=\"modal\" data-target=\"#exampleModalLong\">Privacy Policy</a>\n                      \n                      <div class=\"modal fade\" id=\"exampleModalLong\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLongTitle\" aria-hidden=\"true\">\n                          <div class=\"modal-dialog\" role=\"document\">\n                            <div class=\"modal-content\">\n                              <div class=\"modal-header bg-dark text-white\">\n                                <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Privacy Policy</h5>\n                                <button type=\"button\" class=\"close text-white\" data-dismiss=\"modal\" aria-label=\"Close\">\n                                  <span aria-hidden=\"true\">&times;</span>\n                                </button>\n                              </div>\n                              <div class=\"modal-body\">\n                                  <div class=\"overlay\">\n                                          <h4 class=\"position\">Toucan Air LLC Copyright Notice</h4>\n                                          <div class=\"media-body bio\">\n                                              Toucan Air LLC  authorizes you to copy documents published by Toucan Air LLC  on the World Wide Web for personal or non-commercial use only, provided any copy of these documents that you make shall retain all copyright and other proprietary notices contained herein. Except as expressly provided, nothing contained in this paragraph shall be construed as conferring any license or right under any Toucan Air LLC  copyright. No materials available on the Toucan Air LLC  Web site may be stored, transmitted by any means (including but not limited to electronic, mechanical, scanning, photocopying or recording) without prior written permission of Toucan Air LLC \n                                          </div> \n                                          <h4 class=\"position\">Trademarks and Intellectual Property Disclaimer</h4>\n                                          <div class=\"media-body bio\">\n                                              Toucan Air LLC, the Toucan Air LLC logo, and all product names appearing on our Web sites are among the trademarks and/or service marks owned by Toucan Air LLC , and no trademark or service mark or other license is granted in connection with the materials contained on any Toucan Air LLC Web site.\n                                              <br><br>\n                                              Nothing contained herein shall be construed as conferring by implication, estoppel or otherwise any license to any patent, trademark or other intellectual property right of Toucan Air LLC  or any third party. Toucan Air LLC  makes no representations or warranties that any use of the information contained on this Web site will not infringe any such patent, trademark or other intellectual property right of Toucan Air LLC  or any third party.\n                                          </div>\n                                          <h4 class=\"position\">General Legal</h4>\n                                          <div class=\"media-body bio\">\n                                              Should you view the Toucan Air LLC  Web site and respond with information (excluding personal information, which is addressed under the Internet Privacy Policy) including questions, comments or suggestions regarding the content of the Toucan Air LLC  Web site, such information shall be deemed to be non-confidential and Toucan Air LLC  shall have no obligation of any kind with respect to such information and shall be free to reproduce, use, disclose and distribute the information to others without limitation. Toucan Air LLC  shall be free to use any ideas, concepts, know-how or techniques contained in such information for any purpose whatsoever including but not limited to developing, manufacturing and marketing products incorporating such information.\n                                              <br>\n                                              <br>\n                                              TOUCAN AIR LLC  MAKES NO REPRESENTATIONS OR WARRANTIES, EITHER EXPRESS OR IMPLIED, OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE OR OF ANY NATURE REGARDING THE INFORMATION OR THE PRODUCT TO WHICH THE INFORMATION REFERS. \n                                              <br>\n                                              <br>\n                                              The information on this Web site may include typographical inaccuracies.\n                                              <br>\n                                              <br>\n                                              UNDER NO CIRCUMSTANCES WILL TOUCAN AIR LLC  BE LIABLE TO ANY PERSON OR BUSINESS ENTITY FOR ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL OR OTHER DAMAGES BASED ON ANY USE OF THIS WEB SITE OR ANY OTHER WEB SITE TO WHICH THE TOUCAN AIR LLC  WEB SITE IS LINKED, INCLUDING, WITHOUT LIMITATION, ANY LOST PROFITS, BUSINESS INTERRUPTION, OR LOSS OF PROGRAMS OR INFORMATION, EVEN IF TOUCAN AIR LLC  HAS BEEN SPECIFICALLY ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.\n                                              \n                                          </div> \n                                          \n                                  </div>\n                              </div>\n                              <div class=\"modal-footer bg-dark text-white\">\n                                <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      \n                      \n                      <a href=\"https://toucanair.com/docsToucan/Toucan%20Air%20Commercial%20Terms%20&%20Condiitons%20of%20Sale%20v1.0%20June%202019.pdf\" class=\"list-group-item list-group-item-action downFile\" target=\"_blank\">Terms & Conditions of Sale<i class=\"fas fa-download downFile\"></i></a>\n                  </div>\n                </div>\n              </div>\n    </div>\n  </div>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/components/quality/quality.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/quality/quality.component.ts ***!
  \*********************************************************/
/*! exports provided: QualityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QualityComponent", function() { return QualityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var QualityComponent = /** @class */ (function () {
    function QualityComponent() {
    }
    QualityComponent.prototype.ngOnInit = function () {
    };
    QualityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quality',
            template: __webpack_require__(/*! ./quality.component.html */ "./src/app/components/quality/quality.component.html"),
            styles: [__webpack_require__(/*! ./quality.component.css */ "./src/app/components/quality/quality.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], QualityComponent);
    return QualityComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"RegisterF\">\n  <div id=\"RegisterForm\">\n    <div id=\"titleForm\">   \n      <h2>Create your Account</h2>\n    </div>\n    <form class=\"needs-validation\" novalidate>\n      <div class=\"form-row\">\n        <div class=\"col-xs-6\" id=\"formRegLeft\">\n          <label for=\"validationCustom01\">First Name</label>\n          <input type=\"text\" class=\"form-control\" id=\"validationCustom01\" placeholder=\"First Name\" #FirstN required>\n          <div class=\"valid-feedback\">\n            Looks good!\n          </div>\n        </div>\n        <div class=\"col-xs-6\" id=\"formRegRight\">\n            <label for=\"validationCustom01\">Last Name</label>\n            <input type=\"text\" class=\"form-control\" id=\"validationCustom01\" placeholder=\"Last Name\" #LastN required>\n            <div class=\"valid-feedback\">\n              Looks good!\n            </div>\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <div class=\"col-xs-6\" id=\"formRegLeft\">\n          <label for=\"validationCustom02\">Company</label>\n          <input type=\"text\" class=\"form-control\" id=\"validationCustom02\" placeholder=\"Company\" #Comp required>\n          <div class=\"valid-feedback\">\n            Looks good!\n          </div>\n        </div>\n        <div class=\"col-xs-6\" id=\"formRegRight\">\n            <label for=\"validationCustom02\">Phone Number</label>\n            <input type=\"text\" class=\"form-control\" id=\"validationCustom02\" placeholder=\"(000)000-0000\" #Phone required>\n            <div class=\"valid-feedback\">\n              Looks good!\n            </div>\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <div class=\"col-xs-6\" id=\"formRegLeft\">\n          <label for=\"validationCustom02\">Email Address</label>\n          <input type=\"text\" class=\"form-control\" id=\"validationCustom02\" placeholder=\"toucanair@gmail.com\" #Email required>\n          <div class=\"valid-feedback\">\n            Looks good!\n          </div>\n        </div>\n        <div class=\"col-xs-6\" id=\"formRegRight\">\n            <label for=\"validationCustom02\">Country</label>\n            <input type=\"text\" class=\"form-control\" id=\"validationCustom02\" placeholder=\"United States\"  #Ctry required>\n            <div class=\"valid-feedback\">\n              Looks good!\n            </div>\n          </div>\n      </div>\n      <div class=\"form-row\">\n        <div class=\"col-xs-6\" id=\"formRegLeft\">\n          <label for=\"validationCustomUsername\">Username</label>\n          <div class=\"input-group\">\n            <input type=\"text\" class=\"form-control\" id=\"validationCustomUsername\" placeholder=\"\"  aria-describedby=\"inputGroupPrepend\" #UserNa required>\n            <div class=\"invalid-feedback\">\n              Please choose a username.\n            </div>\n          </div>\n        </div> \n        <div class=\"col-xs-6\" id=\"formRegRight\">\n            <label for=\"validationCustomUsername\">Password</label>\n            <div class=\"input-group\">\n              <input type=\"text\" class=\"form-control\" id=\"validationCustomUsername\" placeholder=\"\"  aria-describedby=\"inputGroupPrepend\"#PassWrd required>\n              <div class=\"invalid-feedback\">\n                Please choose your password.\n              </div>\n            </div>\n        </div>\n      </div>  \n\n      <div class=\"form-group\" >   \n        <div class=\"form-check\" id=\"terms\">\n          <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"invalidCheck\" required>\n          <label class=\"form-check-label\" for=\"invalidCheck\">\n              <small  class=\"form-text text-muted\">\n                 I Agree to The Toucan Air <a href=\"#\">Terms of Use </a>&<a href=\"#\"> Privacy Policy</a>\n                </small> \n          </label>\n          <div class=\"invalid-feedback\">\n            You must agree before submitting.\n          </div>\n        </div>\n      </div>\n      <button id=\"back\" class=\"btn btn-danger\" type=\"button\" [routerLink]=\"['']\">Back</button>\n      <button id=\"submReg\" class=\"btn btn-success\" type=\"submit\" (click)=\"CreateUser(FirstN.value,LastN.value,Comp.value,Phone.value,Email.value,Ctry.value)\" [routerLink]=\"['/LogIn']\"> Submit </button>\n    </form>\n  </div>  \n</div>  "

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    /*
      CreateUser(FirstN,LastN,Comp,Phone,Email,Ctry,Username,Password){
        alert( "HOLA" + FirstN + LastN + Comp +Phone + Email + Ctry + Username + Password);
      }*/
    RegisterComponent.prototype.CreateUser = function (FirstN, LastN, Comp, Phone, Email, Ctry) {
        alert("HOLAAAAAAAA" + FirstN + LastN + Comp + Phone + Email + Ctry);
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/shop/shop.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/shop/shop.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hvcC9zaG9wLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/shop/shop.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/shop/shop.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"mid1\">\n  <!--  <div class=\"search-box\">\n        <input class=\"search-txt1\" type=\"text\" name=\"\"\n         placeholder=\" Type to search\">\n        <a class=\"search-btn1\" href=\"\">\n          <i class=\"fas fa-search\"></i>\n        </a>\n        \n    </div>-->\n    <div>\n        <p class=\"caption8\">Search our entire database to see what is currently available</p>\n    </div>\n    <div class=\"coming\">\n        <img src=\"assets/img/coming.png\" alt=\"Coming\" width=\"200\" height=\"200\" z-index=\"2\">\n    </div>\n    <div class=\"comingToucan\">\n        <img src=\"assets/img/toucanFondo.png\" alt=\"Toucan\" width=\"100\" height=\"100\" z-index=\"3\">\n    </div>\n</section>\n<section>\n  <div>\n    \n  </div>\n</section>\n\n"

/***/ }),

/***/ "./src/app/components/shop/shop.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/shop/shop.component.ts ***!
  \***************************************************/
/*! exports provided: ShopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopComponent", function() { return ShopComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ShopComponent = /** @class */ (function () {
    function ShopComponent() {
    }
    ShopComponent.prototype.ngOnInit = function () {
    };
    ShopComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shop',
            template: __webpack_require__(/*! ./shop.component.html */ "./src/app/components/shop/shop.component.html"),
            styles: [__webpack_require__(/*! ./shop.component.css */ "./src/app/components/shop/shop.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ShopComponent);
    return ShopComponent;
}());



/***/ }),

/***/ "./src/app/components/team/team.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/team/team.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGVhbS90ZWFtLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/team/team.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/team/team.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"mid4\">\n\n</section>\n<section id=\"contentTeam\">\n    <div id=\"title\">   \n        <h2>Our Team</h2>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-sm-6 colTeam\">\n            <img class=\"teamImg\" src=\"assets/img/JONN.jpg\" data-toggle=\"modal\" data-target=\"#exampleModal\">\n            <h3>Jonathan Navas</h3>\n            <h4 class=\"postHme\">Founder & CEO</h4>\n            <div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n                    <div class=\"modal-dialog\" role=\"document\">\n                      <div class=\"modal-content\">\n                        <div class=\"modal-header bg-dark text-white\">\n                          <h5 class=\"modal-title\" id=\"exampleModalLabel\">Jonathan Navas</h5>\n                          <button type=\"button\" class=\"close text-white\" data-dismiss=\"modal\" aria-label=\"Close\">\n                            <span aria-hidden=\"true\">&times;</span>\n                          </button>\n                        </div>\n                        <div class=\"modal-body\">\n                            <div class=\"overlay\">\n                                    <img class=\"mr-3  imgBio\" src=\"assets/img/pool.jpg\" alt=\"Jon\">\n                                    <h4 class=\"position\">Founder & CEO</h4>\n                                            <div class=\"media-body bio\">\n                                              Jonathan “ChaChi” Navas founded Toucan Air in 2015, \n                                              With over a decade of experience, he was determined \n                                              to create a company dedicated to aviation with the \n                                              outmost integrity, where customers could really enjoy \n                                              the rewards of quality, and honesty. Today those \n                                              core principles are still forged into the core of \n                                              the business and his employees.\n\n                                              While earning his way through college, Jonathan began \n                                              his aviation career working with Blue Star Aerospace \n                                              as a shipping and receiving clerk and ended up as \n                                              warehouse manager. After graduating with a BA in \n                                              Criminal Justice, he already had the “aviation bug” \n                                              and his passion for aviation only grew. He took on \n                                              the role of sales manager for Shoreline Aerospace \n                                              and from there his career took off, gradually \n                                              taking on more demanding roles within some of the \n                                              most reputable companies in Aviation. As the team \n                                              leader, Jonathan’s vision is to make Toucan Air a \n                                              true world leader in Aviation. With the help and \n                                              wisdom of his father and a talented team, Toucan Air \n                                              continues to grow each day, getting one step closer \n                                              towards that vision.\n                                              <hr>\n                                              During his spare time Jonathan enjoys Scuba diving \n                                              and BBQing pool side with his family.                                               \n                                              <hr>\n                                              “The passion for aviation runs through my veins. \n                                              That is why I couldn’t imagine myself doing anything \n                                              else, I have an unfathomable devotion for this \n                                              industry. I believe we are just beginning to scratch\n                                               the surface of what aviation and aerospace will be \n                                               in the future and I want Toucan Air to play a crucial \n                                               part of this inevitable growth. This is why 4 years \n                                               ago I set myself on a mission to start a company not \n                                               only with competitive prices, but a company everyone \n                                               can trust, with the outmost integrity and unmatched \n                                               commitment.”\n                                             </div> \n                                    \n                            </div>\n                        </div>\n                        <div class=\"modal-footer bg-dark text-white\">\n                          <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\n                        </div>\n                      </div>\n                    </div>\n                  </div>   \n                <button popover=\"(754)703-7280\"\n                    popoverPlacement=\"left\"\n                    [popoverOnHover]=\"false\"\n                    [popoverCloseOnClickOutside]=\"true\"\n                    class=\"iconPhone\" \n                    >\n                    <i class=\"fas fa-phone pr-1\"></i> \n                </button> \n                <button popover=\"Jon@toucanair.com\"\n                    popoverPlacement=\"bottom-right\"\n                    [popoverOnHover]=\"false\"\n                    [popoverCloseOnClickOutside]=\"true\"\n                    class=\"iconEmail\" \n                    >\n                    <i class=\"fas fa-envelope pr-1\"></i> \n                </button>\n                <a class=\"iconWhatsapp\" href=\"https://api.whatsapp.com/send?phone=19548641136\" target=\"_blank\"><i class=\"fab fa-whatsapp pr-1\" style=\"font-weight: bold;\"></i></a>                  \n                <a class=\"iconLinked\" href=\"https://www.linkedin.com/in/jonathan-navas-59382369/\" target=\"_blank\"><i class=\"fab fa-linkedin-in pr-1\"></i></a>  \n                <a class=\"iconSkype\" href=\"skype:echo123?chat\" target=\"_blank\"><i class=\"fab fa-skype pr-1\"></i> </a>  \n        </div>\n        <div class=\"col-sm-6 colTeam\">\n                <img class=\"teamImg\" src=\"assets/img/JUAN.jpg\"  data-toggle=\"modal\" data-target=\"#exampleModal1\">\n                <h3>Juan Navas</h3>\n                <h4 class=\"postHme\">Vice-President</h4>\n                <div class=\"modal fade\" id=\"exampleModal1\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n                        <div class=\"modal-dialog\" role=\"document\">\n                          <div class=\"modal-content\">\n                            <div class=\"modal-header bg-dark text-white\">\n                              <h5 class=\"modal-title\" id=\"exampleModalLabel\">Juan Navas</h5>\n                              <button type=\"button\" class=\"close text-white\" data-dismiss=\"modal\" aria-label=\"Close\">\n                                <span aria-hidden=\"true\">&times;</span>\n                              </button>\n                            </div>\n                            <div class=\"modal-body\">\n                                <div class=\"overlay\">\n                                        <img class=\"mr-3 imgBio\" src=\"assets/img/golf.jpg\" alt=\"Jon\">\n                                        <h4 class=\"position\">Vice-President</h4>\n                                                <div class=\"media-body bio\">\n                                                        Juan joined Toucan Air in 2017 as Vice-President after a +27 \n                                                        years superb career with Honeywell International Inc.  Juan holds a diploma\n                                                        in Advanced Programs for Managers from St. Thomas University, a diploma in\n                                                        Strategic Management – Executive Program – from the University of\n                                                        Minnesota Carlson School of Management and holds a B.Sc. in Electrical\n                                                        Engineering with specialization in Automation & Control from Universidad\n                                                        Central de Venezuela.\n                                                        Juan loves outdoor activities, biking, scuba diving and spending as much\n                                                         quality time as possible with his family and friends.\n                                                 </div> \n                                        \n                                </div>\n                            </div>\n                            <div class=\"modal-footer bg-dark text-white\">\n                              <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <button popover=\"(754)300-2467\"\n                          popoverPlacement=\"left\"\n                          [popoverOnHover]=\"false\"\n                          [popoverCloseOnClickOutside]=\"true\"\n                          class=\"iconPhone\" >\n                          <i class=\"fas fa-phone pr-1\"></i> \n                      </button>  \n                      <button popover=\"Juan@toucanair.com\"\n                          popoverPlacement=\"bottom-right\"\n                          [popoverOnHover]=\"false\"\n                          [popoverCloseOnClickOutside]=\"true\"\n                          class=\"iconEmail\">\n                          <i class=\"fas fa-envelope pr-1\"></i> \n                      </button>  \n                      <a class=\"iconWhatsapp\" href=\"https://api.whatsapp.com/send?phone=19546094638\" target=\"_blank\"><i class=\"fab fa-whatsapp pr-1\" style=\"font-weight: bold;\"></i></a>                  \n                      <a class=\"iconLinked\" href=\"https://www.linkedin.com/in/juan-navas-7198a85/\" target=\"_blank\"><i class=\"fab fa-linkedin-in pr-1\"></i></a>  \n                      <a class=\"iconSkype\" href=\"skype:janavas989?chat\" target=\"_blank\"><i class=\"fab fa-skype pr-1\"></i> </a>   \n            </div> \n        </div>\n        <div class=\"row\">\n            <div class=\"col-sm-6 colTeam\">\n                    <img  class=\"teamImg\" src=\"assets/img/prueba4.jpg\"  data-toggle=\"modal\" data-target=\"#exampleModal2\">\n                    <h3>Isabel Roa</h3>\n                    <h4 class=\"postHme\">Marketing Director</h4>\n                    <div class=\"modal fade\" id=\"exampleModal2\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n                            <div class=\"modal-dialog\" role=\"document\">\n                              <div class=\"modal-content\">\n                                <div class=\"modal-header bg-dark text-white\">\n                                  <h5 class=\"modal-title\" id=\"exampleModalLabel\">Isabel Roa</h5>\n                                  <button type=\"button\" class=\"close text-white\" data-dismiss=\"modal\" aria-label=\"Close\">\n                                    <span aria-hidden=\"true\">&times;</span>\n                                  </button>\n                                </div>\n                                <div class=\"modal-body\">\n                                    <div class=\"overlay\">\n                                            <img class=\"mr-3 imgBio\" src=\"assets/img/beach.jpg\" alt=\"Jon\">\n                                            <h4 class=\"position\">Marketing Director</h4>\n                                                    <div class=\"media-body bio\">\n                                                      Isabel is a graduate of Universidad Catolica del Tachira, Venezuela, with degrees\n                                                      in Business Administration with an emphasis on Marketing. She also holds a master's degree in\n                                                      E-Business Management from Universidad del Salvador. She has worked in different\n                                                      companies with the responsibility for developing and implementing marketing strategies, \n                                                      with more than 8 years of experience in marketing and sales, she joined the\n                                                      Toucan Air team in 2018 implementing marketing strategies to increase sales.\n                                                     </div> \n                                            \n                                    </div>\n                                </div>\n                                <div class=\"modal-footer bg-dark text-white\">\n                                  <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                          <button popover=\"(754)703-7267\"\n                              popoverPlacement=\"left\"\n                              [popoverOnHover]=\"false\"\n                              [popoverCloseOnClickOutside]=\"true\"\n                              class=\"iconPhone\" >\n                              <i class=\"fas fa-phone pr-1\"></i> \n                        </button>  \n                        <button popover=\"isabel@toucanair.com\"\n                          popoverPlacement=\"bottom-right\"\n                          [popoverOnHover]=\"false\"\n                          [popoverCloseOnClickOutside]=\"true\"\n                          class=\"iconEmail\">\n                          <i class=\"fas fa-envelope pr-1\"></i> \n                        </button> \n                          <a class=\"iconWhatsapp\" href=\"https://api.whatsapp.com/send?phone=13059781060\" target=\"_blank\"><i class=\"fab fa-whatsapp pr-1\" style=\"font-weight: bold;\"></i></a>                  \n                          <a class=\"iconLinked\" href=\"https://www.linkedin.com/in/isabel-roa/\" target=\"_blank\"><i class=\"fab fa-linkedin-in pr-1\"></i></a>  \n                          <a class=\"iconSkype\" href=\"skype:isabel.roa2?chat\" target=\"_blank\"><i class=\"fab fa-skype pr-1\"></i> </a>   \n            </div>\n            <div class=\"col-sm-6 colTeam\">\n                <img class=\"teamImg\" src=\"assets/img/prueba3.jpg\"  data-toggle=\"modal\" data-target=\"#exampleModal3\">\n                <h3>Jorge 'JJ' Alfaro</h3>\n                <h4 class=\"postHme\">Director of Business Development</h4>\n                <div class=\"modal fade\" id=\"exampleModal3\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n                        <div class=\"modal-dialog\" role=\"document\">\n                          <div class=\"modal-content\">\n                            <div class=\"modal-header bg-dark text-white\">\n                              <h5 class=\"modal-title\" id=\"exampleModalLabel\">Jorge Alfaro</h5>\n                              <button type=\"button\" class=\"close text-white\" data-dismiss=\"modal\" aria-label=\"Close\">\n                                <span aria-hidden=\"true\">&times;</span>\n                              </button>\n                            </div>\n                            <div class=\"modal-body\">\n                                <div class=\"overlay\">\n                                        <img class=\"mr-3 imgBio\" src=\"assets/img/soccer.jpg\" alt=\"Jon\">\n                                        <h4 class=\"position\">Director of Business Development</h4>\n                                                <div class=\"media-body bio\">\n                                                  Jorge (JJ) graduated from Florida International University in 2015 with a bachelor's \n                                                  degree in hospitality management. He started in the aviation world in 2017 \n                                                  with MTI Aviation and then joined Toucan Air as Director of Business Development in\n                                                  early 2019. \n                                                 </div> \n                                        \n                                </div>\n                            </div>\n                            <div class=\"modal-footer bg-dark text-white\">\n                              <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                        <button popover=\"(754)703-7298\"\n                                popoverPlacement=\"left\"\n                                [popoverOnHover]=\"false\"\n                                [popoverCloseOnClickOutside]=\"true\"\n                                class=\"iconPhone\" >\n                                <i class=\"fas fa-phone pr-1\"></i> \n                          </button>  \n                          <button popover=\"jj@toucanair.com\"\n                            popoverPlacement=\"bottom-right\"\n                            [popoverOnHover]=\"false\"\n                            [popoverCloseOnClickOutside]=\"true\"\n                            class=\"iconEmail\">\n                            <i class=\"fas fa-envelope pr-1\"></i> \n                          </button> \n                          <a class=\"iconWhatsapp\" href=\"https://api.whatsapp.com/send?phone=13059721046\" target=\"_blank\"><i class=\"fab fa-whatsapp pr-1\" style=\"font-weight: bold;\"></i></a>                  \n                          <a class=\"iconLinked\" href=\"https://www.linkedin.com/in/jorgealfaro707/\" target=\"_blank\"><i class=\"fab fa-linkedin-in pr-1\"></i></a>  \n                         <!--<a class=\"iconSkype\" href=\"https://www.linkedin.com/in/juan-navas-7198a85/\" target=\"_blank\"><i class=\"fab fa-skype pr-1\"></i> </a>  -->\n            </div>\n        </div>\n</section>"

/***/ }),

/***/ "./src/app/components/team/team.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/team/team.component.ts ***!
  \***************************************************/
/*! exports provided: TeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamComponent", function() { return TeamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TeamComponent = /** @class */ (function () {
    function TeamComponent() {
    }
    TeamComponent.prototype.ngOnInit = function () {
    };
    TeamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-team',
            template: __webpack_require__(/*! ./team.component.html */ "./src/app/components/team/team.component.html"),
            styles: [__webpack_require__(/*! ./team.component.css */ "./src/app/components/team/team.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TeamComponent);
    return TeamComponent;
}());



/***/ }),

/***/ "./src/app/services/message.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/message.service.ts ***!
  \*********************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var MessageService = /** @class */ (function () {
    function MessageService(http) {
        this.http = http;
    }
    MessageService.prototype.sendMessage = function (body) {
        return this.http.post('https://api.toucanair.com/formulario', body);
    };
    MessageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MessageService);
    return MessageService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\barba\AngularToucanAir\angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map