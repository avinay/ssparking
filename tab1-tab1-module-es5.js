(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./node_modules/ng2-cloudinary/dist/esm/src/cloudinary-image.component.js":
/*!********************************************************************************!*\
  !*** ./node_modules/ng2-cloudinary/dist/esm/src/cloudinary-image.component.js ***!
  \********************************************************************************/
/*! exports provided: CloudinaryImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudinaryImageComponent", function() { return CloudinaryImageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cloudinary_transforms_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cloudinary-transforms.class */ "./node_modules/ng2-cloudinary/dist/esm/src/cloudinary-transforms.class.js");
/* harmony import */ var _cloudinary_image_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cloudinary-image.service */ "./node_modules/ng2-cloudinary/dist/esm/src/cloudinary-image.service.js");



var CloudinaryImageComponent = (function () {
    function CloudinaryImageComponent(_imageService) {
        this._imageService = _imageService;
        this.imageUrl = '';
        this.transforms = new _cloudinary_transforms_class__WEBPACK_IMPORTED_MODULE_1__["CloudinaryTransforms"]();
    }
    CloudinaryImageComponent.prototype.ngOnChanges = function (changes) {
        if (this.publicId && this.cloudName) {
            var resourceType = 'image';
            var type = this.type || 'upload';
            this.imageUrl = this._imageService.getImageUrl(this.publicId, this.cloudName, resourceType, type, this.transforms);
        }
        else {
            this.imageUrl = '';
        }
    };
    Object.defineProperty(CloudinaryImageComponent.prototype, "width", {
        set: function (value) {
            this.transforms.width = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CloudinaryImageComponent.prototype, "height", {
        set: function (value) {
            this.transforms.height = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CloudinaryImageComponent.prototype, "crop", {
        set: function (value) {
            this.transforms.crop = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CloudinaryImageComponent.prototype, "aspect_ratio", {
        set: function (value) {
            this.transforms.aspect_ratio = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CloudinaryImageComponent.prototype, "gravity", {
        set: function (value) {
            this.transforms.gravity = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CloudinaryImageComponent.prototype, "zoom", {
        set: function (value) {
            this.transforms.zoom = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CloudinaryImageComponent.prototype, "x", {
        set: function (value) {
            this.transforms.x = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CloudinaryImageComponent.prototype, "y", {
        set: function (value) {
            this.transforms.y = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CloudinaryImageComponent.prototype, "format", {
        set: function (value) {
            this.transforms.format = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CloudinaryImageComponent.prototype, "quality", {
        set: function (value) {
            this.transforms.quality = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CloudinaryImageComponent.prototype, "radius", {
        set: function (value) {
            this.transforms.radius = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CloudinaryImageComponent.prototype, "angle", {
        set: function (value) {
            this.transforms.angle = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CloudinaryImageComponent.prototype, "effect", {
        set: function (value) {
            this.transforms.effect = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CloudinaryImageComponent.prototype, "opacity", {
        set: function (value) {
            this.transforms.opacity = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CloudinaryImageComponent.prototype, "border", {
        set: function (value) {
            this.transforms.border = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CloudinaryImageComponent.prototype, "background", {
        set: function (value) {
            this.transforms.background = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CloudinaryImageComponent.prototype, "overlay", {
        set: function (value) {
            this.transforms.overlay = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CloudinaryImageComponent.prototype, "underlay", {
        set: function (value) {
            this.transforms.underlay = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CloudinaryImageComponent.prototype, "default_image", {
        set: function (value) {
            this.transforms.default_image = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CloudinaryImageComponent.prototype, "delay", {
        set: function (value) {
            this.transforms.delay = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CloudinaryImageComponent.prototype, "color", {
        set: function (value) {
            this.transforms.color = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CloudinaryImageComponent.prototype, "dpr", {
        set: function (value) {
            this.transforms.dpr = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CloudinaryImageComponent.prototype, "page", {
        set: function (value) {
            this.transforms.page = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CloudinaryImageComponent.prototype, "density", {
        set: function (value) {
            this.transforms.density = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CloudinaryImageComponent.prototype, "flags", {
        set: function (value) {
            this.transforms.flags = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CloudinaryImageComponent.prototype, "transformation", {
        set: function (value) {
            this.transforms.transformation = value;
        },
        enumerable: true,
        configurable: true
    });
    CloudinaryImageComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'cl-image',
                    template: "\n    <img [src]=\"imageUrl\" [title]=\"title ||\u00A0''\" [alt]=\"alt ||\u00A0''\">\n  "
                },] },
    ];
    /** @nocollapse */
    CloudinaryImageComponent.ctorParameters = function () { return [
        { type: _cloudinary_image_service__WEBPACK_IMPORTED_MODULE_2__["CloudinaryImageService"], },
    ]; };
    CloudinaryImageComponent.propDecorators = {
        'publicId': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['public-id',] },],
        'cloudName': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cloud-name',] },],
        'type': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'title': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'alt': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'width': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'height': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'crop': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'aspect_ratio': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['aspect-ratio',] },],
        'gravity': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'zoom': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'x': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'y': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'format': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'quality': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'radius': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'angle': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'effect': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'opacity': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'border': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'background': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'overlay': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'underlay': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'default_image': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['default-image',] },],
        'delay': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'color': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'dpr': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'page': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'density': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'flags': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'transformation': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return CloudinaryImageComponent;
}());
//# sourceMappingURL=cloudinary-image.component.js.map

/***/ }),

/***/ "./node_modules/ng2-cloudinary/dist/esm/src/cloudinary-image.service.js":
/*!******************************************************************************!*\
  !*** ./node_modules/ng2-cloudinary/dist/esm/src/cloudinary-image.service.js ***!
  \******************************************************************************/
/*! exports provided: CloudinaryImageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudinaryImageService", function() { return CloudinaryImageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var CLOUDINARY_URL = 'https://res.cloudinary.com/';
var CloudinaryImageService = (function () {
    function CloudinaryImageService() {
    }
    CloudinaryImageService.prototype.getImageUrl = function (publicId, cloudName, resourceType, type, transforms) {
        return CLOUDINARY_URL +
            cloudName + '/' +
            resourceType + '/' +
            type + '/' +
            transforms.toUrlSegment() +
            publicId + '.' + (transforms.format || 'jpg');
    };
    CloudinaryImageService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    CloudinaryImageService.ctorParameters = function () { return []; };
    return CloudinaryImageService;
}());
//# sourceMappingURL=cloudinary-image.service.js.map

/***/ }),

/***/ "./node_modules/ng2-cloudinary/dist/esm/src/cloudinary-options.class.js":
/*!******************************************************************************!*\
  !*** ./node_modules/ng2-cloudinary/dist/esm/src/cloudinary-options.class.js ***!
  \******************************************************************************/
/*! exports provided: CloudinaryOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudinaryOptions", function() { return CloudinaryOptions; });
var CloudinaryOptions = (function () {
    function CloudinaryOptions(opts) {
        this.cloudName = opts.cloudName;
        this.uploadPreset = opts.uploadPreset;
        this.resourceType = opts.resourceType || 'auto';
        this.type = opts.type || 'upload';
        this.autoUpload = !!opts.autoUpload || false;
    }
    return CloudinaryOptions;
}());
//# sourceMappingURL=cloudinary-options.class.js.map

/***/ }),

/***/ "./node_modules/ng2-cloudinary/dist/esm/src/cloudinary-transforms.class.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/ng2-cloudinary/dist/esm/src/cloudinary-transforms.class.js ***!
  \*********************************************************************************/
/*! exports provided: CloudinaryTransforms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudinaryTransforms", function() { return CloudinaryTransforms; });
var CloudinaryTransforms = (function () {
    function CloudinaryTransforms() {
    }
    CloudinaryTransforms.prototype.toUrlSegment = function () {
        var transformSegment = '';
        //Loop on all transformations
        for (var key in this) {
            if (this.hasOwnProperty(key) && key !== 'format') {
                transformSegment += this.toPropertySegment(transformSegment, key, this[key]);
            }
        }
        if (transformSegment.length > 0) {
            transformSegment += '/';
        }
        return transformSegment;
    };
    CloudinaryTransforms.prototype.toPropertySegment = function (segment, transformation, value) {
        var newSegment = '';
        if (transformation && value) {
            if (segment.length > 0) {
                newSegment += ',';
            }
            newSegment += CloudinaryTransforms.URL_PARAMS[transformation] + '_' + value;
        }
        return newSegment;
    };
    CloudinaryTransforms.URL_PARAMS = {
        'width': 'w',
        'height': 'h',
        'crop': 'c',
        'aspect_ratio': 'ar',
        'gravity': 'g',
        'zoom': 'z',
        'x': 'x',
        'y': 'y',
        'quality': 'q',
        'radius': 'r',
        'angle': 'a',
        'effect': 'e',
        'opacity': 'o',
        'border': 'bo',
        'background': 'b',
        'overlay': 'l',
        'underlay': 'u',
        'default_image': 'd',
        'delay': 'dl',
        'color': 'co',
        'dpr': 'dpr',
        'page': 'pg',
        'density': 'dn',
        'flags': 'fl',
        'transformation': 't'
    };
    return CloudinaryTransforms;
}());
//# sourceMappingURL=cloudinary-transforms.class.js.map

/***/ }),

/***/ "./node_modules/ng2-cloudinary/dist/esm/src/cloudinary-uploader.service.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/ng2-cloudinary/dist/esm/src/cloudinary-uploader.service.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudinaryUploader", function() { return CloudinaryUploader; });
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-cloudinary/node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in ng2_file_upload__WEBPACK_IMPORTED_MODULE_0__) if(["CloudinaryUploader","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return ng2_file_upload__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
var __extends = (undefined && undefined.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


var UPLOAD_ENDPOINT = 'https://api.cloudinary.com/v1_1/';
var CloudinaryUploader = (function (_super) {
    __extends(CloudinaryUploader, _super);
    function CloudinaryUploader(opts) {
        _super.call(this, {});
        this._cloudName = opts.cloudName;
        this._resourceType = opts.resourceType || 'auto';
        this._type = opts.type || 'upload';
        this._propagateUploadUrl();
        this.uploadPreset = opts.uploadPreset;
        this.autoUpload = opts.autoUpload;
    }
    CloudinaryUploader.prototype.onBuildItemForm = function (fileItem, form) {
        form.append('upload_preset', this.uploadPreset);
        // Force the file uploader to never use app credentials
        fileItem.withCredentials = false;
        return { fileItem: fileItem, form: form };
    };
    CloudinaryUploader.prototype._propagateUploadUrl = function () {
        this.options.url = "" + UPLOAD_ENDPOINT + this.cloudName + "/" + this.resourceType + "/" + this.type;
    };
    Object.defineProperty(CloudinaryUploader.prototype, "cloudName", {
        get: function () {
            return this._cloudName;
        },
        set: function (value) {
            this._cloudName = value;
            this._propagateUploadUrl();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CloudinaryUploader.prototype, "resourceType", {
        get: function () {
            return this._resourceType;
        },
        set: function (value) {
            this._resourceType = value;
            this._propagateUploadUrl();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CloudinaryUploader.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
            this._propagateUploadUrl();
        },
        enumerable: true,
        configurable: true
    });
    return CloudinaryUploader;
}(ng2_file_upload__WEBPACK_IMPORTED_MODULE_0__["FileUploader"]));
//# sourceMappingURL=cloudinary-uploader.service.js.map

/***/ }),

/***/ "./node_modules/ng2-cloudinary/dist/esm/src/cloudinary.module.js":
/*!***********************************************************************!*\
  !*** ./node_modules/ng2-cloudinary/dist/esm/src/cloudinary.module.js ***!
  \***********************************************************************/
/*! exports provided: Ng2CloudinaryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2CloudinaryModule", function() { return Ng2CloudinaryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-cloudinary/node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _cloudinary_image_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cloudinary-image.component */ "./node_modules/ng2-cloudinary/dist/esm/src/cloudinary-image.component.js");
/* harmony import */ var _cloudinary_image_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cloudinary-image.service */ "./node_modules/ng2-cloudinary/dist/esm/src/cloudinary-image.service.js");





var Ng2CloudinaryModule = (function () {
    function Ng2CloudinaryModule() {
    }
    Ng2CloudinaryModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [
                        _cloudinary_image_component__WEBPACK_IMPORTED_MODULE_3__["CloudinaryImageComponent"],
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                        ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__["FileUploadModule"]
                    ],
                    exports: [
                        _cloudinary_image_component__WEBPACK_IMPORTED_MODULE_3__["CloudinaryImageComponent"],
                    ],
                    providers: [
                        _cloudinary_image_service__WEBPACK_IMPORTED_MODULE_4__["CloudinaryImageService"]
                    ]
                },] },
    ];
    /** @nocollapse */
    Ng2CloudinaryModule.ctorParameters = function () { return []; };
    return Ng2CloudinaryModule;
}());
//# sourceMappingURL=cloudinary.module.js.map

/***/ }),

/***/ "./node_modules/ng2-cloudinary/dist/esm/src/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/ng2-cloudinary/dist/esm/src/index.js ***!
  \***********************************************************/
/*! exports provided: Ng2CloudinaryModule, CloudinaryOptions, CloudinaryTransforms, CloudinaryUploader, CloudinaryImageService, CloudinaryImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cloudinary_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cloudinary.module */ "./node_modules/ng2-cloudinary/dist/esm/src/cloudinary.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ng2CloudinaryModule", function() { return _cloudinary_module__WEBPACK_IMPORTED_MODULE_0__["Ng2CloudinaryModule"]; });

/* harmony import */ var _cloudinary_options_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cloudinary-options.class */ "./node_modules/ng2-cloudinary/dist/esm/src/cloudinary-options.class.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CloudinaryOptions", function() { return _cloudinary_options_class__WEBPACK_IMPORTED_MODULE_1__["CloudinaryOptions"]; });

/* harmony import */ var _cloudinary_transforms_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cloudinary-transforms.class */ "./node_modules/ng2-cloudinary/dist/esm/src/cloudinary-transforms.class.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CloudinaryTransforms", function() { return _cloudinary_transforms_class__WEBPACK_IMPORTED_MODULE_2__["CloudinaryTransforms"]; });

/* harmony import */ var _cloudinary_uploader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cloudinary-uploader.service */ "./node_modules/ng2-cloudinary/dist/esm/src/cloudinary-uploader.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CloudinaryUploader", function() { return _cloudinary_uploader_service__WEBPACK_IMPORTED_MODULE_3__["CloudinaryUploader"]; });

/* harmony import */ var _cloudinary_image_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cloudinary-image.service */ "./node_modules/ng2-cloudinary/dist/esm/src/cloudinary-image.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CloudinaryImageService", function() { return _cloudinary_image_service__WEBPACK_IMPORTED_MODULE_4__["CloudinaryImageService"]; });

/* harmony import */ var _cloudinary_image_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cloudinary-image.component */ "./node_modules/ng2-cloudinary/dist/esm/src/cloudinary-image.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CloudinaryImageComponent", function() { return _cloudinary_image_component__WEBPACK_IMPORTED_MODULE_5__["CloudinaryImageComponent"]; });







//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ng2-cloudinary/node_modules/ng2-file-upload/file-upload/file-drop.directive.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/ng2-cloudinary/node_modules/ng2-file-upload/file-upload/file-drop.directive.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var FileDropDirective = (function () {
    function FileDropDirective(element) {
        this.fileOver = new core_1.EventEmitter();
        this.onFileDrop = new core_1.EventEmitter();
        this.element = element;
    }
    FileDropDirective.prototype.getOptions = function () {
        return this.uploader.options;
    };
    FileDropDirective.prototype.getFilters = function () {
        return {};
    };
    FileDropDirective.prototype.onDrop = function (event) {
        var transfer = this._getTransfer(event);
        if (!transfer) {
            return;
        }
        var options = this.getOptions();
        var filters = this.getFilters();
        this._preventAndStop(event);
        this.uploader.addToQueue(transfer.files, options, filters);
        this.fileOver.emit(false);
        this.onFileDrop.emit(transfer.files);
    };
    FileDropDirective.prototype.onDragOver = function (event) {
        var transfer = this._getTransfer(event);
        if (!this._haveFiles(transfer.types)) {
            return;
        }
        transfer.dropEffect = 'copy';
        this._preventAndStop(event);
        this.fileOver.emit(true);
    };
    FileDropDirective.prototype.onDragLeave = function (event) {
        if (event.currentTarget === this.element[0]) {
            return;
        }
        this._preventAndStop(event);
        this.fileOver.emit(false);
    };
    FileDropDirective.prototype._getTransfer = function (event) {
        return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer; // jQuery fix;
    };
    FileDropDirective.prototype._preventAndStop = function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    FileDropDirective.prototype._haveFiles = function (types) {
        if (!types) {
            return false;
        }
        if (types.indexOf) {
            return types.indexOf('Files') !== -1;
        }
        else if (types.contains) {
            return types.contains('Files');
        }
        else {
            return false;
        }
    };
    /*
     _addOverClass(item:any):any {
     item.addOverClass();
     }
  
     _removeOverClass(item:any):any {
     item.removeOverClass();
     }*/
    FileDropDirective.decorators = [
        { type: core_1.Directive, args: [{ selector: '[ng2FileDrop]' },] },
    ];
    /** @nocollapse */
    FileDropDirective.ctorParameters = [
        { type: core_1.ElementRef, },
    ];
    FileDropDirective.propDecorators = {
        'uploader': [{ type: core_1.Input },],
        'fileOver': [{ type: core_1.Output },],
        'onFileDrop': [{ type: core_1.Output },],
        'onDrop': [{ type: core_1.HostListener, args: ['drop', ['$event'],] },],
        'onDragOver': [{ type: core_1.HostListener, args: ['dragover', ['$event'],] },],
        'onDragLeave': [{ type: core_1.HostListener, args: ['dragleave', ['$event'],] },],
    };
    return FileDropDirective;
}());
exports.FileDropDirective = FileDropDirective;


/***/ }),

/***/ "./node_modules/ng2-cloudinary/node_modules/ng2-file-upload/file-upload/file-item.class.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/ng2-cloudinary/node_modules/ng2-file-upload/file-upload/file-item.class.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var file_like_object_class_1 = __webpack_require__(/*! ./file-like-object.class */ "./node_modules/ng2-cloudinary/node_modules/ng2-file-upload/file-upload/file-like-object.class.js");
var FileItem = (function () {
    function FileItem(uploader, some, options) {
        this.url = '/';
        this.headers = [];
        this.withCredentials = true;
        this.formData = [];
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = false;
        this.progress = 0;
        this.index = void 0;
        this.uploader = uploader;
        this.some = some;
        this.options = options;
        this.file = new file_like_object_class_1.FileLikeObject(some);
        this._file = some;
        if (uploader.options) {
            this.method = uploader.options.method || 'POST';
            this.alias = uploader.options.itemAlias || 'file';
        }
        this.url = uploader.options.url;
    }
    FileItem.prototype.upload = function () {
        try {
            this.uploader.uploadItem(this);
        }
        catch (e) {
            this.uploader._onCompleteItem(this, '', 0, {});
            this.uploader._onErrorItem(this, '', 0, {});
        }
    };
    FileItem.prototype.cancel = function () {
        this.uploader.cancelItem(this);
    };
    FileItem.prototype.remove = function () {
        this.uploader.removeFromQueue(this);
    };
    FileItem.prototype.onBeforeUpload = function () {
        return void 0;
    };
    FileItem.prototype.onBuildForm = function (form) {
        return { form: form };
    };
    FileItem.prototype.onProgress = function (progress) {
        return { progress: progress };
    };
    FileItem.prototype.onSuccess = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype.onError = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype.onCancel = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype.onComplete = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype._onBeforeUpload = function () {
        this.isReady = true;
        this.isUploading = true;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = false;
        this.progress = 0;
        this.onBeforeUpload();
    };
    FileItem.prototype._onBuildForm = function (form) {
        this.onBuildForm(form);
    };
    FileItem.prototype._onProgress = function (progress) {
        this.progress = progress;
        this.onProgress(progress);
    };
    FileItem.prototype._onSuccess = function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = true;
        this.isSuccess = true;
        this.isCancel = false;
        this.isError = false;
        this.progress = 100;
        this.index = void 0;
        this.onSuccess(response, status, headers);
    };
    FileItem.prototype._onError = function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = true;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = true;
        this.progress = 0;
        this.index = void 0;
        this.onError(response, status, headers);
    };
    FileItem.prototype._onCancel = function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = true;
        this.isError = false;
        this.progress = 0;
        this.index = void 0;
        this.onCancel(response, status, headers);
    };
    FileItem.prototype._onComplete = function (response, status, headers) {
        this.onComplete(response, status, headers);
        if (this.uploader.options.removeAfterUpload) {
            this.remove();
        }
    };
    FileItem.prototype._prepareToUploading = function () {
        this.index = this.index || ++this.uploader._nextIndex;
        this.isReady = true;
    };
    return FileItem;
}());
exports.FileItem = FileItem;


/***/ }),

/***/ "./node_modules/ng2-cloudinary/node_modules/ng2-file-upload/file-upload/file-like-object.class.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/ng2-cloudinary/node_modules/ng2-file-upload/file-upload/file-like-object.class.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function isElement(node) {
    return !!(node && (node.nodeName || node.prop && node.attr && node.find));
}
var FileLikeObject = (function () {
    function FileLikeObject(fileOrInput) {
        var isInput = isElement(fileOrInput);
        var fakePathOrObject = isInput ? fileOrInput.value : fileOrInput;
        var postfix = typeof fakePathOrObject === 'string' ? 'FakePath' : 'Object';
        var method = '_createFrom' + postfix;
        this[method](fakePathOrObject);
    }
    FileLikeObject.prototype._createFromFakePath = function (path) {
        this.lastModifiedDate = void 0;
        this.size = void 0;
        this.type = 'like/' + path.slice(path.lastIndexOf('.') + 1).toLowerCase();
        this.name = path.slice(path.lastIndexOf('/') + path.lastIndexOf('\\') + 2);
    };
    FileLikeObject.prototype._createFromObject = function (object) {
        // this.lastModifiedDate = copy(object.lastModifiedDate);
        this.size = object.size;
        this.type = object.type;
        this.name = object.name;
    };
    return FileLikeObject;
}());
exports.FileLikeObject = FileLikeObject;


/***/ }),

/***/ "./node_modules/ng2-cloudinary/node_modules/ng2-file-upload/file-upload/file-select.directive.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/ng2-cloudinary/node_modules/ng2-file-upload/file-upload/file-select.directive.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
// todo: filters
var FileSelectDirective = (function () {
    function FileSelectDirective(element) {
        this.element = element;
    }
    FileSelectDirective.prototype.getOptions = function () {
        return this.uploader.options;
    };
    FileSelectDirective.prototype.getFilters = function () {
        return void 0;
    };
    FileSelectDirective.prototype.isEmptyAfterSelection = function () {
        return !!this.element.nativeElement.attributes.multiple;
    };
    FileSelectDirective.prototype.onChange = function () {
        // let files = this.uploader.isHTML5 ? this.element.nativeElement[0].files : this.element.nativeElement[0];
        var files = this.element.nativeElement.files;
        var options = this.getOptions();
        var filters = this.getFilters();
        // if(!this.uploader.isHTML5) this.destroy();
        this.uploader.addToQueue(files, options, filters);
        if (this.isEmptyAfterSelection()) {
        }
    };
    FileSelectDirective.decorators = [
        { type: core_1.Directive, args: [{ selector: '[ng2FileSelect]' },] },
    ];
    /** @nocollapse */
    FileSelectDirective.ctorParameters = [
        { type: core_1.ElementRef, },
    ];
    FileSelectDirective.propDecorators = {
        'uploader': [{ type: core_1.Input },],
        'onChange': [{ type: core_1.HostListener, args: ['change',] },],
    };
    return FileSelectDirective;
}());
exports.FileSelectDirective = FileSelectDirective;


/***/ }),

/***/ "./node_modules/ng2-cloudinary/node_modules/ng2-file-upload/file-upload/file-type.class.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/ng2-cloudinary/node_modules/ng2-file-upload/file-upload/file-type.class.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var FileType = (function () {
    function FileType() {
    }
    FileType.getMimeClass = function (file) {
        var mimeClass = 'application';
        if (this.mime_psd.indexOf(file.type) !== -1) {
            mimeClass = 'image';
        }
        else if (file.type.match('image.*')) {
            mimeClass = 'image';
        }
        else if (file.type.match('video.*')) {
            mimeClass = 'video';
        }
        else if (file.type.match('audio.*')) {
            mimeClass = 'audio';
        }
        else if (file.type === 'application/pdf') {
            mimeClass = 'pdf';
        }
        else if (this.mime_compress.indexOf(file.type) !== -1) {
            mimeClass = 'compress';
        }
        else if (this.mime_doc.indexOf(file.type) !== -1) {
            mimeClass = 'doc';
        }
        else if (this.mime_xsl.indexOf(file.type) !== -1) {
            mimeClass = 'xls';
        }
        else if (this.mime_ppt.indexOf(file.type) !== -1) {
            mimeClass = 'ppt';
        }
        if (mimeClass === 'application') {
            mimeClass = this.fileTypeDetection(file.name);
        }
        return mimeClass;
    };
    FileType.fileTypeDetection = function (inputFilename) {
        var types = {
            'jpg': 'image',
            'jpeg': 'image',
            'tif': 'image',
            'psd': 'image',
            'bmp': 'image',
            'png': 'image',
            'nef': 'image',
            'tiff': 'image',
            'cr2': 'image',
            'dwg': 'image',
            'cdr': 'image',
            'ai': 'image',
            'indd': 'image',
            'pin': 'image',
            'cdp': 'image',
            'skp': 'image',
            'stp': 'image',
            '3dm': 'image',
            'mp3': 'audio',
            'wav': 'audio',
            'wma': 'audio',
            'mod': 'audio',
            'm4a': 'audio',
            'compress': 'compress',
            'rar': 'compress',
            '7z': 'compress',
            'lz': 'compress',
            'z01': 'compress',
            'pdf': 'pdf',
            'xls': 'xls',
            'xlsx': 'xls',
            'ods': 'xls',
            'mp4': 'video',
            'avi': 'video',
            'wmv': 'video',
            'mpg': 'video',
            'mts': 'video',
            'flv': 'video',
            '3gp': 'video',
            'vob': 'video',
            'm4v': 'video',
            'mpeg': 'video',
            'm2ts': 'video',
            'mov': 'video',
            'doc': 'doc',
            'docx': 'doc',
            'eps': 'doc',
            'txt': 'doc',
            'odt': 'doc',
            'rtf': 'doc',
            'ppt': 'ppt',
            'pptx': 'ppt',
            'pps': 'ppt',
            'ppsx': 'ppt',
            'odp': 'ppt'
        };
        var chunks = inputFilename.split('.');
        if (chunks.length < 2) {
            return 'application';
        }
        var extension = chunks[chunks.length - 1].toLowerCase();
        if (types[extension] === undefined) {
            return 'application';
        }
        else {
            return types[extension];
        }
    };
    /*  MS office  */
    FileType.mime_doc = [
        'application/msword',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.template',
        'application/vnd.ms-word.document.macroEnabled.12',
        'application/vnd.ms-word.template.macroEnabled.12'
    ];
    FileType.mime_xsl = [
        'application/vnd.ms-excel',
        'application/vnd.ms-excel',
        'application/vnd.ms-excel',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.template',
        'application/vnd.ms-excel.sheet.macroEnabled.12',
        'application/vnd.ms-excel.template.macroEnabled.12',
        'application/vnd.ms-excel.addin.macroEnabled.12',
        'application/vnd.ms-excel.sheet.binary.macroEnabled.12'
    ];
    FileType.mime_ppt = [
        'application/vnd.ms-powerpoint',
        'application/vnd.ms-powerpoint',
        'application/vnd.ms-powerpoint',
        'application/vnd.ms-powerpoint',
        'application/vnd.openxmlformats-officedocument.presentationml.presentation',
        'application/vnd.openxmlformats-officedocument.presentationml.template',
        'application/vnd.openxmlformats-officedocument.presentationml.slideshow',
        'application/vnd.ms-powerpoint.addin.macroEnabled.12',
        'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
        'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
        'application/vnd.ms-powerpoint.slideshow.macroEnabled.12'
    ];
    /* PSD */
    FileType.mime_psd = [
        'image/photoshop',
        'image/x-photoshop',
        'image/psd',
        'application/photoshop',
        'application/psd',
        'zz-application/zz-winassoc-psd'
    ];
    /* Compressed files */
    FileType.mime_compress = [
        'application/x-gtar',
        'application/x-gcompress',
        'application/compress',
        'application/x-tar',
        'application/x-rar-compressed',
        'application/octet-stream'
    ];
    return FileType;
}());
exports.FileType = FileType;


/***/ }),

/***/ "./node_modules/ng2-cloudinary/node_modules/ng2-file-upload/file-upload/file-upload.module.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/ng2-cloudinary/node_modules/ng2-file-upload/file-upload/file-upload.module.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var file_drop_directive_1 = __webpack_require__(/*! ./file-drop.directive */ "./node_modules/ng2-cloudinary/node_modules/ng2-file-upload/file-upload/file-drop.directive.js");
var file_select_directive_1 = __webpack_require__(/*! ./file-select.directive */ "./node_modules/ng2-cloudinary/node_modules/ng2-file-upload/file-upload/file-select.directive.js");
var FileUploadModule = (function () {
    function FileUploadModule() {
    }
    FileUploadModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule],
                    declarations: [file_drop_directive_1.FileDropDirective, file_select_directive_1.FileSelectDirective],
                    exports: [file_drop_directive_1.FileDropDirective, file_select_directive_1.FileSelectDirective]
                },] },
    ];
    /** @nocollapse */
    FileUploadModule.ctorParameters = [];
    return FileUploadModule;
}());
exports.FileUploadModule = FileUploadModule;


/***/ }),

/***/ "./node_modules/ng2-cloudinary/node_modules/ng2-file-upload/file-upload/file-uploader.class.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/ng2-cloudinary/node_modules/ng2-file-upload/file-upload/file-uploader.class.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var file_like_object_class_1 = __webpack_require__(/*! ./file-like-object.class */ "./node_modules/ng2-cloudinary/node_modules/ng2-file-upload/file-upload/file-like-object.class.js");
var file_item_class_1 = __webpack_require__(/*! ./file-item.class */ "./node_modules/ng2-cloudinary/node_modules/ng2-file-upload/file-upload/file-item.class.js");
var file_type_class_1 = __webpack_require__(/*! ./file-type.class */ "./node_modules/ng2-cloudinary/node_modules/ng2-file-upload/file-upload/file-type.class.js");
function isFile(value) {
    return (File && value instanceof File);
}
var FileUploader = (function () {
    function FileUploader(options) {
        this.isUploading = false;
        this.queue = [];
        this.progress = 0;
        this._nextIndex = 0;
        this.options = {
            autoUpload: false,
            isHTML5: true,
            filters: [],
            removeAfterUpload: false,
            disableMultipart: false
        };
        this.setOptions(options);
    }
    FileUploader.prototype.setOptions = function (options) {
        this.options = Object.assign(this.options, options);
        this.authToken = options.authToken;
        this.authTokenHeader = options.authTokenHeader || 'Authorization';
        this.autoUpload = options.autoUpload;
        this.options.filters.unshift({ name: 'queueLimit', fn: this._queueLimitFilter });
        if (this.options.maxFileSize) {
            this.options.filters.unshift({ name: 'fileSize', fn: this._fileSizeFilter });
        }
        if (this.options.allowedFileType) {
            this.options.filters.unshift({ name: 'fileType', fn: this._fileTypeFilter });
        }
        if (this.options.allowedMimeType) {
            this.options.filters.unshift({ name: 'mimeType', fn: this._mimeTypeFilter });
        }
        for (var i = 0; i < this.queue.length; i++) {
            this.queue[i].url = this.options.url;
        }
        // this.options.filters.unshift({name: 'folder', fn: this._folderFilter});
    };
    FileUploader.prototype.addToQueue = function (files, options, filters) {
        var _this = this;
        var list = [];
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var file = files_1[_i];
            list.push(file);
        }
        var arrayOfFilters = this._getFilters(filters);
        var count = this.queue.length;
        var addedFileItems = [];
        list.map(function (some) {
            if (!options) {
                options = _this.options;
            }
            var temp = new file_like_object_class_1.FileLikeObject(some);
            if (_this._isValidFile(temp, arrayOfFilters, options)) {
                var fileItem = new file_item_class_1.FileItem(_this, some, options);
                addedFileItems.push(fileItem);
                _this.queue.push(fileItem);
                _this._onAfterAddingFile(fileItem);
            }
            else {
                var filter = arrayOfFilters[_this._failFilterIndex];
                _this._onWhenAddingFileFailed(temp, filter, options);
            }
        });
        if (this.queue.length !== count) {
            this._onAfterAddingAll(addedFileItems);
            this.progress = this._getTotalProgress();
        }
        this._render();
        if (this.options.autoUpload) {
            this.uploadAll();
        }
    };
    FileUploader.prototype.removeFromQueue = function (value) {
        var index = this.getIndexOfItem(value);
        var item = this.queue[index];
        if (item.isUploading) {
            item.cancel();
        }
        this.queue.splice(index, 1);
        this.progress = this._getTotalProgress();
    };
    FileUploader.prototype.clearQueue = function () {
        while (this.queue.length) {
            this.queue[0].remove();
        }
        this.progress = 0;
    };
    FileUploader.prototype.uploadItem = function (value) {
        var index = this.getIndexOfItem(value);
        var item = this.queue[index];
        var transport = this.options.isHTML5 ? '_xhrTransport' : '_iframeTransport';
        item._prepareToUploading();
        if (this.isUploading) {
            return;
        }
        this.isUploading = true;
        this[transport](item);
    };
    FileUploader.prototype.cancelItem = function (value) {
        var index = this.getIndexOfItem(value);
        var item = this.queue[index];
        var prop = this.options.isHTML5 ? item._xhr : item._form;
        if (item && item.isUploading) {
            prop.abort();
        }
    };
    FileUploader.prototype.uploadAll = function () {
        var items = this.getNotUploadedItems().filter(function (item) { return !item.isUploading; });
        if (!items.length) {
            return;
        }
        items.map(function (item) { return item._prepareToUploading(); });
        items[0].upload();
    };
    FileUploader.prototype.cancelAll = function () {
        var items = this.getNotUploadedItems();
        items.map(function (item) { return item.cancel(); });
    };
    FileUploader.prototype.isFile = function (value) {
        return isFile(value);
    };
    FileUploader.prototype.isFileLikeObject = function (value) {
        return value instanceof file_like_object_class_1.FileLikeObject;
    };
    FileUploader.prototype.getIndexOfItem = function (value) {
        return typeof value === 'number' ? value : this.queue.indexOf(value);
    };
    FileUploader.prototype.getNotUploadedItems = function () {
        return this.queue.filter(function (item) { return !item.isUploaded; });
    };
    FileUploader.prototype.getReadyItems = function () {
        return this.queue
            .filter(function (item) { return (item.isReady && !item.isUploading); })
            .sort(function (item1, item2) { return item1.index - item2.index; });
    };
    FileUploader.prototype.destroy = function () {
        return void 0;
        /*forEach(this._directives, (key) => {
         forEach(this._directives[key], (object) => {
         object.destroy();
         });
         });*/
    };
    FileUploader.prototype.onAfterAddingAll = function (fileItems) {
        return { fileItems: fileItems };
    };
    FileUploader.prototype.onBuildItemForm = function (fileItem, form) {
        return { fileItem: fileItem, form: form };
    };
    FileUploader.prototype.onAfterAddingFile = function (fileItem) {
        return { fileItem: fileItem };
    };
    FileUploader.prototype.onWhenAddingFileFailed = function (item, filter, options) {
        return { item: item, filter: filter, options: options };
    };
    FileUploader.prototype.onBeforeUploadItem = function (fileItem) {
        return { fileItem: fileItem };
    };
    FileUploader.prototype.onProgressItem = function (fileItem, progress) {
        return { fileItem: fileItem, progress: progress };
    };
    FileUploader.prototype.onProgressAll = function (progress) {
        return { progress: progress };
    };
    FileUploader.prototype.onSuccessItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onErrorItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onCancelItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onCompleteItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onCompleteAll = function () {
        return void 0;
    };
    FileUploader.prototype._mimeTypeFilter = function (item) {
        return !(this.options.allowedMimeType && this.options.allowedMimeType.indexOf(item.type) === -1);
    };
    FileUploader.prototype._fileSizeFilter = function (item) {
        return !(this.options.maxFileSize && item.size > this.options.maxFileSize);
    };
    FileUploader.prototype._fileTypeFilter = function (item) {
        return !(this.options.allowedFileType &&
            this.options.allowedFileType.indexOf(file_type_class_1.FileType.getMimeClass(item)) === -1);
    };
    FileUploader.prototype._onErrorItem = function (item, response, status, headers) {
        item._onError(response, status, headers);
        this.onErrorItem(item, response, status, headers);
    };
    FileUploader.prototype._onCompleteItem = function (item, response, status, headers) {
        item._onComplete(response, status, headers);
        this.onCompleteItem(item, response, status, headers);
        var nextItem = this.getReadyItems()[0];
        this.isUploading = false;
        if (nextItem) {
            nextItem.upload();
            return;
        }
        this.onCompleteAll();
        this.progress = this._getTotalProgress();
        this._render();
    };
    FileUploader.prototype._headersGetter = function (parsedHeaders) {
        return function (name) {
            if (name) {
                return parsedHeaders[name.toLowerCase()] || void 0;
            }
            return parsedHeaders;
        };
    };
    FileUploader.prototype._xhrTransport = function (item) {
        var _this = this;
        var xhr = item._xhr = new XMLHttpRequest();
        var sendable;
        this._onBeforeUploadItem(item);
        // todo
        /*item.formData.map(obj => {
         obj.map((value, key) => {
         form.append(key, value);
         });
         });*/
        if (typeof item._file.size !== 'number') {
            throw new TypeError('The file specified is no longer valid');
        }
        if (!this.options.disableMultipart) {
            sendable = new FormData();
            this._onBuildItemForm(item, sendable);
            sendable.append(item.alias, item._file, item.file.name);
        }
        else {
            sendable = item._file;
        }
        xhr.upload.onprogress = function (event) {
            var progress = Math.round(event.lengthComputable ? event.loaded * 100 / event.total : 0);
            _this._onProgressItem(item, progress);
        };
        xhr.onload = function () {
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            var response = _this._transformResponse(xhr.response, headers);
            var gist = _this._isSuccessCode(xhr.status) ? 'Success' : 'Error';
            var method = '_on' + gist + 'Item';
            _this[method](item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        };
        xhr.onerror = function () {
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            var response = _this._transformResponse(xhr.response, headers);
            _this._onErrorItem(item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        };
        xhr.onabort = function () {
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            var response = _this._transformResponse(xhr.response, headers);
            _this._onCancelItem(item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        };
        xhr.open(item.method, item.url, true);
        xhr.withCredentials = item.withCredentials;
        // todo
        /*item.headers.map((value, name) => {
         xhr.setRequestHeader(name, value);
         });*/
        if (this.options.headers) {
            for (var _i = 0, _a = this.options.headers; _i < _a.length; _i++) {
                var header = _a[_i];
                xhr.setRequestHeader(header.name, header.value);
            }
        }
        if (this.authToken) {
            xhr.setRequestHeader(this.authTokenHeader, this.authToken);
        }
        xhr.send(sendable);
        this._render();
    };
    FileUploader.prototype._getTotalProgress = function (value) {
        if (value === void 0) { value = 0; }
        if (this.options.removeAfterUpload) {
            return value;
        }
        var notUploaded = this.getNotUploadedItems().length;
        var uploaded = notUploaded ? this.queue.length - notUploaded : this.queue.length;
        var ratio = 100 / this.queue.length;
        var current = value * ratio / 100;
        return Math.round(uploaded * ratio + current);
    };
    FileUploader.prototype._getFilters = function (filters) {
        if (!filters) {
            return this.options.filters;
        }
        if (Array.isArray(filters)) {
            return filters;
        }
        if (typeof filters === 'string') {
            var names_1 = filters.match(/[^\s,]+/g);
            return this.options.filters
                .filter(function (filter) { return names_1.indexOf(filter.name) !== -1; });
        }
        return this.options.filters;
    };
    FileUploader.prototype._render = function () {
        return void 0;
        // todo: ?
    };
    // private _folderFilter(item:FileItem):boolean {
    //   return !!(item.size || item.type);
    // }
    FileUploader.prototype._queueLimitFilter = function () {
        return this.options.queueLimit === undefined || this.queue.length < this.options.queueLimit;
    };
    FileUploader.prototype._isValidFile = function (file, filters, options) {
        var _this = this;
        this._failFilterIndex = -1;
        return !filters.length ? true : filters.every(function (filter) {
            _this._failFilterIndex++;
            return filter.fn.call(_this, file, options);
        });
    };
    FileUploader.prototype._isSuccessCode = function (status) {
        return (status >= 200 && status < 300) || status === 304;
    };
    /* tslint:disable */
    FileUploader.prototype._transformResponse = function (response, headers) {
        // todo: ?
        /*var headersGetter = this._headersGetter(headers);
         forEach($http.defaults.transformResponse, (transformFn) => {
         response = transformFn(response, headersGetter);
         });*/
        return response;
    };
    /* tslint:enable */
    FileUploader.prototype._parseHeaders = function (headers) {
        var parsed = {};
        var key;
        var val;
        var i;
        if (!headers) {
            return parsed;
        }
        headers.split('\n').map(function (line) {
            i = line.indexOf(':');
            key = line.slice(0, i).trim().toLowerCase();
            val = line.slice(i + 1).trim();
            if (key) {
                parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
            }
        });
        return parsed;
    };
    /*private _iframeTransport(item:FileItem) {
     // todo: implement it later
     }*/
    FileUploader.prototype._onWhenAddingFileFailed = function (item, filter, options) {
        this.onWhenAddingFileFailed(item, filter, options);
    };
    FileUploader.prototype._onAfterAddingFile = function (item) {
        this.onAfterAddingFile(item);
    };
    FileUploader.prototype._onAfterAddingAll = function (items) {
        this.onAfterAddingAll(items);
    };
    FileUploader.prototype._onBeforeUploadItem = function (item) {
        item._onBeforeUpload();
        this.onBeforeUploadItem(item);
    };
    FileUploader.prototype._onBuildItemForm = function (item, form) {
        item._onBuildForm(form);
        this.onBuildItemForm(item, form);
    };
    FileUploader.prototype._onProgressItem = function (item, progress) {
        var total = this._getTotalProgress(progress);
        this.progress = total;
        item._onProgress(progress);
        this.onProgressItem(item, progress);
        this.onProgressAll(total);
        this._render();
    };
    /* tslint:disable */
    FileUploader.prototype._onSuccessItem = function (item, response, status, headers) {
        item._onSuccess(response, status, headers);
        this.onSuccessItem(item, response, status, headers);
    };
    /* tslint:enable */
    FileUploader.prototype._onCancelItem = function (item, response, status, headers) {
        item._onCancel(response, status, headers);
        this.onCancelItem(item, response, status, headers);
    };
    return FileUploader;
}());
exports.FileUploader = FileUploader;


/***/ }),

/***/ "./node_modules/ng2-cloudinary/node_modules/ng2-file-upload/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/ng2-cloudinary/node_modules/ng2-file-upload/index.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(/*! ./file-upload/file-select.directive */ "./node_modules/ng2-cloudinary/node_modules/ng2-file-upload/file-upload/file-select.directive.js"));
__export(__webpack_require__(/*! ./file-upload/file-drop.directive */ "./node_modules/ng2-cloudinary/node_modules/ng2-file-upload/file-upload/file-drop.directive.js"));
__export(__webpack_require__(/*! ./file-upload/file-uploader.class */ "./node_modules/ng2-cloudinary/node_modules/ng2-file-upload/file-upload/file-uploader.class.js"));
var file_upload_module_1 = __webpack_require__(/*! ./file-upload/file-upload.module */ "./node_modules/ng2-cloudinary/node_modules/ng2-file-upload/file-upload/file-upload.module.js");
exports.FileUploadModule = file_upload_module_1.FileUploadModule;


/***/ }),

/***/ "./node_modules/ng2-file-upload/file-upload/file-drop.directive.js":
/*!*************************************************************************!*\
  !*** ./node_modules/ng2-file-upload/file-upload/file-drop.directive.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var file_uploader_class_1 = __webpack_require__(/*! ./file-uploader.class */ "./node_modules/ng2-file-upload/file-upload/file-uploader.class.js");
var FileDropDirective = (function () {
    function FileDropDirective(element) {
        this.fileOver = new core_1.EventEmitter();
        this.onFileDrop = new core_1.EventEmitter();
        this.element = element;
    }
    FileDropDirective.prototype.getOptions = function () {
        return this.uploader.options;
    };
    FileDropDirective.prototype.getFilters = function () {
        return {};
    };
    FileDropDirective.prototype.onDrop = function (event) {
        var transfer = this._getTransfer(event);
        if (!transfer) {
            return;
        }
        var options = this.getOptions();
        var filters = this.getFilters();
        this._preventAndStop(event);
        this.uploader.addToQueue(transfer.files, options, filters);
        this.fileOver.emit(false);
        this.onFileDrop.emit(transfer.files);
    };
    FileDropDirective.prototype.onDragOver = function (event) {
        var transfer = this._getTransfer(event);
        if (!this._haveFiles(transfer.types)) {
            return;
        }
        transfer.dropEffect = 'copy';
        this._preventAndStop(event);
        this.fileOver.emit(true);
    };
    FileDropDirective.prototype.onDragLeave = function (event) {
        if (this.element) {
            if (event.currentTarget === this.element[0]) {
                return;
            }
        }
        this._preventAndStop(event);
        this.fileOver.emit(false);
    };
    FileDropDirective.prototype._getTransfer = function (event) {
        return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer; // jQuery fix;
    };
    FileDropDirective.prototype._preventAndStop = function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    FileDropDirective.prototype._haveFiles = function (types) {
        if (!types) {
            return false;
        }
        if (types.indexOf) {
            return types.indexOf('Files') !== -1;
        }
        else if (types.contains) {
            return types.contains('Files');
        }
        else {
            return false;
        }
    };
    return FileDropDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", file_uploader_class_1.FileUploader)
], FileDropDirective.prototype, "uploader", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FileDropDirective.prototype, "fileOver", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FileDropDirective.prototype, "onFileDrop", void 0);
__decorate([
    core_1.HostListener('drop', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FileDropDirective.prototype, "onDrop", null);
__decorate([
    core_1.HostListener('dragover', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FileDropDirective.prototype, "onDragOver", null);
__decorate([
    core_1.HostListener('dragleave', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], FileDropDirective.prototype, "onDragLeave", null);
FileDropDirective = __decorate([
    core_1.Directive({ selector: '[ng2FileDrop]' }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], FileDropDirective);
exports.FileDropDirective = FileDropDirective;


/***/ }),

/***/ "./node_modules/ng2-file-upload/file-upload/file-item.class.js":
/*!*********************************************************************!*\
  !*** ./node_modules/ng2-file-upload/file-upload/file-item.class.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var file_like_object_class_1 = __webpack_require__(/*! ./file-like-object.class */ "./node_modules/ng2-file-upload/file-upload/file-like-object.class.js");
var FileItem = (function () {
    function FileItem(uploader, some, options) {
        this.url = '/';
        this.headers = [];
        this.withCredentials = true;
        this.formData = [];
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = false;
        this.progress = 0;
        this.index = void 0;
        this.uploader = uploader;
        this.some = some;
        this.options = options;
        this.file = new file_like_object_class_1.FileLikeObject(some);
        this._file = some;
        if (uploader.options) {
            this.method = uploader.options.method || 'POST';
            this.alias = uploader.options.itemAlias || 'file';
        }
        this.url = uploader.options.url;
    }
    FileItem.prototype.upload = function () {
        try {
            this.uploader.uploadItem(this);
        }
        catch (e) {
            this.uploader._onCompleteItem(this, '', 0, {});
            this.uploader._onErrorItem(this, '', 0, {});
        }
    };
    FileItem.prototype.cancel = function () {
        this.uploader.cancelItem(this);
    };
    FileItem.prototype.remove = function () {
        this.uploader.removeFromQueue(this);
    };
    FileItem.prototype.onBeforeUpload = function () {
        return void 0;
    };
    FileItem.prototype.onBuildForm = function (form) {
        return { form: form };
    };
    FileItem.prototype.onProgress = function (progress) {
        return { progress: progress };
    };
    FileItem.prototype.onSuccess = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype.onError = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype.onCancel = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype.onComplete = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype._onBeforeUpload = function () {
        this.isReady = true;
        this.isUploading = true;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = false;
        this.progress = 0;
        this.onBeforeUpload();
    };
    FileItem.prototype._onBuildForm = function (form) {
        this.onBuildForm(form);
    };
    FileItem.prototype._onProgress = function (progress) {
        this.progress = progress;
        this.onProgress(progress);
    };
    FileItem.prototype._onSuccess = function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = true;
        this.isSuccess = true;
        this.isCancel = false;
        this.isError = false;
        this.progress = 100;
        this.index = void 0;
        this.onSuccess(response, status, headers);
    };
    FileItem.prototype._onError = function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = true;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = true;
        this.progress = 0;
        this.index = void 0;
        this.onError(response, status, headers);
    };
    FileItem.prototype._onCancel = function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = true;
        this.isError = false;
        this.progress = 0;
        this.index = void 0;
        this.onCancel(response, status, headers);
    };
    FileItem.prototype._onComplete = function (response, status, headers) {
        this.onComplete(response, status, headers);
        if (this.uploader.options.removeAfterUpload) {
            this.remove();
        }
    };
    FileItem.prototype._prepareToUploading = function () {
        this.index = this.index || ++this.uploader._nextIndex;
        this.isReady = true;
    };
    return FileItem;
}());
exports.FileItem = FileItem;


/***/ }),

/***/ "./node_modules/ng2-file-upload/file-upload/file-like-object.class.js":
/*!****************************************************************************!*\
  !*** ./node_modules/ng2-file-upload/file-upload/file-like-object.class.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function isElement(node) {
    return !!(node && (node.nodeName || node.prop && node.attr && node.find));
}
var FileLikeObject = (function () {
    function FileLikeObject(fileOrInput) {
        this.rawFile = fileOrInput;
        var isInput = isElement(fileOrInput);
        var fakePathOrObject = isInput ? fileOrInput.value : fileOrInput;
        var postfix = typeof fakePathOrObject === 'string' ? 'FakePath' : 'Object';
        var method = '_createFrom' + postfix;
        this[method](fakePathOrObject);
    }
    FileLikeObject.prototype._createFromFakePath = function (path) {
        this.lastModifiedDate = void 0;
        this.size = void 0;
        this.type = 'like/' + path.slice(path.lastIndexOf('.') + 1).toLowerCase();
        this.name = path.slice(path.lastIndexOf('/') + path.lastIndexOf('\\') + 2);
    };
    FileLikeObject.prototype._createFromObject = function (object) {
        this.size = object.size;
        this.type = object.type;
        this.name = object.name;
    };
    return FileLikeObject;
}());
exports.FileLikeObject = FileLikeObject;


/***/ }),

/***/ "./node_modules/ng2-file-upload/file-upload/file-select.directive.js":
/*!***************************************************************************!*\
  !*** ./node_modules/ng2-file-upload/file-upload/file-select.directive.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var file_uploader_class_1 = __webpack_require__(/*! ./file-uploader.class */ "./node_modules/ng2-file-upload/file-upload/file-uploader.class.js");
var FileSelectDirective = (function () {
    function FileSelectDirective(element) {
        this.onFileSelected = new core_1.EventEmitter();
        this.element = element;
    }
    FileSelectDirective.prototype.getOptions = function () {
        return this.uploader.options;
    };
    FileSelectDirective.prototype.getFilters = function () {
        return {};
    };
    FileSelectDirective.prototype.isEmptyAfterSelection = function () {
        return !!this.element.nativeElement.attributes.multiple;
    };
    FileSelectDirective.prototype.onChange = function () {
        var files = this.element.nativeElement.files;
        var options = this.getOptions();
        var filters = this.getFilters();
        this.uploader.addToQueue(files, options, filters);
        this.onFileSelected.emit(files);
        if (this.isEmptyAfterSelection()) {
            this.element.nativeElement.value = '';
        }
    };
    return FileSelectDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", file_uploader_class_1.FileUploader)
], FileSelectDirective.prototype, "uploader", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FileSelectDirective.prototype, "onFileSelected", void 0);
__decorate([
    core_1.HostListener('change'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], FileSelectDirective.prototype, "onChange", null);
FileSelectDirective = __decorate([
    core_1.Directive({ selector: '[ng2FileSelect]' }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], FileSelectDirective);
exports.FileSelectDirective = FileSelectDirective;


/***/ }),

/***/ "./node_modules/ng2-file-upload/file-upload/file-type.class.js":
/*!*********************************************************************!*\
  !*** ./node_modules/ng2-file-upload/file-upload/file-type.class.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var FileType = (function () {
    function FileType() {
    }
    FileType.getMimeClass = function (file) {
        var mimeClass = 'application';
        if (this.mime_psd.indexOf(file.type) !== -1) {
            mimeClass = 'image';
        }
        else if (file.type.match('image.*')) {
            mimeClass = 'image';
        }
        else if (file.type.match('video.*')) {
            mimeClass = 'video';
        }
        else if (file.type.match('audio.*')) {
            mimeClass = 'audio';
        }
        else if (file.type === 'application/pdf') {
            mimeClass = 'pdf';
        }
        else if (this.mime_compress.indexOf(file.type) !== -1) {
            mimeClass = 'compress';
        }
        else if (this.mime_doc.indexOf(file.type) !== -1) {
            mimeClass = 'doc';
        }
        else if (this.mime_xsl.indexOf(file.type) !== -1) {
            mimeClass = 'xls';
        }
        else if (this.mime_ppt.indexOf(file.type) !== -1) {
            mimeClass = 'ppt';
        }
        if (mimeClass === 'application') {
            mimeClass = this.fileTypeDetection(file.name);
        }
        return mimeClass;
    };
    FileType.fileTypeDetection = function (inputFilename) {
        var types = {
            'jpg': 'image',
            'jpeg': 'image',
            'tif': 'image',
            'psd': 'image',
            'bmp': 'image',
            'png': 'image',
            'nef': 'image',
            'tiff': 'image',
            'cr2': 'image',
            'dwg': 'image',
            'cdr': 'image',
            'ai': 'image',
            'indd': 'image',
            'pin': 'image',
            'cdp': 'image',
            'skp': 'image',
            'stp': 'image',
            '3dm': 'image',
            'mp3': 'audio',
            'wav': 'audio',
            'wma': 'audio',
            'mod': 'audio',
            'm4a': 'audio',
            'compress': 'compress',
            'zip': 'compress',
            'rar': 'compress',
            '7z': 'compress',
            'lz': 'compress',
            'z01': 'compress',
            'pdf': 'pdf',
            'xls': 'xls',
            'xlsx': 'xls',
            'ods': 'xls',
            'mp4': 'video',
            'avi': 'video',
            'wmv': 'video',
            'mpg': 'video',
            'mts': 'video',
            'flv': 'video',
            '3gp': 'video',
            'vob': 'video',
            'm4v': 'video',
            'mpeg': 'video',
            'm2ts': 'video',
            'mov': 'video',
            'doc': 'doc',
            'docx': 'doc',
            'eps': 'doc',
            'txt': 'doc',
            'odt': 'doc',
            'rtf': 'doc',
            'ppt': 'ppt',
            'pptx': 'ppt',
            'pps': 'ppt',
            'ppsx': 'ppt',
            'odp': 'ppt'
        };
        var chunks = inputFilename.split('.');
        if (chunks.length < 2) {
            return 'application';
        }
        var extension = chunks[chunks.length - 1].toLowerCase();
        if (types[extension] === undefined) {
            return 'application';
        }
        else {
            return types[extension];
        }
    };
    return FileType;
}());
/*  MS office  */
FileType.mime_doc = [
    'application/msword',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.template',
    'application/vnd.ms-word.document.macroEnabled.12',
    'application/vnd.ms-word.template.macroEnabled.12'
];
FileType.mime_xsl = [
    'application/vnd.ms-excel',
    'application/vnd.ms-excel',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.template',
    'application/vnd.ms-excel.sheet.macroEnabled.12',
    'application/vnd.ms-excel.template.macroEnabled.12',
    'application/vnd.ms-excel.addin.macroEnabled.12',
    'application/vnd.ms-excel.sheet.binary.macroEnabled.12'
];
FileType.mime_ppt = [
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'application/vnd.openxmlformats-officedocument.presentationml.template',
    'application/vnd.openxmlformats-officedocument.presentationml.slideshow',
    'application/vnd.ms-powerpoint.addin.macroEnabled.12',
    'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
    'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
    'application/vnd.ms-powerpoint.slideshow.macroEnabled.12'
];
/* PSD */
FileType.mime_psd = [
    'image/photoshop',
    'image/x-photoshop',
    'image/psd',
    'application/photoshop',
    'application/psd',
    'zz-application/zz-winassoc-psd'
];
/* Compressed files */
FileType.mime_compress = [
    'application/x-gtar',
    'application/x-gcompress',
    'application/compress',
    'application/x-tar',
    'application/x-rar-compressed',
    'application/octet-stream'
];
exports.FileType = FileType;


/***/ }),

/***/ "./node_modules/ng2-file-upload/file-upload/file-upload.module.js":
/*!************************************************************************!*\
  !*** ./node_modules/ng2-file-upload/file-upload/file-upload.module.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var file_drop_directive_1 = __webpack_require__(/*! ./file-drop.directive */ "./node_modules/ng2-file-upload/file-upload/file-drop.directive.js");
var file_select_directive_1 = __webpack_require__(/*! ./file-select.directive */ "./node_modules/ng2-file-upload/file-upload/file-select.directive.js");
var FileUploadModule = (function () {
    function FileUploadModule() {
    }
    return FileUploadModule;
}());
FileUploadModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule],
        declarations: [file_drop_directive_1.FileDropDirective, file_select_directive_1.FileSelectDirective],
        exports: [file_drop_directive_1.FileDropDirective, file_select_directive_1.FileSelectDirective]
    })
], FileUploadModule);
exports.FileUploadModule = FileUploadModule;


/***/ }),

/***/ "./node_modules/ng2-file-upload/file-upload/file-uploader.class.js":
/*!*************************************************************************!*\
  !*** ./node_modules/ng2-file-upload/file-upload/file-uploader.class.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var file_like_object_class_1 = __webpack_require__(/*! ./file-like-object.class */ "./node_modules/ng2-file-upload/file-upload/file-like-object.class.js");
var file_item_class_1 = __webpack_require__(/*! ./file-item.class */ "./node_modules/ng2-file-upload/file-upload/file-item.class.js");
var file_type_class_1 = __webpack_require__(/*! ./file-type.class */ "./node_modules/ng2-file-upload/file-upload/file-type.class.js");
function isFile(value) {
    return (File && value instanceof File);
}
var FileUploader = (function () {
    function FileUploader(options) {
        this.isUploading = false;
        this.queue = [];
        this.progress = 0;
        this._nextIndex = 0;
        this.options = {
            autoUpload: false,
            isHTML5: true,
            filters: [],
            removeAfterUpload: false,
            disableMultipart: false,
            formatDataFunction: function (item) { return item._file; },
            formatDataFunctionIsAsync: false
        };
        this.setOptions(options);
        this.response = new core_1.EventEmitter();
    }
    FileUploader.prototype.setOptions = function (options) {
        this.options = Object.assign(this.options, options);
        this.authToken = this.options.authToken;
        this.authTokenHeader = this.options.authTokenHeader || 'Authorization';
        this.autoUpload = this.options.autoUpload;
        this.options.filters.unshift({ name: 'queueLimit', fn: this._queueLimitFilter });
        if (this.options.maxFileSize) {
            this.options.filters.unshift({ name: 'fileSize', fn: this._fileSizeFilter });
        }
        if (this.options.allowedFileType) {
            this.options.filters.unshift({ name: 'fileType', fn: this._fileTypeFilter });
        }
        if (this.options.allowedMimeType) {
            this.options.filters.unshift({ name: 'mimeType', fn: this._mimeTypeFilter });
        }
        for (var i = 0; i < this.queue.length; i++) {
            this.queue[i].url = this.options.url;
        }
    };
    FileUploader.prototype.addToQueue = function (files, options, filters) {
        var _this = this;
        var list = [];
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var file = files_1[_i];
            list.push(file);
        }
        var arrayOfFilters = this._getFilters(filters);
        var count = this.queue.length;
        var addedFileItems = [];
        list.map(function (some) {
            if (!options) {
                options = _this.options;
            }
            var temp = new file_like_object_class_1.FileLikeObject(some);
            if (_this._isValidFile(temp, arrayOfFilters, options)) {
                var fileItem = new file_item_class_1.FileItem(_this, some, options);
                addedFileItems.push(fileItem);
                _this.queue.push(fileItem);
                _this._onAfterAddingFile(fileItem);
            }
            else {
                var filter = arrayOfFilters[_this._failFilterIndex];
                _this._onWhenAddingFileFailed(temp, filter, options);
            }
        });
        if (this.queue.length !== count) {
            this._onAfterAddingAll(addedFileItems);
            this.progress = this._getTotalProgress();
        }
        this._render();
        if (this.options.autoUpload) {
            this.uploadAll();
        }
    };
    FileUploader.prototype.removeFromQueue = function (value) {
        var index = this.getIndexOfItem(value);
        var item = this.queue[index];
        if (item.isUploading) {
            item.cancel();
        }
        this.queue.splice(index, 1);
        this.progress = this._getTotalProgress();
    };
    FileUploader.prototype.clearQueue = function () {
        while (this.queue.length) {
            this.queue[0].remove();
        }
        this.progress = 0;
    };
    FileUploader.prototype.uploadItem = function (value) {
        var index = this.getIndexOfItem(value);
        var item = this.queue[index];
        var transport = this.options.isHTML5 ? '_xhrTransport' : '_iframeTransport';
        item._prepareToUploading();
        if (this.isUploading) {
            return;
        }
        this.isUploading = true;
        this[transport](item);
    };
    FileUploader.prototype.cancelItem = function (value) {
        var index = this.getIndexOfItem(value);
        var item = this.queue[index];
        var prop = this.options.isHTML5 ? item._xhr : item._form;
        if (item && item.isUploading) {
            prop.abort();
        }
    };
    FileUploader.prototype.uploadAll = function () {
        var items = this.getNotUploadedItems().filter(function (item) { return !item.isUploading; });
        if (!items.length) {
            return;
        }
        items.map(function (item) { return item._prepareToUploading(); });
        items[0].upload();
    };
    FileUploader.prototype.cancelAll = function () {
        var items = this.getNotUploadedItems();
        items.map(function (item) { return item.cancel(); });
    };
    FileUploader.prototype.isFile = function (value) {
        return isFile(value);
    };
    FileUploader.prototype.isFileLikeObject = function (value) {
        return value instanceof file_like_object_class_1.FileLikeObject;
    };
    FileUploader.prototype.getIndexOfItem = function (value) {
        return typeof value === 'number' ? value : this.queue.indexOf(value);
    };
    FileUploader.prototype.getNotUploadedItems = function () {
        return this.queue.filter(function (item) { return !item.isUploaded; });
    };
    FileUploader.prototype.getReadyItems = function () {
        return this.queue
            .filter(function (item) { return (item.isReady && !item.isUploading); })
            .sort(function (item1, item2) { return item1.index - item2.index; });
    };
    FileUploader.prototype.destroy = function () {
        return void 0;
    };
    FileUploader.prototype.onAfterAddingAll = function (fileItems) {
        return { fileItems: fileItems };
    };
    FileUploader.prototype.onBuildItemForm = function (fileItem, form) {
        return { fileItem: fileItem, form: form };
    };
    FileUploader.prototype.onAfterAddingFile = function (fileItem) {
        return { fileItem: fileItem };
    };
    FileUploader.prototype.onWhenAddingFileFailed = function (item, filter, options) {
        return { item: item, filter: filter, options: options };
    };
    FileUploader.prototype.onBeforeUploadItem = function (fileItem) {
        return { fileItem: fileItem };
    };
    FileUploader.prototype.onProgressItem = function (fileItem, progress) {
        return { fileItem: fileItem, progress: progress };
    };
    FileUploader.prototype.onProgressAll = function (progress) {
        return { progress: progress };
    };
    FileUploader.prototype.onSuccessItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onErrorItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onCancelItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onCompleteItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onCompleteAll = function () {
        return void 0;
    };
    FileUploader.prototype._mimeTypeFilter = function (item) {
        return !(this.options.allowedMimeType && this.options.allowedMimeType.indexOf(item.type) === -1);
    };
    FileUploader.prototype._fileSizeFilter = function (item) {
        return !(this.options.maxFileSize && item.size > this.options.maxFileSize);
    };
    FileUploader.prototype._fileTypeFilter = function (item) {
        return !(this.options.allowedFileType &&
            this.options.allowedFileType.indexOf(file_type_class_1.FileType.getMimeClass(item)) === -1);
    };
    FileUploader.prototype._onErrorItem = function (item, response, status, headers) {
        item._onError(response, status, headers);
        this.onErrorItem(item, response, status, headers);
    };
    FileUploader.prototype._onCompleteItem = function (item, response, status, headers) {
        item._onComplete(response, status, headers);
        this.onCompleteItem(item, response, status, headers);
        var nextItem = this.getReadyItems()[0];
        this.isUploading = false;
        if (nextItem) {
            nextItem.upload();
            return;
        }
        this.onCompleteAll();
        this.progress = this._getTotalProgress();
        this._render();
    };
    FileUploader.prototype._headersGetter = function (parsedHeaders) {
        return function (name) {
            if (name) {
                return parsedHeaders[name.toLowerCase()] || void 0;
            }
            return parsedHeaders;
        };
    };
    FileUploader.prototype._xhrTransport = function (item) {
        var _this = this;
        var that = this;
        var xhr = item._xhr = new XMLHttpRequest();
        var sendable;
        this._onBeforeUploadItem(item);
        if (typeof item._file.size !== 'number') {
            throw new TypeError('The file specified is no longer valid');
        }
        if (!this.options.disableMultipart) {
            sendable = new FormData();
            this._onBuildItemForm(item, sendable);
            var appendFile = function () { return sendable.append(item.alias, item._file, item.file.name); };
            if (!this.options.parametersBeforeFiles) {
                appendFile();
            }
            // For AWS, Additional Parameters must come BEFORE Files
            if (this.options.additionalParameter !== undefined) {
                Object.keys(this.options.additionalParameter).forEach(function (key) {
                    var paramVal = _this.options.additionalParameter[key];
                    // Allow an additional parameter to include the filename
                    if (typeof paramVal === 'string' && paramVal.indexOf('{{file_name}}') >= 0) {
                        paramVal = paramVal.replace('{{file_name}}', item.file.name);
                    }
                    sendable.append(key, paramVal);
                });
            }
            if (this.options.parametersBeforeFiles) {
                appendFile();
            }
        }
        else {
            sendable = this.options.formatDataFunction(item);
        }
        xhr.upload.onprogress = function (event) {
            var progress = Math.round(event.lengthComputable ? event.loaded * 100 / event.total : 0);
            _this._onProgressItem(item, progress);
        };
        xhr.onload = function () {
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            var response = _this._transformResponse(xhr.response, headers);
            var gist = _this._isSuccessCode(xhr.status) ? 'Success' : 'Error';
            var method = '_on' + gist + 'Item';
            _this[method](item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        };
        xhr.onerror = function () {
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            var response = _this._transformResponse(xhr.response, headers);
            _this._onErrorItem(item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        };
        xhr.onabort = function () {
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            var response = _this._transformResponse(xhr.response, headers);
            _this._onCancelItem(item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        };
        xhr.open(item.method, item.url, true);
        xhr.withCredentials = item.withCredentials;
        if (this.options.headers) {
            for (var _i = 0, _a = this.options.headers; _i < _a.length; _i++) {
                var header = _a[_i];
                xhr.setRequestHeader(header.name, header.value);
            }
        }
        if (item.headers.length) {
            for (var _b = 0, _c = item.headers; _b < _c.length; _b++) {
                var header = _c[_b];
                xhr.setRequestHeader(header.name, header.value);
            }
        }
        if (this.authToken) {
            xhr.setRequestHeader(this.authTokenHeader, this.authToken);
        }
        xhr.onreadystatechange = function () {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                that.response.emit(xhr.responseText);
            }
        };
        if (this.options.formatDataFunctionIsAsync) {
            sendable.then(function (result) { return xhr.send(JSON.stringify(result)); });
        }
        else {
            xhr.send(sendable);
        }
        this._render();
    };
    FileUploader.prototype._getTotalProgress = function (value) {
        if (value === void 0) { value = 0; }
        if (this.options.removeAfterUpload) {
            return value;
        }
        var notUploaded = this.getNotUploadedItems().length;
        var uploaded = notUploaded ? this.queue.length - notUploaded : this.queue.length;
        var ratio = 100 / this.queue.length;
        var current = value * ratio / 100;
        return Math.round(uploaded * ratio + current);
    };
    FileUploader.prototype._getFilters = function (filters) {
        if (!filters) {
            return this.options.filters;
        }
        if (Array.isArray(filters)) {
            return filters;
        }
        if (typeof filters === 'string') {
            var names_1 = filters.match(/[^\s,]+/g);
            return this.options.filters
                .filter(function (filter) { return names_1.indexOf(filter.name) !== -1; });
        }
        return this.options.filters;
    };
    FileUploader.prototype._render = function () {
        return void 0;
    };
    FileUploader.prototype._queueLimitFilter = function () {
        return this.options.queueLimit === undefined || this.queue.length < this.options.queueLimit;
    };
    FileUploader.prototype._isValidFile = function (file, filters, options) {
        var _this = this;
        this._failFilterIndex = -1;
        return !filters.length ? true : filters.every(function (filter) {
            _this._failFilterIndex++;
            return filter.fn.call(_this, file, options);
        });
    };
    FileUploader.prototype._isSuccessCode = function (status) {
        return (status >= 200 && status < 300) || status === 304;
    };
    FileUploader.prototype._transformResponse = function (response, headers) {
        return response;
    };
    FileUploader.prototype._parseHeaders = function (headers) {
        var parsed = {};
        var key;
        var val;
        var i;
        if (!headers) {
            return parsed;
        }
        headers.split('\n').map(function (line) {
            i = line.indexOf(':');
            key = line.slice(0, i).trim().toLowerCase();
            val = line.slice(i + 1).trim();
            if (key) {
                parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
            }
        });
        return parsed;
    };
    FileUploader.prototype._onWhenAddingFileFailed = function (item, filter, options) {
        this.onWhenAddingFileFailed(item, filter, options);
    };
    FileUploader.prototype._onAfterAddingFile = function (item) {
        this.onAfterAddingFile(item);
    };
    FileUploader.prototype._onAfterAddingAll = function (items) {
        this.onAfterAddingAll(items);
    };
    FileUploader.prototype._onBeforeUploadItem = function (item) {
        item._onBeforeUpload();
        this.onBeforeUploadItem(item);
    };
    FileUploader.prototype._onBuildItemForm = function (item, form) {
        item._onBuildForm(form);
        this.onBuildItemForm(item, form);
    };
    FileUploader.prototype._onProgressItem = function (item, progress) {
        var total = this._getTotalProgress(progress);
        this.progress = total;
        item._onProgress(progress);
        this.onProgressItem(item, progress);
        this.onProgressAll(total);
        this._render();
    };
    FileUploader.prototype._onSuccessItem = function (item, response, status, headers) {
        item._onSuccess(response, status, headers);
        this.onSuccessItem(item, response, status, headers);
    };
    FileUploader.prototype._onCancelItem = function (item, response, status, headers) {
        item._onCancel(response, status, headers);
        this.onCancelItem(item, response, status, headers);
    };
    return FileUploader;
}());
exports.FileUploader = FileUploader;


/***/ }),

/***/ "./node_modules/ng2-file-upload/index.js":
/*!***********************************************!*\
  !*** ./node_modules/ng2-file-upload/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(/*! ./file-upload/file-select.directive */ "./node_modules/ng2-file-upload/file-upload/file-select.directive.js"));
__export(__webpack_require__(/*! ./file-upload/file-drop.directive */ "./node_modules/ng2-file-upload/file-upload/file-drop.directive.js"));
__export(__webpack_require__(/*! ./file-upload/file-uploader.class */ "./node_modules/ng2-file-upload/file-upload/file-uploader.class.js"));
__export(__webpack_require__(/*! ./file-upload/file-item.class */ "./node_modules/ng2-file-upload/file-upload/file-item.class.js"));
__export(__webpack_require__(/*! ./file-upload/file-like-object.class */ "./node_modules/ng2-file-upload/file-upload/file-like-object.class.js"));
var file_upload_module_1 = __webpack_require__(/*! ./file-upload/file-upload.module */ "./node_modules/ng2-file-upload/file-upload/file-upload.module.js");
exports.FileUploadModule = file_upload_module_1.FileUploadModule;


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tab1/tab1.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab1/tab1.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"pHeader\">\n    <ion-buttons slot=\"end\" (click)=\"logout()\">\n      <ion-icon name=\"log-out\"></ion-icon>\n    </ion-buttons>\n    <ion-title>\n      Add Vehicle\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <form [formGroup]=\"vehicleFormGroup\" >\n    <ion-item>\n      <ion-label>Vehicle Id:</ion-label>\n      {{counter}}\n    </ion-item>\n    <ion-item>\n      <ion-label>Name</ion-label>\n      <ion-input formControlName=\"name\" type=\"text\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Vehicle No.</ion-label>\n      <ion-input formControlName=\"vehicle_no\" type=\"text\"></ion-input>\n    </ion-item>\n    <ion-item>\n   <ion-label>Vehicle Type</ion-label>\n     <ion-select formControlName=\"vehicle_type\" interface=\"popover\" value=\"\" okText=\"Okay\" cancelText=\"Dismiss\">\n    <ion-select-option value=\"\">Select</ion-select-option>\n     <ion-select-option value=\"Lorry\">Lorry</ion-select-option>\n     <ion-select-option value=\"HeavyVehicle\">Heavy Vehicle</ion-select-option>\n     <ion-select-option value=\"Bus\">Bus</ion-select-option>\n     <ion-select-option value=\"Tractor\">Tractor</ion-select-option>\n     <ion-select-option value=\"Car\">Car/Jeep</ion-select-option>\n     <ion-select-option value=\"Others\">Others</ion-select-option>\n   </ion-select>\n </ion-item>\n    <ion-item>\n      <ion-label>Mobile No.</ion-label>\n      <ion-input formControlName=\"mobile\" type=\"number\"></ion-input>\n    </ion-item>\n    <ion-list>\n      <ion-radio-group formControlName=\"load\">\n        <ion-list-header>\n          <ion-label>Load/Empty</ion-label>\n        </ion-list-header>\n        <ion-item>\n          <ion-label>Load</ion-label>\n          <ion-radio slot=\"start\" value=\"load\"></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Empty</ion-label>\n          <ion-radio slot=\"start\" value=\"empty\"></ion-radio>\n        </ion-item>\n\n      </ion-radio-group>\n    </ion-list>\n    <ion-item>\n      <ion-label>Stepheny</ion-label>\n      <ion-checkbox formControlName=\"stepheny\" slot=\"start\" value=\"stepheny\"></ion-checkbox>\n    </ion-item>\n    <ion-item>\n      <ion-label>Toolkit</ion-label>\n      <ion-checkbox formControlName=\"toolkit\" slot=\"start\" value=\"toolkit\"></ion-checkbox>\n    </ion-item>\n    <ion-item>\n      <ion-label>Battery</ion-label>\n      <ion-input formControlName=\"battery\" type=\"number\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Other Details</ion-label>\n      <ion-input formControlName=\"other_details\" type=\"text\"></ion-input>\n    </ion-item>\n    <ion-item>\n   <ion-label>Cost</ion-label>\n     <ion-select formControlName=\"cost\" interface=\"popover\" value=\"\" okText=\"Okay\" cancelText=\"Dismiss\">\n    <ion-select-option value=\"\">Select</ion-select-option>\n     <ion-select-option value=\"30\">30</ion-select-option>\n     <ion-select-option value=\"40\">40</ion-select-option>\n     <ion-select-option value=\"50\">50</ion-select-option>\n     <ion-select-option value=\"70\">70</ion-select-option>\n     <ion-select-option value=\"80\">80</ion-select-option>\n     <ion-select-option value=\"100\">100</ion-select-option>\n     <ion-select-option value=\"150\">150</ion-select-option>\n     <ion-select-option value=\"200\">200</ion-select-option>\n   </ion-select>\n </ion-item>\n <ion-item>\n  <ion-label>Date & Time</ion-label>\n  <ion-datetime displayFormat=\"D MMM YYYY H:mm\" min=\"2019\" max=\"2022\" formControlName=\"parkingDate\" ></ion-datetime>\n</ion-item>\n<ion-item>\n <ion-label>Receiver Name</ion-label>\n <ion-input formControlName=\"receiver_name\" type=\"text\"></ion-input>\n</ion-item>\n<ion-item>\n <ion-label>Status</ion-label>\n <ion-input formControlName=\"status\" type=\"text\" value=\"Parking\" disabled></ion-input>\n</ion-item>\n<ion-item>\n    <input type=\"file\"  ng2FileSelect [uploader]=\"uploader\" accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\" capture=\"environment\" #camera hidden>\n    <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\" #image hidden multiple>\n <ion-label (click)=\"selectImageSource()\"><ion-icon name=\"camera\"></ion-icon>Add Images</ion-label>\n\n</ion-item>\n<ion-grid>\n  <ion-row >\n    <ion-col size=\"4\" formArrayName=\"images\" *ngFor=\"let creds of vehicleFormGroup.controls.images?.value; let i = index\">\n      <ion-img [src]=\"creds\" tappable (click)=\"openPreview(creds)\"></ion-img>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n\n    <ion-button (click)=\"addToVehicles()\" [disabled]=\"vehicleFormGroup.invalid\" expand=\"full\">Add Vehicle</ion-button>\n    <ion-button (click)=\"printDetail()\"  expand=\"full\">Print Vehicle</ion-button>\n\n  </form>\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/activity.service.ts":
/*!*************************************!*\
  !*** ./src/app/activity.service.ts ***!
  \*************************************/
/*! exports provided: ActivityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityService", function() { return ActivityService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ActivityService = /** @class */ (function () {
    function ActivityService(_httpClient) {
        this._httpClient = _httpClient;
        this.settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://api.msg91.com/api/sendhttp.php?mobiles=919966330990&authkey=258429At8ExWrCdC15c4c2a82&route=4&sender=TESTIN&message=Hello! This is a test message&country=91",
            "method": "GET",
            "headers": {}
        };
    }
    ActivityService.prototype.getActivity = function (activityID) {
        return this._httpClient.get(API + "/id/" + activityID);
    };
    ActivityService.prototype.getAllActivites = function () {
        return this._httpClient.get(API);
    };
    ActivityService.prototype.sendSMS = function () {
        return this._httpClient.get(API);
    };
    ActivityService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ActivityService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ActivityService);
    return ActivityService;
}());

var API = "https://orangevalleycaa.org/api/videos";
//const API = "https://api.msg91.com/api/sendhttp.php?mobiles=919966330990&authkey=258429At8ExWrCdC15c4c2a82&route=4&sender=TESTIN&message=SaiRam! This is a test message&country=91"


/***/ }),

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");
/* harmony import */ var ng2_cloudinary__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-cloudinary */ "./node_modules/ng2-cloudinary/dist/esm/src/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__);









var Tab1PageModule = /** @class */ (function () {
    function Tab1PageModule() {
        console.log("ss");
    }
    Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                ng2_cloudinary__WEBPACK_IMPORTED_MODULE_7__["Ng2CloudinaryModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__["FileUploadModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }])
            ],
            declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Tab1PageModule);
    return Tab1PageModule;
}());



/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n.skeleton-image {\n  height: 175px;\n}\n\n.pHeader {\n  --background: #F77474;\n  --color:#ffffff;\n}\n\nion-icon {\n  font-size: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hdHRodi9teXBhcmtpbmcvU1NQYXJraW5nQXBwL3NyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRjs7QURDQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtBQ0VGOztBREFBO0VBQ0UsZUFBQTtBQ0dGIiwiZmlsZSI6InNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW9uLWltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5za2VsZXRvbi1pbWFnZSB7XG4gIGhlaWdodDogMTc1cHg7XG59XG4ucEhlYWRlcntcbiAgLS1iYWNrZ3JvdW5kOiAjRjc3NDc0O1xuICAtLWNvbG9yOiNmZmZmZmY7XG59XG5pb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbn1cbiIsIi53ZWxjb21lLWNhcmQgaW9uLWltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5za2VsZXRvbi1pbWFnZSB7XG4gIGhlaWdodDogMTc1cHg7XG59XG5cbi5wSGVhZGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjRjc3NDc0O1xuICAtLWNvbG9yOiNmZmZmZmY7XG59XG5cbmlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAzMnB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _vehicle_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../vehicle.service */ "./src/app/vehicle.service.ts");
/* harmony import */ var _activity_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../activity.service */ "./src/app/activity.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var ng2_cloudinary__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-cloudinary */ "./node_modules/ng2-cloudinary/dist/esm/src/index.js");
/* harmony import */ var _image_modal_image_modal_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../image-modal/image-modal.page */ "./src/app/image-modal/image-modal.page.ts");
/* harmony import */ var ng2_img_max__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-img-max */ "./node_modules/ng2-img-max/dist/ng2-img-max.js");
/* harmony import */ var _ionic_native_printer_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/printer/ngx */ "./node_modules/@ionic-native/printer/ngx/index.js");
















var Tab1Page = /** @class */ (function () {
    function Tab1Page(_toastController, _angularFireStore, _angularFireAuth, _vehicleService, _alertController, _ng2ImgMax, router, loadingController, modalController, activityService, activatedRoute, formBuilder, printer) {
        var _this = this;
        this._toastController = _toastController;
        this._angularFireStore = _angularFireStore;
        this._angularFireAuth = _angularFireAuth;
        this._vehicleService = _vehicleService;
        this._alertController = _alertController;
        this._ng2ImgMax = _ng2ImgMax;
        this.router = router;
        this.loadingController = loadingController;
        this.modalController = modalController;
        this.printer = printer;
        this.myDate = new Date().toISOString();
        this.getLatestValue();
        //this.activityList = activityService.getAllActivites();
        console.log("test0");
        this.vehicleFormGroup = formBuilder.group({
            id: [this.counter],
            name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            vehicle_no: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            mobile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern('[1-9]{1}[0-9]{9}'), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])],
            vehicle_type: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            load: ["empty"],
            stepheny: [""],
            toolkit: [""],
            battery: ["0", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            cost: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            parkingDate: [""],
            other_details: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            receiver_name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            status: ["parking"],
            images: formBuilder.array([], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(5))
        });
        this.vehicleFormGroup.controls["id"].setValue(this.counter);
        console.log("lowercase", this.vehicleFormGroup.value.vehicle_no.toLowerCase());
        this.vehicleFormGroup.controls["vehicle_no"].setValue(this.vehicleFormGroup.value.vehicle_no.toLowerCase());
        this.vehicleFormGroup.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]));
        this.vehicleFormGroup.enable();
        this._vehicleService.read_cloudnary().subscribe(function (data) {
            _this.cloudary = data.map(function (e) {
                return {
                    id: e.payload.doc.id,
                    cloud_name: e.payload.doc.data()['cloud_name'],
                    upload_preset: e.payload.doc.data()['upload_preset']
                };
            });
            console.log("ssc", _this.cloudary);
            _this.uploader = new ng2_cloudinary__WEBPACK_IMPORTED_MODULE_9__["CloudinaryUploader"](new ng2_cloudinary__WEBPACK_IMPORTED_MODULE_9__["CloudinaryOptions"]({
                cloudName: _this.cloudary[0]['cloud_name'],
                uploadPreset: _this.cloudary[0]['upload_preset']
            }));
        });
    }
    Tab1Page.prototype.printDetail = function () {
        console.log('ha');
        var options = {
            name: 'MyDocument',
            printerId: 'printer007',
            duplex: true,
            landscape: true,
            grayscale: true
        };
        var printContent = document.getElementById('printMe');
        var myvar = '<body class="mobileView" style=" font-family: \'Roboto\', sans-serif;margin: 0px;padding: 0px;">' +
            '    <div class="receipt" style="padding: 3mm;width: 80mm;border: 1px solid black;">' +
            '        <div class="orderNo" style="width: 100%;text-align: right;padding-bottom: 1mm;font-size: 8pt;' +
            '            font-weight: bold;"> Parking ID# <span id="Order #">71</span>: <span id="Order_Name">Jet Set</span> </div>' +
            '        <div class="headerSubTitle" style="font-family: \'Equestria\', \'Permanent Marker\', cursive;text-align: center;font-size: 12pt;"> Parking Receipt </div>' +
            '        <div class="headerTitle" style="font-family: \'Equestria\', \'Permanent Marker\', cursive;text-align: center;font-size: 24pt;font-weight: bold;"> SSKD Parking Yard </div>' +
            '        <div class="headerSubTitle" style="font-family: \'Equestria\', \'Permanent Marker\', cursive;' +
            '            text-align: center;font-size: 12pt;"> Hayathnagar, Hyd-70, 8247524795 </div>' +
            '        <div id="location" style="margin-top: 5pt;text-align: center;font-size: 16pt;font-weight: bold;"> Vehicle Details </div>' +
            '        <div id="location" style="margin-top: 5pt;text-align: center;font-size: 16pt;font-weight: bold;"> AP 29 CH 7553 </div>' +
            '        <div id="date" style="margin: 5pt 0px;text-align: center;font-size: 8pt;"> In Time: Saturday, Jun 13 2018 1:05:18 </div>' +
            '        <svg id="barcode" style="display: block;margin: 0px auto;"></svg>' +
            '        <hr>' +
            '        <div class="flex" style="display: flex;justify-content: center;">' +
            '            <div id="qrcode" style="align-self: center;flex: 0 0 100px"></div>' +
            '            <div class="totals" style="flex-grow: 1;align-self: center;font-size: 8pt;">' +
            '                <div class="section" style="padding-top: 2mm;">' +
            '                    <div class="row" style="display: flex;text-align: right;">' +
            '                        <div class="col1" style="text-align: right;flex-grow: 1;"></div>' +
            '                        <div class="col2" style=" width: 22mm;">Cost (per day)</div>' +
            '                        <div class="col3" style="width: 15mm;">₹60</div>' +
            '                    </div>' +
            '                    <div class="row" style="display: flex;text-align: right;">' +
            '                        <div class="col1" style="text-align: right;flex-grow: 1;"></div>' +
            '                        <div class="col2" style=" width: 22mm;">Battery</div>' +
            '                        <div class="col3" style="width: 15mm;">1</div>' +
            '                    </div>' +
            '                    <div class="row" style="display: flex;text-align: right;">' +
            '                        <div class="col1" style="text-align: right;flex-grow: 1;"></div>' +
            '                        <div class="col2" style=" width: 22mm;">Toolkit</div>' +
            '                        <div class="col3" style="width: 15mm;">yes</div>' +
            '                    </div>' +
            '                </div>' +
            '                <div class="section" style="padding-top: 2mm;">' +
            '                    <div class="row" style="display: flex;text-align: right;">' +
            '                        <div class="col1" style="text-align: right;flex-grow: 1;"></div>' +
            '                        <div class="col2" style=" width: 22mm;">Load</div>' +
            '                        <div class="col3" style="width: 15mm;">Empty</div>' +
            '                    </div>' +
            '                </div>' +
            '            </div>' +
            '        </div>' +
            '        <div class="keepIt" style="text-align: center;font-size: 12pt;font-weight: bold;"> Keep your receipt! </div>' +
            '    </div>' +
            '</body>';
        this.printer.print(myvar, options).then(function (value) {
            console.log('value:', value);
        }, function (error) {
            console.log('error:', error);
        });
    };
    Tab1Page.prototype.getLatestValue = function () {
        var _this = this;
        console.log('test1');
        this._angularFireStore
            .collection("vehicles", function (ref) {
            return ref.where("id", ">", 0).orderBy("id", 'desc').limit(1);
        }).snapshotChanges().subscribe(function (data) {
            _this.vehicleList = data.map(function (e) {
                return {
                    id: e.payload.doc.data()['id'],
                };
            });
            console.log("id", typeof _this.vehicleList[0].id);
            _this.counter = parseInt(_this.vehicleList[0].id) + 1;
        });
        //  console.log("lastestval", this._angularFireStore.collection('vehicles').doc(id).ref.get());
    };
    Tab1Page.prototype.ionViewDidEnter = function () {
        // Put here the code you want to execute
        console.log('ss');
        this.getLatestValue();
    };
    Tab1Page.prototype.resetValue = function () {
        this.vehicleFormGroup.controls['parkingDate'].setValue(this.currentDate());
        console.log("ss", this.vehicleFormGroup);
    };
    Tab1Page.prototype.currentDate = function () {
        var currentDate = new Date();
        return currentDate.toISOString();
    };
    Tab1Page.prototype.addToVehicles = function () {
        var _this = this;
        var loaderToShow = this.loadingController.create({
            message: 'Adding Vehicle'
        }).then(function (res) {
            res.present();
            res.onDidDismiss().then(function (dis) {
                console.log('Loading dismissed!');
            });
        });
        this.vehicleFormGroup.controls["id"].setValue(this.counter);
        var vehicleNo = this.vehicleFormGroup.value.vehicle_no;
        this.vehicleFormGroup.controls["vehicle_no"].setValue(vehicleNo.toLowerCase());
        console.log(this.vehicleFormGroup.value.status);
        if (this.vehicleFormGroup.value.status == null) {
            this.vehicleFormGroup.controls["status"].setValue("parking");
        }
        if (this.vehicleFormGroup.value.stepheny == null) {
            this.vehicleFormGroup.controls["stepheny"].setValue(false);
        }
        if (this.vehicleFormGroup.value.toolkit == null) {
            this.vehicleFormGroup.controls["toolkit"].setValue(false);
        }
        console.log(this.vehicleFormGroup.value.load);
        if (this.vehicleFormGroup.value.load == undefined) {
            this.vehicleFormGroup.controls["load"].setValue("empty");
        }
        var parkingDetails = this.vehicleFormGroup.value;
        this._angularFireStore
            .collection("vehicles", function (ref) {
            console.log("add", typeof parkingDetails.id);
            return ref.where("id", "==", parkingDetails.id);
        }).valueChanges().subscribe(function (res) {
            console.log("test2", res.length);
            if (res.length == 0) {
                _this._vehicleService.create_NewVehicle(parkingDetails).then(function () {
                    _this.loadingController.dismiss();
                    var toast = _this._toastController.create({
                        message: "The Vehicle " + parkingDetails.id + "Was added.",
                        duration: 3000,
                        position: "top"
                    });
                    toast.then(function (toastMessage) {
                        toastMessage.present();
                    });
                    _this.msgDetails = { mobile_no: parkingDetails.mobile, msg: "Dear " + parkingDetails.name + "! Your Vehicle " + parkingDetails.vehicle_no + " is parked with Sri Kanka Durga Parking Yard!!! For Queries call: 8886922228" };
                    _this._vehicleService.sendSMS(_this.msgDetails);
                    _this.vehicleFormGroup.reset();
                    //  this.getLatestValue();
                });
            }
            else {
                console.log("multiple entry");
            }
        });
        //  this._vehicleService.create_NewVehicle(parkingDetails)
    };
    Tab1Page.prototype.selectImageSource = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("test2");
                        return [4 /*yield*/, this._alertController.create({
                                header: "Select Source",
                                message: "Pick a source for your image",
                                buttons: [
                                    {
                                        text: "Camera",
                                        handler: function () {
                                            _this.cameraView.nativeElement.click();
                                        }
                                    },
                                    {
                                        text: "Gallery",
                                        handler: function () {
                                            _this.imageView.nativeElement.click();
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // https://stackoverflow.com/questions/42688589/angular-2-image-resize-before-upload
    Tab1Page.prototype.handleFileInput = function (files) {
        // this.uploader.onBeforeUploadItem = (item: any) => changeBeforeUpload(item);
        var _this = this;
        // const changeBeforeUpload = (item: any) => {
        // console.log(item.file);
        // }
        console.log("files", files[0]);
        //this.uploader.uploadAll();
        /*
        this._ng2ImgMax.resizeImage(files[0], 100, 100).subscribe(
            result => {
              const newImage = new File([result], result.name);
              this.uploader.clearQueue();
              this.uploader.addToQueue([newImage]);
              this.uploader.uploadAll();
            },
            error => console.log(error)
          );
        */
        // this.uploader.uploadAll(); // call for uploading the data to Cloudinary
        /* Getting the success response from Cloudinary. */
        this.uploader.onSuccessItem = function (item, response, status, headers) {
            var json_data = JSON.parse(response);
            var images = _this.vehicleFormGroup.controls['images'];
            images.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](json_data.secure_url));
        };
        /* Getting the Error message Cloudinary throws. */
        this.uploader.onErrorItem = function (fileItem, response, status, headers) {
            console.info('onErrorItem', fileItem, response, status, headers);
        };
    };
    Tab1Page.prototype.openPreview = function (img) {
        this.modalController.create({
            component: _image_modal_image_modal_page__WEBPACK_IMPORTED_MODULE_10__["ImageModalPage"],
            componentProps: {
                img: img
            }
        }).then(function (modal) {
            modal.present();
        });
    };
    Tab1Page.prototype.logout = function () {
        var _this = this;
        console.log("louygout");
        this._angularFireAuth.auth.signOut().then(function () {
            _this.router.navigate(['/login']);
        });
        //this._angularFireAuth.auth.signOut();
        //this.navCtrl.rootNav.setRoot(LoginPage);
    };
    Tab1Page.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"] },
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuth"] },
        { type: _vehicle_service__WEBPACK_IMPORTED_MODULE_3__["VehicleService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: ng2_img_max__WEBPACK_IMPORTED_MODULE_11__["Ng2ImgMaxService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _activity_service__WEBPACK_IMPORTED_MODULE_4__["ActivityService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
        { type: _ionic_native_printer_ngx__WEBPACK_IMPORTED_MODULE_12__["Printer"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('camera', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], Tab1Page.prototype, "cameraView", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('image', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], Tab1Page.prototype, "imageView", void 0);
    Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab1',
            template: __webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab1/tab1.page.html"),
            styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuth"],
            _vehicle_service__WEBPACK_IMPORTED_MODULE_3__["VehicleService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            ng2_img_max__WEBPACK_IMPORTED_MODULE_11__["Ng2ImgMaxService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _activity_service__WEBPACK_IMPORTED_MODULE_4__["ActivityService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            _ionic_native_printer_ngx__WEBPACK_IMPORTED_MODULE_12__["Printer"]])
    ], Tab1Page);
    return Tab1Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module-es5.js.map