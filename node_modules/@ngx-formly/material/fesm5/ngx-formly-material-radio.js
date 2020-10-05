import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { __extends } from 'tslib';
import { Component, ViewChild, NgModule } from '@angular/core';
import { FieldType, FormlyMatFormFieldModule } from '@ngx-formly/material/form-field';
import { MatRadioGroup, MatRadioModule } from '@angular/material/radio';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FormlyFieldRadio = /** @class */ (function (_super) {
    __extends(FormlyFieldRadio, _super);
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FormlyMatRadioModule = /** @class */ (function () {
    function FormlyMatRadioModule() {
    }
    FormlyMatRadioModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [FormlyFieldRadio],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        MatRadioModule,
                        FormlyMatFormFieldModule,
                        FormlySelectModule,
                        FormlyModule.forChild({
                            types: [{
                                    name: 'radio',
                                    component: FormlyFieldRadio,
                                    wrappers: ['form-field'],
                                }],
                        }),
                    ],
                },] }
    ];
    return FormlyMatRadioModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { FormlyMatRadioModule, FormlyFieldRadio };

//# sourceMappingURL=ngx-formly-material-radio.js.map