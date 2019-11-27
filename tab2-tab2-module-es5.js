(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab2/tab2.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab2/tab2.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"pHeader\">\n    <ion-title>\n      Search Vehicle\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [ngClass]=\"{'transparentBody':isCameraShown}\">\n<form [formGroup]=\"getVehicleFormGroup\">\n  <ion-radio-group formControlName=\"searchSegment\">\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n      <ion-label>Bill No.</ion-label>\n      <ion-radio slot=\"start\" value=\"searchId\" checked></ion-radio>\n    </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-label>Vehicle No.</ion-label>\n          <ion-radio slot=\"start\" value=\"vehicleNo\"></ion-radio>\n        </ion-item>\n      </ion-col>\n  </ion-row>\n  </ion-grid>\n  </ion-radio-group>\n<ion-item>\n  <ion-label>Enter Value:</ion-label>\n  <ion-input formControlName=\"name\" type=\"text\"></ion-input>\n</ion-item>\n<ion-button (click)=\"getVehicleInfo()\" [disabled]=\"getVehicleFormGroup.invalid\" expand=\"full\">Find Vehicle</ion-button>\n<ion-button (click)=\"scanQrCode()\"  expand=\"full\">Scan Vehicle</ion-button>\n\n<ion-label color=\"danger\">{{vehicleError}}</ion-label>\n\n</form>\n\n<ion-card *ngFor=\"let item of getVehicle\">\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-chip color=\"danger\">\n            <ion-icon name=\"logo-model-s\"></ion-icon>\n            <ion-label>{{item.id}}</ion-label>\n      </ion-chip>\n      </ion-col>\n      <ion-col  align-self-end>\n        <ion-chip color=\"secondary\">\n    <ion-icon name=\"call\"></ion-icon>\n    <ion-label>{{item.mobile}}</ion-label>\n    </ion-chip>\n      </ion-col>\n    </ion-row>\n  <ion-row>\n    <ion-col size=\"6\">\n        <h3>{{item.name}}</h3>\n    </ion-col>\n\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      Vehicle #: {{item.vehicle_no}} / {{item.vehicle_type}}\n    </ion-col>\n    <ion-col size=\"4\">\n      Battery:  <strong> {{item.battery}}</strong>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class=\"bottom\">\n    <ion-col>\n     <ion-badge color=\"tertiary\">Load: {{item.load}}</ion-badge>\n    </ion-col>\n    <ion-col>\n       <ion-badge color=\"warning\">Stepheny: {{item.stepheny ? \"Yes\" : \"No\"}}</ion-badge>\n    </ion-col>\n    <ion-col>\n     <ion-badge color=\"secondary\">ToolKit: {{item.toolkit ? \"Yes\" : \"No\"}}</ion-badge>\n    </ion-col>\n  </ion-row>\n  </ion-grid>\n</ion-card>\n\n<ion-card *ngFor=\"let item of getVehicle\">\n  <ion-card-header>\n    <ion-card-title>\n\n     Invoice <ion-chip color=\"success\">\n         <ion-icon name=\"list-box\"></ion-icon>\n         <ion-label> ₹{{item.cost}} per day</ion-label>\n   </ion-chip>\n\n </ion-card-title>\n  </ion-card-header>\n  <ion-grid>\n\n  <ion-row>\n    <ion-col size=\"8\">\n      Date: {{item.parkingDate | date: \"yyyy/MM/dd HH:mm:ss\"}}\n    </ion-col>\n    <ion-col size=\"4\">\n      <ion-badge color=\"success\">No of Days: {{days}}</ion-badge>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"bottom rightAlign\">\n    <ion-col>\n      <ion-card-title> Total Amt: <span class=\"greenColor\">₹ {{item.cost * days}}</span>\n      </ion-card-title>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col align-self-end push=\"2\">\n      <div *ngIf = \"item.status == 'parking' \">\n   <ion-button (click)=\"updatedVehicleInfo(item.id)\" slots=\"end\" color=\"warning\" fill=\"outline\" shape=\"round\">Outpass Vehicle</ion-button>\n </div>\n\n    </ion-col>\n  </ion-row>\n  </ion-grid>\n</ion-card>\n<ion-card *ngFor=\"let item of getVehicle\">\n<ion-card-header>\n  <ion-card-title>\n    Vehicle Images\n  </ion-card-title>\n</ion-card-header>\n  <ion-grid >\n    <ion-row>\n      <ion-col size=\"6\" *ngFor=\"let creds of item.images; let i = index\">\n        <ion-img [src]=\"creds\" tappable (click)=\"openPreview(creds)\"></ion-img>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-card>\n\n  <!--ion-card *ngFor=\"let vehicle of vehicleList\">\n    <ion-card-header>\n      <ion-card-title>{{vehicle.name}}</ion-card-title>\n      <ion-card-title>{{vehicle.vehcile_no}}</ion-card-title>\n      <ion-card-title>{{vehicle.cost}}</ion-card-title>\n    </ion-card-header>\n  </ion-card-->\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab2/tab2.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");







var Tab2PageModule = /** @class */ (function () {
    function Tab2PageModule() {
    }
    Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"] }])
            ],
            declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]]
        })
    ], Tab2PageModule);
    return Tab2PageModule;
}());



/***/ }),

/***/ "./src/app/tab2/tab2.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pHeader {\n  --background: #F77474;\n  --color:#ffffff;\n}\n\nion-col {\n  font-size: 15px;\n  line-height: 20px;\n}\n\nion-badge {\n  position: relative;\n  top: 5px;\n}\n\n.cost {\n  font-size: 18px;\n}\n\n.bottom {\n  background: #f8f8f8;\n  border: 1px solid #ddd;\n}\n\n.rightAlign {\n  text-align: right;\n}\n\n.greenColor {\n  color: #10dc60;\n}\n\nh3 {\n  margin: 0;\n}\n\n.transparentBody {\n  background: transparent none !important;\n  --background: none transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hdHRodi9teXBhcmtpbmcvU1NQYXJraW5nQXBwL3NyYy9hcHAvdGFiMi90YWIyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFiMi90YWIyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBRENBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDRUY7O0FEQ0E7RUFDRSxrQkFBQTtFQUNBLFFBQUE7QUNFRjs7QURBQTtFQUNFLGVBQUE7QUNHRjs7QUREQTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7QUNJRjs7QURGQTtFQUNFLGlCQUFBO0FDS0Y7O0FESEE7RUFDRSxjQUFBO0FDTUY7O0FESkE7RUFDRSxTQUFBO0FDT0Y7O0FETEE7RUFDRSx1Q0FBQTtFQUNBLDhCQUFBO0FDUUYiLCJmaWxlIjoic3JjL2FwcC90YWIyL3RhYjIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBIZWFkZXJ7XG4gIC0tYmFja2dyb3VuZDogI0Y3NzQ3NDtcbiAgLS1jb2xvcjojZmZmZmZmO1xufVxuaW9uLWNvbHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cblxuaW9uLWJhZGdle1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNXB4O1xufVxuLmNvc3R7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi5ib3R0b217XG4gIGJhY2tncm91bmQ6ICNmOGY4Zjg7XG4gIGJvcmRlcjoxcHggc29saWQgI2RkZDtcbn1cbi5yaWdodEFsaWdue1xuICB0ZXh0LWFsaWduOnJpZ2h0O1xufVxuLmdyZWVuQ29sb3J7XG4gIGNvbG9yOiMxMGRjNjA7XG59XG5oM3tcbiAgbWFyZ2luOjA7XG59XG4udHJhbnNwYXJlbnRCb2R5IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbm9uZSAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQ6IG5vbmUgdHJhbnNwYXJlbnQ7XG59XG4iLCIucEhlYWRlciB7XG4gIC0tYmFja2dyb3VuZDogI0Y3NzQ3NDtcbiAgLS1jb2xvcjojZmZmZmZmO1xufVxuXG5pb24tY29sIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cblxuaW9uLWJhZGdlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDVweDtcbn1cblxuLmNvc3Qge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5ib3R0b20ge1xuICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xufVxuXG4ucmlnaHRBbGlnbiB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uZ3JlZW5Db2xvciB7XG4gIGNvbG9yOiAjMTBkYzYwO1xufVxuXG5oMyB7XG4gIG1hcmdpbjogMDtcbn1cblxuLnRyYW5zcGFyZW50Qm9keSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IG5vbmUgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiBub25lIHRyYW5zcGFyZW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tab2/tab2.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _vehicle_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vehicle.service */ "./src/app/vehicle.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _image_modal_image_modal_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../image-modal/image-modal.page */ "./src/app/image-modal/image-modal.page.ts");
/* harmony import */ var _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/qr-scanner/ngx */ "./node_modules/@ionic-native/qr-scanner/ngx/index.js");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");












var Tab2Page = /** @class */ (function () {
    function Tab2Page(_toastController, _angularFireStore, _angularFireAuth, _vehicleService, router, route, 
    //private _activityService: ActivityService,
    formBuilder, modalController, qrScanner, barcodeScanner) {
        this._toastController = _toastController;
        this._angularFireStore = _angularFireStore;
        this._angularFireAuth = _angularFireAuth;
        this._vehicleService = _vehicleService;
        this.router = router;
        this.route = route;
        this.modalController = modalController;
        this.qrScanner = qrScanner;
        this.barcodeScanner = barcodeScanner;
        this.getVehicleFormGroup = formBuilder.group({
            searchSegment: ["searchId"],
            name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
        });
        this.barcodeScannerOptions = {
            showTorchButton: true,
            showFlipCameraButton: true
        };
        //this.vehicleList = _vehicleService.read_Vehicles()
        /*
        this.vehicleList = _angularFireStore
        .collection("vehicles")
        .doc(_angularFireAuth.auth.currentUser.uid)
        .collection("vehicles")
        .snapshotChanges().subscribe(item => {
            console.log("items", item);
        //this.messages=item;
      });*/
        //  console.log("favoriteActivityList", this.vehicleList);
    }
    Tab2Page.prototype.ngOnInit = function () {
    };
    Tab2Page.prototype.scanQrCode = function () {
        var _this = this;
        this.barcodeScanner
            .scan()
            .then(function (barcodeData) {
            alert("Barcode data " + JSON.stringify(barcodeData));
            _this.scannedData = barcodeData;
        })
            .catch(function (err) {
            console.log("Error", err);
        });
    };
    Tab2Page.prototype.scanQrCodee = function (event) {
        var _this = this;
        var context = this;
        // Optionally request the permission early
        this.qrScanner.prepare()
            .then(function (status) {
            if (status.authorized) {
                // camera permission was granted
                console.log("scanning");
                var ionApp = document.getElementsByTagName("ion-app")[0];
                // start scanning
                var scanSub_1 = _this.qrScanner.scan().subscribe(function (scannedAddress) {
                    console.log('Scanned address', scannedAddress);
                    alert("Scanned address:" + scannedAddress);
                    // this.friendAddress = scannedAddress;
                    _this.qrScanner.hide(); // hide camera preview
                    scanSub_1.unsubscribe(); // stop scanning
                    ionApp.style.display = "block";
                    // this.friendAddressInput.setFocus();
                });
                // show camera preview
                ionApp.style.display = "none";
                context.qrScanner.show();
                setTimeout(function () {
                    ionApp.style.display = "block";
                    scanSub_1.unsubscribe(); // stop scanning
                    // context.friendAddressInput.setFocus();
                    context.qrScanner.hide();
                }, 60000);
                // wait for user to scan something, then the observable callback will be called
            }
            else if (status.denied) {
                console.log("Denied permission to access camera");
            }
            else {
                console.log("Something else is happening with the camera");
            }
        })
            .catch(function (e) { return console.log('Error is', e); });
    };
    Tab2Page.prototype.ionViewDidEnter = function () {
        var _this = this;
        console.log("test route", this.route);
        if (this.route != undefined) {
            this.route.queryParams.subscribe(function (params) {
                if (params && params.special) {
                    _this.data = JSON.parse(params.special);
                    _this.vechicle = _this._angularFireStore
                        .collection("vehicles", function (ref) {
                        console.log("params", _this.data);
                        return ref.where("id", "==", _this.data);
                        //  return ref.where("id", "==", this.getVehicleFormGroup.value.name)
                    }).valueChanges();
                    _this.vechicle.subscribe(function (res) {
                        console.log("test2", res);
                        if (res.length > 0) {
                            _this.getVehicle = res;
                            _this.getDays(_this.getVehicle[0].parkingDate);
                        }
                        else {
                            _this.vehicleError = "Vehicle Not Found";
                        }
                    });
                }
            });
        }
    };
    Tab2Page.prototype.getDays = function (parkingDate) {
        this.date1 = new Date(parkingDate);
        this.date2 = new Date();
        //console.log("d1"+date1 +" d2"+ date2);
        this.diffTime = Math.abs(this.date2 - this.date1);
        this.days = Math.ceil(this.diffTime / (1000 * 60 * 60 * 24));
        console.log(this.days);
    };
    Tab2Page.prototype.openPreview = function (img) {
        this.modalController.create({
            component: _image_modal_image_modal_page__WEBPACK_IMPORTED_MODULE_8__["ImageModalPage"],
            componentProps: {
                img: img
            }
        }).then(function (modal) {
            modal.present();
        });
    };
    Tab2Page.prototype.updatedVehicleInfo = function (vehicleId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var snapshotResult;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                console.log("vehicleId-test", this.getVehicle[0]);
                snapshotResult = this._angularFireStore
                    .collection("vehicles", function (ref) {
                    return ref.where("id", "==", vehicleId);
                }).snapshotChanges();
                snapshotResult.subscribe(function (res) {
                    console.log("test3", res[0]);
                    var clientRef = res[0].payload.doc.ref;
                    var updateStatus = clientRef.update({ status: "release" });
                    var toast = _this._toastController.create({
                        message: "The Vehicle " + vehicleId + "has been released.",
                        duration: 3000,
                        position: "top"
                    });
                    toast.then(function (toastMessage) {
                        toastMessage.present();
                    });
                    _this.msgDetails = { mobile_no: _this.getVehicle[0].mobile, msg: "Dear " + _this.getVehicle[0].name + "! Your Vehicle " + _this.getVehicle[0].vehicle_no + " has released from Sri Kanka Durga Parking Yard!!! For Queries call: 8886922228" };
                    _this._vehicleService.sendSMS(_this.msgDetails);
                    //clientRef = doc.payload.doc.ref;
                    //this.data = res;
                    //this.getVehicle = res;
                    //this.status =  this._activityService.getAllActivites();
                    //console.log(this.getVehicle[0].parkingDate);
                    //console.log("updateVehicle", updateVehicle);
                });
                return [2 /*return*/];
            });
        });
    };
    Tab2Page.prototype.getVehicleInfo = function () {
        var _this = this;
        this.vechicle = this._angularFireStore
            .collection("vehicles", function (ref) {
            console.log("add", _this.getVehicleFormGroup.value.searchSegment);
            if (_this.getVehicleFormGroup.value.searchSegment == "searchId") {
                return ref.where("id", "==", parseInt(_this.getVehicleFormGroup.value.name));
            }
            else if (_this.getVehicleFormGroup.value.searchSegment == "vehicleNo") {
                var vehicle_no = _this.getVehicleFormGroup.value.name;
                return ref.where("vehicle_no", "==", vehicle_no.toLowerCase());
            }
            //  return ref.where("id", "==", this.getVehicleFormGroup.value.name)
        }).valueChanges();
        console.log("test", this.vechicle);
        this.vechicle.subscribe(function (res) {
            console.log("test22", res);
            //this.data = res;
            //this.status =  this._activityService.getAllActivites();
            if (res.length > 0) {
                _this.getVehicle = res;
                console.log(_this.getVehicle[0].parkingDate);
                _this.getDays(_this.getVehicle[0].parkingDate);
            }
            else {
                _this.vehicleError = "Vehicle Not Found";
            }
        });
        //  console.log(_activityService.sendSMS());
    };
    Tab2Page.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] },
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"] },
        { type: _vehicle_service__WEBPACK_IMPORTED_MODULE_2__["VehicleService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
        { type: _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_9__["QRScanner"] },
        { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_10__["BarcodeScanner"] }
    ]; };
    Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab2',
            template: __webpack_require__(/*! raw-loader!./tab2.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab2/tab2.page.html"),
            styles: [__webpack_require__(/*! ./tab2.page.scss */ "./src/app/tab2/tab2.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"],
            _vehicle_service__WEBPACK_IMPORTED_MODULE_2__["VehicleService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"],
            _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_9__["QRScanner"],
            _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_10__["BarcodeScanner"]])
    ], Tab2Page);
    return Tab2Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module-es5.js.map