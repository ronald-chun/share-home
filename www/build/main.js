webpackJsonp([2],{

/***/ 107:
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
webpackEmptyAsyncContext.id = 107;

/***/ }),

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/district/district.module": [
		264,
		0
	],
	"../pages/user/user.module": [
		263,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 148;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_user__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__user_user__["a" /* UserPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/Ronald/Projects/ShareHome/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="租盤" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="帳戶" tabIcon="ios-contact-outline"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/Ronald/Projects/ShareHome/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.onInput = function () {
        console.log(this.myInput);
    };
    HomePage.prototype.onCancel = function () {
        console.log(this.myInput);
    };
    HomePage.prototype.getDistrictItems = function () {
        this.navCtrl.push('DistrictPage');
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/Ronald/Projects/ShareHome/src/pages/home/home.html"*/'<ion-header>\n<!--     <ion-navbar>\n        <ion-title>ShareHome</ion-title>\n    </ion-navbar>\n-->\n<ion-toolbar no-border-top>\n    <ion-searchbar [(ngModel)]="myInput" [showCancelButton]="shouldShowCancel" (ionInput)="onInput()" (ionCancel)="onCancel()">\n    </ion-searchbar>\n\n</ion-toolbar>\n</ion-header>\n\n<ion-content class="card-background-page">\n    <ion-grid>\n        <ion-row>\n            <ion-col class="pointer"col-6>\n                <a (click)="getDistrictItems()" >\n                    <ion-card>\n                        <img src="http://ionicframework.com/dist/preview-app/www/assets/img/card-saopaolo.png"/>\n                        <div class="card-title">中西區</div>\n                    </ion-card>\n                </a>\n            </ion-col>\n\n            <ion-col class="pointer"col-6>\n                <a (click)="getDistrictItems()" >\n                    <ion-card>\n                        <img src="http://ionicframework.com/dist/preview-app/www/assets/img/card-saopaolo.png"/>\n                        <div class="card-title">東區</div>\n                    </ion-card>\n                </a>\n            </ion-col>\n\n            <ion-col class="pointer"col-6>\n                <a (click)="getDistrictItems()" >\n                    <ion-card>\n                        <img src="http://ionicframework.com/dist/preview-app/www/assets/img/card-saopaolo.png"/>\n                        <div class="card-title">南區</div>\n                    </ion-card>\n                </a>\n            </ion-col>\n\n            <ion-col class="pointer"col-6>\n                <a (click)="getDistrictItems()" >\n                    <ion-card>\n                        <img src="http://ionicframework.com/dist/preview-app/www/assets/img/card-saopaolo.png"/>\n                        <div class="card-title">灣仔</div>\n                    </ion-card>\n                </a>\n            </ion-col>\n\n            <ion-col class="pointer"col-6>\n                <a (click)="getDistrictItems()" >\n                    <ion-card>\n                        <img src="http://ionicframework.com/dist/preview-app/www/assets/img/card-saopaolo.png"/>\n                        <div class="card-title">九龍城</div>\n                    </ion-card>\n                </a>\n            </ion-col>\n\n            <ion-col class="pointer"col-6>\n                <a (click)="getDistrictItems()" >\n                    <ion-card>\n                        <img src="http://ionicframework.com/dist/preview-app/www/assets/img/card-saopaolo.png"/>\n                        <div class="card-title">油尖旺</div>\n                    </ion-card>\n                </a>\n            </ion-col>\n\n            <ion-col class="pointer"col-6>\n                <a (click)="getDistrictItems()" >\n                    <ion-card>\n                        <img src="http://ionicframework.com/dist/preview-app/www/assets/img/card-saopaolo.png"/>\n                        <div class="card-title">深水埗</div>\n                    </ion-card>\n                </a>\n            </ion-col>\n\n            <ion-col class="pointer"col-6>\n                <a (click)="getDistrictItems()" >\n                    <ion-card>\n                        <img src="http://ionicframework.com/dist/preview-app/www/assets/img/card-saopaolo.png"/>\n                        <div class="card-title">黃大仙</div>\n                    </ion-card>\n                </a>\n            </ion-col>\n\n            <ion-col class="pointer"col-6>\n                <a (click)="getDistrictItems()" >\n                    <ion-card>\n                        <img src="http://ionicframework.com/dist/preview-app/www/assets/img/card-saopaolo.png"/>\n                        <div class="card-title">觀塘</div>\n                    </ion-card>\n                </a>\n            </ion-col>\n\n            <ion-col class="pointer"col-6>\n                <a (click)="getDistrictItems()" >\n                    <ion-card>\n                        <img src="http://ionicframework.com/dist/preview-app/www/assets/img/card-saopaolo.png"/>\n                        <div class="card-title">大埔</div>\n                    </ion-card>\n                </a>\n            </ion-col>\n\n            <ion-col class="pointer"col-6>\n                <a (click)="getDistrictItems()" >\n                    <ion-card>\n                        <img src="http://ionicframework.com/dist/preview-app/www/assets/img/card-saopaolo.png"/>\n                        <div class="card-title">屯門</div>\n                    </ion-card>\n                </a>\n            </ion-col>\n\n            <ion-col class="pointer"col-6>\n                <a (click)="getDistrictItems()" >\n                    <ion-card>\n                        <img src="http://ionicframework.com/dist/preview-app/www/assets/img/card-saopaolo.png"/>\n                        <div class="card-title">元朗</div>\n                    </ion-card>\n                </a>\n            </ion-col>\n\n            <ion-col class="pointer"col-6>\n                <a (click)="getDistrictItems()" >\n                    <ion-card>\n                        <img src="http://ionicframework.com/dist/preview-app/www/assets/img/card-saopaolo.png"/>\n                        <div class="card-title">北區</div>\n                    </ion-card>\n                </a>\n            </ion-col>\n\n            <ion-col class="pointer"col-6>\n                <a (click)="getDistrictItems()" >\n                    <ion-card>\n                        <img src="http://ionicframework.com/dist/preview-app/www/assets/img/card-saopaolo.png"/>\n                        <div class="card-title">西貢</div>\n                    </ion-card>\n                </a>\n            </ion-col>\n\n            <ion-col class="pointer"col-6>\n                <a (click)="getDistrictItems()" >\n                    <ion-card>\n                        <img src="http://ionicframework.com/dist/preview-app/www/assets/img/card-saopaolo.png"/>\n                        <div class="card-title">沙田</div>\n                    </ion-card>\n                </a>\n            </ion-col>\n\n            <ion-col class="pointer"col-6>\n                <a (click)="getDistrictItems()" >\n                    <ion-card>\n                        <img src="http://ionicframework.com/dist/preview-app/www/assets/img/card-saopaolo.png"/>\n                        <div class="card-title">荃灣</div>\n                    </ion-card>\n                </a>\n            </ion-col>\n\n            <ion-col class="pointer"col-6>\n                <a (click)="getDistrictItems()" >\n                    <ion-card>\n                        <img src="http://ionicframework.com/dist/preview-app/www/assets/img/card-saopaolo.png"/>\n                        <div class="card-title">葵青</div>\n                    </ion-card>\n                </a>\n            </ion-col>\n\n            <ion-col class="pointer"col-6>\n                <a (click)="getDistrictItems()" >\n                    <ion-card>\n                        <img src="http://ionicframework.com/dist/preview-app/www/assets/img/card-saopaolo.png"/>\n                        <div class="card-title">離島</div>\n                    </ion-card>\n                </a>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/Ronald/Projects/ShareHome/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(213);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_user_user__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(191);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_user_user__["a" /* UserPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/user/user.module#UserPageModule', name: 'UserPage', segment: 'user', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/district/district.module#DistrictPageModule', name: 'DistrictPage', segment: 'district', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_user_user__["a" /* UserPage */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/Ronald/Projects/ShareHome/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/Ronald/Projects/ShareHome/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the UserPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var UserPage = (function () {
    function UserPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    UserPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserPage');
    };
    return UserPage;
}());
UserPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-user',template:/*ion-inline-start:"/Users/Ronald/Projects/ShareHome/src/pages/user/user.html"*/'<!--\n  Generated template for the UserPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>User</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Ronald/Projects/ShareHome/src/pages/user/user.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], UserPage);

//# sourceMappingURL=user.js.map

/***/ })

},[194]);
//# sourceMappingURL=main.js.map