webpackJsonp([0],{

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistrictPageModule", function() { return DistrictPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__district__ = __webpack_require__(265);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DistrictPageModule = (function () {
    function DistrictPageModule() {
    }
    return DistrictPageModule;
}());
DistrictPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__district__["a" /* DistrictPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__district__["a" /* DistrictPage */]),
        ],
    })
], DistrictPageModule);

//# sourceMappingURL=district.module.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DistrictPage; });
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


var DistrictPage = (function () {
    function DistrictPage(navCtrl, navParams, toastCtrl, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
    }
    DistrictPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DistrictPage');
    };
    DistrictPage.prototype.getItemDetail = function () {
    };
    DistrictPage.prototype.saveItem = function (item) {
        var toast = this.toastCtrl.create({
            message: '你已儲存樓盤 ' + item,
            duration: 3000,
            position: 'top'
        });
        toast.onDidDismiss(function () {
            // console.log('Dismissed toast');
        });
        toast.present();
    };
    DistrictPage.prototype.more = function (item) {
        var actionSheet = this.actionSheetCtrl.create({
            buttons: [
                {
                    text: '舉報',
                    role: 'destructive',
                    handler: function () {
                        console.log('回報 clicked');
                    }
                },
                {
                    text: '分享',
                    handler: function () {
                        console.log('分享 clicked');
                    }
                },
                {
                    text: '取消',
                    role: 'cancel',
                    handler: function () {
                        console.log('取消 clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    return DistrictPage;
}());
DistrictPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-district',template:/*ion-inline-start:"/Users/Ronald/Projects/ShareHome/src/pages/district/district.html"*/'\n<ion-header>\n	<ion-navbar>\n<!-- 		<ion-title>District</ion-title>\n -->\n		<!-- <ion-toolbar no-border-top> -->\n			<ion-searchbar [(ngModel)]="myInput" [showCancelButton]="shouldShowCancel" (ionInput)="onInput()" (ionCancel)="onCancel()"></ion-searchbar>\n		<!-- </ion-toolbar> -->\n	</ion-navbar>\n\n</ion-header>\n\n<ion-content>\n	<ion-grid>\n		<ion-row>\n			<ion-col col-6 *ngFor=" let item of [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] " >\n				<a (click)="getItemDetail()" >\n					<ion-card>\n						<!-- <ion-card-header> -->\n							<!-- <img center *ngIf="snack.photos[0]" src="http://snackbase.staging.playa.com.hk/storage/snacks/{{snack.photos[0].filename}}"> -->\n							<img src="http://ionicframework.com/dist/preview-app/www/assets/img/card-saopaolo.png">\n						<!-- </ion-card-header> -->\n\n						<ion-card-content>\n							<span> 樓盤 {{item}} </span>		\n						    <ion-grid >\n								<ion-row text-center>\n									<ion-col class="pointer" col-6 (click)=\'saveItem(item)\'>\n										<ion-icon name="heart"  ></ion-icon>\n									</ion-col>\n									<ion-col class="pointer" col-6 (click)=\'more(item)\'>\n										<ion-icon name="more" ></ion-icon>\n									</ion-col>\n								</ion-row>\n							</ion-grid>			\n						</ion-card-content>\n					</ion-card>\n				</a>\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/Ronald/Projects/ShareHome/src/pages/district/district.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
], DistrictPage);

//# sourceMappingURL=district.js.map

/***/ })

});
//# sourceMappingURL=0.js.map