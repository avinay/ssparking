(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab3/tab3.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab3/tab3.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"pHeader\">\n    <ion-title>\n      Vehicle Stock\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!--ion-card *ngFor=\"let vehicle of vehicleList\">\n    <ion-card-header>\n      <ion-card-title>{{vehicle.name}}</ion-card-title>\n      <ion-card-title>{{vehicle.vehcile_no}}</ion-card-title>\n      <ion-card-title>{{vehicle.cost}}</ion-card-title>\n    </ion-card-header>\n  </ion-card-->\n  <ion-list>\n  <ion-item>\n    <ion-grid>\n      <ion-row>\n      <ion-col>\n        <h4>ID#</h4>\n      </ion-col>\n      <ion-col>\n        <h4>Details</h4>\n      </ion-col>\n      <ion-col>\n        <h4>Type</h4>\n      </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-item>\n\n  <ion-item *ngFor=\"let vehicle of vehicleList | async\" (click)=\"gotoVehicle(vehicle.id)\">\n    <ion-grid>\n      <ion-row>\n      <ion-col size=2>\n        <ion-badge color=\"warning\">{{vehicle.id}}</ion-badge>\n      </ion-col>\n      <ion-col>\n        <ion-label>\n          {{vehicle.vehicle_no}}\n          <ion-text color=\"secondary\">\n            <p>{{vehicle.mobile}}</p>\n          </ion-text>\n        </ion-label>\n      </ion-col>\n      <ion-col>\n        {{vehicle.vehicle_type}}\n      </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-item>\n\n</ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab3/tab3.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3.page */ "./src/app/tab3/tab3.page.ts");







let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"] }])
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
    })
], Tab3PageModule);



/***/ }),

/***/ "./src/app/tab3/tab3.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pHeader {\n  --background: #F77474;\n  --color:#ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hdHRodi9teXBhcmtpbmcvU1NQYXJraW5nQXBwL3NyYy9hcHAvdGFiMy90YWIzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFiMy90YWIzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvdGFiMy90YWIzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wSGVhZGVye1xuICAtLWJhY2tncm91bmQ6ICNGNzc0NzQ7XG4gIC0tY29sb3I6I2ZmZmZmZjtcbn1cbiIsIi5wSGVhZGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjRjc3NDc0O1xuICAtLWNvbG9yOiNmZmZmZmY7XG59Il19 */"

/***/ }),

/***/ "./src/app/tab3/tab3.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _vehicle_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../vehicle.service */ "./src/app/vehicle.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let Tab3Page = class Tab3Page {
    constructor(_angularFireStore, _angularFireAuth, _alertController, router, _vehicleService) {
        //this.vehicleList = this._vehicleService.read_Vehicles()
        /*
          this.vehicleList = _angularFireStore
          .collection("vehicles")
          .doc(_angularFireAuth.auth.currentUser.uid)
          .snapshotChanges().subscribe(item => {
              console.log("items", item);
              //this.messages=item;
          });
          */
        // console.log("favoriteActivityList", this.vehicleList);
        this._angularFireStore = _angularFireStore;
        this._angularFireAuth = _angularFireAuth;
        this._alertController = _alertController;
        this.router = router;
        this._vehicleService = _vehicleService;
    }
    ngOnInit() {
        this.vehicleList = this._angularFireStore
            .collection("vehicles", (ref) => {
            console.log("add");
            return ref.where("status", "==", "parking").orderBy("id", 'desc');
        }).valueChanges();
        console.log("test", this.vechicle);
        this.vehicleList.subscribe(res => {
            console.log("test2", res);
            //this.data = res;
            this.getVehicle = res;
            //this.status =  this._activityService.getAllActivites();
            console.log(this.getVehicle);
            //this.getDays(this.getVehicle[0].parkingDate);
            //  this.status = "Sairam";
        });
        /*
          this._vehicleService.read_Vehicles().subscribe(data => {
        
            this.vehicleList = data.map(e => {
              return {
                //id: e.payload.doc.id,
                id:e.payload.doc.data()['id'],
                name: e.payload.doc.data()['name'],
                vehcile_no: e.payload.doc.data()['vehcile_no'],
                cost: e.payload.doc.data()['cost'],
                load: e.payload.doc.data()['load'],
                mobile: e.payload.doc.data()['mobile'],
                other_details: e.payload.doc.data()['other_details'],
                parkingDate: e.payload.doc.data()['parkingDate'],
                toolKit: e.payload.doc.data()['toolKit'],
                stepheny: e.payload.doc.data()['stepheny'],
                receiver_name: e.payload.doc.data()['receiver_name'],
                vehicle_type: e.payload.doc.data()['vehicle_type'],
                battery: e.payload.doc.data()['battery']
              };
            })
            //console.log("vehicleDate", this.vehicleList[0]);
        
          });
          */
    }
    gotoVehicle(vid) {
        console.log("vid", vid);
        let navigationExtras = {
            queryParams: {
                special: JSON.stringify(vid)
            }
        };
        this.router.navigate(['/tabs/tab2'], navigationExtras);
        //this.router.navigate(['/tabs/tab2'], vid);
    }
};
Tab3Page.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _vehicle_service__WEBPACK_IMPORTED_MODULE_5__["VehicleService"] }
];
Tab3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab3',
        template: __webpack_require__(/*! raw-loader!./tab3.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab3/tab3.page.html"),
        styles: [__webpack_require__(/*! ./tab3.page.scss */ "./src/app/tab3/tab3.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _vehicle_service__WEBPACK_IMPORTED_MODULE_5__["VehicleService"]])
], Tab3Page);



/***/ })

}]);
//# sourceMappingURL=tab3-tab3-module-es2015.js.map