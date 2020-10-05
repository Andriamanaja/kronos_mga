(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["clients-new-client-new-client-module"],{

/***/ "./node_modules/@angular/material/esm5/autocomplete.es5.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@angular/material/esm5/autocomplete.es5.js ***!
  \*****************************************************************/
/*! exports provided: MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY, MatAutocompleteSelectedEvent, MatAutocompleteBase, _MatAutocompleteMixinBase, MAT_AUTOCOMPLETE_DEFAULT_OPTIONS, MatAutocomplete, MatAutocompleteModule, MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY, getMatAutocompleteMissingPanelError, AUTOCOMPLETE_OPTION_HEIGHT, AUTOCOMPLETE_PANEL_HEIGHT, MAT_AUTOCOMPLETE_SCROLL_STRATEGY, MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER, MAT_AUTOCOMPLETE_VALUE_ACCESSOR, MatAutocompleteTrigger, MatAutocompleteOrigin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY", function() { return MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatAutocompleteSelectedEvent", function() { return MatAutocompleteSelectedEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatAutocompleteBase", function() { return MatAutocompleteBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatAutocompleteMixinBase", function() { return _MatAutocompleteMixinBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_DEFAULT_OPTIONS", function() { return MAT_AUTOCOMPLETE_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatAutocomplete", function() { return MatAutocomplete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatAutocompleteModule", function() { return MatAutocompleteModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY", function() { return MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatAutocompleteMissingPanelError", function() { return getMatAutocompleteMissingPanelError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTOCOMPLETE_OPTION_HEIGHT", function() { return AUTOCOMPLETE_OPTION_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTOCOMPLETE_PANEL_HEIGHT", function() { return AUTOCOMPLETE_PANEL_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_SCROLL_STRATEGY", function() { return MAT_AUTOCOMPLETE_SCROLL_STRATEGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER", function() { return MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_VALUE_ACCESSOR", function() { return MAT_AUTOCOMPLETE_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatAutocompleteTrigger", function() { return MatAutocompleteTrigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatAutocompleteOrigin", function() { return MatAutocompleteOrigin; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
















/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Autocomplete IDs need to be unique across components, so this counter exists outside of
 * the component definition.
 * @type {?}
 */
var _uniqueAutocompleteIdCounter = 0;
/**
 * Event object that is emitted when an autocomplete option is selected.
 */
var  /**
 * Event object that is emitted when an autocomplete option is selected.
 */
MatAutocompleteSelectedEvent = /** @class */ (function () {
    function MatAutocompleteSelectedEvent(source, option) {
        this.source = source;
        this.option = option;
    }
    return MatAutocompleteSelectedEvent;
}());
// Boilerplate for applying mixins to MatAutocomplete.
/**
 * \@docs-private
 */
var  
// Boilerplate for applying mixins to MatAutocomplete.
/**
 * \@docs-private
 */
MatAutocompleteBase = /** @class */ (function () {
    function MatAutocompleteBase() {
    }
    return MatAutocompleteBase;
}());
/** @type {?} */
var _MatAutocompleteMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["mixinDisableRipple"])(MatAutocompleteBase);
/**
 * Injection token to be used to override the default options for `mat-autocomplete`.
 * @type {?}
 */
var MAT_AUTOCOMPLETE_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('mat-autocomplete-default-options', {
    providedIn: 'root',
    factory: MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY,
});
/**
 * \@docs-private
 * @return {?}
 */
function MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY() {
    return { autoActiveFirstOption: false };
}
var MatAutocomplete = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatAutocomplete, _super);
    function MatAutocomplete(_changeDetectorRef, _elementRef, defaults) {
        var _this = _super.call(this) || this;
        _this._changeDetectorRef = _changeDetectorRef;
        _this._elementRef = _elementRef;
        /**
         * Whether the autocomplete panel should be visible, depending on option length.
         */
        _this.showPanel = false;
        _this._isOpen = false;
        /**
         * Function that maps an option's control value to its display value in the trigger.
         */
        _this.displayWith = null;
        /**
         * Event that is emitted whenever an option from the list is selected.
         */
        _this.optionSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Event that is emitted when the autocomplete panel is opened.
         */
        _this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Event that is emitted when the autocomplete panel is closed.
         */
        _this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        _this._classList = {};
        /**
         * Unique ID to be used by autocomplete trigger's "aria-owns" property.
         */
        _this.id = "mat-autocomplete-" + _uniqueAutocompleteIdCounter++;
        _this._autoActiveFirstOption = !!defaults.autoActiveFirstOption;
        return _this;
    }
    Object.defineProperty(MatAutocomplete.prototype, "isOpen", {
        /** Whether the autocomplete panel is open. */
        get: /**
         * Whether the autocomplete panel is open.
         * @return {?}
         */
        function () { return this._isOpen && this.showPanel; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatAutocomplete.prototype, "autoActiveFirstOption", {
        /**
         * Whether the first option should be highlighted when the autocomplete panel is opened.
         * Can be configured globally through the `MAT_AUTOCOMPLETE_DEFAULT_OPTIONS` token.
         */
        get: /**
         * Whether the first option should be highlighted when the autocomplete panel is opened.
         * Can be configured globally through the `MAT_AUTOCOMPLETE_DEFAULT_OPTIONS` token.
         * @return {?}
         */
        function () { return this._autoActiveFirstOption; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._autoActiveFirstOption = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatAutocomplete.prototype, "classList", {
        /**
         * Takes classes set on the host mat-autocomplete element and applies them to the panel
         * inside the overlay container to allow for easy styling.
         */
        set: /**
         * Takes classes set on the host mat-autocomplete element and applies them to the panel
         * inside the overlay container to allow for easy styling.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            if (value && value.length) {
                value.split(' ').forEach(function (className) { return _this._classList[className.trim()] = true; });
                this._elementRef.nativeElement.className = '';
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatAutocomplete.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["ActiveDescendantKeyManager"](this.options).withWrap();
        // Set the initial visibility state.
        this._setVisibility();
    };
    /**
     * Sets the panel scrollTop. This allows us to manually scroll to display options
     * above or below the fold, as they are not actually being focused when active.
     */
    /**
     * Sets the panel scrollTop. This allows us to manually scroll to display options
     * above or below the fold, as they are not actually being focused when active.
     * @param {?} scrollTop
     * @return {?}
     */
    MatAutocomplete.prototype._setScrollTop = /**
     * Sets the panel scrollTop. This allows us to manually scroll to display options
     * above or below the fold, as they are not actually being focused when active.
     * @param {?} scrollTop
     * @return {?}
     */
    function (scrollTop) {
        if (this.panel) {
            this.panel.nativeElement.scrollTop = scrollTop;
        }
    };
    /** Returns the panel's scrollTop. */
    /**
     * Returns the panel's scrollTop.
     * @return {?}
     */
    MatAutocomplete.prototype._getScrollTop = /**
     * Returns the panel's scrollTop.
     * @return {?}
     */
    function () {
        return this.panel ? this.panel.nativeElement.scrollTop : 0;
    };
    /** Panel should hide itself when the option list is empty. */
    /**
     * Panel should hide itself when the option list is empty.
     * @return {?}
     */
    MatAutocomplete.prototype._setVisibility = /**
     * Panel should hide itself when the option list is empty.
     * @return {?}
     */
    function () {
        this.showPanel = !!this.options.length;
        this._classList['mat-autocomplete-visible'] = this.showPanel;
        this._classList['mat-autocomplete-hidden'] = !this.showPanel;
        this._changeDetectorRef.markForCheck();
    };
    /** Emits the `select` event. */
    /**
     * Emits the `select` event.
     * @param {?} option
     * @return {?}
     */
    MatAutocomplete.prototype._emitSelectEvent = /**
     * Emits the `select` event.
     * @param {?} option
     * @return {?}
     */
    function (option) {
        /** @type {?} */
        var event = new MatAutocompleteSelectedEvent(this, option);
        this.optionSelected.emit(event);
    };
    MatAutocomplete.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{selector: 'mat-autocomplete',
                    template: "<ng-template><div class=\"mat-autocomplete-panel\" role=\"listbox\" [id]=\"id\" [ngClass]=\"_classList\" #panel><ng-content></ng-content></div></ng-template>",
                    styles: [".mat-autocomplete-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;visibility:hidden;max-width:none;max-height:256px;position:relative;width:100%;border-bottom-left-radius:4px;border-bottom-right-radius:4px}.mat-autocomplete-panel.mat-autocomplete-visible{visibility:visible}.mat-autocomplete-panel.mat-autocomplete-hidden{visibility:hidden}.mat-autocomplete-panel-above .mat-autocomplete-panel{border-radius:0;border-top-left-radius:4px;border-top-right-radius:4px}.mat-autocomplete-panel .mat-divider-horizontal{margin-top:-1px}@media (-ms-high-contrast:active){.mat-autocomplete-panel{outline:solid 1px}}"],
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
                    exportAs: 'matAutocomplete',
                    inputs: ['disableRipple'],
                    host: {
                        'class': 'mat-autocomplete'
                    },
                    providers: [
                        { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MAT_OPTION_PARENT_COMPONENT"], useExisting: MatAutocomplete }
                    ]
                },] },
    ];
    /** @nocollapse */
    MatAutocomplete.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [MAT_AUTOCOMPLETE_DEFAULT_OPTIONS,] }] }
    ]; };
    MatAutocomplete.propDecorators = {
        template: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"],] }],
        panel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['panel',] }],
        options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatOption"], { descendants: true },] }],
        optionGroups: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatOptgroup"],] }],
        displayWith: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        autoActiveFirstOption: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        panelWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        optionSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        opened: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        closed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        classList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['class',] }]
    };
    return MatAutocomplete;
}(_MatAutocompleteMixinBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Directive applied to an element to make it usable
 * as a connection point for an autocomplete panel.
 */
var MatAutocompleteOrigin = /** @class */ (function () {
    function MatAutocompleteOrigin(elementRef) {
        this.elementRef = elementRef;
    }
    MatAutocompleteOrigin.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"], args: [{
                    selector: '[matAutocompleteOrigin]',
                    exportAs: 'matAutocompleteOrigin',
                },] },
    ];
    /** @nocollapse */
    MatAutocompleteOrigin.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }
    ]; };
    return MatAutocompleteOrigin;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The height of each autocomplete option.
 * @type {?}
 */
var AUTOCOMPLETE_OPTION_HEIGHT = 48;
/**
 * The total height of the autocomplete panel.
 * @type {?}
 */
var AUTOCOMPLETE_PANEL_HEIGHT = 256;
/**
 * Injection token that determines the scroll handling while the autocomplete panel is open.
 * @type {?}
 */
var MAT_AUTOCOMPLETE_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('mat-autocomplete-scroll-strategy');
/**
 * \@docs-private
 * @param {?} overlay
 * @return {?}
 */
function MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY(overlay) {
    return function () { return overlay.scrollStrategies.reposition(); };
}
/**
 * \@docs-private
 * @type {?}
 */
var MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER = {
    provide: MAT_AUTOCOMPLETE_SCROLL_STRATEGY,
    deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["Overlay"]],
    useFactory: MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY,
};
/**
 * Provider that allows the autocomplete to register as a ControlValueAccessor.
 * \@docs-private
 * @type {?}
 */
var MAT_AUTOCOMPLETE_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(function () { return MatAutocompleteTrigger; }),
    multi: true
};
/**
 * Creates an error to be thrown when attempting to use an autocomplete trigger without a panel.
 * \@docs-private
 * @return {?}
 */
function getMatAutocompleteMissingPanelError() {
    return Error('Attempting to open an undefined instance of `mat-autocomplete`. ' +
        'Make sure that the id passed to the `matAutocomplete` is correct and that ' +
        'you\'re attempting to open it after the ngAfterContentInit hook.');
}
var MatAutocompleteTrigger = /** @class */ (function () {
    function MatAutocompleteTrigger(_element, _overlay, _viewContainerRef, _zone, _changeDetectorRef, scrollStrategy, _dir, _formField, _document, _viewportRuler) {
        var _this = this;
        this._element = _element;
        this._overlay = _overlay;
        this._viewContainerRef = _viewContainerRef;
        this._zone = _zone;
        this._changeDetectorRef = _changeDetectorRef;
        this._dir = _dir;
        this._formField = _formField;
        this._document = _document;
        this._viewportRuler = _viewportRuler;
        this._componentDestroyed = false;
        this._autocompleteDisabled = false;
        /**
         * Whether or not the label state is being overridden.
         */
        this._manuallyFloatingLabel = false;
        /**
         * Subscription to viewport size changes.
         */
        this._viewportSubscription = rxjs__WEBPACK_IMPORTED_MODULE_14__["Subscription"].EMPTY;
        /**
         * Whether the autocomplete can open the next time it is focused. Used to prevent a focused,
         * closed autocomplete from being reopened if the user switches to another browser tab and then
         * comes back.
         */
        this._canOpenOnNextFocus = true;
        /**
         * Stream of keyboard events that can close the panel.
         */
        this._closeKeyEventStream = new rxjs__WEBPACK_IMPORTED_MODULE_14__["Subject"]();
        /**
         * Event handler for when the window is blurred. Needs to be an
         * arrow function in order to preserve the context.
         */
        this._windowBlurHandler = function () {
            // If the user blurred the window while the autocomplete is focused, it means that it'll be
            // refocused when they come back. In this case we want to skip the first focus event, if the
            // pane was closed, in order to avoid reopening it unintentionally.
            _this._canOpenOnNextFocus =
                document.activeElement !== _this._element.nativeElement || _this.panelOpen;
        };
        /**
         * `View -> model callback called when value changes`
         */
        this._onChange = function () { };
        /**
         * `View -> model callback called when autocomplete has been touched`
         */
        this._onTouched = function () { };
        /**
         * `autocomplete` attribute to be set on the input element.
         * \@docs-private
         */
        this.autocompleteAttribute = 'off';
        this._overlayAttached = false;
        /**
         * Stream of autocomplete option selections.
         */
        this.optionSelections = Object(rxjs__WEBPACK_IMPORTED_MODULE_14__["defer"])(function () {
            if (_this.autocomplete && _this.autocomplete.options) {
                return rxjs__WEBPACK_IMPORTED_MODULE_14__["merge"].apply(void 0, _this.autocomplete.options.map(function (option) { return option.onSelectionChange; }));
            }
            // If there are any subscribers before `ngAfterViewInit`, the `autocomplete` will be undefined.
            // Return a stream that we'll replace with the real one once everything is in place.
            return _this._zone.onStable
                .asObservable()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["switchMap"])(function () { return _this.optionSelections; }));
        });
        if (typeof window !== 'undefined') {
            _zone.runOutsideAngular(function () {
                window.addEventListener('blur', _this._windowBlurHandler);
            });
        }
        this._scrollStrategy = scrollStrategy;
    }
    Object.defineProperty(MatAutocompleteTrigger.prototype, "autocompleteDisabled", {
        /**
         * Whether the autocomplete is disabled. When disabled, the element will
         * act as a regular input and the user won't be able to open the panel.
         */
        get: /**
         * Whether the autocomplete is disabled. When disabled, the element will
         * act as a regular input and the user won't be able to open the panel.
         * @return {?}
         */
        function () { return this._autocompleteDisabled; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._autocompleteDisabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatAutocompleteTrigger.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (typeof window !== 'undefined') {
            window.removeEventListener('blur', this._windowBlurHandler);
        }
        this._viewportSubscription.unsubscribe();
        this._componentDestroyed = true;
        this._destroyPanel();
        this._closeKeyEventStream.complete();
    };
    Object.defineProperty(MatAutocompleteTrigger.prototype, "panelOpen", {
        /** Whether or not the autocomplete panel is open. */
        get: /**
         * Whether or not the autocomplete panel is open.
         * @return {?}
         */
        function () {
            return this._overlayAttached && this.autocomplete.showPanel;
        },
        enumerable: true,
        configurable: true
    });
    /** Opens the autocomplete suggestion panel. */
    /**
     * Opens the autocomplete suggestion panel.
     * @return {?}
     */
    MatAutocompleteTrigger.prototype.openPanel = /**
     * Opens the autocomplete suggestion panel.
     * @return {?}
     */
    function () {
        this._attachOverlay();
        this._floatLabel();
    };
    /** Closes the autocomplete suggestion panel. */
    /**
     * Closes the autocomplete suggestion panel.
     * @return {?}
     */
    MatAutocompleteTrigger.prototype.closePanel = /**
     * Closes the autocomplete suggestion panel.
     * @return {?}
     */
    function () {
        this._resetLabel();
        if (!this._overlayAttached) {
            return;
        }
        if (this.panelOpen) {
            // Only emit if the panel was visible.
            this.autocomplete.closed.emit();
        }
        this.autocomplete._isOpen = this._overlayAttached = false;
        if (this._overlayRef && this._overlayRef.hasAttached()) {
            this._overlayRef.detach();
            this._closingActionsSubscription.unsubscribe();
        }
        // Note that in some cases this can end up being called after the component is destroyed.
        // Add a check to ensure that we don't try to run change detection on a destroyed view.
        if (!this._componentDestroyed) {
            // We need to trigger change detection manually, because
            // `fromEvent` doesn't seem to do it at the proper time.
            // This ensures that the label is reset when the
            // user clicks outside.
            this._changeDetectorRef.detectChanges();
        }
    };
    /**
     * Updates the position of the autocomplete suggestion panel to ensure that it fits all options
     * within the viewport.
     */
    /**
     * Updates the position of the autocomplete suggestion panel to ensure that it fits all options
     * within the viewport.
     * @return {?}
     */
    MatAutocompleteTrigger.prototype.updatePosition = /**
     * Updates the position of the autocomplete suggestion panel to ensure that it fits all options
     * within the viewport.
     * @return {?}
     */
    function () {
        if (this._overlayAttached) {
            (/** @type {?} */ (this._overlayRef)).updatePosition();
        }
    };
    Object.defineProperty(MatAutocompleteTrigger.prototype, "panelClosingActions", {
        /**
         * A stream of actions that should close the autocomplete panel, including
         * when an option is selected, on blur, and when TAB is pressed.
         */
        get: /**
         * A stream of actions that should close the autocomplete panel, including
         * when an option is selected, on blur, and when TAB is pressed.
         * @return {?}
         */
        function () {
            var _this = this;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_14__["merge"])(this.optionSelections, this.autocomplete._keyManager.tabOut.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(function () { return _this._overlayAttached; })), this._closeKeyEventStream, this._getOutsideClickStream(), this._overlayRef ?
                this._overlayRef.detachments().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(function () { return _this._overlayAttached; })) :
                Object(rxjs__WEBPACK_IMPORTED_MODULE_14__["of"])()).pipe(
            // Normalize the output so we return a consistent type.
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function (event) { return event instanceof _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatOptionSelectionChange"] ? event : null; }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatAutocompleteTrigger.prototype, "activeOption", {
        /** The currently active option, coerced to MatOption type. */
        get: /**
         * The currently active option, coerced to MatOption type.
         * @return {?}
         */
        function () {
            if (this.autocomplete && this.autocomplete._keyManager) {
                return this.autocomplete._keyManager.activeItem;
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    /** Stream of clicks outside of the autocomplete panel. */
    /**
     * Stream of clicks outside of the autocomplete panel.
     * @private
     * @return {?}
     */
    MatAutocompleteTrigger.prototype._getOutsideClickStream = /**
     * Stream of clicks outside of the autocomplete panel.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this._document) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_14__["of"])(null);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_14__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_14__["fromEvent"])(this._document, 'click'), Object(rxjs__WEBPACK_IMPORTED_MODULE_14__["fromEvent"])(this._document, 'touchend'))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(function (event) {
            /** @type {?} */
            var clickTarget = (/** @type {?} */ (event.target));
            /** @type {?} */
            var formField = _this._formField ?
                _this._formField._elementRef.nativeElement : null;
            return _this._overlayAttached &&
                clickTarget !== _this._element.nativeElement &&
                (!formField || !formField.contains(clickTarget)) &&
                (!!_this._overlayRef && !_this._overlayRef.overlayElement.contains(clickTarget));
        }));
    };
    // Implemented as part of ControlValueAccessor.
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} value
     * @return {?}
     */
    MatAutocompleteTrigger.prototype.writeValue = 
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        Promise.resolve(null).then(function () { return _this._setTriggerValue(value); });
    };
    // Implemented as part of ControlValueAccessor.
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} fn
     * @return {?}
     */
    MatAutocompleteTrigger.prototype.registerOnChange = 
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onChange = fn;
    };
    // Implemented as part of ControlValueAccessor.
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} fn
     * @return {?}
     */
    MatAutocompleteTrigger.prototype.registerOnTouched = 
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onTouched = fn;
    };
    // Implemented as part of ControlValueAccessor.
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    MatAutocompleteTrigger.prototype.setDisabledState = 
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this._element.nativeElement.disabled = isDisabled;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MatAutocompleteTrigger.prototype._handleKeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var keyCode = event.keyCode;
        // Prevent the default action on all escape key presses. This is here primarily to bring IE
        // in line with other browsers. By default, pressing escape on IE will cause it to revert
        // the input value to the one that it had on focus, however it won't dispatch any events
        // which means that the model value will be out of sync with the view.
        if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["ESCAPE"]) {
            event.preventDefault();
        }
        if (this.activeOption && keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["ENTER"] && this.panelOpen) {
            this.activeOption._selectViaInteraction();
            this._resetActiveItem();
            event.preventDefault();
        }
        else if (this.autocomplete) {
            /** @type {?} */
            var prevActiveItem = this.autocomplete._keyManager.activeItem;
            /** @type {?} */
            var isArrowKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["UP_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["DOWN_ARROW"];
            if (this.panelOpen || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["TAB"]) {
                this.autocomplete._keyManager.onKeydown(event);
            }
            else if (isArrowKey && this._canOpen()) {
                this.openPanel();
            }
            if (isArrowKey || this.autocomplete._keyManager.activeItem !== prevActiveItem) {
                this._scrollToOption();
            }
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MatAutocompleteTrigger.prototype._handleInput = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var target = (/** @type {?} */ (event.target));
        /** @type {?} */
        var value = target.value;
        // Based on `NumberValueAccessor` from forms.
        if (target.type === 'number') {
            value = value == '' ? null : parseFloat(value);
        }
        // If the input has a placeholder, IE will fire the `input` event on page load,
        // focus and blur, in addition to when the user actually changed the value. To
        // filter out all of the extra events, we save the value on focus and between
        // `input` events, and we check whether it changed.
        // See: https://connect.microsoft.com/IE/feedback/details/885747/
        if (this._previousValue !== value) {
            this._previousValue = value;
            this._onChange(value);
            if (this._canOpen() && document.activeElement === event.target) {
                this.openPanel();
            }
        }
    };
    /**
     * @return {?}
     */
    MatAutocompleteTrigger.prototype._handleFocus = /**
     * @return {?}
     */
    function () {
        if (!this._canOpenOnNextFocus) {
            this._canOpenOnNextFocus = true;
        }
        else if (this._canOpen()) {
            this._previousValue = this._element.nativeElement.value;
            this._attachOverlay();
            this._floatLabel(true);
        }
    };
    /**
     * In "auto" mode, the label will animate down as soon as focus is lost.
     * This causes the value to jump when selecting an option with the mouse.
     * This method manually floats the label until the panel can be closed.
     * @param shouldAnimate Whether the label should be animated when it is floated.
     */
    /**
     * In "auto" mode, the label will animate down as soon as focus is lost.
     * This causes the value to jump when selecting an option with the mouse.
     * This method manually floats the label until the panel can be closed.
     * @private
     * @param {?=} shouldAnimate Whether the label should be animated when it is floated.
     * @return {?}
     */
    MatAutocompleteTrigger.prototype._floatLabel = /**
     * In "auto" mode, the label will animate down as soon as focus is lost.
     * This causes the value to jump when selecting an option with the mouse.
     * This method manually floats the label until the panel can be closed.
     * @private
     * @param {?=} shouldAnimate Whether the label should be animated when it is floated.
     * @return {?}
     */
    function (shouldAnimate) {
        if (shouldAnimate === void 0) { shouldAnimate = false; }
        if (this._formField && this._formField.floatLabel === 'auto') {
            if (shouldAnimate) {
                this._formField._animateAndLockLabel();
            }
            else {
                this._formField.floatLabel = 'always';
            }
            this._manuallyFloatingLabel = true;
        }
    };
    /** If the label has been manually elevated, return it to its normal state. */
    /**
     * If the label has been manually elevated, return it to its normal state.
     * @private
     * @return {?}
     */
    MatAutocompleteTrigger.prototype._resetLabel = /**
     * If the label has been manually elevated, return it to its normal state.
     * @private
     * @return {?}
     */
    function () {
        if (this._manuallyFloatingLabel) {
            this._formField.floatLabel = 'auto';
            this._manuallyFloatingLabel = false;
        }
    };
    /**
     * Given that we are not actually focusing active options, we must manually adjust scroll
     * to reveal options below the fold. First, we find the offset of the option from the top
     * of the panel. If that offset is below the fold, the new scrollTop will be the offset -
     * the panel height + the option height, so the active option will be just visible at the
     * bottom of the panel. If that offset is above the top of the visible panel, the new scrollTop
     * will become the offset. If that offset is visible within the panel already, the scrollTop is
     * not adjusted.
     */
    /**
     * Given that we are not actually focusing active options, we must manually adjust scroll
     * to reveal options below the fold. First, we find the offset of the option from the top
     * of the panel. If that offset is below the fold, the new scrollTop will be the offset -
     * the panel height + the option height, so the active option will be just visible at the
     * bottom of the panel. If that offset is above the top of the visible panel, the new scrollTop
     * will become the offset. If that offset is visible within the panel already, the scrollTop is
     * not adjusted.
     * @private
     * @return {?}
     */
    MatAutocompleteTrigger.prototype._scrollToOption = /**
     * Given that we are not actually focusing active options, we must manually adjust scroll
     * to reveal options below the fold. First, we find the offset of the option from the top
     * of the panel. If that offset is below the fold, the new scrollTop will be the offset -
     * the panel height + the option height, so the active option will be just visible at the
     * bottom of the panel. If that offset is above the top of the visible panel, the new scrollTop
     * will become the offset. If that offset is visible within the panel already, the scrollTop is
     * not adjusted.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var index = this.autocomplete._keyManager.activeItemIndex || 0;
        /** @type {?} */
        var labelCount = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["_countGroupLabelsBeforeOption"])(index, this.autocomplete.options, this.autocomplete.optionGroups);
        /** @type {?} */
        var newScrollPosition = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["_getOptionScrollPosition"])(index + labelCount, AUTOCOMPLETE_OPTION_HEIGHT, this.autocomplete._getScrollTop(), AUTOCOMPLETE_PANEL_HEIGHT);
        this.autocomplete._setScrollTop(newScrollPosition);
    };
    /**
     * This method listens to a stream of panel closing actions and resets the
     * stream every time the option list changes.
     */
    /**
     * This method listens to a stream of panel closing actions and resets the
     * stream every time the option list changes.
     * @private
     * @return {?}
     */
    MatAutocompleteTrigger.prototype._subscribeToClosingActions = /**
     * This method listens to a stream of panel closing actions and resets the
     * stream every time the option list changes.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var firstStable = this._zone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(1));
        /** @type {?} */
        var optionChanges = this.autocomplete.options.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["tap"])(function () { return _this._positionStrategy.reapplyLastPosition(); }), 
        // Defer emitting to the stream until the next tick, because changing
        // bindings in here will cause "changed after checked" errors.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["delay"])(0));
        // When the zone is stable initially, and when the option list changes...
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_14__["merge"])(firstStable, optionChanges)
            .pipe(
        // create a new stream of panelClosingActions, replacing any previous streams
        // that were created, and flatten it so our stream only emits closing events...
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["switchMap"])(function () {
            _this._resetActiveItem();
            _this.autocomplete._setVisibility();
            if (_this.panelOpen) {
                (/** @type {?} */ (_this._overlayRef)).updatePosition();
            }
            return _this.panelClosingActions;
        }), 
        // when the first closing event occurs...
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(1))
            // set the value, close the panel, and complete.
            .subscribe(function (event) { return _this._setValueAndClose(event); });
    };
    /** Destroys the autocomplete suggestion panel. */
    /**
     * Destroys the autocomplete suggestion panel.
     * @private
     * @return {?}
     */
    MatAutocompleteTrigger.prototype._destroyPanel = /**
     * Destroys the autocomplete suggestion panel.
     * @private
     * @return {?}
     */
    function () {
        if (this._overlayRef) {
            this.closePanel();
            this._overlayRef.dispose();
            this._overlayRef = null;
        }
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    MatAutocompleteTrigger.prototype._setTriggerValue = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var toDisplay = this.autocomplete && this.autocomplete.displayWith ?
            this.autocomplete.displayWith(value) :
            value;
        // Simply falling back to an empty string if the display value is falsy does not work properly.
        // The display value can also be the number zero and shouldn't fall back to an empty string.
        /** @type {?} */
        var inputValue = toDisplay != null ? toDisplay : '';
        // If it's used within a `MatFormField`, we should set it through the property so it can go
        // through change detection.
        if (this._formField) {
            this._formField._control.value = inputValue;
        }
        else {
            this._element.nativeElement.value = inputValue;
        }
        this._previousValue = inputValue;
    };
    /**
     * This method closes the panel, and if a value is specified, also sets the associated
     * control to that value. It will also mark the control as dirty if this interaction
     * stemmed from the user.
     */
    /**
     * This method closes the panel, and if a value is specified, also sets the associated
     * control to that value. It will also mark the control as dirty if this interaction
     * stemmed from the user.
     * @private
     * @param {?} event
     * @return {?}
     */
    MatAutocompleteTrigger.prototype._setValueAndClose = /**
     * This method closes the panel, and if a value is specified, also sets the associated
     * control to that value. It will also mark the control as dirty if this interaction
     * stemmed from the user.
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event && event.source) {
            this._clearPreviousSelectedOption(event.source);
            this._setTriggerValue(event.source.value);
            this._onChange(event.source.value);
            this._element.nativeElement.focus();
            this.autocomplete._emitSelectEvent(event.source);
        }
        this.closePanel();
    };
    /**
     * Clear any previous selected option and emit a selection change event for this option
     */
    /**
     * Clear any previous selected option and emit a selection change event for this option
     * @private
     * @param {?} skip
     * @return {?}
     */
    MatAutocompleteTrigger.prototype._clearPreviousSelectedOption = /**
     * Clear any previous selected option and emit a selection change event for this option
     * @private
     * @param {?} skip
     * @return {?}
     */
    function (skip) {
        this.autocomplete.options.forEach(function (option) {
            if (option != skip && option.selected) {
                option.deselect();
            }
        });
    };
    /**
     * @private
     * @return {?}
     */
    MatAutocompleteTrigger.prototype._attachOverlay = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.autocomplete) {
            throw getMatAutocompleteMissingPanelError();
        }
        /** @type {?} */
        var overlayRef = this._overlayRef;
        if (!overlayRef) {
            this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__["TemplatePortal"](this.autocomplete.template, this._viewContainerRef);
            overlayRef = this._overlay.create(this._getOverlayConfig());
            this._overlayRef = overlayRef;
            // Use the `keydownEvents` in order to take advantage of
            // the overlay event targeting provided by the CDK overlay.
            overlayRef.keydownEvents().subscribe(function (event) {
                // Close when pressing ESCAPE or ALT + UP_ARROW, based on the a11y guidelines.
                // See: https://www.w3.org/TR/wai-aria-practices-1.1/#textbox-keyboard-interaction
                if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["ESCAPE"] || (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["UP_ARROW"] && event.altKey)) {
                    _this._resetActiveItem();
                    _this._closeKeyEventStream.next();
                }
            });
            if (this._viewportRuler) {
                this._viewportSubscription = this._viewportRuler.change().subscribe(function () {
                    if (_this.panelOpen && overlayRef) {
                        overlayRef.updateSize({ width: _this._getPanelWidth() });
                    }
                });
            }
        }
        else {
            /** @type {?} */
            var position = (/** @type {?} */ (overlayRef.getConfig().positionStrategy));
            // Update the trigger, panel width and direction, in case anything has changed.
            position.setOrigin(this._getConnectedElement());
            overlayRef.updateSize({ width: this._getPanelWidth() });
        }
        if (overlayRef && !overlayRef.hasAttached()) {
            overlayRef.attach(this._portal);
            this._closingActionsSubscription = this._subscribeToClosingActions();
        }
        /** @type {?} */
        var wasOpen = this.panelOpen;
        this.autocomplete._setVisibility();
        this.autocomplete._isOpen = this._overlayAttached = true;
        // We need to do an extra `panelOpen` check in here, because the
        // autocomplete won't be shown if there are no options.
        if (this.panelOpen && wasOpen !== this.panelOpen) {
            this.autocomplete.opened.emit();
        }
    };
    /**
     * @private
     * @return {?}
     */
    MatAutocompleteTrigger.prototype._getOverlayConfig = /**
     * @private
     * @return {?}
     */
    function () {
        return new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["OverlayConfig"]({
            positionStrategy: this._getOverlayPosition(),
            scrollStrategy: this._scrollStrategy(),
            width: this._getPanelWidth(),
            direction: this._dir
        });
    };
    /**
     * @private
     * @return {?}
     */
    MatAutocompleteTrigger.prototype._getOverlayPosition = /**
     * @private
     * @return {?}
     */
    function () {
        this._positionStrategy = this._overlay.position()
            .flexibleConnectedTo(this._getConnectedElement())
            .withFlexibleDimensions(false)
            .withPush(false)
            .withPositions([
            {
                originX: 'start',
                originY: 'bottom',
                overlayX: 'start',
                overlayY: 'top'
            },
            {
                originX: 'start',
                originY: 'top',
                overlayX: 'start',
                overlayY: 'bottom',
                // The overlay edge connected to the trigger should have squared corners, while
                // the opposite end has rounded corners. We apply a CSS class to swap the
                // border-radius based on the overlay position.
                panelClass: 'mat-autocomplete-panel-above'
            }
        ]);
        return this._positionStrategy;
    };
    /**
     * @private
     * @return {?}
     */
    MatAutocompleteTrigger.prototype._getConnectedElement = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.connectedTo) {
            return this.connectedTo.elementRef;
        }
        return this._formField ? this._formField.getConnectedOverlayOrigin() : this._element;
    };
    /**
     * @private
     * @return {?}
     */
    MatAutocompleteTrigger.prototype._getPanelWidth = /**
     * @private
     * @return {?}
     */
    function () {
        return this.autocomplete.panelWidth || this._getHostWidth();
    };
    /** Returns the width of the input element, so the panel width can match it. */
    /**
     * Returns the width of the input element, so the panel width can match it.
     * @private
     * @return {?}
     */
    MatAutocompleteTrigger.prototype._getHostWidth = /**
     * Returns the width of the input element, so the panel width can match it.
     * @private
     * @return {?}
     */
    function () {
        return this._getConnectedElement().nativeElement.getBoundingClientRect().width;
    };
    /**
     * Resets the active item to -1 so arrow events will activate the
     * correct options, or to 0 if the consumer opted into it.
     */
    /**
     * Resets the active item to -1 so arrow events will activate the
     * correct options, or to 0 if the consumer opted into it.
     * @private
     * @return {?}
     */
    MatAutocompleteTrigger.prototype._resetActiveItem = /**
     * Resets the active item to -1 so arrow events will activate the
     * correct options, or to 0 if the consumer opted into it.
     * @private
     * @return {?}
     */
    function () {
        this.autocomplete._keyManager.setActiveItem(this.autocomplete.autoActiveFirstOption ? 0 : -1);
    };
    /** Determines whether the panel can be opened. */
    /**
     * Determines whether the panel can be opened.
     * @private
     * @return {?}
     */
    MatAutocompleteTrigger.prototype._canOpen = /**
     * Determines whether the panel can be opened.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var element = this._element.nativeElement;
        return !element.readOnly && !element.disabled && !this._autocompleteDisabled;
    };
    MatAutocompleteTrigger.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"], args: [{
                    selector: "input[matAutocomplete], textarea[matAutocomplete]",
                    host: {
                        '[attr.autocomplete]': 'autocompleteAttribute',
                        '[attr.role]': 'autocompleteDisabled ? null : "combobox"',
                        '[attr.aria-autocomplete]': 'autocompleteDisabled ? null : "list"',
                        '[attr.aria-activedescendant]': '(panelOpen && activeOption) ? activeOption.id : null',
                        '[attr.aria-expanded]': 'autocompleteDisabled ? null : panelOpen.toString()',
                        '[attr.aria-owns]': '(autocompleteDisabled || !panelOpen) ? null : autocomplete?.id',
                        // Note: we use `focusin`, as opposed to `focus`, in order to open the panel
                        // a little earlier. This avoids issues where IE delays the focusing of the input.
                        '(focusin)': '_handleFocus()',
                        '(blur)': '_onTouched()',
                        '(input)': '_handleInput($event)',
                        '(keydown)': '_handleKeydown($event)',
                    },
                    exportAs: 'matAutocompleteTrigger',
                    providers: [MAT_AUTOCOMPLETE_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    MatAutocompleteTrigger.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
        { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["Overlay"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [MAT_AUTOCOMPLETE_SCROLL_STRATEGY,] }] },
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] },
        { type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Host"] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"],] }] },
        { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_11__["ViewportRuler"] }
    ]; };
    MatAutocompleteTrigger.propDecorators = {
        autocomplete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['matAutocomplete',] }],
        connectedTo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['matAutocompleteConnectedTo',] }],
        autocompleteAttribute: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['autocomplete',] }],
        autocompleteDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['matAutocompleteDisabled',] }]
    };
    return MatAutocompleteTrigger;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MatAutocompleteModule = /** @class */ (function () {
    function MatAutocompleteModule() {
    }
    MatAutocompleteModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
                    imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatOptionModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["OverlayModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"]],
                    exports: [
                        MatAutocomplete,
                        _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatOptionModule"],
                        MatAutocompleteTrigger,
                        MatAutocompleteOrigin,
                        _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"]
                    ],
                    declarations: [MatAutocomplete, MatAutocompleteTrigger, MatAutocompleteOrigin],
                    providers: [MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER],
                },] },
    ];
    return MatAutocompleteModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=autocomplete.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/material/esm5/icon.es5.js":
/*!*********************************************************!*\
  !*** ./node_modules/@angular/material/esm5/icon.es5.js ***!
  \*********************************************************/
/*! exports provided: MatIconModule, MAT_ICON_LOCATION_FACTORY, MatIconBase, _MatIconMixinBase, MAT_ICON_LOCATION, MatIcon, getMatIconNameNotFoundError, getMatIconNoHttpProviderError, getMatIconFailedToSanitizeUrlError, getMatIconFailedToSanitizeLiteralError, ICON_REGISTRY_PROVIDER_FACTORY, MatIconRegistry, ICON_REGISTRY_PROVIDER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatIconModule", function() { return MatIconModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_ICON_LOCATION_FACTORY", function() { return MAT_ICON_LOCATION_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatIconBase", function() { return MatIconBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatIconMixinBase", function() { return _MatIconMixinBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_ICON_LOCATION", function() { return MAT_ICON_LOCATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatIcon", function() { return MatIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatIconNameNotFoundError", function() { return getMatIconNameNotFoundError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatIconNoHttpProviderError", function() { return getMatIconNoHttpProviderError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatIconFailedToSanitizeUrlError", function() { return getMatIconFailedToSanitizeUrlError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatIconFailedToSanitizeLiteralError", function() { return getMatIconFailedToSanitizeLiteralError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICON_REGISTRY_PROVIDER_FACTORY", function() { return ICON_REGISTRY_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatIconRegistry", function() { return MatIconRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICON_REGISTRY_PROVIDER", function() { return ICON_REGISTRY_PROVIDER; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */










/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Returns an exception to be thrown in the case when attempting to
 * load an icon with a name that cannot be found.
 * \@docs-private
 * @param {?} iconName
 * @return {?}
 */
function getMatIconNameNotFoundError(iconName) {
    return Error("Unable to find icon with the name \"" + iconName + "\"");
}
/**
 * Returns an exception to be thrown when the consumer attempts to use
 * `<mat-icon>` without including \@angular/http.
 * \@docs-private
 * @return {?}
 */
function getMatIconNoHttpProviderError() {
    return Error('Could not find HttpClient provider for use with Angular Material icons. ' +
        'Please include the HttpClientModule from @angular/common/http in your ' +
        'app imports.');
}
/**
 * Returns an exception to be thrown when a URL couldn't be sanitized.
 * \@docs-private
 * @param {?} url URL that was attempted to be sanitized.
 * @return {?}
 */
function getMatIconFailedToSanitizeUrlError(url) {
    return Error("The URL provided to MatIconRegistry was not trusted as a resource URL " +
        ("via Angular's DomSanitizer. Attempted URL was \"" + url + "\"."));
}
/**
 * Returns an exception to be thrown when a HTML string couldn't be sanitized.
 * \@docs-private
 * @param {?} literal HTML that was attempted to be sanitized.
 * @return {?}
 */
function getMatIconFailedToSanitizeLiteralError(literal) {
    return Error("The literal provided to MatIconRegistry was not trusted as safe HTML by " +
        ("Angular's DomSanitizer. Attempted literal was \"" + literal + "\"."));
}
/**
 * Configuration for an icon, including the URL and possibly the cached SVG element.
 * \@docs-private
 */
var /**
 * Configuration for an icon, including the URL and possibly the cached SVG element.
 * \@docs-private
 */
SvgIconConfig = /** @class */ (function () {
    function SvgIconConfig(data) {
        // Note that we can't use `instanceof SVGElement` here,
        // because it'll break during server-side rendering.
        if (!!((/** @type {?} */ (data))).nodeName) {
            this.svgElement = (/** @type {?} */ (data));
        }
        else {
            this.url = (/** @type {?} */ (data));
        }
    }
    return SvgIconConfig;
}());
/**
 * Service to register and display icons used by the `<mat-icon>` component.
 * - Registers icon URLs by namespace and name.
 * - Registers icon set URLs by namespace.
 * - Registers aliases for CSS classes, for use with icon fonts.
 * - Loads icons from URLs and extracts individual icons from icon sets.
 */
var MatIconRegistry = /** @class */ (function () {
    function MatIconRegistry(_httpClient, _sanitizer, document) {
        this._httpClient = _httpClient;
        this._sanitizer = _sanitizer;
        /**
         * URLs and cached SVG elements for individual icons. Keys are of the format "[namespace]:[icon]".
         */
        this._svgIconConfigs = new Map();
        /**
         * SvgIconConfig objects and cached SVG elements for icon sets, keyed by namespace.
         * Multiple icon sets can be registered under the same namespace.
         */
        this._iconSetConfigs = new Map();
        /**
         * Cache for icons loaded by direct URLs.
         */
        this._cachedIconsByUrl = new Map();
        /**
         * In-progress icon fetches. Used to coalesce multiple requests to the same URL.
         */
        this._inProgressUrlFetches = new Map();
        /**
         * Map from font identifiers to their CSS class names. Used for icon fonts.
         */
        this._fontCssClassesByAlias = new Map();
        /**
         * The CSS class to apply when an `<mat-icon>` component has no icon name, url, or font specified.
         * The default 'material-icons' value assumes that the material icon font has been loaded as
         * described at http://google.github.io/material-design-icons/#icon-font-for-the-web
         */
        this._defaultFontSetClass = 'material-icons';
        this._document = document;
    }
    /**
     * Registers an icon by URL in the default namespace.
     * @param iconName Name under which the icon should be registered.
     * @param url
     */
    /**
     * Registers an icon by URL in the default namespace.
     * @template THIS
     * @this {THIS}
     * @param {?} iconName Name under which the icon should be registered.
     * @param {?} url
     * @return {THIS}
     */
    MatIconRegistry.prototype.addSvgIcon = /**
     * Registers an icon by URL in the default namespace.
     * @template THIS
     * @this {THIS}
     * @param {?} iconName Name under which the icon should be registered.
     * @param {?} url
     * @return {THIS}
     */
    function (iconName, url) {
        return (/** @type {?} */ (this)).addSvgIconInNamespace('', iconName, url);
    };
    /**
     * Registers an icon using an HTML string in the default namespace.
     * @param iconName Name under which the icon should be registered.
     * @param literal SVG source of the icon.
     */
    /**
     * Registers an icon using an HTML string in the default namespace.
     * @template THIS
     * @this {THIS}
     * @param {?} iconName Name under which the icon should be registered.
     * @param {?} literal SVG source of the icon.
     * @return {THIS}
     */
    MatIconRegistry.prototype.addSvgIconLiteral = /**
     * Registers an icon using an HTML string in the default namespace.
     * @template THIS
     * @this {THIS}
     * @param {?} iconName Name under which the icon should be registered.
     * @param {?} literal SVG source of the icon.
     * @return {THIS}
     */
    function (iconName, literal) {
        return (/** @type {?} */ (this)).addSvgIconLiteralInNamespace('', iconName, literal);
    };
    /**
     * Registers an icon by URL in the specified namespace.
     * @param namespace Namespace in which the icon should be registered.
     * @param iconName Name under which the icon should be registered.
     * @param url
     */
    /**
     * Registers an icon by URL in the specified namespace.
     * @template THIS
     * @this {THIS}
     * @param {?} namespace Namespace in which the icon should be registered.
     * @param {?} iconName Name under which the icon should be registered.
     * @param {?} url
     * @return {THIS}
     */
    MatIconRegistry.prototype.addSvgIconInNamespace = /**
     * Registers an icon by URL in the specified namespace.
     * @template THIS
     * @this {THIS}
     * @param {?} namespace Namespace in which the icon should be registered.
     * @param {?} iconName Name under which the icon should be registered.
     * @param {?} url
     * @return {THIS}
     */
    function (namespace, iconName, url) {
        return (/** @type {?} */ (this))._addSvgIconConfig(namespace, iconName, new SvgIconConfig(url));
    };
    /**
     * Registers an icon using an HTML string in the specified namespace.
     * @param namespace Namespace in which the icon should be registered.
     * @param iconName Name under which the icon should be registered.
     * @param literal SVG source of the icon.
     */
    /**
     * Registers an icon using an HTML string in the specified namespace.
     * @template THIS
     * @this {THIS}
     * @param {?} namespace Namespace in which the icon should be registered.
     * @param {?} iconName Name under which the icon should be registered.
     * @param {?} literal SVG source of the icon.
     * @return {THIS}
     */
    MatIconRegistry.prototype.addSvgIconLiteralInNamespace = /**
     * Registers an icon using an HTML string in the specified namespace.
     * @template THIS
     * @this {THIS}
     * @param {?} namespace Namespace in which the icon should be registered.
     * @param {?} iconName Name under which the icon should be registered.
     * @param {?} literal SVG source of the icon.
     * @return {THIS}
     */
    function (namespace, iconName, literal) {
        /** @type {?} */
        var sanitizedLiteral = (/** @type {?} */ (this))._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_2__["SecurityContext"].HTML, literal);
        if (!sanitizedLiteral) {
            throw getMatIconFailedToSanitizeLiteralError(literal);
        }
        /** @type {?} */
        var svgElement = (/** @type {?} */ (this))._createSvgElementForSingleIcon(sanitizedLiteral);
        return (/** @type {?} */ (this))._addSvgIconConfig(namespace, iconName, new SvgIconConfig(svgElement));
    };
    /**
     * Registers an icon set by URL in the default namespace.
     * @param url
     */
    /**
     * Registers an icon set by URL in the default namespace.
     * @template THIS
     * @this {THIS}
     * @param {?} url
     * @return {THIS}
     */
    MatIconRegistry.prototype.addSvgIconSet = /**
     * Registers an icon set by URL in the default namespace.
     * @template THIS
     * @this {THIS}
     * @param {?} url
     * @return {THIS}
     */
    function (url) {
        return (/** @type {?} */ (this)).addSvgIconSetInNamespace('', url);
    };
    /**
     * Registers an icon set using an HTML string in the default namespace.
     * @param literal SVG source of the icon set.
     */
    /**
     * Registers an icon set using an HTML string in the default namespace.
     * @template THIS
     * @this {THIS}
     * @param {?} literal SVG source of the icon set.
     * @return {THIS}
     */
    MatIconRegistry.prototype.addSvgIconSetLiteral = /**
     * Registers an icon set using an HTML string in the default namespace.
     * @template THIS
     * @this {THIS}
     * @param {?} literal SVG source of the icon set.
     * @return {THIS}
     */
    function (literal) {
        return (/** @type {?} */ (this)).addSvgIconSetLiteralInNamespace('', literal);
    };
    /**
     * Registers an icon set by URL in the specified namespace.
     * @param namespace Namespace in which to register the icon set.
     * @param url
     */
    /**
     * Registers an icon set by URL in the specified namespace.
     * @template THIS
     * @this {THIS}
     * @param {?} namespace Namespace in which to register the icon set.
     * @param {?} url
     * @return {THIS}
     */
    MatIconRegistry.prototype.addSvgIconSetInNamespace = /**
     * Registers an icon set by URL in the specified namespace.
     * @template THIS
     * @this {THIS}
     * @param {?} namespace Namespace in which to register the icon set.
     * @param {?} url
     * @return {THIS}
     */
    function (namespace, url) {
        return (/** @type {?} */ (this))._addSvgIconSetConfig(namespace, new SvgIconConfig(url));
    };
    /**
     * Registers an icon set using an HTML string in the specified namespace.
     * @param namespace Namespace in which to register the icon set.
     * @param literal SVG source of the icon set.
     */
    /**
     * Registers an icon set using an HTML string in the specified namespace.
     * @template THIS
     * @this {THIS}
     * @param {?} namespace Namespace in which to register the icon set.
     * @param {?} literal SVG source of the icon set.
     * @return {THIS}
     */
    MatIconRegistry.prototype.addSvgIconSetLiteralInNamespace = /**
     * Registers an icon set using an HTML string in the specified namespace.
     * @template THIS
     * @this {THIS}
     * @param {?} namespace Namespace in which to register the icon set.
     * @param {?} literal SVG source of the icon set.
     * @return {THIS}
     */
    function (namespace, literal) {
        /** @type {?} */
        var sanitizedLiteral = (/** @type {?} */ (this))._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_2__["SecurityContext"].HTML, literal);
        if (!sanitizedLiteral) {
            throw getMatIconFailedToSanitizeLiteralError(literal);
        }
        /** @type {?} */
        var svgElement = (/** @type {?} */ (this))._svgElementFromString(sanitizedLiteral);
        return (/** @type {?} */ (this))._addSvgIconSetConfig(namespace, new SvgIconConfig(svgElement));
    };
    /**
     * Defines an alias for a CSS class name to be used for icon fonts. Creating an matIcon
     * component with the alias as the fontSet input will cause the class name to be applied
     * to the `<mat-icon>` element.
     *
     * @param alias Alias for the font.
     * @param className Class name override to be used instead of the alias.
     */
    /**
     * Defines an alias for a CSS class name to be used for icon fonts. Creating an matIcon
     * component with the alias as the fontSet input will cause the class name to be applied
     * to the `<mat-icon>` element.
     *
     * @template THIS
     * @this {THIS}
     * @param {?} alias Alias for the font.
     * @param {?=} className Class name override to be used instead of the alias.
     * @return {THIS}
     */
    MatIconRegistry.prototype.registerFontClassAlias = /**
     * Defines an alias for a CSS class name to be used for icon fonts. Creating an matIcon
     * component with the alias as the fontSet input will cause the class name to be applied
     * to the `<mat-icon>` element.
     *
     * @template THIS
     * @this {THIS}
     * @param {?} alias Alias for the font.
     * @param {?=} className Class name override to be used instead of the alias.
     * @return {THIS}
     */
    function (alias, className) {
        if (className === void 0) { className = alias; }
        (/** @type {?} */ (this))._fontCssClassesByAlias.set(alias, className);
        return (/** @type {?} */ (this));
    };
    /**
     * Returns the CSS class name associated with the alias by a previous call to
     * registerFontClassAlias. If no CSS class has been associated, returns the alias unmodified.
     */
    /**
     * Returns the CSS class name associated with the alias by a previous call to
     * registerFontClassAlias. If no CSS class has been associated, returns the alias unmodified.
     * @param {?} alias
     * @return {?}
     */
    MatIconRegistry.prototype.classNameForFontAlias = /**
     * Returns the CSS class name associated with the alias by a previous call to
     * registerFontClassAlias. If no CSS class has been associated, returns the alias unmodified.
     * @param {?} alias
     * @return {?}
     */
    function (alias) {
        return this._fontCssClassesByAlias.get(alias) || alias;
    };
    /**
     * Sets the CSS class name to be used for icon fonts when an `<mat-icon>` component does not
     * have a fontSet input value, and is not loading an icon by name or URL.
     *
     * @param className
     */
    /**
     * Sets the CSS class name to be used for icon fonts when an `<mat-icon>` component does not
     * have a fontSet input value, and is not loading an icon by name or URL.
     *
     * @template THIS
     * @this {THIS}
     * @param {?} className
     * @return {THIS}
     */
    MatIconRegistry.prototype.setDefaultFontSetClass = /**
     * Sets the CSS class name to be used for icon fonts when an `<mat-icon>` component does not
     * have a fontSet input value, and is not loading an icon by name or URL.
     *
     * @template THIS
     * @this {THIS}
     * @param {?} className
     * @return {THIS}
     */
    function (className) {
        (/** @type {?} */ (this))._defaultFontSetClass = className;
        return (/** @type {?} */ (this));
    };
    /**
     * Returns the CSS class name to be used for icon fonts when an `<mat-icon>` component does not
     * have a fontSet input value, and is not loading an icon by name or URL.
     */
    /**
     * Returns the CSS class name to be used for icon fonts when an `<mat-icon>` component does not
     * have a fontSet input value, and is not loading an icon by name or URL.
     * @return {?}
     */
    MatIconRegistry.prototype.getDefaultFontSetClass = /**
     * Returns the CSS class name to be used for icon fonts when an `<mat-icon>` component does not
     * have a fontSet input value, and is not loading an icon by name or URL.
     * @return {?}
     */
    function () {
        return this._defaultFontSetClass;
    };
    /**
     * Returns an Observable that produces the icon (as an `<svg>` DOM element) from the given URL.
     * The response from the URL may be cached so this will not always cause an HTTP request, but
     * the produced element will always be a new copy of the originally fetched icon. (That is,
     * it will not contain any modifications made to elements previously returned).
     *
     * @param safeUrl URL from which to fetch the SVG icon.
     */
    /**
     * Returns an Observable that produces the icon (as an `<svg>` DOM element) from the given URL.
     * The response from the URL may be cached so this will not always cause an HTTP request, but
     * the produced element will always be a new copy of the originally fetched icon. (That is,
     * it will not contain any modifications made to elements previously returned).
     *
     * @param {?} safeUrl URL from which to fetch the SVG icon.
     * @return {?}
     */
    MatIconRegistry.prototype.getSvgIconFromUrl = /**
     * Returns an Observable that produces the icon (as an `<svg>` DOM element) from the given URL.
     * The response from the URL may be cached so this will not always cause an HTTP request, but
     * the produced element will always be a new copy of the originally fetched icon. (That is,
     * it will not contain any modifications made to elements previously returned).
     *
     * @param {?} safeUrl URL from which to fetch the SVG icon.
     * @return {?}
     */
    function (safeUrl) {
        var _this = this;
        /** @type {?} */
        var url = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_2__["SecurityContext"].RESOURCE_URL, safeUrl);
        if (!url) {
            throw getMatIconFailedToSanitizeUrlError(safeUrl);
        }
        /** @type {?} */
        var cachedIcon = this._cachedIconsByUrl.get(url);
        if (cachedIcon) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(cloneSvg(cachedIcon));
        }
        return this._loadSvgIconFromConfig(new SvgIconConfig(safeUrl)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (svg) { return _this._cachedIconsByUrl.set((/** @type {?} */ (url)), svg); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (svg) { return cloneSvg(svg); }));
    };
    /**
     * Returns an Observable that produces the icon (as an `<svg>` DOM element) with the given name
     * and namespace. The icon must have been previously registered with addIcon or addIconSet;
     * if not, the Observable will throw an error.
     *
     * @param name Name of the icon to be retrieved.
     * @param namespace Namespace in which to look for the icon.
     */
    /**
     * Returns an Observable that produces the icon (as an `<svg>` DOM element) with the given name
     * and namespace. The icon must have been previously registered with addIcon or addIconSet;
     * if not, the Observable will throw an error.
     *
     * @param {?} name Name of the icon to be retrieved.
     * @param {?=} namespace Namespace in which to look for the icon.
     * @return {?}
     */
    MatIconRegistry.prototype.getNamedSvgIcon = /**
     * Returns an Observable that produces the icon (as an `<svg>` DOM element) with the given name
     * and namespace. The icon must have been previously registered with addIcon or addIconSet;
     * if not, the Observable will throw an error.
     *
     * @param {?} name Name of the icon to be retrieved.
     * @param {?=} namespace Namespace in which to look for the icon.
     * @return {?}
     */
    function (name, namespace) {
        if (namespace === void 0) { namespace = ''; }
        // Return (copy of) cached icon if possible.
        /** @type {?} */
        var key = iconKey(namespace, name);
        /** @type {?} */
        var config = this._svgIconConfigs.get(key);
        if (config) {
            return this._getSvgFromConfig(config);
        }
        // See if we have any icon sets registered for the namespace.
        /** @type {?} */
        var iconSetConfigs = this._iconSetConfigs.get(namespace);
        if (iconSetConfigs) {
            return this._getSvgFromIconSetConfigs(name, iconSetConfigs);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(getMatIconNameNotFoundError(key));
    };
    /**
     * @return {?}
     */
    MatIconRegistry.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._svgIconConfigs.clear();
        this._iconSetConfigs.clear();
        this._cachedIconsByUrl.clear();
    };
    /**
     * Returns the cached icon for a SvgIconConfig if available, or fetches it from its URL if not.
     */
    /**
     * Returns the cached icon for a SvgIconConfig if available, or fetches it from its URL if not.
     * @private
     * @param {?} config
     * @return {?}
     */
    MatIconRegistry.prototype._getSvgFromConfig = /**
     * Returns the cached icon for a SvgIconConfig if available, or fetches it from its URL if not.
     * @private
     * @param {?} config
     * @return {?}
     */
    function (config) {
        if (config.svgElement) {
            // We already have the SVG element for this icon, return a copy.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(cloneSvg(config.svgElement));
        }
        else {
            // Fetch the icon from the config's URL, cache it, and return a copy.
            return this._loadSvgIconFromConfig(config).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (svg) { return config.svgElement = svg; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (svg) { return cloneSvg(svg); }));
        }
    };
    /**
     * Attempts to find an icon with the specified name in any of the SVG icon sets.
     * First searches the available cached icons for a nested element with a matching name, and
     * if found copies the element to a new `<svg>` element. If not found, fetches all icon sets
     * that have not been cached, and searches again after all fetches are completed.
     * The returned Observable produces the SVG element if possible, and throws
     * an error if no icon with the specified name can be found.
     */
    /**
     * Attempts to find an icon with the specified name in any of the SVG icon sets.
     * First searches the available cached icons for a nested element with a matching name, and
     * if found copies the element to a new `<svg>` element. If not found, fetches all icon sets
     * that have not been cached, and searches again after all fetches are completed.
     * The returned Observable produces the SVG element if possible, and throws
     * an error if no icon with the specified name can be found.
     * @private
     * @param {?} name
     * @param {?} iconSetConfigs
     * @return {?}
     */
    MatIconRegistry.prototype._getSvgFromIconSetConfigs = /**
     * Attempts to find an icon with the specified name in any of the SVG icon sets.
     * First searches the available cached icons for a nested element with a matching name, and
     * if found copies the element to a new `<svg>` element. If not found, fetches all icon sets
     * that have not been cached, and searches again after all fetches are completed.
     * The returned Observable produces the SVG element if possible, and throws
     * an error if no icon with the specified name can be found.
     * @private
     * @param {?} name
     * @param {?} iconSetConfigs
     * @return {?}
     */
    function (name, iconSetConfigs) {
        var _this = this;
        // For all the icon set SVG elements we've fetched, see if any contain an icon with the
        // requested name.
        /** @type {?} */
        var namedIcon = this._extractIconWithNameFromAnySet(name, iconSetConfigs);
        if (namedIcon) {
            // We could cache namedIcon in _svgIconConfigs, but since we have to make a copy every
            // time anyway, there's probably not much advantage compared to just always extracting
            // it from the icon set.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(namedIcon);
        }
        // Not found in any cached icon sets. If there are icon sets with URLs that we haven't
        // fetched, fetch them now and look for iconName in the results.
        /** @type {?} */
        var iconSetFetchRequests = iconSetConfigs
            .filter(function (iconSetConfig) { return !iconSetConfig.svgElement; })
            .map(function (iconSetConfig) {
            return _this._loadSvgIconSetFromConfig(iconSetConfig).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) {
                /** @type {?} */
                var url = _this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_2__["SecurityContext"].RESOURCE_URL, iconSetConfig.url);
                // Swallow errors fetching individual URLs so the
                // combined Observable won't necessarily fail.
                console.error("Loading icon set URL: " + url + " failed: " + err.message);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
            }));
        });
        // Fetch all the icon set URLs. When the requests complete, every IconSet should have a
        // cached SVG element (unless the request failed), and we can check again for the icon.
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])(iconSetFetchRequests).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function () {
            /** @type {?} */
            var foundIcon = _this._extractIconWithNameFromAnySet(name, iconSetConfigs);
            if (!foundIcon) {
                throw getMatIconNameNotFoundError(name);
            }
            return foundIcon;
        }));
    };
    /**
     * Searches the cached SVG elements for the given icon sets for a nested icon element whose "id"
     * tag matches the specified name. If found, copies the nested element to a new SVG element and
     * returns it. Returns null if no matching element is found.
     */
    /**
     * Searches the cached SVG elements for the given icon sets for a nested icon element whose "id"
     * tag matches the specified name. If found, copies the nested element to a new SVG element and
     * returns it. Returns null if no matching element is found.
     * @private
     * @param {?} iconName
     * @param {?} iconSetConfigs
     * @return {?}
     */
    MatIconRegistry.prototype._extractIconWithNameFromAnySet = /**
     * Searches the cached SVG elements for the given icon sets for a nested icon element whose "id"
     * tag matches the specified name. If found, copies the nested element to a new SVG element and
     * returns it. Returns null if no matching element is found.
     * @private
     * @param {?} iconName
     * @param {?} iconSetConfigs
     * @return {?}
     */
    function (iconName, iconSetConfigs) {
        // Iterate backwards, so icon sets added later have precedence.
        for (var i = iconSetConfigs.length - 1; i >= 0; i--) {
            /** @type {?} */
            var config = iconSetConfigs[i];
            if (config.svgElement) {
                /** @type {?} */
                var foundIcon = this._extractSvgIconFromSet(config.svgElement, iconName);
                if (foundIcon) {
                    return foundIcon;
                }
            }
        }
        return null;
    };
    /**
     * Loads the content of the icon URL specified in the SvgIconConfig and creates an SVG element
     * from it.
     */
    /**
     * Loads the content of the icon URL specified in the SvgIconConfig and creates an SVG element
     * from it.
     * @private
     * @param {?} config
     * @return {?}
     */
    MatIconRegistry.prototype._loadSvgIconFromConfig = /**
     * Loads the content of the icon URL specified in the SvgIconConfig and creates an SVG element
     * from it.
     * @private
     * @param {?} config
     * @return {?}
     */
    function (config) {
        var _this = this;
        return this._fetchUrl(config.url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (svgText) { return _this._createSvgElementForSingleIcon(svgText); }));
    };
    /**
     * Loads the content of the icon set URL specified in the SvgIconConfig and creates an SVG element
     * from it.
     */
    /**
     * Loads the content of the icon set URL specified in the SvgIconConfig and creates an SVG element
     * from it.
     * @private
     * @param {?} config
     * @return {?}
     */
    MatIconRegistry.prototype._loadSvgIconSetFromConfig = /**
     * Loads the content of the icon set URL specified in the SvgIconConfig and creates an SVG element
     * from it.
     * @private
     * @param {?} config
     * @return {?}
     */
    function (config) {
        var _this = this;
        // If the SVG for this icon set has already been parsed, do nothing.
        if (config.svgElement) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(config.svgElement);
        }
        return this._fetchUrl(config.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (svgText) {
            // It is possible that the icon set was parsed and cached by an earlier request, so parsing
            // only needs to occur if the cache is yet unset.
            if (!config.svgElement) {
                config.svgElement = _this._svgElementFromString(svgText);
            }
            return config.svgElement;
        }));
    };
    /**
     * Creates a DOM element from the given SVG string, and adds default attributes.
     */
    /**
     * Creates a DOM element from the given SVG string, and adds default attributes.
     * @private
     * @param {?} responseText
     * @return {?}
     */
    MatIconRegistry.prototype._createSvgElementForSingleIcon = /**
     * Creates a DOM element from the given SVG string, and adds default attributes.
     * @private
     * @param {?} responseText
     * @return {?}
     */
    function (responseText) {
        /** @type {?} */
        var svg = this._svgElementFromString(responseText);
        this._setSvgAttributes(svg);
        return svg;
    };
    /**
     * Searches the cached element of the given SvgIconConfig for a nested icon element whose "id"
     * tag matches the specified name. If found, copies the nested element to a new SVG element and
     * returns it. Returns null if no matching element is found.
     */
    /**
     * Searches the cached element of the given SvgIconConfig for a nested icon element whose "id"
     * tag matches the specified name. If found, copies the nested element to a new SVG element and
     * returns it. Returns null if no matching element is found.
     * @private
     * @param {?} iconSet
     * @param {?} iconName
     * @return {?}
     */
    MatIconRegistry.prototype._extractSvgIconFromSet = /**
     * Searches the cached element of the given SvgIconConfig for a nested icon element whose "id"
     * tag matches the specified name. If found, copies the nested element to a new SVG element and
     * returns it. Returns null if no matching element is found.
     * @private
     * @param {?} iconSet
     * @param {?} iconName
     * @return {?}
     */
    function (iconSet, iconName) {
        /** @type {?} */
        var iconSource = iconSet.querySelector('#' + iconName);
        if (!iconSource) {
            return null;
        }
        // Clone the element and remove the ID to prevent multiple elements from being added
        // to the page with the same ID.
        /** @type {?} */
        var iconElement = (/** @type {?} */ (iconSource.cloneNode(true)));
        iconElement.removeAttribute('id');
        // If the icon node is itself an <svg> node, clone and return it directly. If not, set it as
        // the content of a new <svg> node.
        if (iconElement.nodeName.toLowerCase() === 'svg') {
            return this._setSvgAttributes((/** @type {?} */ (iconElement)));
        }
        // If the node is a <symbol>, it won't be rendered so we have to convert it into <svg>. Note
        // that the same could be achieved by referring to it via <use href="#id">, however the <use>
        // tag is problematic on Firefox, because it needs to include the current page path.
        if (iconElement.nodeName.toLowerCase() === 'symbol') {
            return this._setSvgAttributes(this._toSvgElement(iconElement));
        }
        // createElement('SVG') doesn't work as expected; the DOM ends up with
        // the correct nodes, but the SVG content doesn't render. Instead we
        // have to create an empty SVG node using innerHTML and append its content.
        // Elements created using DOMParser.parseFromString have the same problem.
        // http://stackoverflow.com/questions/23003278/svg-innerhtml-in-firefox-can-not-display
        /** @type {?} */
        var svg = this._svgElementFromString('<svg></svg>');
        // Clone the node so we don't remove it from the parent icon set element.
        svg.appendChild(iconElement);
        return this._setSvgAttributes(svg);
    };
    /**
     * Creates a DOM element from the given SVG string.
     */
    /**
     * Creates a DOM element from the given SVG string.
     * @private
     * @param {?} str
     * @return {?}
     */
    MatIconRegistry.prototype._svgElementFromString = /**
     * Creates a DOM element from the given SVG string.
     * @private
     * @param {?} str
     * @return {?}
     */
    function (str) {
        /** @type {?} */
        var div = this._document.createElement('DIV');
        div.innerHTML = str;
        /** @type {?} */
        var svg = (/** @type {?} */ (div.querySelector('svg')));
        if (!svg) {
            throw Error('<svg> tag not found');
        }
        return svg;
    };
    /**
     * Converts an element into an SVG node by cloning all of its children.
     */
    /**
     * Converts an element into an SVG node by cloning all of its children.
     * @private
     * @param {?} element
     * @return {?}
     */
    MatIconRegistry.prototype._toSvgElement = /**
     * Converts an element into an SVG node by cloning all of its children.
     * @private
     * @param {?} element
     * @return {?}
     */
    function (element) {
        /** @type {?} */
        var svg = this._svgElementFromString('<svg></svg>');
        for (var i = 0; i < element.childNodes.length; i++) {
            if (element.childNodes[i].nodeType === this._document.ELEMENT_NODE) {
                svg.appendChild(element.childNodes[i].cloneNode(true));
            }
        }
        return svg;
    };
    /**
     * Sets the default attributes for an SVG element to be used as an icon.
     */
    /**
     * Sets the default attributes for an SVG element to be used as an icon.
     * @private
     * @param {?} svg
     * @return {?}
     */
    MatIconRegistry.prototype._setSvgAttributes = /**
     * Sets the default attributes for an SVG element to be used as an icon.
     * @private
     * @param {?} svg
     * @return {?}
     */
    function (svg) {
        svg.setAttribute('fit', '');
        svg.setAttribute('height', '100%');
        svg.setAttribute('width', '100%');
        svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
        svg.setAttribute('focusable', 'false'); // Disable IE11 default behavior to make SVGs focusable.
        return svg;
    };
    /**
     * Returns an Observable which produces the string contents of the given URL. Results may be
     * cached, so future calls with the same URL may not cause another HTTP request.
     */
    /**
     * Returns an Observable which produces the string contents of the given URL. Results may be
     * cached, so future calls with the same URL may not cause another HTTP request.
     * @private
     * @param {?} safeUrl
     * @return {?}
     */
    MatIconRegistry.prototype._fetchUrl = /**
     * Returns an Observable which produces the string contents of the given URL. Results may be
     * cached, so future calls with the same URL may not cause another HTTP request.
     * @private
     * @param {?} safeUrl
     * @return {?}
     */
    function (safeUrl) {
        var _this = this;
        if (!this._httpClient) {
            throw getMatIconNoHttpProviderError();
        }
        if (safeUrl == null) {
            throw Error("Cannot fetch icon from URL \"" + safeUrl + "\".");
        }
        /** @type {?} */
        var url = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_2__["SecurityContext"].RESOURCE_URL, safeUrl);
        if (!url) {
            throw getMatIconFailedToSanitizeUrlError(safeUrl);
        }
        // Store in-progress fetches to avoid sending a duplicate request for a URL when there is
        // already a request in progress for that URL. It's necessary to call share() on the
        // Observable returned by http.get() so that multiple subscribers don't cause multiple XHRs.
        /** @type {?} */
        var inProgressFetch = this._inProgressUrlFetches.get(url);
        if (inProgressFetch) {
            return inProgressFetch;
        }
        // TODO(jelbourn): for some reason, the `finalize` operator "loses" the generic type on the
        // Observable. Figure out why and fix it.
        /** @type {?} */
        var req = this._httpClient.get(url, { responseType: 'text' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this._inProgressUrlFetches.delete(url); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["share"])());
        this._inProgressUrlFetches.set(url, req);
        return req;
    };
    /**
     * Registers an icon config by name in the specified namespace.
     * @param namespace Namespace in which to register the icon config.
     * @param iconName Name under which to register the config.
     * @param config Config to be registered.
     */
    /**
     * Registers an icon config by name in the specified namespace.
     * @private
     * @template THIS
     * @this {THIS}
     * @param {?} namespace Namespace in which to register the icon config.
     * @param {?} iconName Name under which to register the config.
     * @param {?} config Config to be registered.
     * @return {THIS}
     */
    MatIconRegistry.prototype._addSvgIconConfig = /**
     * Registers an icon config by name in the specified namespace.
     * @private
     * @template THIS
     * @this {THIS}
     * @param {?} namespace Namespace in which to register the icon config.
     * @param {?} iconName Name under which to register the config.
     * @param {?} config Config to be registered.
     * @return {THIS}
     */
    function (namespace, iconName, config) {
        (/** @type {?} */ (this))._svgIconConfigs.set(iconKey(namespace, iconName), config);
        return (/** @type {?} */ (this));
    };
    /**
     * Registers an icon set config in the specified namespace.
     * @param namespace Namespace in which to register the icon config.
     * @param config Config to be registered.
     */
    /**
     * Registers an icon set config in the specified namespace.
     * @private
     * @template THIS
     * @this {THIS}
     * @param {?} namespace Namespace in which to register the icon config.
     * @param {?} config Config to be registered.
     * @return {THIS}
     */
    MatIconRegistry.prototype._addSvgIconSetConfig = /**
     * Registers an icon set config in the specified namespace.
     * @private
     * @template THIS
     * @this {THIS}
     * @param {?} namespace Namespace in which to register the icon config.
     * @param {?} config Config to be registered.
     * @return {THIS}
     */
    function (namespace, config) {
        /** @type {?} */
        var configNamespace = (/** @type {?} */ (this))._iconSetConfigs.get(namespace);
        if (configNamespace) {
            configNamespace.push(config);
        }
        else {
            (/** @type {?} */ (this))._iconSetConfigs.set(namespace, [config]);
        }
        return (/** @type {?} */ (this));
    };
    MatIconRegistry.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    MatIconRegistry.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"],] }] }
    ]; };
    /** @nocollapse */ MatIconRegistry.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["defineInjectable"])({ factory: function MatIconRegistry_Factory() { return new MatIconRegistry(Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["inject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"], 8)); }, token: MatIconRegistry, providedIn: "root" });
    return MatIconRegistry;
}());
/**
 * \@docs-private
 * @param {?} parentRegistry
 * @param {?} httpClient
 * @param {?} sanitizer
 * @param {?=} document
 * @return {?}
 */
function ICON_REGISTRY_PROVIDER_FACTORY(parentRegistry, httpClient, sanitizer, document) {
    return parentRegistry || new MatIconRegistry(httpClient, sanitizer, document);
}
/**
 * \@docs-private
 * @type {?}
 */
var ICON_REGISTRY_PROVIDER = {
    // If there is already an MatIconRegistry available, use that. Otherwise, provide a new one.
    provide: MatIconRegistry,
    deps: [
        [new _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_2__["SkipSelf"](), MatIconRegistry],
        [new _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"](), _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"],
        [new _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"](), (/** @type {?} */ (_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]))],
    ],
    useFactory: ICON_REGISTRY_PROVIDER_FACTORY,
};
/**
 * Clones an SVGElement while preserving type information.
 * @param {?} svg
 * @return {?}
 */
function cloneSvg(svg) {
    return (/** @type {?} */ (svg.cloneNode(true)));
}
/**
 * Returns the cache key to use for an icon namespace and name.
 * @param {?} namespace
 * @param {?} name
 * @return {?}
 */
function iconKey(namespace, name) {
    return namespace + ':' + name;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Boilerplate for applying mixins to MatIcon.
/**
 * \@docs-private
 */
var  
// Boilerplate for applying mixins to MatIcon.
/**
 * \@docs-private
 */
MatIconBase = /** @class */ (function () {
    function MatIconBase(_elementRef) {
        this._elementRef = _elementRef;
    }
    return MatIconBase;
}());
/** @type {?} */
var _MatIconMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_7__["mixinColor"])(MatIconBase);
/**
 * Injection token used to provide the current location to `MatIcon`.
 * Used to handle server-side rendering and to stub out during unit tests.
 * \@docs-private
 * @type {?}
 */
var MAT_ICON_LOCATION = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('mat-icon-location', {
    providedIn: 'root',
    factory: MAT_ICON_LOCATION_FACTORY
});
/**
 * \@docs-private
 * @return {?}
 */
function MAT_ICON_LOCATION_FACTORY() {
    /** @type {?} */
    var _document = Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]);
    /** @type {?} */
    var _location = _document ? _document.location : null;
    return {
        // Note that this needs to be a function, rather than a property, because Angular
        // will only resolve it once, but we want the current path on each call.
        getPathname: function () { return _location ? (_location.pathname + _location.search) : ''; }
    };
}
/**
 * SVG attributes that accept a FuncIRI (e.g. `url(<something>)`).
 * @type {?}
 */
var funcIriAttributes = [
    'clip-path',
    'color-profile',
    'src',
    'cursor',
    'fill',
    'filter',
    'marker',
    'marker-start',
    'marker-mid',
    'marker-end',
    'mask',
    'stroke'
];
var ɵ0 = function (attr) { return "[" + attr + "]"; };
/**
 * Selector that can be used to find all elements that are using a `FuncIRI`.
 * @type {?}
 */
var funcIriAttributeSelector = funcIriAttributes.map(ɵ0).join(', ');
/**
 * Regex that can be used to extract the id out of a FuncIRI.
 * @type {?}
 */
var funcIriPattern = /^url\(['"]?#(.*?)['"]?\)$/;
/**
 * Component to display an icon. It can be used in the following ways:
 *
 * - Specify the svgIcon input to load an SVG icon from a URL previously registered with the
 *   addSvgIcon, addSvgIconInNamespace, addSvgIconSet, or addSvgIconSetInNamespace methods of
 *   MatIconRegistry. If the svgIcon value contains a colon it is assumed to be in the format
 *   "[namespace]:[name]", if not the value will be the name of an icon in the default namespace.
 *   Examples:
 *     `<mat-icon svgIcon="left-arrow"></mat-icon>
 *     <mat-icon svgIcon="animals:cat"></mat-icon>`
 *
 * - Use a font ligature as an icon by putting the ligature text in the content of the `<mat-icon>`
 *   component. By default the Material icons font is used as described at
 *   http://google.github.io/material-design-icons/#icon-font-for-the-web. You can specify an
 *   alternate font by setting the fontSet input to either the CSS class to apply to use the
 *   desired font, or to an alias previously registered with MatIconRegistry.registerFontClassAlias.
 *   Examples:
 *     `<mat-icon>home</mat-icon>
 *     <mat-icon fontSet="myfont">sun</mat-icon>`
 *
 * - Specify a font glyph to be included via CSS rules by setting the fontSet input to specify the
 *   font, and the fontIcon input to specify the icon. Typically the fontIcon will specify a
 *   CSS class which causes the glyph to be displayed via a :before selector, as in
 *   https://fortawesome.github.io/Font-Awesome/examples/
 *   Example:
 *     `<mat-icon fontSet="fa" fontIcon="alarm"></mat-icon>`
 */
var MatIcon = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__extends"])(MatIcon, _super);
    function MatIcon(elementRef, _iconRegistry, ariaHidden, _location) {
        var _this = _super.call(this, elementRef) || this;
        _this._iconRegistry = _iconRegistry;
        _this._location = _location;
        _this._inline = false;
        // If the user has not explicitly set aria-hidden, mark the icon as hidden, as this is
        // the right thing to do for the majority of icon use-cases.
        if (!ariaHidden) {
            elementRef.nativeElement.setAttribute('aria-hidden', 'true');
        }
        return _this;
    }
    Object.defineProperty(MatIcon.prototype, "inline", {
        /**
         * Whether the icon should be inlined, automatically sizing the icon to match the font size of
         * the element the icon is contained in.
         */
        get: /**
         * Whether the icon should be inlined, automatically sizing the icon to match the font size of
         * the element the icon is contained in.
         * @return {?}
         */
        function () {
            return this._inline;
        },
        set: /**
         * @param {?} inline
         * @return {?}
         */
        function (inline) {
            this._inline = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceBooleanProperty"])(inline);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatIcon.prototype, "fontSet", {
        /** Font set that the icon is a part of. */
        get: /**
         * Font set that the icon is a part of.
         * @return {?}
         */
        function () { return this._fontSet; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._fontSet = this._cleanupFontValue(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatIcon.prototype, "fontIcon", {
        /** Name of an icon within a font set. */
        get: /**
         * Name of an icon within a font set.
         * @return {?}
         */
        function () { return this._fontIcon; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._fontIcon = this._cleanupFontValue(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Splits an svgIcon binding value into its icon set and icon name components.
     * Returns a 2-element array of [(icon set), (icon name)].
     * The separator for the two fields is ':'. If there is no separator, an empty
     * string is returned for the icon set and the entire value is returned for
     * the icon name. If the argument is falsy, returns an array of two empty strings.
     * Throws an error if the name contains two or more ':' separators.
     * Examples:
     *   `'social:cake' -> ['social', 'cake']
     *   'penguin' -> ['', 'penguin']
     *   null -> ['', '']
     *   'a:b:c' -> (throws Error)`
     */
    /**
     * Splits an svgIcon binding value into its icon set and icon name components.
     * Returns a 2-element array of [(icon set), (icon name)].
     * The separator for the two fields is ':'. If there is no separator, an empty
     * string is returned for the icon set and the entire value is returned for
     * the icon name. If the argument is falsy, returns an array of two empty strings.
     * Throws an error if the name contains two or more ':' separators.
     * Examples:
     *   `'social:cake' -> ['social', 'cake']
     *   'penguin' -> ['', 'penguin']
     *   null -> ['', '']
     *   'a:b:c' -> (throws Error)`
     * @private
     * @param {?} iconName
     * @return {?}
     */
    MatIcon.prototype._splitIconName = /**
     * Splits an svgIcon binding value into its icon set and icon name components.
     * Returns a 2-element array of [(icon set), (icon name)].
     * The separator for the two fields is ':'. If there is no separator, an empty
     * string is returned for the icon set and the entire value is returned for
     * the icon name. If the argument is falsy, returns an array of two empty strings.
     * Throws an error if the name contains two or more ':' separators.
     * Examples:
     *   `'social:cake' -> ['social', 'cake']
     *   'penguin' -> ['', 'penguin']
     *   null -> ['', '']
     *   'a:b:c' -> (throws Error)`
     * @private
     * @param {?} iconName
     * @return {?}
     */
    function (iconName) {
        if (!iconName) {
            return ['', ''];
        }
        /** @type {?} */
        var parts = iconName.split(':');
        switch (parts.length) {
            case 1: return ['', parts[0]]; // Use default namespace.
            case 2: return (/** @type {?} */ (parts));
            default: throw Error("Invalid icon name: \"" + iconName + "\"");
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    MatIcon.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        // Only update the inline SVG icon if the inputs changed, to avoid unnecessary DOM operations.
        if (changes.svgIcon) {
            if (this.svgIcon) {
                var _a = this._splitIconName(this.svgIcon), namespace = _a[0], iconName = _a[1];
                this._iconRegistry.getNamedSvgIcon(iconName, namespace).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(function (svg) { return _this._setSvgElement(svg); }, function (err) { return console.log("Error retrieving icon: " + err.message); });
            }
            else {
                this._clearSvgElement();
            }
        }
        if (this._usingFontIcon()) {
            this._updateFontIconClasses();
        }
    };
    /**
     * @return {?}
     */
    MatIcon.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // Update font classes because ngOnChanges won't be called if none of the inputs are present,
        // e.g. <mat-icon>arrow</mat-icon> In this case we need to add a CSS class for the default font.
        if (this._usingFontIcon()) {
            this._updateFontIconClasses();
        }
    };
    /**
     * @return {?}
     */
    MatIcon.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var cachedElements = this._elementsWithExternalReferences;
        if (cachedElements && this._location && cachedElements.size) {
            /** @type {?} */
            var newPath = this._location.getPathname();
            // We need to check whether the URL has changed on each change detection since
            // the browser doesn't have an API that will let us react on link clicks and
            // we can't depend on the Angular router. The references need to be updated,
            // because while most browsers don't care whether the URL is correct after
            // the first render, Safari will break if the user navigates to a different
            // page and the SVG isn't re-rendered.
            if (newPath !== this._previousPath) {
                this._previousPath = newPath;
                this._prependPathToReferences(newPath);
            }
        }
    };
    /**
     * @return {?}
     */
    MatIcon.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._elementsWithExternalReferences) {
            this._elementsWithExternalReferences.clear();
        }
    };
    /**
     * @private
     * @return {?}
     */
    MatIcon.prototype._usingFontIcon = /**
     * @private
     * @return {?}
     */
    function () {
        return !this.svgIcon;
    };
    /**
     * @private
     * @param {?} svg
     * @return {?}
     */
    MatIcon.prototype._setSvgElement = /**
     * @private
     * @param {?} svg
     * @return {?}
     */
    function (svg) {
        this._clearSvgElement();
        // Workaround for IE11 and Edge ignoring `style` tags inside dynamically-created SVGs.
        // See: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/10898469/
        // Do this before inserting the element into the DOM, in order to avoid a style recalculation.
        /** @type {?} */
        var styleTags = (/** @type {?} */ (svg.querySelectorAll('style')));
        for (var i = 0; i < styleTags.length; i++) {
            styleTags[i].textContent += ' ';
        }
        // Note: we do this fix here, rather than the icon registry, because the
        // references have to point to the URL at the time that the icon was created.
        if (this._location) {
            /** @type {?} */
            var path = this._location.getPathname();
            this._previousPath = path;
            this._cacheChildrenWithExternalReferences(svg);
            this._prependPathToReferences(path);
        }
        this._elementRef.nativeElement.appendChild(svg);
    };
    /**
     * @private
     * @return {?}
     */
    MatIcon.prototype._clearSvgElement = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var layoutElement = this._elementRef.nativeElement;
        /** @type {?} */
        var childCount = layoutElement.childNodes.length;
        if (this._elementsWithExternalReferences) {
            this._elementsWithExternalReferences.clear();
        }
        // Remove existing non-element child nodes and SVGs, and add the new SVG element. Note that
        // we can't use innerHTML, because IE will throw if the element has a data binding.
        while (childCount--) {
            /** @type {?} */
            var child = layoutElement.childNodes[childCount];
            // 1 corresponds to Node.ELEMENT_NODE. We remove all non-element nodes in order to get rid
            // of any loose text nodes, as well as any SVG elements in order to remove any old icons.
            if (child.nodeType !== 1 || child.nodeName.toLowerCase() === 'svg') {
                layoutElement.removeChild(child);
            }
        }
    };
    /**
     * @private
     * @return {?}
     */
    MatIcon.prototype._updateFontIconClasses = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this._usingFontIcon()) {
            return;
        }
        /** @type {?} */
        var elem = this._elementRef.nativeElement;
        /** @type {?} */
        var fontSetClass = this.fontSet ?
            this._iconRegistry.classNameForFontAlias(this.fontSet) :
            this._iconRegistry.getDefaultFontSetClass();
        if (fontSetClass != this._previousFontSetClass) {
            if (this._previousFontSetClass) {
                elem.classList.remove(this._previousFontSetClass);
            }
            if (fontSetClass) {
                elem.classList.add(fontSetClass);
            }
            this._previousFontSetClass = fontSetClass;
        }
        if (this.fontIcon != this._previousFontIconClass) {
            if (this._previousFontIconClass) {
                elem.classList.remove(this._previousFontIconClass);
            }
            if (this.fontIcon) {
                elem.classList.add(this.fontIcon);
            }
            this._previousFontIconClass = this.fontIcon;
        }
    };
    /**
     * Cleans up a value to be used as a fontIcon or fontSet.
     * Since the value ends up being assigned as a CSS class, we
     * have to trim the value and omit space-separated values.
     */
    /**
     * Cleans up a value to be used as a fontIcon or fontSet.
     * Since the value ends up being assigned as a CSS class, we
     * have to trim the value and omit space-separated values.
     * @private
     * @param {?} value
     * @return {?}
     */
    MatIcon.prototype._cleanupFontValue = /**
     * Cleans up a value to be used as a fontIcon or fontSet.
     * Since the value ends up being assigned as a CSS class, we
     * have to trim the value and omit space-separated values.
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return typeof value === 'string' ? value.trim().split(' ')[0] : value;
    };
    /**
     * Prepends the current path to all elements that have an attribute pointing to a `FuncIRI`
     * reference. This is required because WebKit browsers require references to be prefixed with
     * the current path, if the page has a `base` tag.
     */
    /**
     * Prepends the current path to all elements that have an attribute pointing to a `FuncIRI`
     * reference. This is required because WebKit browsers require references to be prefixed with
     * the current path, if the page has a `base` tag.
     * @private
     * @param {?} path
     * @return {?}
     */
    MatIcon.prototype._prependPathToReferences = /**
     * Prepends the current path to all elements that have an attribute pointing to a `FuncIRI`
     * reference. This is required because WebKit browsers require references to be prefixed with
     * the current path, if the page has a `base` tag.
     * @private
     * @param {?} path
     * @return {?}
     */
    function (path) {
        /** @type {?} */
        var elements = this._elementsWithExternalReferences;
        if (elements) {
            elements.forEach(function (attrs, element) {
                attrs.forEach(function (attr) {
                    element.setAttribute(attr.name, "url('" + path + "#" + attr.value + "')");
                });
            });
        }
    };
    /**
     * Caches the children of an SVG element that have `url()`
     * references that we need to prefix with the current path.
     */
    /**
     * Caches the children of an SVG element that have `url()`
     * references that we need to prefix with the current path.
     * @private
     * @param {?} element
     * @return {?}
     */
    MatIcon.prototype._cacheChildrenWithExternalReferences = /**
     * Caches the children of an SVG element that have `url()`
     * references that we need to prefix with the current path.
     * @private
     * @param {?} element
     * @return {?}
     */
    function (element) {
        /** @type {?} */
        var elementsWithFuncIri = element.querySelectorAll(funcIriAttributeSelector);
        /** @type {?} */
        var elements = this._elementsWithExternalReferences =
            this._elementsWithExternalReferences || new Map();
        var _loop_1 = function (i) {
            funcIriAttributes.forEach(function (attr) {
                /** @type {?} */
                var elementWithReference = elementsWithFuncIri[i];
                /** @type {?} */
                var value = elementWithReference.getAttribute(attr);
                /** @type {?} */
                var match = value ? value.match(funcIriPattern) : null;
                if (match) {
                    /** @type {?} */
                    var attributes = elements.get(elementWithReference);
                    if (!attributes) {
                        attributes = [];
                        elements.set(elementWithReference, attributes);
                    }
                    (/** @type {?} */ (attributes)).push({ name: attr, value: match[1] });
                }
            });
        };
        for (var i = 0; i < elementsWithFuncIri.length; i++) {
            _loop_1(i);
        }
    };
    MatIcon.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{template: '<ng-content></ng-content>',
                    selector: 'mat-icon',
                    exportAs: 'matIcon',
                    styles: [".mat-icon{background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1,1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}"],
                    inputs: ['color'],
                    host: {
                        'role': 'img',
                        'class': 'mat-icon',
                        '[class.mat-icon-inline]': 'inline',
                        '[class.mat-icon-no-color]': 'color !== "primary" && color !== "accent" && color !== "warn"',
                    },
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                },] },
    ];
    /** @nocollapse */
    MatIcon.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
        { type: MatIconRegistry },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Attribute"], args: ['aria-hidden',] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [MAT_ICON_LOCATION,] }] }
    ]; };
    MatIcon.propDecorators = {
        inline: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        svgIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        fontSet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        fontIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
    };
    return MatIcon;
}(_MatIconMixinBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MatIconModule = /** @class */ (function () {
    function MatIconModule() {
    }
    MatIconModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                    imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"]],
                    exports: [MatIcon, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"]],
                    declarations: [MatIcon],
                },] },
    ];
    return MatIconModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=icon.es5.js.map


/***/ }),

/***/ "./src/app/clients/new-client/new-client.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/clients/new-client/new-client.module.ts ***!
  \*********************************************************/
/*! exports provided: NewClientPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewClientPageModule", function() { return NewClientPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _new_client_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./new-client.page */ "./src/app/clients/new-client/new-client.page.ts");
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/chart */ "./node_modules/primeng/chart.js");
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_chart__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/fullcalendar */ "./node_modules/primeng/fullcalendar.js");
/* harmony import */ var primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/sidebar */ "./node_modules/primeng/sidebar.js");
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_sidebar__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/inputtext.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/accordion */ "./node_modules/primeng/accordion.js");
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primeng_accordion__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/password */ "./node_modules/primeng/password.js");
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(primeng_password__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/messages */ "./node_modules/primeng/messages.js");
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(primeng_messages__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/message */ "./node_modules/primeng/message.js");
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(primeng_message__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/breadcrumb */ "./node_modules/primeng/breadcrumb.js");
/* harmony import */ var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/tabview */ "./node_modules/primeng/tabview.js");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(primeng_tabview__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/toast.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(primeng_toast__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ionic-native/photo-viewer/ngx */ "./node_modules/@ionic-native/photo-viewer/ngx/index.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/dialog.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/dynamicdialog */ "./node_modules/primeng/dynamicdialog.js");
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/fesm5/ngx-chips.js");
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! primeng/menu */ "./node_modules/primeng/menu.js");
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(primeng_menu__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! primeng/autocomplete */ "./node_modules/primeng/autocomplete.js");
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(primeng_autocomplete__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var src_app_head_head_module__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! src/app/head/head.module */ "./src/app/head/head.module.ts");


































var routes = [
    {
        path: '',
        component: _new_client_page__WEBPACK_IMPORTED_MODULE_8__["NewClientPage"]
    }
];
var NewClientPageModule = /** @class */ (function () {
    function NewClientPageModule() {
    }
    NewClientPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"],
                primeng_chart__WEBPACK_IMPORTED_MODULE_9__["ChartModule"],
                primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_10__["FullCalendarModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_11__["ButtonModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__["DropdownModule"],
                primeng_sidebar__WEBPACK_IMPORTED_MODULE_13__["SidebarModule"],
                primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__["InputTextModule"],
                primeng_accordion__WEBPACK_IMPORTED_MODULE_15__["AccordionModule"],
                primeng_password__WEBPACK_IMPORTED_MODULE_16__["PasswordModule"],
                primeng_messages__WEBPACK_IMPORTED_MODULE_17__["MessagesModule"],
                primeng_message__WEBPACK_IMPORTED_MODULE_18__["MessageModule"],
                primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_19__["BreadcrumbModule"],
                primeng_tabview__WEBPACK_IMPORTED_MODULE_20__["TabViewModule"],
                primeng_toast__WEBPACK_IMPORTED_MODULE_21__["ToastModule"],
                primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_24__["DynamicDialogModule"],
                primeng_dialog__WEBPACK_IMPORTED_MODULE_23__["DialogModule"],
                ngx_chips__WEBPACK_IMPORTED_MODULE_26__["TagInputModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__["MatIconModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_29__["MatChipsModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_30__["MatAutocompleteModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_31__["MatFormFieldModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                primeng_menu__WEBPACK_IMPORTED_MODULE_27__["MenuModule"],
                primeng_autocomplete__WEBPACK_IMPORTED_MODULE_32__["AutoCompleteModule"],
                src_app_head_head_module__WEBPACK_IMPORTED_MODULE_33__["HeadModule"]
            ],
            declarations: [_new_client_page__WEBPACK_IMPORTED_MODULE_8__["NewClientPage"]],
            providers: [
                primeng_api__WEBPACK_IMPORTED_MODULE_25__["DialogService"],
                _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"],
                _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__["Geolocation"],
                primeng_api__WEBPACK_IMPORTED_MODULE_25__["MessageService"],
                _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_22__["PhotoViewer"]
            ]
        })
    ], NewClientPageModule);
    return NewClientPageModule;
}());



/***/ }),

/***/ "./src/app/clients/new-client/new-client.page.html":
/*!*********************************************************!*\
  !*** ./src/app/clients/new-client/new-client.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n  <div class=\"container\">\r\n\r\n    <p-toast [style]=\"{marginTop: '80px'}\" position=\"top-right\" key=\"invalid\"></p-toast>\r\n\r\n    <!-- HEAD -->\r\n    <div class=\"head\">\r\n      <div class=\"back_button\">\r\n        <span>\r\n          <img (click)=\"open_menu()\" src=\"../../../assets/image/logo_itg.png\" />\r\n        </span>\r\n      </div>\r\n\r\n      <div class=\"menu\">\r\n        <div class=\"list_icon\">\r\n          <i class=\"fas fa-at\"\r\n            style=\"color: white ;   margin-right: 10px; font-size: 20px ; font-size: 20px ; vertical-align: -webkit-baseline-middle\"></i>\r\n          <i class=\"fas fa-comments\"\r\n            style=\" color: white ;   margin-right: 10px; font-size: 20px ; font-size: 20px ; vertical-align: -webkit-baseline-middle\"></i>\r\n          <i class=\"fas fa-ban on fa-camera\"\r\n            style=\" color: white ;   margin-right: 10px; font-size: 20px ; font-size: 20px ; vertical-align: -webkit-baseline-middle\"></i>\r\n        </div>\r\n      </div>\r\n\r\n       <app-head></app-head>\r\n      \r\n    </div>\r\n    <!-- HEAD -->\r\n\r\n    <div class=\"body\">\r\n\r\n      <div class=\"title_body\">\r\n        <h3>\r\n          <div class=\"ui-g\">\r\n            <div (click)=\"open_fiche_client()\" class=\"ui-g-1\">\r\n              <i class=\"fas fa-arrow-left\" style=\"font-size: 18px ; color: #21B799\"> </i>\r\n            </div>\r\n            <div class=\"ui-g-11\">\r\n              <h3> Nouveau </h3>\r\n            </div>\r\n          </div>\r\n        </h3>\r\n      </div>\r\n\r\n      <div class=\"btn_nw_cr\">\r\n        <button [disabled]=\"disable_save\" pButton type=\"submit\" label=\"SAUVEGARDER\" class=\"bt ui-button-success\"\r\n          (click)=\"save_new_client()\"></button>\r\n        <button pButton type=\"button\" label=\"ANNULER\" class=\"bt ui-button-secondary\"\r\n          (click)=\"open_fiche_client()\"></button>\r\n        <div *ngIf=\"loadIndicator\" class=\"loadIndicator\">\r\n          <ion-spinner name=\"dots\"></ion-spinner>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"breacumb ui-g\">\r\n\r\n        <div class=\"ui-g-4 dropdownworkflow\">\r\n          <!-- <button pButton type=\"button\" label=\"VALIDÉE PAR SUPERVISEUR\"  class=\"bt ui-button-secondary\"></button> \r\n           <p-dropdown [options]=\"itemsActions\" [(ngModel)]=\"selectedAction\" placeholder=\"ACTION\" optionLabel=\"label\"\r\n             [showClear]=\"true\"></p-dropdown> -->\r\n        </div>\r\n\r\n\r\n        <div class=\"ui-g-8 dropdownworkflow noCLick\">\r\n          <!-- <p-breadcrumb [model]=\"items\" [home]=\"home\"></p-breadcrumb> -->\r\n          <p-dropdown [options]=\"items\" [(ngModel)]=\"selectedWorkFlow\" placeholder=\"PROSPECT\" optionLabel=\"label\"\r\n            [showClear]=\"true\"></p-dropdown>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"archive  ui-g\">\r\n        <div class=\"ui-g-7\">\r\n\r\n        </div>\r\n\r\n        <!-- <div class=\"div_btn ui-g-5\">\r\n                  <button pButton type=\"button\" icon=\"pi pi-folder\" iconPos=\"left\" label=\"ARCHIVER\"  class=\"bt ui-button-danger\"></button> -->\r\n        <!--<ul class=\"CustomArchive\">\r\n                   <li *ngIf=\"active == 0\" (click)=\"ConvertStatut(1)\">\r\n                     <i class=\"pi pi-folder\"></i>\r\n                     Actif\r\n                   </li>\r\n                   <li *ngIf=\"active == 1\" (click)=\"ConvertStatut(0)\">\r\n                     <i class=\"pi pi-folder\"></i>\r\n                     Inactif\r\n                   </li>\r\n                 </ul>\r\n             </div>-->\r\n      </div>\r\n\r\n      <div class=\"photo  ui-g\">\r\n        <div class=\"ui-g-9\">\r\n\r\n        </div>\r\n\r\n        <div class=\"cam ui-g-3\">\r\n          <div *ngIf=\"!filePath\"> <i class=\"pi pi-camera\" style=\"font-size: 100px ; color: gray\"></i> <br /></div>\r\n          <div *ngIf=\"filePath\" [style.background]=\"'url('+ filePath +')'\" [style.background-size]=\"cover\"\r\n            class=\"contentAvatar\" (click)=\"open_full_screen()\"></div>\r\n          <div class=\"del_mod_btn\">\r\n            <button pButton type=\"button\" icon=\"pi pi-pencil\" iconPos=\"center\" class=\"bt ui-button-success\"\r\n              (click)=\"showImageFromCamera()\"></button>\r\n            <button pButton type=\"button\" icon=\"pi pi-trash\" iconPos=\"center\" class=\"bt ui-button-danger\"\r\n              (click)=\"remove_image()\"></button>\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <!-- <div class=\"cam ui-g-3\" *ngIf = \"!filePath\" >\r\n               <i class=\"pi pi-camera\" style=\"font-size: 78px ; color: gray\" (click)=\"showImageFromCamera()\"></i> <br />\r\n             </div> -->\r\n      </div>\r\n\r\n\r\n      <div class=\"form\">\r\n        <form [formGroup]=\"fiche_client\" (ngSubmit)=\"save_new_client()\">\r\n          <div class=\"form_inside\">\r\n\r\n\r\n            <div class=\"form_item\">\r\n              <!--Organisation Commerciale-->\r\n              <h3>Organisation Commerciale</h3>\r\n\r\n              <div style=\"display: none;\">\r\n\r\n\r\n              </div>\r\n\r\n              <ion-item>\r\n                <ion-label>Région</ion-label>\r\n                <ion-note slot=\"end\" color=\"primary\" style=\"font-size:medium; color: gray; font-weight: bold; \">\r\n                  {{my_region}}</ion-note>\r\n              </ion-item>\r\n\r\n              <ion-item>\r\n                <ion-label>Agence</ion-label>\r\n                <ion-note slot=\"end\" color=\"primary\" style=\"font-size:medium; color: gray; ; font-weight: bold; \">\r\n                  {{my_agence}}</ion-note>\r\n              </ion-item>\r\n\r\n              <ion-item>\r\n                <ion-label position=\"floating\">Secteur</ion-label>\r\n                <ion-select okText=\"Valider\" cancelText=\"Annuler\"(ionChange)=\"secteurChange($event.detail.value)\" [(ngModel)]=\"i_t_secteur_selected\"\r\n                  [value]=\"i_t_secteur_selected\" formControlName=\"secteur_id\">\r\n                  <ion-select-option *ngFor=\"let secteur of i_t_secteur\" [value]=\"secteur.id\"> {{secteur.name}}\r\n                  </ion-select-option>\r\n                </ion-select>\r\n              </ion-item>\r\n\r\n              <!--Organisation Commerciale-->\r\n            </div>\r\n\r\n\r\n            <div class=\"form_item\">\r\n              <!--Coordonnées du point de vente-->\r\n              <h3>Coordonnées du point de vente</h3>\r\n\r\n              <ion-item>\r\n                <ion-label position=\"floating\">Nom du PDV</ion-label>\r\n                <ion-input formControlName=\"nom_pos\" type=\"text\"> </ion-input>\r\n              </ion-item>\r\n\r\n              <ion-item>\r\n                <ion-label position=\"floating\">Nom du Gérant</ion-label>\r\n                <ion-input formControlName=\"nom_gerant\" type=\"text\"> </ion-input>\r\n              </ion-item>\r\n\r\n              <ion-item>\r\n                <ion-label position=\"floating\">Adresse</ion-label>\r\n                <ion-input formControlName=\"adresse\" type=\"text\"> </ion-input>\r\n              </ion-item>\r\n\r\n              <ion-item>\r\n                <ion-label position=\"floating\">Repère</ion-label>\r\n                <ion-input formControlName=\"repere\" type=\"text\"> </ion-input>\r\n              </ion-item>\r\n\r\n              <ion-item>\r\n                <ion-label position=\"floating\">Quartier</ion-label>\r\n                <ion-input formControlName=\"quartier\" type=\"text\"> </ion-input>\r\n              </ion-item>\r\n\r\n              <ion-item>\r\n                <ion-label position=\"floating\">Ville</ion-label>\r\n                <ion-select okText=\"Valider\" cancelText=\"Annuler\"formControlName=\"ville_id\">\r\n                  <ion-select-option *ngFor=\"let ville of i_t_ville\" [value]=\"ville.id\"> {{ville.name}}\r\n                  </ion-select-option>\r\n                </ion-select>\r\n              </ion-item>\r\n\r\n              <ion-item>\r\n                <ion-label position=\"floating\">N° de téléphone 1</ion-label>\r\n                <ion-input formControlName=\"numero_telephone1\" type=\"text\"> </ion-input>\r\n              </ion-item>\r\n\r\n              <ion-item>\r\n                <ion-label position=\"floating\">N° de téléphone 2</ion-label>\r\n                <ion-input formControlName=\"numero_telephone2\" type=\"text\"> </ion-input>\r\n              </ion-item>\r\n\r\n              <ion-item>\r\n                <ion-label position=\"floating\">N° de téléphone 3</ion-label>\r\n                <ion-input formControlName=\"numero_telephone3\" type=\"text\"> </ion-input>\r\n              </ion-item>\r\n\r\n              <!--Coordonnées du point de vente-->\r\n            </div>\r\n\r\n            <div class=\"form_item\">\r\n              <!--Coordonnées complémentaire du Point de Vente-->\r\n              <h3>Coordonnées complémentaire du Point de Vente</h3>\r\n\r\n              <ion-item>\r\n                <ion-label position=\"floating\">Emplacement</ion-label>\r\n                <ion-select okText=\"Valider\" cancelText=\"Annuler\"formControlName=\"emplacement_id\">\r\n                  <ion-select-option *ngFor=\"let emplacement of i_t_emplacement\" [value]=\"emplacement.id\">\r\n                    {{emplacement.name}}</ion-select-option>\r\n                </ion-select>\r\n              </ion-item>\r\n\r\n              <ion-item>\r\n                <ion-label position=\"floating\">Proximité</ion-label>\r\n                <ion-select okText=\"Valider\" cancelText=\"Annuler\"formControlName=\"proximite_id\">\r\n                  <ion-select-option *ngFor=\"let proximite of i_t_proximite\" [value]=\"proximite.id\"> {{proximite.name}}\r\n                  </ion-select-option>\r\n                </ion-select>\r\n              </ion-item>\r\n\r\n              <ion-item>\r\n                <ion-label position=\"floating\">Type de quartier</ion-label>\r\n                <ion-select okText=\"Valider\" cancelText=\"Annuler\"formControlName=\"type_quartier_id\">\r\n                  <ion-select-option *ngFor=\"let type_qurtier of i_t_type_quartier\" [value]=\"type_qurtier.id\">\r\n                    {{type_qurtier.name}}</ion-select-option>\r\n                </ion-select>\r\n              </ion-item>\r\n\r\n              <div class=\"gps\">\r\n                <button type=\"button\" (click)=\"getMyLocation()\" style=\"padding: 5px 10px;margin-top: 10px;\"><i\r\n                    class=\"fas fa-map-marker-alt\" style=\"font-size: 18px ; color: red;margin-right: 10px;\"></i>Récuperer\r\n                  ma position</button>\r\n                <p>Coordonnées GPS Latitude : <ion-input formControlName=\"provider_latitude\" type=\"text\"> </ion-input>\r\n                </p>\r\n                <p>Coordonnées GPS Longitude : <ion-input formControlName=\"provider_longitude\" type=\"text\"> </ion-input>\r\n                </p>\r\n              </div>\r\n\r\n\r\n              <!--Coordonnées complémentaire du Poin de Vente-->\r\n            </div>\r\n\r\n\r\n            <div class=\"form_item\">\r\n              <!--Typologie de Point de Vente-->\r\n              <h3>Typologie de Point de Vente</h3>\r\n\r\n              <ion-item>\r\n                <ion-label position=\"floating\">Type Client</ion-label>\r\n                <ion-select okText=\"Valider\" cancelText=\"Annuler\"formControlName=\"type_client_id\">\r\n                  <ion-select-option *ngFor=\"let type_client of i_t_type_client\" [value]=\"type_client.id\">\r\n                    {{type_client.name}}</ion-select-option>\r\n                </ion-select>\r\n              </ion-item>\r\n\r\n              <ion-item>\r\n                <ion-label position=\"floating\">Activité PDV</ion-label>\r\n                <ion-select okText=\"Valider\" cancelText=\"Annuler\"formControlName=\"activite_pos_id\" (ionChange)=\"activite_pos_Change($event.detail.value)\">\r\n                  <ion-select-option *ngFor=\"let activite_pos of i_t_activite_pos\" [value]=\"activite_pos.id\">\r\n                    {{activite_pos.name}}</ion-select-option>\r\n                </ion-select>\r\n              </ion-item>\r\n\r\n              <ion-item *ngIf=\"canal_result\">\r\n                <div *ngIf=\"canal_result.id\">\r\n                  <ion-label>Canal</ion-label>\r\n                  <ion-input disabled [value]=\"canal_result.name\"></ion-input>\r\n                </div>\r\n\r\n              </ion-item>\r\n\r\n\r\n              <ion-item>\r\n                <ion-label position=\"floating\">Enseigne d'appartenance</ion-label>\r\n                <ion-select okText=\"Valider\" cancelText=\"Annuler\"formControlName=\"enseigne_appartenance_id\">\r\n                  <ion-select-option *ngFor=\"let enseigne_appartenance of i_t_enseigne_appartenance\"\r\n                    [value]=\"enseigne_appartenance.id\"> {{enseigne_appartenance.name}}</ion-select-option>\r\n                </ion-select>\r\n              </ion-item>\r\n\r\n              <ion-item>\r\n                <ion-label position=\"floating\">Classification 1</ion-label>\r\n                <ion-select okText=\"Valider\" cancelText=\"Annuler\"formControlName=\"classification1_id\">\r\n                  <ion-select-option *ngFor=\"let classification1 of i_t_classification1\" [value]=\"classification1.id\">\r\n                    {{classification1.name}}</ion-select-option>\r\n                </ion-select>\r\n              </ion-item>\r\n\r\n              <ion-item>\r\n                <ion-label position=\"floating\">Classification 2</ion-label>\r\n                <ion-select okText=\"Valider\" cancelText=\"Annuler\"formControlName=\"classification2_id\">\r\n                  <ion-select-option *ngFor=\"let classification2 of i_t_classification2\" [value]=\"classification2.id\">\r\n                    {{classification2.name}}</ion-select-option>\r\n                </ion-select>\r\n              </ion-item>\r\n\r\n\r\n              <!--Typologie de Point de Vente-->\r\n            </div>\r\n\r\n            <div class=\"form_item\">\r\n              <!--Couverture commerciale-->\r\n              <h3>Couverture commerciale</h3>\r\n\r\n              <ion-item>\r\n                <ion-label position=\"floating\">Couverture commerciale</ion-label>\r\n                <ion-select okText=\"Valider\" cancelText=\"Annuler\"formControlName=\"couverture_commerciale_id\">\r\n                  <ion-select-option *ngFor=\"let couverture_commerciale of i_t_couverture_commerciale\"\r\n                    [value]=\"couverture_commerciale.id\"> {{couverture_commerciale.name}}</ion-select-option>\r\n                </ion-select>\r\n              </ion-item>\r\n\r\n              <ion-item>\r\n                <ion-label position=\"floating\">Fréquence de visite</ion-label>\r\n                <ion-select okText=\"Valider\" cancelText=\"Annuler\"formControlName=\"frequence_visite_id\">\r\n                  <ion-select-option *ngFor=\"let frequence_visite of i_t_frequence_visite\"\r\n                    [value]=\"frequence_visite.id\"> {{frequence_visite.name}}</ion-select-option>\r\n                </ion-select>\r\n              </ion-item>\r\n\r\n              <!--Couverture commerciale-->\r\n            </div>\r\n\r\n\r\n\r\n            <!--ZAVATRA MITSIVALANA-->\r\n            <p-tabView>\r\n\r\n              <p-tabPanel header=\"AGENTS COMMERCIAUX\">\r\n                <ion-item>\r\n                  <tag-input formControlName=\"user_id\" [onlyFromAutocomplete]=\"true\" placeholder=\"User\"\r\n                    [ngModel]=users_same_secteur disable=\"true\">\r\n                    <tag-input-dropdown [autocompleteItems]=\"users_same_secteur\" [showDropdownIfEmpty]=\"true\"\r\n                      [dynamicUpdate]=\"false\"> </tag-input-dropdown>\r\n                  </tag-input>\r\n                </ion-item>\r\n\r\n              </p-tabPanel>\r\n\r\n              <p-tabPanel header=\"PERMANENT POSM\">\r\n\r\n\r\n\r\n                <ion-item>\r\n                  <ion-label position=\"floating\">Cible installation présentoirs</ion-label>\r\n                  <ion-select okText=\"Valider\" cancelText=\"Annuler\"formControlName=\"cible_installation_presentoirs_id\">\r\n                    <ion-select-option *ngFor=\"let cible_installation_presentoirs of i_t_cible_installation_presentoirs\"\r\n                      [value]=\"cible_installation_presentoirs.id\"> {{cible_installation_presentoirs.name}}\r\n                    </ion-select-option>\r\n                  </ion-select>\r\n                </ion-item>\r\n\r\n                <ion-item>\r\n                  <!--<ion-label position=\"floating\">Permanent POSM</ion-label>\r\n                           <ion-select okText=\"Valider\" cancelText=\"Annuler\" formControlName= \"permanent_POSM_id\" multiple=\"true\">\r\n                             <ion-select-option *ngFor = \"let posm1 of i_t_permanent_posm\" [value] = \"posm1.value\" > {{posm1.label}}</ion-select-option>\r\n                           </ion-select> -->\r\n                  <tag-input formControlName=\"permanent_POSM_id\" [onlyFromAutocomplete]=\"true\"\r\n                    placeholder=\"Permanent POSM\">\r\n                    <tag-input-dropdown [autocompleteItems]=\"i_t_permanent_posm\" [showDropdownIfEmpty]=\"true\"\r\n                      [dynamicUpdate]=\"false\"> </tag-input-dropdown>\r\n                  </tag-input>\r\n                </ion-item>\r\n\r\n                <!--<mat-form-field class=\"example-chip-list\">\r\n                     <mat-chip-list #chipList aria-label=\"posm selection\">\r\n                       <mat-chip *ngFor=\"let posm of posms\" [selectable]=\"selectable\" [removable]=\"removable\" (removed)=\"remove(posm)\"> {{posm.name}}\r\n                         <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\r\n                       </mat-chip>\r\n                       <input placeholder=\"Permanent POSM\" #fruitInput formControlName=\"permanent_POSM_id\" [matAutocomplete]=\"auto\" [matChipInputFor]=\"chipList\" [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\" [matChipInputAddOnBlur]=\"addOnBlur\" (matChipInputTokenEnd)=\"add($event)\">\r\n                     </mat-chip-list>\r\n \r\n                     <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selected($event)\">\r\n                       <mat-option *ngFor=\"let posm of filteredPosm | async\" [value]=\"posm.id\">\r\n                         {{posm.name}}\r\n                       </mat-option>\r\n                     </mat-autocomplete>\r\n                   </mat-form-field> -->\r\n\r\n                <!--\r\n                       <ion-item>\r\n                           <ion-label position=\"floating\">Permanent POSM 2</ion-label>\r\n                           <ion-select okText=\"Valider\" cancelText=\"Annuler\" formControlName= \"permanent_POSM2_id\" >\r\n                             <ion-select-option *ngFor = \"let posm2 of i_t_permanent_posm\" [value] = \"posm2.id\" > {{posm2.name}}</ion-select-option>\r\n                           </ion-select>\r\n                       </ion-item>\r\n                     \r\n                       <ion-item>\r\n                           <ion-label position=\"floating\">Permanent POSM 3</ion-label>\r\n                           <ion-select okText=\"Valider\" cancelText=\"Annuler\" formControlName= \"permanent_POSM3_id\" >\r\n                             <ion-select-option *ngFor = \"let posm3 of i_t_permanent_posm\" [value] = \"posm3.id\" > {{posm3.name}}</ion-select-option>\r\n                           </ion-select>\r\n                       </ion-item>\r\n                     \r\n                       <ion-item>\r\n                           <ion-label position=\"floating\">Permanent POSM 4</ion-label>\r\n                           <ion-select okText=\"Valider\" cancelText=\"Annuler\" formControlName= \"permanent_POSM4_id\" >\r\n                             <ion-select-option *ngFor = \"let posm4 of i_t_permanent_posm\" [value] = \"posm4.id\" > {{posm4.name}}</ion-select-option>\r\n                           </ion-select>\r\n                       </ion-item>\r\n                     \r\n                       <ion-item>\r\n                           <ion-label position=\"floating\">Permanent POSM 5</ion-label>\r\n                           <ion-select okText=\"Valider\" cancelText=\"Annuler\" formControlName= \"permanent_POSM5_id\" >\r\n                             <ion-select-option *ngFor = \"let posm5 of i_t_permanent_posm\" [value] = \"posm5.id\" > {{posm5.name}}</ion-select-option>\r\n                           </ion-select>\r\n                       </ion-item>\r\n                     -->\r\n\r\n\r\n              </p-tabPanel>\r\n\r\n              <p-tabPanel header=\"CONTRAT\">\r\n\r\n                <ion-item>\r\n                  <ion-label position=\"floating\">Contrat</ion-label>\r\n                  <ion-select okText=\"Valider\" cancelText=\"Annuler\"formControlName=\"contrat_id\">\r\n                    <ion-select-option *ngFor=\"let contrat of i_t_contrat\" [value]=\"contrat.id\">\r\n                      {{contrat.name}}</ion-select-option>\r\n                  </ion-select>\r\n                </ion-item>\r\n\r\n\r\n                <ion-item>\r\n                  <ion-label position=\"floating\">Date debut contrat</ion-label>\r\n                  <ion-datetime formControlName=\"date_debut_contrat\" display-format=\"YYYY-MM-DD\"\r\n                    picker-format=\"YYYY-MM-DD\"></ion-datetime>\r\n                </ion-item>\r\n\r\n                <ion-item>\r\n                  <ion-label position=\"floating\">Date fin contrat</ion-label>\r\n                  <ion-datetime formControlName=\"date_fin_contrat\" display-format=\"YYYY-MM-DD\"\r\n                    picker-format=\"YYYY-MM-DD\"></ion-datetime>\r\n                </ion-item>\r\n              </p-tabPanel>\r\n\r\n              <p-tabPanel header=\"ACTIVATION\">\r\n                <ion-item>\r\n                  <ion-label position=\"floating\">Coopération ITG</ion-label>\r\n                  <ion-select okText=\"Valider\" cancelText=\"Annuler\"formControlName=\"cooperation_itg_id\">\r\n                    <ion-select-option *ngFor=\"let cooperation_itg of i_t_cooperation_itg\" [value]=\"cooperation_itg.id\">\r\n                      {{cooperation_itg.name}}</ion-select-option>\r\n                  </ion-select>\r\n                </ion-item>\r\n\r\n                <ion-item>\r\n                  <ion-label position=\"floating\">Cible Activation</ion-label>\r\n                  <ion-select okText=\"Valider\" cancelText=\"Annuler\"formControlName=\"cible_activation_id\">\r\n                    <ion-select-option *ngFor=\"let cible_activation of i_t_cible_activation\" [value]=\"cible_activation.id\">\r\n                      {{cible_activation.name}}</ion-select-option>\r\n                  </ion-select>\r\n                </ion-item>\r\n\r\n                <ion-item>\r\n                  <ion-label position=\"floating\">Activation autorisée</ion-label>\r\n                  <ion-select okText=\"Valider\" cancelText=\"Annuler\"formControlName=\"activation_autorisee_id\">\r\n                    <ion-select-option *ngFor=\"let activation_autorisee of i_t_activation_autorisee\"\r\n                      [value]=\"activation_autorisee.id\"> {{activation_autorisee.name}}</ion-select-option>\r\n                  </ion-select>\r\n                </ion-item>\r\n\r\n                <ion-item>\r\n                  <ion-label position=\"floating\">Préférence animateur</ion-label>\r\n                  <ion-select okText=\"Valider\" cancelText=\"Annuler\"formControlName=\"preference_animateur_id\">\r\n                    <ion-select-option *ngFor=\"let preference_animateur of i_t_preference_animateur\"\r\n                      [value]=\"preference_animateur.id\"> {{preference_animateur.name}}</ion-select-option>\r\n                  </ion-select>\r\n                </ion-item>\r\n\r\n              </p-tabPanel>\r\n\r\n              <p-tabPanel header=\"APPROVISIONNEMENT\">\r\n                <ion-item>\r\n                  <ion-label position=\"floating\">Fréquence d'approvisionnement</ion-label>\r\n                  <ion-select okText=\"Valider\" cancelText=\"Annuler\"formControlName=\"frequence_approvisionnement_id\">\r\n                    <ion-select-option *ngFor=\"let frequence_appro of i_t_frequence_approvisionnement\"\r\n                      [value]=\"frequence_appro.id\"> {{frequence_appro.name}}</ion-select-option>\r\n                  </ion-select>\r\n                </ion-item>\r\n\r\n                <!--<ion-item>\r\n                  <ion-label position=\"floating\">Source d'approvisionnement</ion-label>\r\n                  <ion-select okText=\"Valider\" cancelText=\"Annuler\"formControlName=\"new_source_approvisionnement_id\">\r\n                    <ion-select-option *ngFor=\"let source_appro of i_t_source_approvisionnement\"\r\n                      [value]=\"source_appro.id\"> {{source_appro.name}}</ion-select-option>\r\n                  </ion-select>\r\n                </ion-item>\r\n\r\n                <ion-item>\r\n                  <ion-label position=\"floating\">Fournisseur principal</ion-label>\r\n                  <ion-select okText=\"Valider\" cancelText=\"Annuler\"formControlName=\"new_fournisseur_principal_id\">\r\n                    <ion-select-option *ngFor=\"let fornisseur_principale of i_t_fournisseur_principale\"\r\n                      [value]=\"fornisseur_principale.id\"> {{fornisseur_principale.name}}</ion-select-option>\r\n                  </ion-select>\r\n                </ion-item>\r\n\r\n                <ion-item>\r\n                  <ion-label position=\"floating\">Fournisseur secondaire</ion-label>\r\n                  <ion-select okText=\"Valider\" cancelText=\"Annuler\"formControlName=\"new_fournisseur_secondaire_id\">\r\n                    <ion-select-option *ngFor=\"let fournisseur_secondaire of i_t_fournisseur_secondaire\"\r\n                      [value]=\"fournisseur_secondaire.id\"> {{fournisseur_secondaire.name}}</ion-select-option>\r\n                  </ion-select>\r\n                </ion-item> -->\r\n\r\n                <div>\r\n                  <h6>Source d'approvisionnement</h6>\r\n                  <p-autoComplete class = \"atc\" formControlName=\"new_source_approvisionnement_id\" [suggestions]=\"filteredSourceAppro\"\r\n                    (completeMethod)=\"filterSourceAppro($event)\" field=\"name\" [size]=\"50\" [minLength]=\"1\" appendTo = \"body\">\r\n                  </p-autoComplete>\r\n                </div>\r\n\r\n                <div>\r\n                  <h6>Fournisseur principal</h6>\r\n                  <p-autoComplete class = \"atc\" formControlName=\"new_fournisseur_principal_id\" [suggestions]=\"filteredfournisseur_principal\"\r\n                    (completeMethod)=\"filterfournisseur_principal($event)\" field=\"name\" [size]=\"50\" [minLength]=\"1\" appendTo = \"body\">\r\n                  </p-autoComplete>\r\n                </div>\r\n\r\n                <div>\r\n                  <h6>Fournisseur secondaire</h6>\r\n                  <p-autoComplete class = \"atc\" formControlName=\"new_fournisseur_secondaire_id\" [suggestions]=\"filteredfournisseur_secondaire\"\r\n                    (completeMethod)=\"filterfournisseur_secondaire($event)\" field=\"name\" [size]=\"50\" [minLength]=\"1\" appendTo = \"body\">\r\n                  </p-autoComplete>\r\n                </div>\r\n\r\n              </p-tabPanel>\r\n\r\n            </p-tabView>\r\n\r\n            <!--ZAVATRA MITSIVALANA-->\r\n\r\n\r\n            <!--Commentaire-->\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Commentaires</ion-label>\r\n              <ion-textarea formControlName=\"commentaire\"></ion-textarea>\r\n            </ion-item>\r\n\r\n            <!--Commentaire-->\r\n\r\n\r\n          </div>\r\n\r\n        </form>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n\r\n\r\n    <div class=\"footer\">\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <p-dialog [(visible)]=\"display_2\" [modal]=\"true\" [responsive]=\"true\" styleClass=\"mydialog\" appendTo=\"body\">\r\n    <ion-img [src]=\"filePath\"> </ion-img>\r\n  </p-dialog>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/clients/new-client/new-client.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/clients/new-client/new-client.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body {\n  width: 100%;\n  height: 100%;\n  background-color: white; }\n\nh3 {\n  font-size: 22px;\n  color: gray;\n  margin-left: 4px;\n  margin-top: 0;\n  margin-bottom: 0px; }\n\n.btn_nw_cr {\n  margin-left: 6px; }\n\n.bt {\n  margin-left: 2px; }\n\n.title_body {\n  margin-top: 0px;\n  padding-top: 13px;\n  height: 48px;\n  padding-bottom: 13px; }\n\n.archive {\n  height: 48px;\n  background-color: #E2E2E0; }\n\n.div_btn {\n  text-align: -webkit-right; }\n\n.form {\n  width: 100%;\n  height: 100%;\n  background-color: white; }\n\n.cam {\n  text-align: -webkit-center;\n  width: 100px;\n  display: block;\n  border: 1px solid gray; }\n\n.photo {\n  width: 98%;\n  margin-top: 8px; }\n\n.form_item {\n  margin-bottom: 30px;\n  margin-right: 14px; }\n\n.form_inside {\n  width: 98%;\n  margin-left: 1%;\n  margin-right: 1%; }\n\n.gps {\n  margin-top: 2px;\n  margin-left: 10px; }\n\np.canal {\n  font-weight: bold;\n  color: #21B799; }\n\n.example-chip-list {\n  width: 100%; }\n\n:host ::ng-deep .ui-autocomplete .ui-autocomplete-input {\n  border-radius: 0px !important;\n  border-top: 0px !important;\n  border-left: 0px !important;\n  border-right: 0px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHJpYW1hbmFqYS9Eb2N1bWVudHMvaW9uaWMgcHJvamVjdC9rcm9ub3NfbWcvc3JjL2FwcC9jbGllbnRzL25ldy1jbGllbnQvbmV3LWNsaWVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHVCQUF1QixFQUFBOztBQUUzQjtFQUNJLGVBQWU7RUFDZixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxnQkFDSixFQUFBOztBQUVBO0VBQ0ksZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osb0JBQW9CLEVBQUE7O0FBR3hCO0VBQ0ksWUFBWTtFQUNaLHlCQUNKLEVBQUE7O0FBRUE7RUFDSSx5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHVCQUF1QixFQUFBOztBQUczQjtFQUNJLDBCQUEwQjtFQUMxQixZQUFZO0VBQ1osY0FBYztFQUNkLHNCQUNKLEVBQUE7O0FBRUE7RUFDSSxVQUFVO0VBQ1YsZUFBZSxFQUFBOztBQUduQjtFQUNJLG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxVQUFVO0VBQ1YsZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGVBQWU7RUFDZixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxpQkFBaUI7RUFDakIsY0FBYyxFQUFBOztBQUVsQjtFQUNJLFdBQ0osRUFBQTs7QUFNQTtFQUNJLDZCQUE2QjtFQUM3QiwwQkFBMEI7RUFDMUIsMkJBQTRCO0VBQzVCLDRCQUE2QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY2xpZW50cy9uZXctY2xpZW50L25ldy1jbGllbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvZHl7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbmgze1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5cclxuLmJ0bl9ud19jcntcclxuICAgIG1hcmdpbi1sZWZ0OiA2cHg7XHJcbn1cclxuXHJcbi5idHtcclxuICAgIG1hcmdpbi1sZWZ0IDogMnB4XHJcbn1cclxuXHJcbi50aXRsZV9ib2R5e1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEzcHg7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTNweDtcclxufVxyXG5cclxuLmFyY2hpdmV7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTJFMkUwXHJcbn1cclxuXHJcbi5kaXZfYnRuIHtcclxuICAgIHRleHQtYWxpZ246IC13ZWJraXQtcmlnaHQ7XHJcbn1cclxuXHJcbi5mb3JtIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5jYW0ge1xyXG4gICAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXlcclxufVxyXG5cclxuLnBob3RvIHtcclxuICAgIHdpZHRoOiA5OCU7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbn1cclxuXHJcbi5mb3JtX2l0ZW0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTRweDtcclxufVxyXG5cclxuLmZvcm1faW5zaWRlIHtcclxuICAgIHdpZHRoOiA5OCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMSU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDElO1xyXG59XHJcblxyXG4uZ3BzIHtcclxuICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG5wLmNhbmFsIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICMyMUI3OTk7XHJcbn1cclxuLmV4YW1wbGUtY2hpcC1saXN0e1xyXG4gICAgd2lkdGg6IDEwMCVcclxufVxyXG5cclxuLmF0YyB7XHJcbiAgIFxyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLnVpLWF1dG9jb21wbGV0ZSAudWktYXV0b2NvbXBsZXRlLWlucHV0IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItbGVmdCA6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJpZ2h0IDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/clients/new-client/new-client.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/clients/new-client/new-client.page.ts ***!
  \*******************************************************/
/*! exports provided: NewClientPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewClientPage", function() { return NewClientPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _model_DAO_database_manager_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../model/DAO/database_manager.model */ "./src/app/model/DAO/database_manager.model.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_full_screen_image_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/full-screen-image/ngx */ "./node_modules/@ionic-native/full-screen-image/ngx/index.js");
/* harmony import */ var src_app_model_helper_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/model/helper/auth */ "./src/app/model/helper/auth.ts");
/* harmony import */ var _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/base64/ngx */ "./node_modules/@ionic-native/base64/ngx/index.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");














var NewClientPage = /** @class */ (function () {
    function NewClientPage(loadingController, alertController, load, b64, actRoute, fullScreenImage, storage, messageService, toast, dbm, form_builder, router, camera, geolocation, alert) {
        var _this = this;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.load = load;
        this.b64 = b64;
        this.actRoute = actRoute;
        this.fullScreenImage = fullScreenImage;
        this.storage = storage;
        this.messageService = messageService;
        this.toast = toast;
        this.dbm = dbm;
        this.form_builder = form_builder;
        this.router = router;
        this.camera = camera;
        this.geolocation = geolocation;
        this.alert = alert;
        this.disable_save = false;
        this.i_t_activation_autorisee = [];
        this.i_t_cible_activation = [];
        this.i_t_cible_installation_presentoirs = [];
        this.i_t_activite_pos = [];
        this.i_t_agence = [];
        this.i_t_agence_filtered = [];
        this.i_t_classification1 = [];
        this.i_t_classification2 = [];
        this.i_t_contrat = [];
        this.i_t_cooperation_itg = [];
        this.i_t_couverture_commerciale = [];
        this.i_t_emplacement = [];
        this.i_t_enseigne_appartenance = [];
        this.i_t_frequence_approvisionnement = [];
        this.i_t_frequence_visite = [];
        this.i_t_permanent_posm = [];
        this.i_t_preference_animateur = [];
        this.i_t_proximite = [];
        this.i_t_secteur = [];
        this.i_t_type_client = [];
        this.i_t_type_quartier = [];
        this.i_t_ville = [];
        this.i_t_zone = [];
        this.i_t_fournisseur_secondaire = [];
        this.i_t_fournisseur_principale = [];
        this.i_t_region = [];
        this.i_t_zone_filtered = [];
        this.i_t_secteur_filtered = [];
        this.i_t_canal = [];
        this.i_t_canal_filtered = [];
        this.users_same_secteur = [];
        this.display_2 = false;
        this.invalid_fields = [];
        this.canal = "";
        this.id_contrat = 0;
        this.window = window;
        this.display = false;
        this.cover = "cover";
        this.loadIndicator = false;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_13__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_13__["COMMA"]];
        this.navigationExtras = {
            queryParams: {
                "color": String,
                "unsynced": String
            }
        };
        this.router.events.subscribe(function (routerEvent) {
            if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationStart"]) {
                _this.loadIndicator = true;
            }
            if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"]) {
                _this.loadIndicator = false;
            }
        });
    }
    NewClientPage.prototype.go_sync = function () {
        var _this = this;
        this.dbm.verify_data().then(function (data) {
            _this.navigationExtras.queryParams = {
                "color": data.color,
                "unsynced": data.non_synced
            };
            _this.router.navigate(["synchro"], _this.navigationExtras);
        });
    };
    NewClientPage.prototype.ionViewWillEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var date, _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        date = new Date();
                        _a = this;
                        return [4 /*yield*/, this.loadingController.create({
                                message: "Veuillez patienter ...."
                            })];
                    case 1:
                        _a.load2 = _b.sent();
                        this.charge_data();
                        return [2 /*return*/];
                }
            });
        });
    };
    NewClientPage.prototype.charge_data = function () {
        var _this = this;
        this.dbm.select_basic_data_2("i_t_type_client").then(function (data) {
            _this.i_t_type_client = data;
        });
        this.dbm.get_mes_villes().then(function (villes) {
            _this.i_t_ville = villes;
        });
        this.dbm.select_basic_data_2("i_t_emplacement").then(function (data) {
            _this.i_t_emplacement = data;
        });
        this.dbm.select_basic_data_2("i_t_proximite").then(function (data) {
            _this.i_t_proximite = data;
        });
        this.dbm.select_basic_data_2("i_t_type_quartier").then(function (data) {
            _this.i_t_type_quartier = data;
        });
        this.dbm.select_i_t_type_client().then(function (data) {
            _this.i_t_source_approvisionnement = data;
        });
        this.dbm.select_basic_data("i_t_activite_pos").then(function (data) {
            _this.i_t_activite_pos = data;
        });
        this.dbm.select_basic_data_2("i_t_enseigne_appartenance").then(function (data) {
            _this.i_t_enseigne_appartenance = data;
        });
        this.dbm.select_basic_data_2("i_t_classification1").then(function (data) {
            _this.i_t_classification1 = data;
        });
        this.dbm.select_basic_data_2("i_t_classification2").then(function (data) {
            _this.i_t_classification2 = data;
        });
        this.dbm.select_basic_data_2("i_t_couverture_commerciale").then(function (data) {
            _this.i_t_couverture_commerciale = data;
        });
        this.dbm.select_basic_data_2("i_t_frequence_visite").then(function (data) {
            _this.i_t_frequence_visite = data;
        });
        this.dbm.select_basic_data_2("i_t_canal").then(function (data) {
            _this.i_t_canal = data;
        });
        this.dbm.select_basic_data_2("i_t_cible_installation_presentoirs").then(function (data) {
            _this.i_t_cible_installation_presentoirs = data;
        });
        this.dbm.select_data_with_table_name("i_t_permanent_posm").then(function (data) {
            _this.i_t_permanent_posm = data;
        });
        this.dbm.select_basic_data_2("i_t_cooperation_itg").then(function (data) {
            _this.i_t_cooperation_itg = data;
        });
        this.dbm.select_basic_data_2("i_t_activation_autorisee").then(function (data) {
            _this.i_t_activation_autorisee = data;
        });
        this.dbm.select_basic_data_2("i_t_preference_animateur").then(function (data) {
            _this.i_t_preference_animateur = data;
        });
        /*this.dbm.select_basic_data_2("i_t_cible_activation").then(data => {
          this.i_t_cible_activation = data;
        });*/
        this.dbm.select_basic_data_3("i_t_cible_activation").then(function (data) {
            _this.i_t_cible_activation = data;
        });
        this.dbm.select_basic_data_2("i_t_frequence_approvisionnement").then(function (data) {
            _this.i_t_frequence_approvisionnement = data;
        });
        this.dbm.get_name_id_fournisseur(null).then(function (data) {
            _this.i_t_fournisseur_principale = data;
            _this.i_t_fournisseur_secondaire = data;
            //this.i_t_source_approvisionnement = data;
        });
    };
    NewClientPage.prototype.charge_data_2 = function () {
        var _this = this;
        this.actRoute.data.subscribe(function (details) {
            console.log("details ==> ", details);
            _this.i_t_region = details.data.i_t_region;
            _this.i_t_permanent_posm = details.data.i_t_permanent_posm;
            _this.res_user = details.data.res_users;
            _this.i_t_agence = details.data.i_t_agence;
            //this.i_t_zone = details.data.i_t_zone ;
            _this.i_t_activite_pos = details.data.i_t_activite_pos;
            _this.i_t_activation_autorisee = details.data.i_t_activation_autorisee;
            _this.i_t_cible_activation = details.data.i_t_cible_activation;
            _this.i_t_cible_installation_presentoirs = details.data.i_t_cible_installation_presentoirs;
            _this.i_t_classification1 = details.data.i_t_classification1;
            _this.i_t_classification2 = details.data.i_t_classification2;
            _this.i_t_contrat = details.data.i_t_contrat;
            _this.i_t_cooperation_itg = details.data.i_t_cooperation_itg;
            _this.i_t_couverture_commerciale = details.data.i_t_couverture_commerciale;
            _this.i_t_emplacement = details.data.i_t_emplacement;
            _this.i_t_enseigne_appartenance = details.data.i_t_enseigne_appartenance;
            _this.i_t_frequence_approvisionnement = details.data.i_t_frequence_approvisionnement;
            _this.i_t_frequence_visite = details.data.i_t_frequence_visite;
            _this.i_t_preference_animateur = details.data.i_t_preference_animateur;
            _this.i_t_proximite = details.data.i_t_proximite;
            _this.i_t_secteur = details.data.i_t_secteur;
            _this.i_t_type_client = details.data.i_t_type_client;
            _this.i_t_type_quartier = details.data.i_t_type_quartier;
            _this.i_t_ville = details.data.i_t_ville;
            _this.i_t_source_approvisionnement = details.data.i_t_fournisseur;
            _this.i_t_canal = details.data.i_t_canal;
            _this.i_t_fournisseur_principale = details.data.i_t_fournisseur;
            _this.i_t_fournisseur_secondaire = details.data.i_t_fournisseur;
        });
    };
    NewClientPage.prototype.ngOnInit = function () {
        var _this = this;
        this.dbm.get_reg_sec_ag().then(function (data) {
            if (data) {
                _this.i_t_agence = data[0].agence;
                _this.i_t_region = data[0].region;
                _this.i_t_secteur = data[0].secteur;
                _this.my_agence = _this.i_t_agence[0].name;
                _this.my_region = _this.i_t_region[0].name;
            }
        });
        this.actRoute.queryParams.subscribe(function (data) {
            _this.color_icon = data["color"];
            _this.itemes = [
                { label: 'Déconnecter', icon: 'pi pi-fw pi-plus' },
            ];
            _this.items_sync = [
                { label: data['unsynced'] },
            ];
        });
        this.itemes = [
            { label: 'Déconnecter', icon: 'pi pi-fw pi-plus' },
        ];
        this.items = [
            { label: 'PROSPECT' },
            { label: 'VALIDÉE PAR SUPERVISEUR' },
            { label: 'VALIDÉE PAR ADMINISTRATEUR' },
        ];
        this.itemsActions = [
            { label: 'VALIDÉE PAR SUPERVISEUR' },
            { label: 'VALIDÉE PAR ADMINISTRATEUR' },
        ];
        this.fiche_client = this.form_builder.group({
            name: [''],
            region_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            agence_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            //zone_id: [''],
            secteur_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            nom_pos: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            nom_gerant: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            adresse: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            repere: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            quartier: [''],
            ville_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            numero_telephone1: [''],
            numero_telephone2: [''],
            numero_telephone3: [''],
            emplacement_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            proximite_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            type_quartier_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            provider_latitude: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            provider_longitude: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            type_client_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            activite_pos_id: [''],
            enseigne_appartenance_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            classification1_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            classification2_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            couverture_commerciale_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            frequence_visite_id: [''],
            user_id: [''],
            canal_id: [''],
            photo_uri: [''],
            photo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            cible_installation_presentoirs_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            permanent_POSM_id: [''],
            contrat_id: [''],
            date_debut_contrat: [''],
            date_fin_contrat: [''],
            cooperation_itg_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            cible_activation_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            activation_autorisee_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            preference_animateur_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            frequence_approvisionnement_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            new_source_approvisionnement_id: [''],
            new_fournisseur_principal_id: [''],
            new_fournisseur_secondaire_id: [''],
            visite: [''],
            commentaire: [''],
            state: ['']
        });
        this.fiche_client.controls['region_id'].disable();
        this.fiche_client.controls['agence_id'].disable();
    };
    NewClientPage.prototype.takePicture = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var cameraOptions, imagePath;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cameraOptions = {
                            quality: 100,
                            destinationType: this.camera.DestinationType.FILE_URI,
                            encodingType: this.camera.EncodingType.JPEG,
                            mediaType: this.camera.MediaType.PICTURE,
                            targetHeight: 1024,
                            targetWidth: 1024,
                            cameraDirection: 1,
                            correctOrientation: true,
                        };
                        return [4 /*yield*/, this.camera.getPicture(cameraOptions)];
                    case 1:
                        imagePath = _a.sent();
                        this.fiche_client.controls['photo_uri'].setValue(this.window.Ionic.WebView.convertFileSrc(imagePath));
                        if (this.window.Ionic.WebView.convertFileSrc(imagePath).includes("http://localhost/_app_file_/") == true) {
                            this.b64.encodeFile(this.window.Ionic.WebView.convertFileSrc(imagePath).replace("http://localhost/_app_file_/", "file:///")).then(function (result) {
                                result = result.split(',')[1];
                                _this.photo = result;
                                _this.fiche_client.controls['photo'].setValue(result);
                            });
                        }
                        return [2 /*return*/, this.window.Ionic.WebView.convertFileSrc(imagePath)];
                }
            });
        });
    };
    NewClientPage.prototype.showImageFromCamera = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4 /*yield*/, this.takePicture()];
                    case 1:
                        _a.filePath = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _b.sent();
                        this.fiche_client.controls['canal_id'];
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    NewClientPage.prototype.getMyLocation = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var options, loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            enableHighAccuracy: true,
                            timeout: 60000,
                            maximumAge: 0
                        };
                        return [4 /*yield*/, this.load.create({
                                duration: 6000
                            })];
                    case 1:
                        loading = _a.sent();
                        loading.present();
                        return [4 /*yield*/, this.geolocation.getCurrentPosition(options).then(function (resp) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var alert_1;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            this.resp = resp.coords;
                                            if (!(resp.coords.longitude && resp.coords.longitude)) return [3 /*break*/, 1];
                                            this.fiche_client.controls['provider_longitude'].setValue(resp.coords.longitude);
                                            this.fiche_client.controls['provider_latitude'].setValue(resp.coords.latitude);
                                            return [3 /*break*/, 4];
                                        case 1: return [4 /*yield*/, this.alertController.create({
                                                message: 'Merci de vérifier si le GPS est activé et/ou changer de position.',
                                                buttons: ['OK']
                                            })];
                                        case 2:
                                            alert_1 = _a.sent();
                                            return [4 /*yield*/, alert_1.present()];
                                        case 3:
                                            _a.sent();
                                            _a.label = 4;
                                        case 4:
                                            loading.dismiss();
                                            return [2 /*return*/];
                                    }
                                });
                            }); }).catch(function (error) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var alert;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.alertController.create({
                                                message: 'Merci de vérifier si le GPS est activé et/ou changer de position.',
                                                buttons: ['OK']
                                            })];
                                        case 1:
                                            alert = _a.sent();
                                            return [4 /*yield*/, alert.present()];
                                        case 2:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    NewClientPage.prototype.open_fiche_client = function () {
        this.router.navigate(['fiches-client'], this.navigationExtras);
    };
    NewClientPage.prototype.make_alert = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var x;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alert.create({
                            message: message,
                            header: "test",
                        })];
                    case 1:
                        x = _a.sent();
                        x.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    NewClientPage.prototype.make_toast = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var x;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toast.create({
                            message: message,
                            duration: 3000
                        })];
                    case 1:
                        x = _a.sent();
                        x.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    NewClientPage.prototype.save_new_client = function () {
        var _this = this;
        this.disable_save = true;
        this.load2.present();
        this.fiche_client.controls['contrat_id'].setValue(null);
        if (this.fiche_client.invalid) {
            var invalid = '';
            for (var name_1 in this.fiche_client.controls) {
                if (this.fiche_client.controls[name_1].invalid) {
                    if (name_1 == "provider_latitude" || name_1 == "provider_longitude" || name_1 == "photo") {
                        if (name_1 == "provider_latitude") {
                            invalid = '\n' + invalid + "Coordonnées GPS latitude" + '\n';
                        }
                        if (name_1 == "provider_longitude") {
                            invalid = '\n' + invalid + " - Coordonnées GPS longitude" + '\n';
                        }
                        if (name_1 == "photo") {
                            invalid = '\n' + invalid + " - Photo" + '\n';
                        }
                    }
                    else {
                        var named = name_1.charAt(0).toUpperCase() + name_1.slice(1);
                        named = named.replace(/_|(id)/gi, function (a) { return ' '; });
                        invalid = '\n' + invalid + ' - ' + named + '\n';
                    }
                }
            }
            this.messageService.add({ severity: 'error', summary: 'Les champs suivants sont incorrects : ', detail: invalid, key: 'invalid' });
            this.load2.dismiss();
            this.disable_save = false;
        }
        else {
            var state = 'brouillon';
            //this.fiche_client.controls['photo'].setValue(this.photo);
            this.fiche_client.controls['name'].setValue("/");
            this.fiche_client.controls['visite'].setValue(null);
            this.fiche_client.controls['state'].setValue(state.trim());
            this.fiche_client.controls['new_source_approvisionnement_id'].setValue(this.fiche_client.get('new_source_approvisionnement_id').value.id);
            this.fiche_client.controls['new_fournisseur_principal_id'].setValue(this.fiche_client.get('new_fournisseur_principal_id').value.id);
            this.fiche_client.controls['new_fournisseur_secondaire_id'].setValue(this.fiche_client.get('new_fournisseur_secondaire_id').value.id);
            var q1 = "insert into res_partner ";
            var q2 = "";
            var q3 = "";
            var keys = Object.keys(this.fiche_client.value);
            var values = Object.values(this.fiche_client.value);
            for (var i = 0; i < keys.length - 1; i++) {
                if (values[i] == "" || values[i] == null || values[i] == undefined) {
                    values[i] = "NULL";
                }
                if (keys[i].trim() == "contrat_id" || keys[i].trim() == "date_debut_contrat" || keys[i].trim() == "date_fin_contrat" || keys[i].trim() == "user_id" || keys[i].trim() == "permanent_POSM_id") {
                    i++;
                }
                else {
                    q2 += keys[i] + " ,";
                    if (typeof (values[i]) == "string") {
                        q3 += "\"" + this.remove_special_charachter(values[i]) + "\",";
                    }
                    else {
                        q3 += "'" + values[i] + "' ,";
                    }
                }
            }
            var query = q1 + " ( " + q2 + keys[keys.length - 1] + " , canal_id, region_id, agence_id, active) values (" + q3 + " \"" + values[values.length - 1] + "\" , " + this.fiche_client.get('canal_id').value + ", " + this.i_t_region[0].id + " , " + this.i_t_agence[0].id + ", 0)";
            var query2_1 = "insert into i_t_contrat (date_debut_contrat, date_fin_contrat) values ('" + this.fiche_client.get('date_debut_contrat').value + "' ,'" + this.fiche_client.get('date_debut_contrat').value + "' )";
            //let query5 = "insert into data_for_sync (table_name, is_synced, table_id, action_type, type) values (\"res_partner\", 0, (select max (id) + 1 from res_partner ), 1,\"insert\")";
            if (this.fiche_client.get('user_id').value.length > 0) {
                for (var i = 0; i < this.fiche_client.get('user_id').value.length; i++) {
                    var query3 = "insert into res_partner_res_users_rel (res_partner_id, res_users_id) values ( (select max (id) + 1 from res_partner ) , '" + this.fiche_client.get('user_id').value[i].value + "' )";
                    this.dbm.insert_res_data(query3).then(function (data) {
                    }).catch(function (e) {
                    });
                }
            }
            if (this.fiche_client.get('permanent_POSM_id').value.length > 0) {
                for (var i = 0; i < this.fiche_client.get('permanent_POSM_id').value.length; i++) {
                    if (this.fiche_client.get('permanent_POSM_id').value[i].value != null) {
                        var query4 = "insert into i_t_permanent_posm_res_partner_rel (partner_id, permanent_posm_id) values ( (select max (id) + 1 from res_partner ) , '" + this.fiche_client.get('permanent_POSM_id').value[i].value + "' )";
                        this.dbm.insert_res_data(query4).then(function () {
                        }).catch(function (e) {
                        });
                    }
                }
            }
            console.log("547 => ", query);
            this.dbm.insert_res_data(query).then(function () {
                _this.dbm.insert_data_for_sync("res.partner", "(select max(res_partner.id) from res_partner)", 1).then(function () {
                    _this.dbm.insert_res_data(query2_1).then(function () {
                        _this.load2.dismiss();
                        _this.make_toast("Insertion avec succès");
                        _this.router.navigate(['fiches-client'], _this.navigationExtras);
                    }).catch(function (e) {
                    });
                });
            }).catch(function (e) {
                _this.load2.dismiss();
            });
        }
    };
    NewClientPage.prototype.abort_new_client = function () {
    };
    NewClientPage.prototype.edit_image = function () {
    };
    NewClientPage.prototype.delete_image = function () {
    };
    NewClientPage.prototype.regionChange = function (event) {
        this.i_t_agence_filtered = this.i_t_agence.filter(function (agence_filtered) {
            return agence_filtered.region_id == event;
        });
    };
    NewClientPage.prototype.agenceChange = function (event) {
        var _this = this;
        /*this.i_t_zone_filtered = this.i_t_zone.filter(function(zone_filtered) {
          return zone_filtered.agence_id == event;
        });*/
        this.dbm.get_secteur_fitered(event).then(function (data) {
            _this.i_t_secteur_filtered = data;
        });
    };
    NewClientPage.prototype.zoneChange = function (event) {
        this.i_t_secteur_filtered = this.i_t_secteur.filter(function (secteur_filtered) {
            return secteur_filtered.agence_id == event;
        });
    };
    NewClientPage.prototype.secteurChange = function (event) {
        var _this = this;
        var secteur_id = event;
        this.dbm.get_user_by_secteur(secteur_id)
            .then(function (data) {
            if (data) {
                _this.users_same_secteur = data;
                _this.fiche_client.controls['user_id'].disable();
            }
        });
    };
    NewClientPage.prototype.activite_pos_Change = function (event) {
        if (event) {
            var activite_1 = this.i_t_activite_pos.find(function (pos) {
                return pos.id == event;
            });
            if (activite_1.canal_id != null) {
                this.canal_result = this.i_t_canal.find(function (can) {
                    return activite_1.canal_id == can.id;
                });
                this.fiche_client.controls['canal_id'].setValue(this.canal_result.id);
            }
            else {
                this.canal_result = {
                    id: null,
                    name: null
                };
                this.fiche_client.controls['canal_id'].setValue(null);
            }
        }
    };
    NewClientPage.prototype.open_menu = function () {
        this.router.navigate(['fiches-client'], this.navigationExtras);
    };
    NewClientPage.prototype.Deconnexion = function () {
        var _this = this;
        src_app_model_helper_auth__WEBPACK_IMPORTED_MODULE_11__["Auth"].access = true;
        this.storage.get('data_p2')
            .then(function (data2) {
            _this.data_cmp = JSON.parse(data2);
            _this.dbm.Updata_active_Login(_this.data_cmp.id);
            _this.storage.remove("data_p2");
        });
        this.router.navigate(['home'], this.navigationExtras);
    };
    NewClientPage.prototype.open_full_screen = function () {
        this.display_2 = true;
    };
    NewClientPage.prototype.remove_image = function () {
        this.filePath = null;
    };
    NewClientPage.prototype.filterSourceAppro = function (event_souce_appro) {
        var _this = this;
        this.dbm.get_name_id_fournisseur(event_souce_appro.query).then(function (data) {
            console.log(data);
            _this.filteredSourceAppro = data;
        });
    };
    NewClientPage.prototype.filterfournisseur_principal = function (event_souce_appro) {
        var _this = this;
        this.dbm.get_name_id_fournisseur(event_souce_appro.query).then(function (data) {
            console.log(data);
            _this.filteredfournisseur_principal = data;
        });
    };
    NewClientPage.prototype.filterfournisseur_secondaire = function (event_souce_appro) {
        var _this = this;
        this.dbm.get_name_id_fournisseur(event_souce_appro.query).then(function (data) {
            console.log(data);
            _this.filteredfournisseur_secondaire = data;
        });
    };
    NewClientPage.prototype.remove_special_charachter = function (soratra) {
        if (soratra == null) {
            return "";
        }
        else {
            return soratra.replace(/['"<>]/g, ' ');
        }
    };
    NewClientPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-client',
            template: __webpack_require__(/*! ./new-client.page.html */ "./src/app/clients/new-client/new-client.page.html"),
            styles: [__webpack_require__(/*! ./new-client.page.scss */ "./src/app/clients/new-client/new-client.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"], _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_12__["Base64"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _ionic_native_full_screen_image_ngx__WEBPACK_IMPORTED_MODULE_10__["FullScreenImage"], _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"], primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"], _model_DAO_database_manager_model__WEBPACK_IMPORTED_MODULE_8__["Database_manager"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]])
    ], NewClientPage);
    return NewClientPage;
}());



/***/ })

}]);
//# sourceMappingURL=clients-new-client-new-client-module.js.map