import * as tslib_1 from "tslib";
import { Component, ContentChildren, HostListener, Injector, Input, QueryList, TemplateRef, ViewChild, } from '@angular/core';
import { filter, first, debounceTime } from 'rxjs/operators';
import { Ng2Dropdown } from 'ng2-material-dropdown';
import { defaults } from '../../defaults';
import { TagInputComponent } from '../tag-input/tag-input';
var TagInputDropdown = /** @class */ (function () {
    function TagInputDropdown(injector) {
        var _this = this;
        this.injector = injector;
        /**
         * @name offset
         */
        this.offset = defaults.dropdown.offset;
        /**
         * @name focusFirstElement
         */
        this.focusFirstElement = defaults.dropdown.focusFirstElement;
        /**
         * - show autocomplete dropdown if the value of input is empty
         * @name showDropdownIfEmpty
         */
        this.showDropdownIfEmpty = defaults.dropdown.showDropdownIfEmpty;
        /**
         * - desc minimum text length in order to display the autocomplete dropdown
         * @name minimumTextLength
         */
        this.minimumTextLength = defaults.dropdown.minimumTextLength;
        /**
         * - number of items to display in the autocomplete dropdown
         * @name limitItemsTo
         */
        this.limitItemsTo = defaults.dropdown.limitItemsTo;
        /**
         * @name displayBy
         */
        this.displayBy = defaults.dropdown.displayBy;
        /**
         * @name identifyBy
         */
        this.identifyBy = defaults.dropdown.identifyBy;
        /**
         * @description a function a developer can use to implement custom matching for the autocomplete
         * @name matchingFn
         */
        this.matchingFn = defaults.dropdown.matchingFn;
        /**
         * @name appendToBody
         */
        this.appendToBody = defaults.dropdown.appendToBody;
        /**
         * @name keepOpen
         * @description option to leave dropdown open when adding a new item
         */
        this.keepOpen = defaults.dropdown.keepOpen;
        /**
         * @name dynamicUpdate
         */
        this.dynamicUpdate = defaults.dropdown.dynamicUpdate;
        /**
        * @name zIndex
         */
        this.zIndex = defaults.dropdown.zIndex;
        /**
         * list of items that match the current value of the input (for autocomplete)
         * @name items
         */
        this.items = [];
        /**
         * @name tagInput
         */
        this.tagInput = this.injector.get(TagInputComponent);
        /**
         * @name _autocompleteItems
         */
        this._autocompleteItems = [];
        /**
         *
         * @name show
         */
        this.show = function () {
            var maxItemsReached = _this.tagInput.items.length === _this.tagInput.maxItems;
            var value = _this.getFormValue();
            var hasMinimumText = value.trim().length >= _this.minimumTextLength;
            var position = _this.calculatePosition();
            var items = _this.getMatchingItems(value);
            var hasItems = items.length > 0;
            var isHidden = _this.isVisible === false;
            var showDropdownIfEmpty = _this.showDropdownIfEmpty && hasItems && !value;
            var isDisabled = _this.tagInput.disable;
            var shouldShow = isHidden && ((hasItems && hasMinimumText) || showDropdownIfEmpty);
            var shouldHide = _this.isVisible && !hasItems;
            if (_this.autocompleteObservable && hasMinimumText) {
                return _this.getItemsFromObservable(value);
            }
            if ((!_this.showDropdownIfEmpty && !value) || maxItemsReached || isDisabled) {
                return _this.dropdown.hide();
            }
            _this.setItems(items);
            if (shouldShow) {
                _this.dropdown.show(position);
            }
            else if (shouldHide) {
                _this.hide();
            }
        };
        /**
         * @name requestAdding
         * @param item {Ng2MenuItem}
         */
        this.requestAdding = function (item) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var tag;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tag = this.createTagModel(item);
                        return [4 /*yield*/, this.tagInput.onAddingRequested(true, tag).catch(function () { })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        /**
         * @name resetItems
         */
        this.resetItems = function () {
            _this.items = [];
        };
        /**
         * @name getItemsFromObservable
         * @param text
         */
        this.getItemsFromObservable = function (text) {
            _this.setLoadingState(true);
            var subscribeFn = function (data) {
                // hide loading animation
                _this.setLoadingState(false)
                    // add items
                    .populateItems(data);
                _this.setItems(_this.getMatchingItems(text));
                if (_this.items.length) {
                    _this.dropdown.show(_this.calculatePosition());
                }
                else {
                    _this.dropdown.hide();
                }
            };
            _this.autocompleteObservable(text)
                .pipe(first())
                .subscribe(subscribeFn, function () { return _this.setLoadingState(false); });
        };
    }
    Object.defineProperty(TagInputDropdown.prototype, "autocompleteItems", {
        /**
         * @name autocompleteItems
         * @desc array of items that will populate the autocomplete
         */
        get: function () {
            var _this = this;
            var items = this._autocompleteItems;
            if (!items) {
                return [];
            }
            return items.map(function (item) {
                var _a;
                return typeof item === 'string' ? (_a = {},
                    _a[_this.displayBy] = item,
                    _a[_this.identifyBy] = item,
                    _a) : item;
            });
        },
        /**
         * @name autocompleteItems
         * @param items
         */
        set: function (items) {
            this._autocompleteItems = items;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @name ngAfterviewInit
     */
    TagInputDropdown.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.onItemClicked().subscribe(function (item) {
            _this.requestAdding(item);
        });
        // reset itemsMatching array when the dropdown is hidden
        this.onHide().subscribe(this.resetItems);
        var DEBOUNCE_TIME = 200;
        var KEEP_OPEN = this.keepOpen;
        this.tagInput
            .onTextChange
            .asObservable()
            .pipe(debounceTime(DEBOUNCE_TIME), filter(function (value) {
            if (KEEP_OPEN === false) {
                return value.length > 0;
            }
            return true;
        }))
            .subscribe(this.show);
    };
    /**
     * @name updatePosition
     */
    TagInputDropdown.prototype.updatePosition = function () {
        var position = this.tagInput.inputForm.getElementPosition();
        this.dropdown.menu.updatePosition(position, this.dynamicUpdate);
    };
    Object.defineProperty(TagInputDropdown.prototype, "isVisible", {
        /**
         * @name isVisible
         */
        get: function () {
            return this.dropdown.menu.state.menuState.isVisible;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @name onHide
     */
    TagInputDropdown.prototype.onHide = function () {
        return this.dropdown.onHide;
    };
    /**
     * @name onItemClicked
     */
    TagInputDropdown.prototype.onItemClicked = function () {
        return this.dropdown.onItemClicked;
    };
    Object.defineProperty(TagInputDropdown.prototype, "selectedItem", {
        /**
         * @name selectedItem
         */
        get: function () {
            return this.dropdown.menu.state.dropdownState.selectedItem;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TagInputDropdown.prototype, "state", {
        /**
         * @name state
         */
        get: function () {
            return this.dropdown.menu.state;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @name hide
     */
    TagInputDropdown.prototype.hide = function () {
        this.resetItems();
        this.dropdown.hide();
    };
    /**
     * @name scrollListener
     */
    TagInputDropdown.prototype.scrollListener = function () {
        if (!this.isVisible || !this.dynamicUpdate) {
            return;
        }
        this.updatePosition();
    };
    /**
     * @name onWindowBlur
     */
    TagInputDropdown.prototype.onWindowBlur = function () {
        this.dropdown.hide();
    };
    /**
     * @name getFormValue
     */
    TagInputDropdown.prototype.getFormValue = function () {
        var formValue = this.tagInput.formValue;
        return formValue ? formValue.toString().trim() : '';
    };
    /**
     * @name calculatePosition
     */
    TagInputDropdown.prototype.calculatePosition = function () {
        return this.tagInput.inputForm.getElementPosition();
    };
    /**
     * @name createTagModel
     * @param item
     */
    TagInputDropdown.prototype.createTagModel = function (item) {
        var _a;
        var display = typeof item.value === 'string' ? item.value : item.value[this.displayBy];
        var value = typeof item.value === 'string' ? item.value : item.value[this.identifyBy];
        return tslib_1.__assign({}, item.value, (_a = {}, _a[this.tagInput.displayBy] = display, _a[this.tagInput.identifyBy] = value, _a));
    };
    /**
     *
     * @param value {string}
     */
    TagInputDropdown.prototype.getMatchingItems = function (value) {
        var _this = this;
        if (!value && !this.showDropdownIfEmpty) {
            return [];
        }
        var dupesAllowed = this.tagInput.allowDupes;
        return this.autocompleteItems.filter(function (item) {
            var hasValue = dupesAllowed ? false : _this.tagInput.tags.some(function (tag) {
                var identifyBy = _this.tagInput.identifyBy;
                var model = typeof tag.model === 'string' ? tag.model : tag.model[identifyBy];
                return model === item[_this.identifyBy];
            });
            return _this.matchingFn(value, item) && (hasValue === false);
        });
    };
    /**
     * @name setItems
     */
    TagInputDropdown.prototype.setItems = function (items) {
        this.items = items.slice(0, this.limitItemsTo || items.length);
    };
    /**
     * @name populateItems
     * @param data
     */
    TagInputDropdown.prototype.populateItems = function (data) {
        var _this = this;
        this.autocompleteItems = data.map(function (item) {
            var _a;
            return typeof item === 'string' ? (_a = {},
                _a[_this.displayBy] = item,
                _a[_this.identifyBy] = item,
                _a) : item;
        });
        return this;
    };
    /**
     * @name setLoadingState
     * @param state
     */
    TagInputDropdown.prototype.setLoadingState = function (state) {
        this.tagInput.isLoading = state;
        return this;
    };
    tslib_1.__decorate([
        ViewChild(Ng2Dropdown, { static: false }),
        tslib_1.__metadata("design:type", Ng2Dropdown)
    ], TagInputDropdown.prototype, "dropdown", void 0);
    tslib_1.__decorate([
        ContentChildren(TemplateRef),
        tslib_1.__metadata("design:type", QueryList)
    ], TagInputDropdown.prototype, "templates", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], TagInputDropdown.prototype, "offset", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], TagInputDropdown.prototype, "focusFirstElement", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], TagInputDropdown.prototype, "showDropdownIfEmpty", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Function)
    ], TagInputDropdown.prototype, "autocompleteObservable", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], TagInputDropdown.prototype, "minimumTextLength", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], TagInputDropdown.prototype, "limitItemsTo", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], TagInputDropdown.prototype, "displayBy", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], TagInputDropdown.prototype, "identifyBy", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Function)
    ], TagInputDropdown.prototype, "matchingFn", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], TagInputDropdown.prototype, "appendToBody", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], TagInputDropdown.prototype, "keepOpen", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], TagInputDropdown.prototype, "dynamicUpdate", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], TagInputDropdown.prototype, "zIndex", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array),
        tslib_1.__metadata("design:paramtypes", [Array])
    ], TagInputDropdown.prototype, "autocompleteItems", null);
    tslib_1.__decorate([
        HostListener('window:scroll'),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", void 0)
    ], TagInputDropdown.prototype, "scrollListener", null);
    tslib_1.__decorate([
        HostListener('window:blur'),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", void 0)
    ], TagInputDropdown.prototype, "onWindowBlur", null);
    TagInputDropdown = tslib_1.__decorate([
        Component({
            selector: 'tag-input-dropdown',
            template: "<ng2-dropdown [dynamicUpdate]=\"dynamicUpdate\">\n    <ng2-dropdown-menu [focusFirstElement]=\"focusFirstElement\"\n                       [zIndex]=\"zIndex\"\n                       [appendToBody]=\"appendToBody\"\n                       [offset]=\"offset\">\n        <ng2-menu-item *ngFor=\"let item of items; let index = index; let last = last\"\n                       [value]=\"item\"\n                       [ngSwitch]=\"!!templates.length\">\n\n            <span *ngSwitchCase=\"false\"\n                  [innerHTML]=\"item[displayBy] | highlight : tagInput.inputForm.value.value\">\n            </span>\n\n            <ng-template *ngSwitchDefault\n                      [ngTemplateOutlet]=\"templates.first\"\n                      [ngTemplateOutletContext]=\"{ item: item, index: index, last: last }\">\n            </ng-template>\n        </ng2-menu-item>\n    </ng2-dropdown-menu>\n</ng2-dropdown>\n"
        }),
        tslib_1.__metadata("design:paramtypes", [Injector])
    ], TagInputDropdown);
    return TagInputDropdown;
}());
export { TagInputDropdown };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLWlucHV0LWRyb3Bkb3duLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1jaGlwcy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZHJvcGRvd24vdGFnLWlucHV0LWRyb3Bkb3duLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNILFNBQVMsRUFDVCxlQUFlLEVBRWYsWUFBWSxFQUNaLFFBQVEsRUFDUixLQUFLLEVBQ0wsU0FBUyxFQUNULFdBQVcsRUFDWCxTQUFTLEdBRVosTUFBTSxlQUFlLENBQUM7QUFJdkIsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0QsT0FBTyxFQUFFLFdBQVcsRUFBZSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUxQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQU8zRDtJQStISSwwQkFBNkIsUUFBa0I7UUFBL0MsaUJBQW1EO1FBQXRCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFsSC9DOztXQUVHO1FBQ2EsV0FBTSxHQUFXLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1FBRTFEOztXQUVHO1FBQ2Esc0JBQWlCLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQztRQUV4RTs7O1dBR0c7UUFDYSx3QkFBbUIsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDO1FBUTVFOzs7V0FHRztRQUNhLHNCQUFpQixHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUM7UUFFeEU7OztXQUdHO1FBQ2EsaUJBQVksR0FBVyxRQUFRLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQztRQUV0RTs7V0FFRztRQUNhLGNBQVMsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FB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YVA7SUE2SEQ7UUFEQyxZQUFZLENBQUMsZUFBZSxDQUFDOzs7OzBEQU83QjtJQU1EO1FBREMsWUFBWSxDQUFDLGFBQWEsQ0FBQzs7Ozt3REFHM0I7SUF4UVEsZ0JBQWdCO1FBSjVCLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsNDVCQUFpRDtTQUNwRCxDQUFDO2lEQWdJeUMsUUFBUTtPQS9IdEMsZ0JBQWdCLENBeVk1QjtJQUFELHVCQUFDO0NBQUEsQUF6WUQsSUF5WUM7U0F6WVksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsXG4gICAgQ29udGVudENoaWxkcmVuLFxuICAgIEV2ZW50RW1pdHRlcixcbiAgICBIb3N0TGlzdGVuZXIsXG4gICAgSW5qZWN0b3IsXG4gICAgSW5wdXQsXG4gICAgUXVlcnlMaXN0LFxuICAgIFRlbXBsYXRlUmVmLFxuICAgIFZpZXdDaGlsZCxcbiAgICBBZnRlclZpZXdJbml0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gcnhcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgZmlyc3QsIGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgTmcyRHJvcGRvd24sIE5nMk1lbnVJdGVtIH0gZnJvbSAnbmcyLW1hdGVyaWFsLWRyb3Bkb3duJztcbmltcG9ydCB7IGRlZmF1bHRzIH0gZnJvbSAnLi4vLi4vZGVmYXVsdHMnO1xuaW1wb3J0IHsgVGFnTW9kZWwgfSBmcm9tICcuLi8uLi9jb3JlL2FjY2Vzc29yJztcbmltcG9ydCB7IFRhZ0lucHV0Q29tcG9uZW50IH0gZnJvbSAnLi4vdGFnLWlucHV0L3RhZy1pbnB1dCc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd0YWctaW5wdXQtZHJvcGRvd24nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi90YWctaW5wdXQtZHJvcGRvd24udGVtcGxhdGUuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgVGFnSW5wdXREcm9wZG93biBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgZHJvcGRvd25cbiAgICAgKi9cbiAgICBAVmlld0NoaWxkKE5nMkRyb3Bkb3duLCB7IHN0YXRpYzogZmFsc2UgfSkgcHVibGljIGRyb3Bkb3duOiBOZzJEcm9wZG93bjtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIG1lbnVUZW1wbGF0ZVxuICAgICAqIEBkZXNjIHJlZmVyZW5jZSB0byB0aGUgdGVtcGxhdGUgaWYgcHJvdmlkZWQgYnkgdGhlIHVzZXJcbiAgICAgKi9cbiAgICBAQ29udGVudENoaWxkcmVuKFRlbXBsYXRlUmVmKSBwdWJsaWMgdGVtcGxhdGVzOiBRdWVyeUxpc3Q8VGVtcGxhdGVSZWY8YW55Pj47XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBvZmZzZXRcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgb2Zmc2V0OiBzdHJpbmcgPSBkZWZhdWx0cy5kcm9wZG93bi5vZmZzZXQ7XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBmb2N1c0ZpcnN0RWxlbWVudFxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBmb2N1c0ZpcnN0RWxlbWVudCA9IGRlZmF1bHRzLmRyb3Bkb3duLmZvY3VzRmlyc3RFbGVtZW50O1xuXG4gICAgLyoqXG4gICAgICogLSBzaG93IGF1dG9jb21wbGV0ZSBkcm9wZG93biBpZiB0aGUgdmFsdWUgb2YgaW5wdXQgaXMgZW1wdHlcbiAgICAgKiBAbmFtZSBzaG93RHJvcGRvd25JZkVtcHR5XG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHNob3dEcm9wZG93bklmRW1wdHkgPSBkZWZhdWx0cy5kcm9wZG93bi5zaG93RHJvcGRvd25JZkVtcHR5O1xuXG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIG9ic2VydmFibGUgcGFzc2VkIGFzIGlucHV0IHdoaWNoIHBvcHVsYXRlcyB0aGUgYXV0b2NvbXBsZXRlIGl0ZW1zXG4gICAgICogQG5hbWUgYXV0b2NvbXBsZXRlT2JzZXJ2YWJsZVxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBhdXRvY29tcGxldGVPYnNlcnZhYmxlOiAodGV4dDogc3RyaW5nKSA9PiBPYnNlcnZhYmxlPGFueT47XG5cbiAgICAvKipcbiAgICAgKiAtIGRlc2MgbWluaW11bSB0ZXh0IGxlbmd0aCBpbiBvcmRlciB0byBkaXNwbGF5IHRoZSBhdXRvY29tcGxldGUgZHJvcGRvd25cbiAgICAgKiBAbmFtZSBtaW5pbXVtVGV4dExlbmd0aFxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBtaW5pbXVtVGV4dExlbmd0aCA9IGRlZmF1bHRzLmRyb3Bkb3duLm1pbmltdW1UZXh0TGVuZ3RoO1xuXG4gICAgLyoqXG4gICAgICogLSBudW1iZXIgb2YgaXRlbXMgdG8gZGlzcGxheSBpbiB0aGUgYXV0b2NvbXBsZXRlIGRyb3Bkb3duXG4gICAgICogQG5hbWUgbGltaXRJdGVtc1RvXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGxpbWl0SXRlbXNUbzogbnVtYmVyID0gZGVmYXVsdHMuZHJvcGRvd24ubGltaXRJdGVtc1RvO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgZGlzcGxheUJ5XG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGRpc3BsYXlCeSA9IGRlZmF1bHRzLmRyb3Bkb3duLmRpc3BsYXlCeTtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGlkZW50aWZ5QnlcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgaWRlbnRpZnlCeSA9IGRlZmF1bHRzLmRyb3Bkb3duLmlkZW50aWZ5Qnk7XG5cbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24gYSBmdW5jdGlvbiBhIGRldmVsb3BlciBjYW4gdXNlIHRvIGltcGxlbWVudCBjdXN0b20gbWF0Y2hpbmcgZm9yIHRoZSBhdXRvY29tcGxldGVcbiAgICAgKiBAbmFtZSBtYXRjaGluZ0ZuXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIG1hdGNoaW5nRm46ICh2YWx1ZTogc3RyaW5nLCB0YXJnZXQ6IFRhZ01vZGVsKSA9PiBib29sZWFuID0gZGVmYXVsdHMuZHJvcGRvd24ubWF0Y2hpbmdGbjtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGFwcGVuZFRvQm9keVxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBhcHBlbmRUb0JvZHkgPSBkZWZhdWx0cy5kcm9wZG93bi5hcHBlbmRUb0JvZHk7XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBrZWVwT3BlblxuICAgICAqIEBkZXNjcmlwdGlvbiBvcHRpb24gdG8gbGVhdmUgZHJvcGRvd24gb3BlbiB3aGVuIGFkZGluZyBhIG5ldyBpdGVtXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGtlZXBPcGVuID0gZGVmYXVsdHMuZHJvcGRvd24ua2VlcE9wZW47XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBkeW5hbWljVXBkYXRlXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGR5bmFtaWNVcGRhdGUgPSBkZWZhdWx0cy5kcm9wZG93bi5keW5hbWljVXBkYXRlO1xuXG4gICAgLyoqXG4gICAgKiBAbmFtZSB6SW5kZXhcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgekluZGV4ID0gZGVmYXVsdHMuZHJvcGRvd24uekluZGV4O1xuXG4gICAgLyoqXG4gICAgICogbGlzdCBvZiBpdGVtcyB0aGF0IG1hdGNoIHRoZSBjdXJyZW50IHZhbHVlIG9mIHRoZSBpbnB1dCAoZm9yIGF1dG9jb21wbGV0ZSlcbiAgICAgKiBAbmFtZSBpdGVtc1xuICAgICAqL1xuICAgIHB1YmxpYyBpdGVtczogVGFnTW9kZWxbXSA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgdGFnSW5wdXRcbiAgICAgKi9cbiAgICBwdWJsaWMgdGFnSW5wdXQ6IFRhZ0lucHV0Q29tcG9uZW50ID0gdGhpcy5pbmplY3Rvci5nZXQoVGFnSW5wdXRDb21wb25lbnQpO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgX2F1dG9jb21wbGV0ZUl0ZW1zXG4gICAgICovXG4gICAgcHJpdmF0ZSBfYXV0b2NvbXBsZXRlSXRlbXM6IFRhZ01vZGVsW10gPSBbXTtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGF1dG9jb21wbGV0ZUl0ZW1zXG4gICAgICogQHBhcmFtIGl0ZW1zXG4gICAgICovXG4gICAgcHVibGljIHNldCBhdXRvY29tcGxldGVJdGVtcyhpdGVtczogVGFnTW9kZWxbXSkge1xuICAgICAgICB0aGlzLl9hdXRvY29tcGxldGVJdGVtcyA9IGl0ZW1zO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGF1dG9jb21wbGV0ZUl0ZW1zXG4gICAgICogQGRlc2MgYXJyYXkgb2YgaXRlbXMgdGhhdCB3aWxsIHBvcHVsYXRlIHRoZSBhdXRvY29tcGxldGVcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgZ2V0IGF1dG9jb21wbGV0ZUl0ZW1zKCk6IFRhZ01vZGVsW10ge1xuICAgICAgICBjb25zdCBpdGVtcyA9IHRoaXMuX2F1dG9jb21wbGV0ZUl0ZW1zO1xuXG4gICAgICAgIGlmICghaXRlbXMpIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpdGVtcy5tYXAoKGl0ZW06IFRhZ01vZGVsKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIGl0ZW0gPT09ICdzdHJpbmcnID8ge1xuICAgICAgICAgICAgICAgIFt0aGlzLmRpc3BsYXlCeV06IGl0ZW0sXG4gICAgICAgICAgICAgICAgW3RoaXMuaWRlbnRpZnlCeV06IGl0ZW1cbiAgICAgICAgICAgIH0gOiBpdGVtO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGluamVjdG9yOiBJbmplY3Rvcikge31cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIG5nQWZ0ZXJ2aWV3SW5pdFxuICAgICAqL1xuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vbkl0ZW1DbGlja2VkKCkuc3Vic2NyaWJlKChpdGVtOiBOZzJNZW51SXRlbSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0QWRkaW5nKGl0ZW0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyByZXNldCBpdGVtc01hdGNoaW5nIGFycmF5IHdoZW4gdGhlIGRyb3Bkb3duIGlzIGhpZGRlblxuICAgICAgICB0aGlzLm9uSGlkZSgpLnN1YnNjcmliZSh0aGlzLnJlc2V0SXRlbXMpO1xuXG4gICAgICAgIGNvbnN0IERFQk9VTkNFX1RJTUUgPSAyMDA7XG4gICAgICAgIGNvbnN0IEtFRVBfT1BFTiA9IHRoaXMua2VlcE9wZW47XG5cbiAgICAgICAgdGhpcy50YWdJbnB1dFxuICAgICAgICAgICAgLm9uVGV4dENoYW5nZVxuICAgICAgICAgICAgLmFzT2JzZXJ2YWJsZSgpXG4gICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgICBkZWJvdW5jZVRpbWUoREVCT1VOQ0VfVElNRSksXG4gICAgICAgICAgICAgICAgZmlsdGVyKCh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChLRUVQX09QRU4gPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUubGVuZ3RoID4gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHRoaXMuc2hvdyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgdXBkYXRlUG9zaXRpb25cbiAgICAgKi9cbiAgICBwdWJsaWMgdXBkYXRlUG9zaXRpb24oKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy50YWdJbnB1dC5pbnB1dEZvcm0uZ2V0RWxlbWVudFBvc2l0aW9uKCk7XG5cbiAgICAgICAgdGhpcy5kcm9wZG93bi5tZW51LnVwZGF0ZVBvc2l0aW9uKHBvc2l0aW9uLCB0aGlzLmR5bmFtaWNVcGRhdGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGlzVmlzaWJsZVxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgaXNWaXNpYmxlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5kcm9wZG93bi5tZW51LnN0YXRlLm1lbnVTdGF0ZS5pc1Zpc2libGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgb25IaWRlXG4gICAgICovXG4gICAgcHVibGljIG9uSGlkZSgpOiBFdmVudEVtaXR0ZXI8TmcyRHJvcGRvd24+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHJvcGRvd24ub25IaWRlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIG9uSXRlbUNsaWNrZWRcbiAgICAgKi9cbiAgICBwdWJsaWMgb25JdGVtQ2xpY2tlZCgpOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRyb3Bkb3duLm9uSXRlbUNsaWNrZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgc2VsZWN0ZWRJdGVtXG4gICAgICovXG4gICAgcHVibGljIGdldCBzZWxlY3RlZEl0ZW0oKTogTmcyTWVudUl0ZW0ge1xuICAgICAgICByZXR1cm4gdGhpcy5kcm9wZG93bi5tZW51LnN0YXRlLmRyb3Bkb3duU3RhdGUuc2VsZWN0ZWRJdGVtO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHN0YXRlXG4gICAgICovXG4gICAgcHVibGljIGdldCBzdGF0ZSgpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5kcm9wZG93bi5tZW51LnN0YXRlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQG5hbWUgc2hvd1xuICAgICAqL1xuICAgIHB1YmxpYyBzaG93ID0gKCk6IHZvaWQgPT4ge1xuICAgICAgICBjb25zdCBtYXhJdGVtc1JlYWNoZWQgPSB0aGlzLnRhZ0lucHV0Lml0ZW1zLmxlbmd0aCA9PT0gdGhpcy50YWdJbnB1dC5tYXhJdGVtcztcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldEZvcm1WYWx1ZSgpO1xuICAgICAgICBjb25zdCBoYXNNaW5pbXVtVGV4dCA9IHZhbHVlLnRyaW0oKS5sZW5ndGggPj0gdGhpcy5taW5pbXVtVGV4dExlbmd0aDtcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLmNhbGN1bGF0ZVBvc2l0aW9uKCk7XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5nZXRNYXRjaGluZ0l0ZW1zKHZhbHVlKTtcbiAgICAgICAgY29uc3QgaGFzSXRlbXMgPSBpdGVtcy5sZW5ndGggPiAwO1xuICAgICAgICBjb25zdCBpc0hpZGRlbiA9IHRoaXMuaXNWaXNpYmxlID09PSBmYWxzZTtcbiAgICAgICAgY29uc3Qgc2hvd0Ryb3Bkb3duSWZFbXB0eSA9IHRoaXMuc2hvd0Ryb3Bkb3duSWZFbXB0eSAmJiBoYXNJdGVtcyAmJiAhdmFsdWU7XG4gICAgICAgIGNvbnN0IGlzRGlzYWJsZWQgPSB0aGlzLnRhZ0lucHV0LmRpc2FibGU7XG5cbiAgICAgICAgY29uc3Qgc2hvdWxkU2hvdyA9IGlzSGlkZGVuICYmICgoaGFzSXRlbXMgJiYgaGFzTWluaW11bVRleHQpIHx8IHNob3dEcm9wZG93bklmRW1wdHkpO1xuICAgICAgICBjb25zdCBzaG91bGRIaWRlID0gdGhpcy5pc1Zpc2libGUgJiYgIWhhc0l0ZW1zO1xuXG4gICAgICAgIGlmICh0aGlzLmF1dG9jb21wbGV0ZU9ic2VydmFibGUgJiYgaGFzTWluaW11bVRleHQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEl0ZW1zRnJvbU9ic2VydmFibGUodmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCghdGhpcy5zaG93RHJvcGRvd25JZkVtcHR5ICYmICF2YWx1ZSkgfHwgbWF4SXRlbXNSZWFjaGVkIHx8IGlzRGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRyb3Bkb3duLmhpZGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0SXRlbXMoaXRlbXMpO1xuXG4gICAgICAgIGlmIChzaG91bGRTaG93KSB7XG4gICAgICAgICAgICB0aGlzLmRyb3Bkb3duLnNob3cocG9zaXRpb24pO1xuICAgICAgICB9IGVsc2UgaWYgKHNob3VsZEhpZGUpIHtcbiAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgaGlkZVxuICAgICAqL1xuICAgIHB1YmxpYyBoaWRlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJlc2V0SXRlbXMoKTtcbiAgICAgICAgdGhpcy5kcm9wZG93bi5oaWRlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgc2Nyb2xsTGlzdGVuZXJcbiAgICAgKi9cbiAgICBASG9zdExpc3RlbmVyKCd3aW5kb3c6c2Nyb2xsJylcbiAgICBwdWJsaWMgc2Nyb2xsTGlzdGVuZXIoKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5pc1Zpc2libGUgfHwgIXRoaXMuZHluYW1pY1VwZGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIG9uV2luZG93Qmx1clxuICAgICAqL1xuICAgIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpibHVyJylcbiAgICBwdWJsaWMgb25XaW5kb3dCbHVyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmRyb3Bkb3duLmhpZGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBnZXRGb3JtVmFsdWVcbiAgICAgKi9cbiAgICBwcml2YXRlIGdldEZvcm1WYWx1ZSgpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBmb3JtVmFsdWUgPSB0aGlzLnRhZ0lucHV0LmZvcm1WYWx1ZTtcbiAgICAgICAgcmV0dXJuIGZvcm1WYWx1ZSA/IGZvcm1WYWx1ZS50b1N0cmluZygpLnRyaW0oKSA6ICcnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGNhbGN1bGF0ZVBvc2l0aW9uXG4gICAgICovXG4gICAgcHJpdmF0ZSBjYWxjdWxhdGVQb3NpdGlvbigpOiBDbGllbnRSZWN0IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFnSW5wdXQuaW5wdXRGb3JtLmdldEVsZW1lbnRQb3NpdGlvbigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHJlcXVlc3RBZGRpbmdcbiAgICAgKiBAcGFyYW0gaXRlbSB7TmcyTWVudUl0ZW19XG4gICAgICovXG4gICAgcHJpdmF0ZSByZXF1ZXN0QWRkaW5nID0gYXN5bmMgKGl0ZW06IE5nMk1lbnVJdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhZyA9IHRoaXMuY3JlYXRlVGFnTW9kZWwoaXRlbSk7XG4gICAgICAgIGF3YWl0IHRoaXMudGFnSW5wdXQub25BZGRpbmdSZXF1ZXN0ZWQodHJ1ZSwgdGFnKS5jYXRjaCgoKSA9PiB7fSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgY3JlYXRlVGFnTW9kZWxcbiAgICAgKiBAcGFyYW0gaXRlbVxuICAgICAqL1xuICAgIHByaXZhdGUgY3JlYXRlVGFnTW9kZWwoaXRlbTogTmcyTWVudUl0ZW0pOiBUYWdNb2RlbCB7XG4gICAgICAgIGNvbnN0IGRpc3BsYXkgPSB0eXBlb2YgaXRlbS52YWx1ZSA9PT0gJ3N0cmluZycgPyBpdGVtLnZhbHVlIDogaXRlbS52YWx1ZVt0aGlzLmRpc3BsYXlCeV07XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdHlwZW9mIGl0ZW0udmFsdWUgPT09ICdzdHJpbmcnID8gaXRlbS52YWx1ZSA6IGl0ZW0udmFsdWVbdGhpcy5pZGVudGlmeUJ5XTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uaXRlbS52YWx1ZSxcbiAgICAgICAgICAgIFt0aGlzLnRhZ0lucHV0LmRpc3BsYXlCeV06IGRpc3BsYXksXG4gICAgICAgICAgICBbdGhpcy50YWdJbnB1dC5pZGVudGlmeUJ5XTogdmFsdWVcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB2YWx1ZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0TWF0Y2hpbmdJdGVtcyh2YWx1ZTogc3RyaW5nKTogVGFnTW9kZWxbXSB7XG4gICAgICAgIGlmICghdmFsdWUgJiYgIXRoaXMuc2hvd0Ryb3Bkb3duSWZFbXB0eSkge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZHVwZXNBbGxvd2VkID0gdGhpcy50YWdJbnB1dC5hbGxvd0R1cGVzO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmF1dG9jb21wbGV0ZUl0ZW1zLmZpbHRlcigoaXRlbTogVGFnTW9kZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGhhc1ZhbHVlID0gZHVwZXNBbGxvd2VkID8gZmFsc2UgOiB0aGlzLnRhZ0lucHV0LnRhZ3Muc29tZSh0YWcgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkZW50aWZ5QnkgPSB0aGlzLnRhZ0lucHV0LmlkZW50aWZ5Qnk7XG4gICAgICAgICAgICAgICAgY29uc3QgbW9kZWwgPSB0eXBlb2YgdGFnLm1vZGVsID09PSAnc3RyaW5nJyA/IHRhZy5tb2RlbCA6IHRhZy5tb2RlbFtpZGVudGlmeUJ5XTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBtb2RlbCA9PT0gaXRlbVt0aGlzLmlkZW50aWZ5QnldO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1hdGNoaW5nRm4odmFsdWUsIGl0ZW0pICYmIChoYXNWYWx1ZSA9PT0gZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBzZXRJdGVtc1xuICAgICAqL1xuICAgIHByaXZhdGUgc2V0SXRlbXMoaXRlbXM6IFRhZ01vZGVsW10pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pdGVtcyA9IGl0ZW1zLnNsaWNlKDAsIHRoaXMubGltaXRJdGVtc1RvIHx8IGl0ZW1zLmxlbmd0aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgcmVzZXRJdGVtc1xuICAgICAqL1xuICAgIHByaXZhdGUgcmVzZXRJdGVtcyA9ICgpOiB2b2lkID0+IHtcbiAgICAgICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHBvcHVsYXRlSXRlbXNcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqL1xuICAgIHByaXZhdGUgcG9wdWxhdGVJdGVtcyhkYXRhOiBhbnkpOiBUYWdJbnB1dERyb3Bkb3duIHtcbiAgICAgICAgdGhpcy5hdXRvY29tcGxldGVJdGVtcyA9IGRhdGEubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBpdGVtID09PSAnc3RyaW5nJyA/IHtcbiAgICAgICAgICAgICAgICBbdGhpcy5kaXNwbGF5QnldOiBpdGVtLFxuICAgICAgICAgICAgICAgIFt0aGlzLmlkZW50aWZ5QnldOiBpdGVtXG4gICAgICAgICAgICB9IDogaXRlbTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgZ2V0SXRlbXNGcm9tT2JzZXJ2YWJsZVxuICAgICAqIEBwYXJhbSB0ZXh0XG4gICAgICovXG4gICAgcHJpdmF0ZSBnZXRJdGVtc0Zyb21PYnNlcnZhYmxlID0gKHRleHQ6IHN0cmluZyk6IHZvaWQgPT4ge1xuICAgICAgICB0aGlzLnNldExvYWRpbmdTdGF0ZSh0cnVlKTtcblxuICAgICAgICBjb25zdCBzdWJzY3JpYmVGbiA9IChkYXRhOiBhbnlbXSkgPT4ge1xuICAgICAgICAgICAgLy8gaGlkZSBsb2FkaW5nIGFuaW1hdGlvblxuICAgICAgICAgICAgdGhpcy5zZXRMb2FkaW5nU3RhdGUoZmFsc2UpXG4gICAgICAgICAgICAgICAgLy8gYWRkIGl0ZW1zXG4gICAgICAgICAgICAgICAgLnBvcHVsYXRlSXRlbXMoZGF0YSk7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0SXRlbXModGhpcy5nZXRNYXRjaGluZ0l0ZW1zKHRleHQpKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kcm9wZG93bi5zaG93KHRoaXMuY2FsY3VsYXRlUG9zaXRpb24oKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZHJvcGRvd24uaGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuYXV0b2NvbXBsZXRlT2JzZXJ2YWJsZSh0ZXh0KVxuICAgICAgICAgICAgLnBpcGUoZmlyc3QoKSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoc3Vic2NyaWJlRm4sICgpID0+IHRoaXMuc2V0TG9hZGluZ1N0YXRlKGZhbHNlKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgc2V0TG9hZGluZ1N0YXRlXG4gICAgICogQHBhcmFtIHN0YXRlXG4gICAgICovXG4gICAgcHJpdmF0ZSBzZXRMb2FkaW5nU3RhdGUoc3RhdGU6IGJvb2xlYW4pOiBUYWdJbnB1dERyb3Bkb3duIHtcbiAgICAgICAgdGhpcy50YWdJbnB1dC5pc0xvYWRpbmcgPSBzdGF0ZTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG4iXX0=