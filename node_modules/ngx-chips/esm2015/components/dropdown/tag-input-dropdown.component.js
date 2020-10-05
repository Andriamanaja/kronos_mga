import * as tslib_1 from "tslib";
import { Component, ContentChildren, HostListener, Injector, Input, QueryList, TemplateRef, ViewChild, } from '@angular/core';
import { filter, first, debounceTime } from 'rxjs/operators';
import { Ng2Dropdown } from 'ng2-material-dropdown';
import { defaults } from '../../defaults';
import { TagInputComponent } from '../tag-input/tag-input';
let TagInputDropdown = class TagInputDropdown {
    constructor(injector) {
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
        this.show = () => {
            const maxItemsReached = this.tagInput.items.length === this.tagInput.maxItems;
            const value = this.getFormValue();
            const hasMinimumText = value.trim().length >= this.minimumTextLength;
            const position = this.calculatePosition();
            const items = this.getMatchingItems(value);
            const hasItems = items.length > 0;
            const isHidden = this.isVisible === false;
            const showDropdownIfEmpty = this.showDropdownIfEmpty && hasItems && !value;
            const isDisabled = this.tagInput.disable;
            const shouldShow = isHidden && ((hasItems && hasMinimumText) || showDropdownIfEmpty);
            const shouldHide = this.isVisible && !hasItems;
            if (this.autocompleteObservable && hasMinimumText) {
                return this.getItemsFromObservable(value);
            }
            if ((!this.showDropdownIfEmpty && !value) || maxItemsReached || isDisabled) {
                return this.dropdown.hide();
            }
            this.setItems(items);
            if (shouldShow) {
                this.dropdown.show(position);
            }
            else if (shouldHide) {
                this.hide();
            }
        };
        /**
         * @name requestAdding
         * @param item {Ng2MenuItem}
         */
        this.requestAdding = (item) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            const tag = this.createTagModel(item);
            yield this.tagInput.onAddingRequested(true, tag).catch(() => { });
        });
        /**
         * @name resetItems
         */
        this.resetItems = () => {
            this.items = [];
        };
        /**
         * @name getItemsFromObservable
         * @param text
         */
        this.getItemsFromObservable = (text) => {
            this.setLoadingState(true);
            const subscribeFn = (data) => {
                // hide loading animation
                this.setLoadingState(false)
                    // add items
                    .populateItems(data);
                this.setItems(this.getMatchingItems(text));
                if (this.items.length) {
                    this.dropdown.show(this.calculatePosition());
                }
                else {
                    this.dropdown.hide();
                }
            };
            this.autocompleteObservable(text)
                .pipe(first())
                .subscribe(subscribeFn, () => this.setLoadingState(false));
        };
    }
    /**
     * @name autocompleteItems
     * @param items
     */
    set autocompleteItems(items) {
        this._autocompleteItems = items;
    }
    /**
     * @name autocompleteItems
     * @desc array of items that will populate the autocomplete
     */
    get autocompleteItems() {
        const items = this._autocompleteItems;
        if (!items) {
            return [];
        }
        return items.map((item) => {
            return typeof item === 'string' ? {
                [this.displayBy]: item,
                [this.identifyBy]: item
            } : item;
        });
    }
    /**
     * @name ngAfterviewInit
     */
    ngAfterViewInit() {
        this.onItemClicked().subscribe((item) => {
            this.requestAdding(item);
        });
        // reset itemsMatching array when the dropdown is hidden
        this.onHide().subscribe(this.resetItems);
        const DEBOUNCE_TIME = 200;
        const KEEP_OPEN = this.keepOpen;
        this.tagInput
            .onTextChange
            .asObservable()
            .pipe(debounceTime(DEBOUNCE_TIME), filter((value) => {
            if (KEEP_OPEN === false) {
                return value.length > 0;
            }
            return true;
        }))
            .subscribe(this.show);
    }
    /**
     * @name updatePosition
     */
    updatePosition() {
        const position = this.tagInput.inputForm.getElementPosition();
        this.dropdown.menu.updatePosition(position, this.dynamicUpdate);
    }
    /**
     * @name isVisible
     */
    get isVisible() {
        return this.dropdown.menu.state.menuState.isVisible;
    }
    /**
     * @name onHide
     */
    onHide() {
        return this.dropdown.onHide;
    }
    /**
     * @name onItemClicked
     */
    onItemClicked() {
        return this.dropdown.onItemClicked;
    }
    /**
     * @name selectedItem
     */
    get selectedItem() {
        return this.dropdown.menu.state.dropdownState.selectedItem;
    }
    /**
     * @name state
     */
    get state() {
        return this.dropdown.menu.state;
    }
    /**
     * @name hide
     */
    hide() {
        this.resetItems();
        this.dropdown.hide();
    }
    /**
     * @name scrollListener
     */
    scrollListener() {
        if (!this.isVisible || !this.dynamicUpdate) {
            return;
        }
        this.updatePosition();
    }
    /**
     * @name onWindowBlur
     */
    onWindowBlur() {
        this.dropdown.hide();
    }
    /**
     * @name getFormValue
     */
    getFormValue() {
        const formValue = this.tagInput.formValue;
        return formValue ? formValue.toString().trim() : '';
    }
    /**
     * @name calculatePosition
     */
    calculatePosition() {
        return this.tagInput.inputForm.getElementPosition();
    }
    /**
     * @name createTagModel
     * @param item
     */
    createTagModel(item) {
        const display = typeof item.value === 'string' ? item.value : item.value[this.displayBy];
        const value = typeof item.value === 'string' ? item.value : item.value[this.identifyBy];
        return Object.assign({}, item.value, { [this.tagInput.displayBy]: display, [this.tagInput.identifyBy]: value });
    }
    /**
     *
     * @param value {string}
     */
    getMatchingItems(value) {
        if (!value && !this.showDropdownIfEmpty) {
            return [];
        }
        const dupesAllowed = this.tagInput.allowDupes;
        return this.autocompleteItems.filter((item) => {
            const hasValue = dupesAllowed ? false : this.tagInput.tags.some(tag => {
                const identifyBy = this.tagInput.identifyBy;
                const model = typeof tag.model === 'string' ? tag.model : tag.model[identifyBy];
                return model === item[this.identifyBy];
            });
            return this.matchingFn(value, item) && (hasValue === false);
        });
    }
    /**
     * @name setItems
     */
    setItems(items) {
        this.items = items.slice(0, this.limitItemsTo || items.length);
    }
    /**
     * @name populateItems
     * @param data
     */
    populateItems(data) {
        this.autocompleteItems = data.map(item => {
            return typeof item === 'string' ? {
                [this.displayBy]: item,
                [this.identifyBy]: item
            } : item;
        });
        return this;
    }
    /**
     * @name setLoadingState
     * @param state
     */
    setLoadingState(state) {
        this.tagInput.isLoading = state;
        return this;
    }
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
export { TagInputDropdown };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLWlucHV0LWRyb3Bkb3duLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1jaGlwcy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZHJvcGRvd24vdGFnLWlucHV0LWRyb3Bkb3duLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNILFNBQVMsRUFDVCxlQUFlLEVBRWYsWUFBWSxFQUNaLFFBQVEsRUFDUixLQUFLLEVBQ0wsU0FBUyxFQUNULFdBQVcsRUFDWCxTQUFTLEdBRVosTUFBTSxlQUFlLENBQUM7QUFJdkIsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0QsT0FBTyxFQUFFLFdBQVcsRUFBZSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUxQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQU8zRCxJQUFhLGdCQUFnQixHQUE3QixNQUFhLGdCQUFnQjtJQStIekIsWUFBNkIsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQWxIL0M7O1dBRUc7UUFDYSxXQUFNLEdBQVcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFFMUQ7O1dBRUc7UUFDYSxzQkFBaUIsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDO1FBRXhFOzs7V0FHRztRQUNhLHdCQUFtQixHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUM7UUFRNUU7OztXQUdHO1FBQ2Esc0JBQWlCLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQztRQUV4RTs7O1dBR0c7UUFDYSxpQkFBWSxHQUFXLFFBQVEsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDO1FBRXRFOztXQUVHO1FBQ2EsY0FBUyxHQUFHLFFBQVEsQ0FBQyxR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LENBQUMsZUFBZSxDQUFDOzs7O3NEQU83QjtBQU1EO0lBREMsWUFBWSxDQUFDLGFBQWEsQ0FBQzs7OztvREFHM0I7QUF4UVEsZ0JBQWdCO0lBSjVCLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxvQkFBb0I7UUFDOUIsNDVCQUFpRDtLQUNwRCxDQUFDOzZDQWdJeUMsUUFBUTtHQS9IdEMsZ0JBQWdCLENBeVk1QjtTQXpZWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENvbXBvbmVudCxcbiAgICBDb250ZW50Q2hpbGRyZW4sXG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIEhvc3RMaXN0ZW5lcixcbiAgICBJbmplY3RvcixcbiAgICBJbnB1dCxcbiAgICBRdWVyeUxpc3QsXG4gICAgVGVtcGxhdGVSZWYsXG4gICAgVmlld0NoaWxkLFxuICAgIEFmdGVyVmlld0luaXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyByeFxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBmaXJzdCwgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBOZzJEcm9wZG93biwgTmcyTWVudUl0ZW0gfSBmcm9tICduZzItbWF0ZXJpYWwtZHJvcGRvd24nO1xuaW1wb3J0IHsgZGVmYXVsdHMgfSBmcm9tICcuLi8uLi9kZWZhdWx0cyc7XG5pbXBvcnQgeyBUYWdNb2RlbCB9IGZyb20gJy4uLy4uL2NvcmUvYWNjZXNzb3InO1xuaW1wb3J0IHsgVGFnSW5wdXRDb21wb25lbnQgfSBmcm9tICcuLi90YWctaW5wdXQvdGFnLWlucHV0JztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3RhZy1pbnB1dC1kcm9wZG93bicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3RhZy1pbnB1dC1kcm9wZG93bi50ZW1wbGF0ZS5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBUYWdJbnB1dERyb3Bkb3duIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBkcm9wZG93blxuICAgICAqL1xuICAgIEBWaWV3Q2hpbGQoTmcyRHJvcGRvd24sIHsgc3RhdGljOiBmYWxzZSB9KSBwdWJsaWMgZHJvcGRvd246IE5nMkRyb3Bkb3duO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgbWVudVRlbXBsYXRlXG4gICAgICogQGRlc2MgcmVmZXJlbmNlIHRvIHRoZSB0ZW1wbGF0ZSBpZiBwcm92aWRlZCBieSB0aGUgdXNlclxuICAgICAqL1xuICAgIEBDb250ZW50Q2hpbGRyZW4oVGVtcGxhdGVSZWYpIHB1YmxpYyB0ZW1wbGF0ZXM6IFF1ZXJ5TGlzdDxUZW1wbGF0ZVJlZjxhbnk+PjtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIG9mZnNldFxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBvZmZzZXQ6IHN0cmluZyA9IGRlZmF1bHRzLmRyb3Bkb3duLm9mZnNldDtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGZvY3VzRmlyc3RFbGVtZW50XG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGZvY3VzRmlyc3RFbGVtZW50ID0gZGVmYXVsdHMuZHJvcGRvd24uZm9jdXNGaXJzdEVsZW1lbnQ7XG5cbiAgICAvKipcbiAgICAgKiAtIHNob3cgYXV0b2NvbXBsZXRlIGRyb3Bkb3duIGlmIHRoZSB2YWx1ZSBvZiBpbnB1dCBpcyBlbXB0eVxuICAgICAqIEBuYW1lIHNob3dEcm9wZG93bklmRW1wdHlcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgc2hvd0Ryb3Bkb3duSWZFbXB0eSA9IGRlZmF1bHRzLmRyb3Bkb3duLnNob3dEcm9wZG93bklmRW1wdHk7XG5cbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24gb2JzZXJ2YWJsZSBwYXNzZWQgYXMgaW5wdXQgd2hpY2ggcG9wdWxhdGVzIHRoZSBhdXRvY29tcGxldGUgaXRlbXNcbiAgICAgKiBAbmFtZSBhdXRvY29tcGxldGVPYnNlcnZhYmxlXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGF1dG9jb21wbGV0ZU9ic2VydmFibGU6ICh0ZXh0OiBzdHJpbmcpID0+IE9ic2VydmFibGU8YW55PjtcblxuICAgIC8qKlxuICAgICAqIC0gZGVzYyBtaW5pbXVtIHRleHQgbGVuZ3RoIGluIG9yZGVyIHRvIGRpc3BsYXkgdGhlIGF1dG9jb21wbGV0ZSBkcm9wZG93blxuICAgICAqIEBuYW1lIG1pbmltdW1UZXh0TGVuZ3RoXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIG1pbmltdW1UZXh0TGVuZ3RoID0gZGVmYXVsdHMuZHJvcGRvd24ubWluaW11bVRleHRMZW5ndGg7XG5cbiAgICAvKipcbiAgICAgKiAtIG51bWJlciBvZiBpdGVtcyB0byBkaXNwbGF5IGluIHRoZSBhdXRvY29tcGxldGUgZHJvcGRvd25cbiAgICAgKiBAbmFtZSBsaW1pdEl0ZW1zVG9cbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgbGltaXRJdGVtc1RvOiBudW1iZXIgPSBkZWZhdWx0cy5kcm9wZG93bi5saW1pdEl0ZW1zVG87XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBkaXNwbGF5QnlcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgZGlzcGxheUJ5ID0gZGVmYXVsdHMuZHJvcGRvd24uZGlzcGxheUJ5O1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgaWRlbnRpZnlCeVxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBpZGVudGlmeUJ5ID0gZGVmYXVsdHMuZHJvcGRvd24uaWRlbnRpZnlCeTtcblxuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiBhIGZ1bmN0aW9uIGEgZGV2ZWxvcGVyIGNhbiB1c2UgdG8gaW1wbGVtZW50IGN1c3RvbSBtYXRjaGluZyBmb3IgdGhlIGF1dG9jb21wbGV0ZVxuICAgICAqIEBuYW1lIG1hdGNoaW5nRm5cbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgbWF0Y2hpbmdGbjogKHZhbHVlOiBzdHJpbmcsIHRhcmdldDogVGFnTW9kZWwpID0+IGJvb2xlYW4gPSBkZWZhdWx0cy5kcm9wZG93bi5tYXRjaGluZ0ZuO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgYXBwZW5kVG9Cb2R5XG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGFwcGVuZFRvQm9keSA9IGRlZmF1bHRzLmRyb3Bkb3duLmFwcGVuZFRvQm9keTtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGtlZXBPcGVuXG4gICAgICogQGRlc2NyaXB0aW9uIG9wdGlvbiB0byBsZWF2ZSBkcm9wZG93biBvcGVuIHdoZW4gYWRkaW5nIGEgbmV3IGl0ZW1cbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMga2VlcE9wZW4gPSBkZWZhdWx0cy5kcm9wZG93bi5rZWVwT3BlbjtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGR5bmFtaWNVcGRhdGVcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgZHluYW1pY1VwZGF0ZSA9IGRlZmF1bHRzLmRyb3Bkb3duLmR5bmFtaWNVcGRhdGU7XG5cbiAgICAvKipcbiAgICAqIEBuYW1lIHpJbmRleFxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyB6SW5kZXggPSBkZWZhdWx0cy5kcm9wZG93bi56SW5kZXg7XG5cbiAgICAvKipcbiAgICAgKiBsaXN0IG9mIGl0ZW1zIHRoYXQgbWF0Y2ggdGhlIGN1cnJlbnQgdmFsdWUgb2YgdGhlIGlucHV0IChmb3IgYXV0b2NvbXBsZXRlKVxuICAgICAqIEBuYW1lIGl0ZW1zXG4gICAgICovXG4gICAgcHVibGljIGl0ZW1zOiBUYWdNb2RlbFtdID0gW107XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSB0YWdJbnB1dFxuICAgICAqL1xuICAgIHB1YmxpYyB0YWdJbnB1dDogVGFnSW5wdXRDb21wb25lbnQgPSB0aGlzLmluamVjdG9yLmdldChUYWdJbnB1dENvbXBvbmVudCk7XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBfYXV0b2NvbXBsZXRlSXRlbXNcbiAgICAgKi9cbiAgICBwcml2YXRlIF9hdXRvY29tcGxldGVJdGVtczogVGFnTW9kZWxbXSA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgYXV0b2NvbXBsZXRlSXRlbXNcbiAgICAgKiBAcGFyYW0gaXRlbXNcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0IGF1dG9jb21wbGV0ZUl0ZW1zKGl0ZW1zOiBUYWdNb2RlbFtdKSB7XG4gICAgICAgIHRoaXMuX2F1dG9jb21wbGV0ZUl0ZW1zID0gaXRlbXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgYXV0b2NvbXBsZXRlSXRlbXNcbiAgICAgKiBAZGVzYyBhcnJheSBvZiBpdGVtcyB0aGF0IHdpbGwgcG9wdWxhdGUgdGhlIGF1dG9jb21wbGV0ZVxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBnZXQgYXV0b2NvbXBsZXRlSXRlbXMoKTogVGFnTW9kZWxbXSB7XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5fYXV0b2NvbXBsZXRlSXRlbXM7XG5cbiAgICAgICAgaWYgKCFpdGVtcykge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGl0ZW1zLm1hcCgoaXRlbTogVGFnTW9kZWwpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0eXBlb2YgaXRlbSA9PT0gJ3N0cmluZycgPyB7XG4gICAgICAgICAgICAgICAgW3RoaXMuZGlzcGxheUJ5XTogaXRlbSxcbiAgICAgICAgICAgICAgICBbdGhpcy5pZGVudGlmeUJ5XTogaXRlbVxuICAgICAgICAgICAgfSA6IGl0ZW07XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgaW5qZWN0b3I6IEluamVjdG9yKSB7fVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgbmdBZnRlcnZpZXdJbml0XG4gICAgICovXG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLm9uSXRlbUNsaWNrZWQoKS5zdWJzY3JpYmUoKGl0ZW06IE5nMk1lbnVJdGVtKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlcXVlc3RBZGRpbmcoaXRlbSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHJlc2V0IGl0ZW1zTWF0Y2hpbmcgYXJyYXkgd2hlbiB0aGUgZHJvcGRvd24gaXMgaGlkZGVuXG4gICAgICAgIHRoaXMub25IaWRlKCkuc3Vic2NyaWJlKHRoaXMucmVzZXRJdGVtcyk7XG5cbiAgICAgICAgY29uc3QgREVCT1VOQ0VfVElNRSA9IDIwMDtcbiAgICAgICAgY29uc3QgS0VFUF9PUEVOID0gdGhpcy5rZWVwT3BlbjtcblxuICAgICAgICB0aGlzLnRhZ0lucHV0XG4gICAgICAgICAgICAub25UZXh0Q2hhbmdlXG4gICAgICAgICAgICAuYXNPYnNlcnZhYmxlKClcbiAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICAgIGRlYm91bmNlVGltZShERUJPVU5DRV9USU1FKSxcbiAgICAgICAgICAgICAgICBmaWx0ZXIoKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKEtFRVBfT1BFTiA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZS5sZW5ndGggPiAwO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUodGhpcy5zaG93KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSB1cGRhdGVQb3NpdGlvblxuICAgICAqL1xuICAgIHB1YmxpYyB1cGRhdGVQb3NpdGlvbigpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLnRhZ0lucHV0LmlucHV0Rm9ybS5nZXRFbGVtZW50UG9zaXRpb24oKTtcblxuICAgICAgICB0aGlzLmRyb3Bkb3duLm1lbnUudXBkYXRlUG9zaXRpb24ocG9zaXRpb24sIHRoaXMuZHluYW1pY1VwZGF0ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgaXNWaXNpYmxlXG4gICAgICovXG4gICAgcHVibGljIGdldCBpc1Zpc2libGUoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRyb3Bkb3duLm1lbnUuc3RhdGUubWVudVN0YXRlLmlzVmlzaWJsZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBvbkhpZGVcbiAgICAgKi9cbiAgICBwdWJsaWMgb25IaWRlKCk6IEV2ZW50RW1pdHRlcjxOZzJEcm9wZG93bj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5kcm9wZG93bi5vbkhpZGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgb25JdGVtQ2xpY2tlZFxuICAgICAqL1xuICAgIHB1YmxpYyBvbkl0ZW1DbGlja2VkKCk6IEV2ZW50RW1pdHRlcjxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHJvcGRvd24ub25JdGVtQ2xpY2tlZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBzZWxlY3RlZEl0ZW1cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IHNlbGVjdGVkSXRlbSgpOiBOZzJNZW51SXRlbSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRyb3Bkb3duLm1lbnUuc3RhdGUuZHJvcGRvd25TdGF0ZS5zZWxlY3RlZEl0ZW07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgc3RhdGVcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IHN0YXRlKCk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRyb3Bkb3duLm1lbnUuc3RhdGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAbmFtZSBzaG93XG4gICAgICovXG4gICAgcHVibGljIHNob3cgPSAoKTogdm9pZCA9PiB7XG4gICAgICAgIGNvbnN0IG1heEl0ZW1zUmVhY2hlZCA9IHRoaXMudGFnSW5wdXQuaXRlbXMubGVuZ3RoID09PSB0aGlzLnRhZ0lucHV0Lm1heEl0ZW1zO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0Rm9ybVZhbHVlKCk7XG4gICAgICAgIGNvbnN0IGhhc01pbmltdW1UZXh0ID0gdmFsdWUudHJpbSgpLmxlbmd0aCA+PSB0aGlzLm1pbmltdW1UZXh0TGVuZ3RoO1xuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMuY2FsY3VsYXRlUG9zaXRpb24oKTtcbiAgICAgICAgY29uc3QgaXRlbXMgPSB0aGlzLmdldE1hdGNoaW5nSXRlbXModmFsdWUpO1xuICAgICAgICBjb25zdCBoYXNJdGVtcyA9IGl0ZW1zLmxlbmd0aCA+IDA7XG4gICAgICAgIGNvbnN0IGlzSGlkZGVuID0gdGhpcy5pc1Zpc2libGUgPT09IGZhbHNlO1xuICAgICAgICBjb25zdCBzaG93RHJvcGRvd25JZkVtcHR5ID0gdGhpcy5zaG93RHJvcGRvd25JZkVtcHR5ICYmIGhhc0l0ZW1zICYmICF2YWx1ZTtcbiAgICAgICAgY29uc3QgaXNEaXNhYmxlZCA9IHRoaXMudGFnSW5wdXQuZGlzYWJsZTtcblxuICAgICAgICBjb25zdCBzaG91bGRTaG93ID0gaXNIaWRkZW4gJiYgKChoYXNJdGVtcyAmJiBoYXNNaW5pbXVtVGV4dCkgfHwgc2hvd0Ryb3Bkb3duSWZFbXB0eSk7XG4gICAgICAgIGNvbnN0IHNob3VsZEhpZGUgPSB0aGlzLmlzVmlzaWJsZSAmJiAhaGFzSXRlbXM7XG5cbiAgICAgICAgaWYgKHRoaXMuYXV0b2NvbXBsZXRlT2JzZXJ2YWJsZSAmJiBoYXNNaW5pbXVtVGV4dCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SXRlbXNGcm9tT2JzZXJ2YWJsZSh2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoKCF0aGlzLnNob3dEcm9wZG93bklmRW1wdHkgJiYgIXZhbHVlKSB8fCBtYXhJdGVtc1JlYWNoZWQgfHwgaXNEaXNhYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZHJvcGRvd24uaGlkZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRJdGVtcyhpdGVtcyk7XG5cbiAgICAgICAgaWYgKHNob3VsZFNob3cpIHtcbiAgICAgICAgICAgIHRoaXMuZHJvcGRvd24uc2hvdyhwb3NpdGlvbik7XG4gICAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSGlkZSkge1xuICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBoaWRlXG4gICAgICovXG4gICAgcHVibGljIGhpZGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucmVzZXRJdGVtcygpO1xuICAgICAgICB0aGlzLmRyb3Bkb3duLmhpZGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBzY3JvbGxMaXN0ZW5lclxuICAgICAqL1xuICAgIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpzY3JvbGwnKVxuICAgIHB1YmxpYyBzY3JvbGxMaXN0ZW5lcigpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzVmlzaWJsZSB8fCAhdGhpcy5keW5hbWljVXBkYXRlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgb25XaW5kb3dCbHVyXG4gICAgICovXG4gICAgQEhvc3RMaXN0ZW5lcignd2luZG93OmJsdXInKVxuICAgIHB1YmxpYyBvbldpbmRvd0JsdXIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZHJvcGRvd24uaGlkZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGdldEZvcm1WYWx1ZVxuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0Rm9ybVZhbHVlKCk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IGZvcm1WYWx1ZSA9IHRoaXMudGFnSW5wdXQuZm9ybVZhbHVlO1xuICAgICAgICByZXR1cm4gZm9ybVZhbHVlID8gZm9ybVZhbHVlLnRvU3RyaW5nKCkudHJpbSgpIDogJyc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgY2FsY3VsYXRlUG9zaXRpb25cbiAgICAgKi9cbiAgICBwcml2YXRlIGNhbGN1bGF0ZVBvc2l0aW9uKCk6IENsaWVudFJlY3Qge1xuICAgICAgICByZXR1cm4gdGhpcy50YWdJbnB1dC5pbnB1dEZvcm0uZ2V0RWxlbWVudFBvc2l0aW9uKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgcmVxdWVzdEFkZGluZ1xuICAgICAqIEBwYXJhbSBpdGVtIHtOZzJNZW51SXRlbX1cbiAgICAgKi9cbiAgICBwcml2YXRlIHJlcXVlc3RBZGRpbmcgPSBhc3luYyAoaXRlbTogTmcyTWVudUl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgdGFnID0gdGhpcy5jcmVhdGVUYWdNb2RlbChpdGVtKTtcbiAgICAgICAgYXdhaXQgdGhpcy50YWdJbnB1dC5vbkFkZGluZ1JlcXVlc3RlZCh0cnVlLCB0YWcpLmNhdGNoKCgpID0+IHt9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBjcmVhdGVUYWdNb2RlbFxuICAgICAqIEBwYXJhbSBpdGVtXG4gICAgICovXG4gICAgcHJpdmF0ZSBjcmVhdGVUYWdNb2RlbChpdGVtOiBOZzJNZW51SXRlbSk6IFRhZ01vZGVsIHtcbiAgICAgICAgY29uc3QgZGlzcGxheSA9IHR5cGVvZiBpdGVtLnZhbHVlID09PSAnc3RyaW5nJyA/IGl0ZW0udmFsdWUgOiBpdGVtLnZhbHVlW3RoaXMuZGlzcGxheUJ5XTtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0eXBlb2YgaXRlbS52YWx1ZSA9PT0gJ3N0cmluZycgPyBpdGVtLnZhbHVlIDogaXRlbS52YWx1ZVt0aGlzLmlkZW50aWZ5QnldO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5pdGVtLnZhbHVlLFxuICAgICAgICAgICAgW3RoaXMudGFnSW5wdXQuZGlzcGxheUJ5XTogZGlzcGxheSxcbiAgICAgICAgICAgIFt0aGlzLnRhZ0lucHV0LmlkZW50aWZ5QnldOiB2YWx1ZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHZhbHVlIHtzdHJpbmd9XG4gICAgICovXG4gICAgcHJpdmF0ZSBnZXRNYXRjaGluZ0l0ZW1zKHZhbHVlOiBzdHJpbmcpOiBUYWdNb2RlbFtdIHtcbiAgICAgICAgaWYgKCF2YWx1ZSAmJiAhdGhpcy5zaG93RHJvcGRvd25JZkVtcHR5KSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkdXBlc0FsbG93ZWQgPSB0aGlzLnRhZ0lucHV0LmFsbG93RHVwZXM7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0b2NvbXBsZXRlSXRlbXMuZmlsdGVyKChpdGVtOiBUYWdNb2RlbCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaGFzVmFsdWUgPSBkdXBlc0FsbG93ZWQgPyBmYWxzZSA6IHRoaXMudGFnSW5wdXQudGFncy5zb21lKHRhZyA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaWRlbnRpZnlCeSA9IHRoaXMudGFnSW5wdXQuaWRlbnRpZnlCeTtcbiAgICAgICAgICAgICAgICBjb25zdCBtb2RlbCA9IHR5cGVvZiB0YWcubW9kZWwgPT09ICdzdHJpbmcnID8gdGFnLm1vZGVsIDogdGFnLm1vZGVsW2lkZW50aWZ5QnldO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vZGVsID09PSBpdGVtW3RoaXMuaWRlbnRpZnlCeV07XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWF0Y2hpbmdGbih2YWx1ZSwgaXRlbSkgJiYgKGhhc1ZhbHVlID09PSBmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHNldEl0ZW1zXG4gICAgICovXG4gICAgcHJpdmF0ZSBzZXRJdGVtcyhpdGVtczogVGFnTW9kZWxbXSk6IHZvaWQge1xuICAgICAgICB0aGlzLml0ZW1zID0gaXRlbXMuc2xpY2UoMCwgdGhpcy5saW1pdEl0ZW1zVG8gfHwgaXRlbXMubGVuZ3RoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSByZXNldEl0ZW1zXG4gICAgICovXG4gICAgcHJpdmF0ZSByZXNldEl0ZW1zID0gKCk6IHZvaWQgPT4ge1xuICAgICAgICB0aGlzLml0ZW1zID0gW107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgcG9wdWxhdGVJdGVtc1xuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICovXG4gICAgcHJpdmF0ZSBwb3B1bGF0ZUl0ZW1zKGRhdGE6IGFueSk6IFRhZ0lucHV0RHJvcGRvd24ge1xuICAgICAgICB0aGlzLmF1dG9jb21wbGV0ZUl0ZW1zID0gZGF0YS5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIGl0ZW0gPT09ICdzdHJpbmcnID8ge1xuICAgICAgICAgICAgICAgIFt0aGlzLmRpc3BsYXlCeV06IGl0ZW0sXG4gICAgICAgICAgICAgICAgW3RoaXMuaWRlbnRpZnlCeV06IGl0ZW1cbiAgICAgICAgICAgIH0gOiBpdGVtO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBnZXRJdGVtc0Zyb21PYnNlcnZhYmxlXG4gICAgICogQHBhcmFtIHRleHRcbiAgICAgKi9cbiAgICBwcml2YXRlIGdldEl0ZW1zRnJvbU9ic2VydmFibGUgPSAodGV4dDogc3RyaW5nKTogdm9pZCA9PiB7XG4gICAgICAgIHRoaXMuc2V0TG9hZGluZ1N0YXRlKHRydWUpO1xuXG4gICAgICAgIGNvbnN0IHN1YnNjcmliZUZuID0gKGRhdGE6IGFueVtdKSA9PiB7XG4gICAgICAgICAgICAvLyBoaWRlIGxvYWRpbmcgYW5pbWF0aW9uXG4gICAgICAgICAgICB0aGlzLnNldExvYWRpbmdTdGF0ZShmYWxzZSlcbiAgICAgICAgICAgICAgICAvLyBhZGQgaXRlbXNcbiAgICAgICAgICAgICAgICAucG9wdWxhdGVJdGVtcyhkYXRhKTtcblxuICAgICAgICAgICAgdGhpcy5zZXRJdGVtcyh0aGlzLmdldE1hdGNoaW5nSXRlbXModGV4dCkpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5pdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRyb3Bkb3duLnNob3codGhpcy5jYWxjdWxhdGVQb3NpdGlvbigpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kcm9wZG93bi5oaWRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5hdXRvY29tcGxldGVPYnNlcnZhYmxlKHRleHQpXG4gICAgICAgICAgICAucGlwZShmaXJzdCgpKVxuICAgICAgICAgICAgLnN1YnNjcmliZShzdWJzY3JpYmVGbiwgKCkgPT4gdGhpcy5zZXRMb2FkaW5nU3RhdGUoZmFsc2UpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBzZXRMb2FkaW5nU3RhdGVcbiAgICAgKiBAcGFyYW0gc3RhdGVcbiAgICAgKi9cbiAgICBwcml2YXRlIHNldExvYWRpbmdTdGF0ZShzdGF0ZTogYm9vbGVhbik6IFRhZ0lucHV0RHJvcGRvd24ge1xuICAgICAgICB0aGlzLnRhZ0lucHV0LmlzTG9hZGluZyA9IHN0YXRlO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cbiJdfQ==