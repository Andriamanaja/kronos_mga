/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { FieldType } from '@ngx-formly/material/form-field';
import { MatSlider } from '@angular/material/slider';
var FormlySliderTypeComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FormlySliderTypeComponent, _super);
    function FormlySliderTypeComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultOptions = {
            templateOptions: {
                hideFieldUnderline: true,
                floatLabel: 'always',
            },
        };
        return _this;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    FormlySliderTypeComponent.prototype.onContainerClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.slider.focus();
        _super.prototype.onContainerClick.call(this, event);
    };
    FormlySliderTypeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'formly-field-mat-slider',
                    template: "\n    <mat-slider\n      [id]=\"id\"\n      [style.width]=\"'100%'\"\n      [formControl]=\"formControl\"\n      [formlyAttributes]=\"field\"\n      [tabindex]=\"to.tabindex || 0\"\n      [color]=\"to.color\">\n    </mat-slider>\n  "
                }] }
    ];
    FormlySliderTypeComponent.propDecorators = {
        slider: [{ type: ViewChild, args: [MatSlider,] }]
    };
    return FormlySliderTypeComponent;
}(FieldType));
export { FormlySliderTypeComponent };
if (false) {
    /** @type {?} */
    FormlySliderTypeComponent.prototype.slider;
    /** @type {?} */
    FormlySliderTypeComponent.prototype.defaultOptions;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLnR5cGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4LWZvcm1seS9tYXRlcmlhbC9zbGlkZXIvIiwic291cmNlcyI6WyJzbGlkZXIudHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM1RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFckQ7SUFhK0MscURBQVM7SUFieEQ7UUFBQSxxRUEwQkM7UUFYQyxvQkFBYyxHQUFHO1lBQ2YsZUFBZSxFQUFFO2dCQUNmLGtCQUFrQixFQUFFLElBQUk7Z0JBQ3hCLFVBQVUsRUFBRSxRQUFRO2FBQ3JCO1NBQ0YsQ0FBQzs7SUFNSixDQUFDOzs7OztJQUpDLG9EQUFnQjs7OztJQUFoQixVQUFpQixLQUFpQjtRQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3BCLGlCQUFNLGdCQUFnQixZQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7O2dCQXpCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtvQkFDbkMsUUFBUSxFQUFFLDBPQVNUO2lCQUNGOzs7eUJBRUUsU0FBUyxTQUFDLFNBQVM7O0lBWXRCLGdDQUFDO0NBQUEsQUExQkQsQ0FhK0MsU0FBUyxHQWF2RDtTQWJZLHlCQUF5Qjs7O0lBQ3BDLDJDQUF5Qzs7SUFDekMsbURBS0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmllbGRUeXBlIH0gZnJvbSAnQG5neC1mb3JtbHkvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5pbXBvcnQgeyBNYXRTbGlkZXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbGlkZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmb3JtbHktZmllbGQtbWF0LXNsaWRlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG1hdC1zbGlkZXJcbiAgICAgIFtpZF09XCJpZFwiXG4gICAgICBbc3R5bGUud2lkdGhdPVwiJzEwMCUnXCJcbiAgICAgIFtmb3JtQ29udHJvbF09XCJmb3JtQ29udHJvbFwiXG4gICAgICBbZm9ybWx5QXR0cmlidXRlc109XCJmaWVsZFwiXG4gICAgICBbdGFiaW5kZXhdPVwidG8udGFiaW5kZXggfHwgMFwiXG4gICAgICBbY29sb3JdPVwidG8uY29sb3JcIj5cbiAgICA8L21hdC1zbGlkZXI+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1seVNsaWRlclR5cGVDb21wb25lbnQgZXh0ZW5kcyBGaWVsZFR5cGUge1xuICBAVmlld0NoaWxkKE1hdFNsaWRlcikgc2xpZGVyITogTWF0U2xpZGVyO1xuICBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcbiAgICAgIGhpZGVGaWVsZFVuZGVybGluZTogdHJ1ZSxcbiAgICAgIGZsb2F0TGFiZWw6ICdhbHdheXMnLFxuICAgIH0sXG4gIH07XG5cbiAgb25Db250YWluZXJDbGljayhldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuc2xpZGVyLmZvY3VzKCk7XG4gICAgc3VwZXIub25Db250YWluZXJDbGljayhldmVudCk7XG4gIH1cbn1cbiJdfQ==