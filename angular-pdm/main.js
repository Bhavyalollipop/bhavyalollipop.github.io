(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\my-repo\Angular Js\simple-web-app\src\main.ts */"zUnb");


/***/ }),

/***/ "3ytF":
/*!**************************************************!*\
  !*** ./src/app/products/store/product.action.ts ***!
  \**************************************************/
/*! exports provided: toggleProductCode, setCurrentProduct, updateCurrentProduct, clearCurrentProduct, initializeCurrentProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleProductCode", function() { return toggleProductCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCurrentProduct", function() { return setCurrentProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCurrentProduct", function() { return updateCurrentProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearCurrentProduct", function() { return clearCurrentProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeCurrentProduct", function() { return initializeCurrentProduct; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const toggleProductCode = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[product] toggle the product code');
const setCurrentProduct = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[product] set current product', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updateCurrentProduct = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[product] update current product', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const clearCurrentProduct = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[product] delete current product');
const initializeCurrentProduct = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[product] add new product');


/***/ }),

/***/ "8F8Y":
/*!*****************************************************!*\
  !*** ./src/app/products/products-list.component.ts ***!
  \*****************************************************/
/*! exports provided: ProductsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsListComponent", function() { return ProductsListComponent; });
/* harmony import */ var _store_products_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store/products.reducer */ "F/SI");
/* harmony import */ var _store_product_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store/product.action */ "3ytF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./products.service */ "vuCO");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _product_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product-form.component */ "Bg0d");
/* harmony import */ var _shared_star_star_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/star/star.component */ "Q6/5");
/* harmony import */ var _shared_convert_to_spaces_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/convert-to-spaces.pipe */ "C+71");











function ProductsListComponent_th_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function ProductsListComponent_tbody_30_tr_1_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](2, "convertToSpaces");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](3, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const product_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind2"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind1"](3, 4, product_r4.productCode), "-"));
} }
const _c0 = function (a0) { return { "selected-row": a0 }; };
const _c1 = function (a1) { return ["/products", a1]; };
function ProductsListComponent_tbody_30_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "tr", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function ProductsListComponent_tbody_30_tr_1_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r8); const product_r4 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2); return ctx_r7.getProduct(product_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](4, ProductsListComponent_tbody_30_tr_1_td_4_Template, 4, 6, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](7, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "pm-star", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("notify", function ProductsListComponent_tbody_30_tr_1_Template_pm_star_notify_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2); return ctx_r9.onNotify($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const product_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction1"](11, _c0, product_r4.productId === ctx_r3.selectedProduct.productId));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction1"](13, _c1, product_r4.productId));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](product_r4.productName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r3.displayCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind4"](7, 6, product_r4.price, "INR", "symbol", "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("rating", product_r4.starRating);
} }
function ProductsListComponent_tbody_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](1, ProductsListComponent_tbody_30_tr_1_Template, 10, 15, "tr", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx_r1.filteredProducts);
} }
function ProductsListComponent_tr_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2, "No items to display");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
const _c2 = function () { return ["/products/add"]; };
class ProductsListComponent {
    constructor(store, productsService) {
        this.store = store;
        this.productsService = productsService;
        this.pageTitle = 'Product List';
        this.imageWidth = 20;
        this.imageMargin = 2;
        this.showImage = false;
        this.displayCode = false;
        this.products = [];
        this.store.select(_store_products_reducer__WEBPACK_IMPORTED_MODULE_0__["getShowProductCode"]).subscribe(showProductCode => this.displayCode = showProductCode);
        this.store.select(_store_products_reducer__WEBPACK_IMPORTED_MODULE_0__["getSelectedProduct"]).subscribe(currentProduct => this.selectedProduct = Object.assign({}, currentProduct));
        this.store.select(_store_products_reducer__WEBPACK_IMPORTED_MODULE_0__["getupdatedProduct"]).subscribe(currentProduct => this.selectedProduct = Object.assign({}, currentProduct), currentProduct => this.products = this.products.map(item => item.productId === currentProduct.productId ? currentProduct : item));
    }
    get listFilter() {
        return this._listFilter;
    }
    set listFilter(value) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(value) : this.products;
    }
    performFilter(filterBy) {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((item) => item.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
    onNotify(value) {
        alert(value);
    }
    getProduct(product) {
        this.store.dispatch(_store_product_action__WEBPACK_IMPORTED_MODULE_1__["setCurrentProduct"]({ product: product }));
    }
    changeCode() {
        this.store.dispatch(_store_product_action__WEBPACK_IMPORTED_MODULE_1__["toggleProductCode"]());
    }
    ngOnInit() {
        this.productsService.getProducts().subscribe({
            next: products => {
                this.products = products;
                this.filteredProducts = this.products;
            },
            error: err => this.errorMessage = err
        });
        this.listFilter = '';
    }
}
ProductsListComponent.??fac = function ProductsListComponent_Factory(t) { return new (t || ProductsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"])); };
ProductsListComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: ProductsListComponent, selectors: [["ng-component"]], decls: 39, vars: 8, consts: [[1, "card"], [1, "card-header"], [1, "card-body"], [1, "row"], [1, "col-md-2"], [1, "col-md-6"], ["type", "text", 3, "ngModel", "ngModelChange"], [1, "col-md-6", "text-right"], [1, "btn", "btn-sm", "btn-primary", "mb-2", 3, "routerLink"], [1, "fa", "fa-plus", "mr-2"], [1, "table-responsive"], [1, "table"], [4, "ngIf"], [4, "ngElse"], [3, "click"], ["type", "checkbox", "value", "true", 3, "checked"], [2, "margin-left", "5px"], [3, "product"], [3, "ngClass", "click", 4, "ngFor", "ngForOf"], [3, "ngClass", "click"], [3, "routerLink"], [3, "rating", "notify"], ["colspan", "6", 1, "text-center"]], template: function ProductsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](6, " Filter: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("ngModelChange", function ProductsListComponent_Template_input_ngModelChange_8_listener($event) { return ctx.listFilter = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](12, "Filtered By:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](15, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](16, "New Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](20, "table", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](21, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](22, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](23, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](24, "Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](25, ProductsListComponent_th_25_Template, 2, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](26, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](27, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](28, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](29, "5 Star Rating");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](30, ProductsListComponent_tbody_30_Template, 2, 1, "tbody", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](31, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](32, ProductsListComponent_tr_32_Template, 3, 0, "tr", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](33, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function ProductsListComponent_Template_div_click_33_listener() { return ctx.changeCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](34, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](35, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](36, "Show Product Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](37, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](38, "app-product-form", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", ctx.pageTitle, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngModel", ctx.listFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction0"](7, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.displayCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.products && ctx.products.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("checked", ctx.displayCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("product", ctx.selectedProduct);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _product_form_component__WEBPACK_IMPORTED_MODULE_8__["ProductFormComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _shared_star_star_component__WEBPACK_IMPORTED_MODULE_9__["StarComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CurrencyPipe"], _shared_convert_to_spaces_pipe__WEBPACK_IMPORTED_MODULE_10__["ConvertToSpacesPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["LowerCasePipe"]], styles: ["thead[_ngcontent-%COMP%] {\n  color: #337AB7;\n}\n\ntr[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\ntr.selected-row[_ngcontent-%COMP%] {\n  background-color: blue;\n  color: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHByb2R1Y3RzLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FBQ0o7O0FBQ0E7RUFDSSxlQUFBO0FBRUo7O0FBQUE7RUFDSSxzQkFBQTtFQUNBLHVCQUFBO0FBR0oiLCJmaWxlIjoicHJvZHVjdHMtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRoZWFkIHtcclxuICAgIGNvbG9yOiAjMzM3QUI3O1xyXG59XHJcbnRyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG50ci5zZWxlY3RlZC1yb3cge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59Il19 */"] });


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HomeComponent {
    constructor() {
        this.title = 'Today Tech';
    }
    ngOnInit() {
    }
}
HomeComponent.??fac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 15, vars: 1, consts: [[1, "card"], [1, "card-header"], [1, "card-body"], [1, "container-fluid"], [1, "text-center"], ["href", "https://www.linkedin.com/in/bhavyabavi/"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Developed by:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Bhavya P");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Follow Me on");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Linked In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" Welcome to ", ctx.title, " product management ");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "Bg0d":
/*!****************************************************!*\
  !*** ./src/app/products/product-form.component.ts ***!
  \****************************************************/
/*! exports provided: ProductFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductFormComponent", function() { return ProductFormComponent; });
/* harmony import */ var _store_product_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store/product.action */ "3ytF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class ProductFormComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
    }
    submit() {
        this.store.dispatch(_store_product_action__WEBPACK_IMPORTED_MODULE_0__["setCurrentProduct"]({ product: this.product }));
    }
}
ProductFormComponent.??fac = function ProductFormComponent_Factory(t) { return new (t || ProductFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
ProductFormComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: ProductFormComponent, selectors: [["app-product-form"]], inputs: { product: "product" }, decls: 27, vars: 4, consts: [["form", "ngForm"], [1, "row"], [1, "col-md-6"], [1, "control-label"], ["type", "text", "name", "productName", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "productCode", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "description", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "price", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-md-12"], ["type", "button", 1, "btn", "btn-sm", "btn-success", "mr-2", 3, "click"], ["type", "button", 1, "btn", "btn-sm", "btn-danger"]], template: function ProductFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "form", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](5, "Product Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function ProductFormComponent_Template_input_ngModelChange_6_listener($event) { return ctx.product.productName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9, "Product Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function ProductFormComponent_Template_input_ngModelChange_10_listener($event) { return ctx.product.productCode = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "textarea", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function ProductFormComponent_Template_textarea_ngModelChange_15_listener($event) { return ctx.product.description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18, "Product Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function ProductFormComponent_Template_input_ngModelChange_19_listener($event) { return ctx.product.price = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function ProductFormComponent_Template_button_click_23_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](24, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](26, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.product.productName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.product.productCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.product.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.product.price);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "C+71":
/*!**************************************************!*\
  !*** ./src/app/shared/convert-to-spaces.pipe.ts ***!
  \**************************************************/
/*! exports provided: ConvertToSpacesPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConvertToSpacesPipe", function() { return ConvertToSpacesPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ConvertToSpacesPipe {
    transform(value, character) {
        return value.replace(character, ' ');
    }
}
ConvertToSpacesPipe.??fac = function ConvertToSpacesPipe_Factory(t) { return new (t || ConvertToSpacesPipe)(); };
ConvertToSpacesPipe.??pipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????definePipe"]({ name: "convertToSpaces", type: ConvertToSpacesPipe, pure: true });


/***/ }),

/***/ "CG0s":
/*!******************************************!*\
  !*** ./src/app/error/error.component.ts ***!
  \******************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ErrorComponent {
    constructor() { }
    ngOnInit() {
    }
}
ErrorComponent.??fac = function ErrorComponent_Factory(t) { return new (t || ErrorComponent)(); };
ErrorComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ErrorComponent, selectors: [["app-error"]], decls: 2, vars: 0, template: function ErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "error works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvci5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "Cio3":
/*!******************************************************!*\
  !*** ./src/app/products/product-detail.component.ts ***!
  \******************************************************/
/*! exports provided: ProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function ProductDetailComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductDetailComponent_div_0_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r1.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " Go Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"](" ", ctx_r0.title, " : ", ctx_r0.product.productName, " ");
} }
class ProductDetailComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
        this.title = 'Product Detail';
    }
    goBack() {
        this.router.navigate(['/products']);
    }
    ngOnInit() {
        this.id = +this.route.snapshot.params.id;
        this.title += ` : ${this.id}`;
        this.product = {
            "productId": this.id,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2019",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "assets/images/garden_cart.png"
        };
    }
}
ProductDetailComponent.??fac = function ProductDetailComponent_Factory(t) { return new (t || ProductDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
ProductDetailComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ProductDetailComponent, selectors: [["app-product-detail"]], decls: 1, vars: 1, consts: [["class", "card", 4, "ngIf"], [1, "card"], [1, "card-header"], [1, "card-body"], [1, "btn", "btn-secondary", 3, "click"], [1, "fa", "fa-arrow-left"]], template: function ProductDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, ProductDetailComponent_div_0_Template, 8, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.product);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "F/SI":
/*!****************************************************!*\
  !*** ./src/app/products/store/products.reducer.ts ***!
  \****************************************************/
/*! exports provided: getShowProductCode, getSelectedProduct, getupdatedProduct, productsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShowProductCode", function() { return getShowProductCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedProduct", function() { return getSelectedProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getupdatedProduct", function() { return getupdatedProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productsReducer", function() { return productsReducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _product_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.action */ "3ytF");


const initialState = {
    showProductCode: true,
    currentProduct: {
        productId: null,
        productName: '',
        productCode: '',
        releaseDate: '',
        description: '',
        price: null,
        starRating: null,
        imageUrl: ''
    },
    products: []
};
const getFeatureSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('products');
const getShowProductCode = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getFeatureSelector, state => state.showProductCode);
const getSelectedProduct = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getFeatureSelector, state => state.currentProduct);
const getupdatedProduct = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getFeatureSelector, state => state.currentProduct);
const productsReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_product_action__WEBPACK_IMPORTED_MODULE_1__["toggleProductCode"], (state) => {
    return Object.assign(Object.assign({}, state), { showProductCode: !state.showProductCode });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_product_action__WEBPACK_IMPORTED_MODULE_1__["setCurrentProduct"], (state, action) => {
    return Object.assign(Object.assign({}, state), { currentProduct: action.product });
}));


/***/ }),

/***/ "FVtj":
/*!**************************************************!*\
  !*** ./src/app/products/product-detail.guard.ts ***!
  \**************************************************/
/*! exports provided: ProductDetailGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailGuard", function() { return ProductDetailGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class ProductDetailGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(next, state) {
        let id = +next.params.id;
        if (isNaN(id) || id < 1) {
            alert("Invalid Product Id");
            this.router.navigate(['/products']);
            return false;
        }
        return true;
    }
}
ProductDetailGuard.??fac = function ProductDetailGuard_Factory(t) { return new (t || ProductDetailGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
ProductDetailGuard.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: ProductDetailGuard, factory: ProductDetailGuard.??fac, providedIn: 'root' });


/***/ }),

/***/ "OTVi":
/*!********************************************!*\
  !*** ./src/app/auth/auth-guard.service.ts ***!
  \********************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "qXBG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AuthGuardService {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate() {
        if (this.auth.isAuthenticated()) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    }
}
AuthGuardService.??fac = function AuthGuardService_Factory(t) { return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuardService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: AuthGuardService, factory: AuthGuardService.??fac });


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _star_star_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./star/star.component */ "Q6/5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class SharedModule {
}
SharedModule.??fac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineNgModule"]({ type: SharedModule });
SharedModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]
        ], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["????setNgModuleScope"](SharedModule, { declarations: [_star_star_component__WEBPACK_IMPORTED_MODULE_2__["StarComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _star_star_component__WEBPACK_IMPORTED_MODULE_2__["StarComponent"]] }); })();


/***/ }),

/***/ "Q6/5":
/*!***********************************************!*\
  !*** ./src/app/shared/star/star.component.ts ***!
  \***********************************************/
/*! exports provided: StarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarComponent", function() { return StarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class StarComponent {
    constructor() {
        this.notify = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnChanges() {
        this.ratingWdith = this.rating * 75 / 5;
    }
    emitrating(rating) {
        this.notify.emit(rating);
    }
}
StarComponent.??fac = function StarComponent_Factory(t) { return new (t || StarComponent)(); };
StarComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: StarComponent, selectors: [["pm-star"]], inputs: { rating: "rating" }, outputs: { notify: "notify" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????NgOnChangesFeature"]], decls: 7, vars: 3, consts: [[1, "crop", 3, "title", "click"], [2, "width", "75px"], [1, "fa", "fa-star"]], template: function StarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function StarComponent_Template_div_click_0_listener() { return ctx.emitrating(ctx.rating); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("width", ctx.ratingWdith, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("title", ctx.rating);
    } }, styles: [".crop[_ngcontent-%COMP%] {\n  overflow: hidden !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzdGFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkJBQUE7QUFDSiIsImZpbGUiOiJzdGFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNyb3Age1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG59Il19 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


const _c0 = function () { return ["/home"]; };
const _c1 = function () { return ["/products"]; };
class AppComponent {
    constructor() {
        this.title = 'Today Tech';
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 13, vars: 5, consts: [[1, "navbar", "navbar-expand", "bg-light", "navbar-light"], [1, "container-fluid"], [1, "navbar-brand"], [1, "nav", "nav-pills"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink"], [1, "container", "pt-3"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](4, _c1));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./error/error.component */ "CG0s");
/* harmony import */ var _products_product_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./products/product.module */ "lE2P");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store-devtools */ "agSv");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth/auth-guard.service */ "OTVi");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth/auth.service */ "qXBG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");
















class AppModule {
}
AppModule.??fac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["????defineInjector"]({ providers: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_11__["AuthGuardService"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _products_product_module__WEBPACK_IMPORTED_MODULE_6__["ProductModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forRoot({}, {}),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_8__["StoreDevtoolsModule"].instrument({
                name: "Product Management",
                maxAge: 25, logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].production
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        _error_error_component__WEBPACK_IMPORTED_MODULE_5__["ErrorComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _products_product_module__WEBPACK_IMPORTED_MODULE_6__["ProductModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_8__["StoreDevtoolsModule"]] }); })();


/***/ }),

/***/ "cWCC":
/*!****************************************************!*\
  !*** ./src/app/products/product-routing.module.ts ***!
  \****************************************************/
/*! exports provided: ProductRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductRoutingModule", function() { return ProductRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _product_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-detail.component */ "Cio3");
/* harmony import */ var _products_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products-list.component */ "8F8Y");
/* harmony import */ var _product_detail_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-detail.guard */ "FVtj");
/* harmony import */ var _product_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-form.component */ "Bg0d");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    { path: '', component: _products_list_component__WEBPACK_IMPORTED_MODULE_2__["ProductsListComponent"] },
    { path: 'add', component: _product_form_component__WEBPACK_IMPORTED_MODULE_4__["ProductFormComponent"] },
    { path: ':id', canActivate: [_product_detail_guard__WEBPACK_IMPORTED_MODULE_3__["ProductDetailGuard"]], component: _product_detail_component__WEBPACK_IMPORTED_MODULE_1__["ProductDetailComponent"] }
];
class ProductRoutingModule {
}
ProductRoutingModule.??fac = function ProductRoutingModule_Factory(t) { return new (t || ProductRoutingModule)(); };
ProductRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineNgModule"]({ type: ProductRoutingModule });
ProductRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["????setNgModuleScope"](ProductRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "lE2P":
/*!********************************************!*\
  !*** ./src/app/products/product.module.ts ***!
  \********************************************/
/*! exports provided: ProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModule", function() { return ProductModule; });
/* harmony import */ var _products_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products-list.component */ "8F8Y");
/* harmony import */ var _product_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-detail.component */ "Cio3");
/* harmony import */ var _shared_convert_to_spaces_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/convert-to-spaces.pipe */ "C+71");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _product_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-form.component */ "Bg0d");
/* harmony import */ var _product_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-routing.module */ "cWCC");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _store_products_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store/products.reducer */ "F/SI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");










class ProductModule {
}
ProductModule.??fac = function ProductModule_Factory(t) { return new (t || ProductModule)(); };
ProductModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["????defineNgModule"]({ type: ProductModule });
ProductModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["????defineInjector"]({ imports: [[
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _product_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductRoutingModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forFeature('products', _store_products_reducer__WEBPACK_IMPORTED_MODULE_7__["productsReducer"])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["????setNgModuleScope"](ProductModule, { declarations: [_products_list_component__WEBPACK_IMPORTED_MODULE_0__["ProductsListComponent"],
        _product_detail_component__WEBPACK_IMPORTED_MODULE_1__["ProductDetailComponent"],
        _shared_convert_to_spaces_pipe__WEBPACK_IMPORTED_MODULE_2__["ConvertToSpacesPipe"],
        _product_form_component__WEBPACK_IMPORTED_MODULE_4__["ProductFormComponent"]], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _product_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductRoutingModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreFeatureModule"]] }); })();


/***/ }),

/***/ "qXBG":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AuthService {
    isAuthenticated() {
        return !!localStorage.getItem("username") || false;
    }
}
AuthService.??fac = function AuthService_Factory(t) { return new (t || AuthService)(); };
AuthService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: AuthService, factory: AuthService.??fac });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error/error.component */ "CG0s");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/auth-guard.service */ "OTVi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]] },
    {
        path: 'products',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./products/product-routing.module */ "cWCC")).then(m => m.ProductRoutingModule), canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]]
    },
    { path: '**', component: _error_error_component__WEBPACK_IMPORTED_MODULE_1__["ErrorComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.??fac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LoginComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoginComponent.??fac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(); };
LoginComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 2, vars: 0, template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "login works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "vuCO":
/*!**********************************************!*\
  !*** ./src/app/products/products.service.ts ***!
  \**********************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class ProductsService {
    constructor(http) {
        this.http = http;
        this.productUrl = 'api/products/products.json';
    }
    getProducts() {
        return this.http.get(this.productUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(data => `All ${JSON.stringify(data)}`), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.errorhandler));
    }
    errorhandler(err) {
        let errmsg = '';
        if (err.error instanceof ErrorEvent) {
            errmsg = `Error Occured in ${err.error.message}`;
        }
        else {
            errmsg = `Code ${err.status},Status ${err.message}`;
        }
        console.log(errmsg);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(errmsg);
    }
}
ProductsService.??fac = function ProductsService_Factory(t) { return new (t || ProductsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
ProductsService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjectable"]({ token: ProductsService, factory: ProductsService.??fac, providedIn: 'root' });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map