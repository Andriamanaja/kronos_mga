/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { FieldType } from '@ngx-formly/material/form-field';
import { MatRadioGroup } from '@angular/material/radio';
var FormlyFieldRadio = /** @class */ (function (_super) {
    tslib_1.__extends(FormlyFieldRadio, _super);
    function FormlyFieldRadio() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultOptions = {
            templateOptions: {
                hideFieldUnderline: true,
                floatLabel: 'always',
                options: [],
            },
        };
        return _this;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    FormlyFieldRadio.prototype.onContainerClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.radioGroup._radios.length && !this.radioGroup.selected) {
            this.radioGroup._radios.first.focus();
        }
        _super.prototype.onContainerClick.call(this, event);
    };
    FormlyFieldRadio.decorators = [
        { type: Component, args: [{
                    selector: 'formly-field-mat-radio',
                    template: "\n    <mat-radio-group\n      [formControl]=\"formControl\"\n      [formlyAttributes]=\"field\"\n      [tabindex]=\"to.tabindex || 0\">\n      <mat-radio-button *ngFor=\"let option of to.options | formlySelectOptions:field | async; let i = index;\"\n        [id]=\"id + '_' + i\"\n        [color]=\"to.color\"\n        [labelPosition]=\"to.labelPosition\"\n        [value]=\"option.value\">\n        {{ option.label }}\n      </mat-radio-button>\n    </mat-radio-group>\n  "
                }] }
    ];
    FormlyFieldRadio.propDecorators = {
        radioGroup: [{ type: ViewChild, args: [MatRadioGroup,] }]
    };
    return FormlyFieldRadio;
}(FieldType));
export { FormlyFieldRadio };
if (false) {
    /** @type {?} */
    FormlyFieldRadio.prototype.radioGroup;
    /** @type {?} */
    FormlyFieldRadio.prototype.defaultOptions;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8udHlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtZm9ybWx5L21hdGVyaWFsL3JhZGlvLyIsInNvdXJjZXMiOlsicmFkaW8udHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM1RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFeEQ7SUFpQnNDLDRDQUFTO0lBakIvQztRQUFBLHFFQWlDQztRQWRDLG9CQUFjLEdBQUc7WUFDZixlQUFlLEVBQUU7Z0JBQ2Ysa0JBQWtCLEVBQUUsSUFBSTtnQkFDeEIsVUFBVSxFQUFFLFFBQVE7Z0JBQ3BCLE9BQU8sRUFBRSxFQUFFO2FBQ1o7U0FDRixDQUFDOztJQVFKLENBQUM7Ozs7O0lBTkMsMkNBQWdCOzs7O0lBQWhCLFVBQWlCLEtBQWlCO1FBQ2hDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUU7WUFDL0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3ZDO1FBQ0QsaUJBQU0sZ0JBQWdCLFlBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7Z0JBaENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsd0JBQXdCO29CQUNsQyxRQUFRLEVBQUUsMmRBYVQ7aUJBQ0Y7Ozs2QkFFRSxTQUFTLFNBQUMsYUFBYTs7SUFlMUIsdUJBQUM7Q0FBQSxBQWpDRCxDQWlCc0MsU0FBUyxHQWdCOUM7U0FoQlksZ0JBQWdCOzs7SUFDM0Isc0NBQXFEOztJQUNyRCwwQ0FNRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGaWVsZFR5cGUgfSBmcm9tICdAbmd4LWZvcm1seS9tYXRlcmlhbC9mb3JtLWZpZWxkJztcbmltcG9ydCB7IE1hdFJhZGlvR3JvdXAgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9yYWRpbyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zvcm1seS1maWVsZC1tYXQtcmFkaW8nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxtYXQtcmFkaW8tZ3JvdXBcbiAgICAgIFtmb3JtQ29udHJvbF09XCJmb3JtQ29udHJvbFwiXG4gICAgICBbZm9ybWx5QXR0cmlidXRlc109XCJmaWVsZFwiXG4gICAgICBbdGFiaW5kZXhdPVwidG8udGFiaW5kZXggfHwgMFwiPlxuICAgICAgPG1hdC1yYWRpby1idXR0b24gKm5nRm9yPVwibGV0IG9wdGlvbiBvZiB0by5vcHRpb25zIHwgZm9ybWx5U2VsZWN0T3B0aW9uczpmaWVsZCB8IGFzeW5jOyBsZXQgaSA9IGluZGV4O1wiXG4gICAgICAgIFtpZF09XCJpZCArICdfJyArIGlcIlxuICAgICAgICBbY29sb3JdPVwidG8uY29sb3JcIlxuICAgICAgICBbbGFiZWxQb3NpdGlvbl09XCJ0by5sYWJlbFBvc2l0aW9uXCJcbiAgICAgICAgW3ZhbHVlXT1cIm9wdGlvbi52YWx1ZVwiPlxuICAgICAgICB7eyBvcHRpb24ubGFiZWwgfX1cbiAgICAgIDwvbWF0LXJhZGlvLWJ1dHRvbj5cbiAgICA8L21hdC1yYWRpby1ncm91cD5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgRm9ybWx5RmllbGRSYWRpbyBleHRlbmRzIEZpZWxkVHlwZSB7XG4gIEBWaWV3Q2hpbGQoTWF0UmFkaW9Hcm91cCkgcmFkaW9Hcm91cCE6IE1hdFJhZGlvR3JvdXA7XG4gIGRlZmF1bHRPcHRpb25zID0ge1xuICAgIHRlbXBsYXRlT3B0aW9uczoge1xuICAgICAgaGlkZUZpZWxkVW5kZXJsaW5lOiB0cnVlLFxuICAgICAgZmxvYXRMYWJlbDogJ2Fsd2F5cycsXG4gICAgICBvcHRpb25zOiBbXSxcbiAgICB9LFxuICB9O1xuXG4gIG9uQ29udGFpbmVyQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5yYWRpb0dyb3VwLl9yYWRpb3MubGVuZ3RoICYmICF0aGlzLnJhZGlvR3JvdXAuc2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMucmFkaW9Hcm91cC5fcmFkaW9zLmZpcnN0LmZvY3VzKCk7XG4gICAgfVxuICAgIHN1cGVyLm9uQ29udGFpbmVyQ2xpY2soZXZlbnQpO1xuICB9XG59XG4iXX0=