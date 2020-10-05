/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild } from '@angular/core';
import { FieldType } from '@ngx-formly/material/form-field';
import { MatSlider } from '@angular/material/slider';
export class FormlySliderTypeComponent extends FieldType {
    constructor() {
        super(...arguments);
        this.defaultOptions = {
            templateOptions: {
                hideFieldUnderline: true,
                floatLabel: 'always',
            },
        };
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onContainerClick(event) {
        this.slider.focus();
        super.onContainerClick(event);
    }
}
FormlySliderTypeComponent.decorators = [
    { type: Component, args: [{
                selector: 'formly-field-mat-slider',
                template: `
    <mat-slider
      [id]="id"
      [style.width]="'100%'"
      [formControl]="formControl"
      [formlyAttributes]="field"
      [tabindex]="to.tabindex || 0"
      [color]="to.color">
    </mat-slider>
  `
            }] }
];
FormlySliderTypeComponent.propDecorators = {
    slider: [{ type: ViewChild, args: [MatSlider,] }]
};
if (false) {
    /** @type {?} */
    FormlySliderTypeComponent.prototype.slider;
    /** @type {?} */
    FormlySliderTypeComponent.prototype.defaultOptions;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLnR5cGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4LWZvcm1seS9tYXRlcmlhbC9zbGlkZXIvIiwic291cmNlcyI6WyJzbGlkZXIudHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzVELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQWVyRCxNQUFNLE9BQU8seUJBQTBCLFNBQVEsU0FBUztJQWJ4RDs7UUFlRSxtQkFBYyxHQUFHO1lBQ2YsZUFBZSxFQUFFO2dCQUNmLGtCQUFrQixFQUFFLElBQUk7Z0JBQ3hCLFVBQVUsRUFBRSxRQUFRO2FBQ3JCO1NBQ0YsQ0FBQztJQU1KLENBQUM7Ozs7O0lBSkMsZ0JBQWdCLENBQUMsS0FBaUI7UUFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNwQixLQUFLLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7O1lBekJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxRQUFRLEVBQUU7Ozs7Ozs7OztHQVNUO2FBQ0Y7OztxQkFFRSxTQUFTLFNBQUMsU0FBUzs7OztJQUFwQiwyQ0FBeUM7O0lBQ3pDLG1EQUtFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZpZWxkVHlwZSB9IGZyb20gJ0BuZ3gtZm9ybWx5L21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHsgTWF0U2xpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2xpZGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZm9ybWx5LWZpZWxkLW1hdC1zbGlkZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxtYXQtc2xpZGVyXG4gICAgICBbaWRdPVwiaWRcIlxuICAgICAgW3N0eWxlLndpZHRoXT1cIicxMDAlJ1wiXG4gICAgICBbZm9ybUNvbnRyb2xdPVwiZm9ybUNvbnRyb2xcIlxuICAgICAgW2Zvcm1seUF0dHJpYnV0ZXNdPVwiZmllbGRcIlxuICAgICAgW3RhYmluZGV4XT1cInRvLnRhYmluZGV4IHx8IDBcIlxuICAgICAgW2NvbG9yXT1cInRvLmNvbG9yXCI+XG4gICAgPC9tYXQtc2xpZGVyPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtbHlTbGlkZXJUeXBlQ29tcG9uZW50IGV4dGVuZHMgRmllbGRUeXBlIHtcbiAgQFZpZXdDaGlsZChNYXRTbGlkZXIpIHNsaWRlciE6IE1hdFNsaWRlcjtcbiAgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgdGVtcGxhdGVPcHRpb25zOiB7XG4gICAgICBoaWRlRmllbGRVbmRlcmxpbmU6IHRydWUsXG4gICAgICBmbG9hdExhYmVsOiAnYWx3YXlzJyxcbiAgICB9LFxuICB9O1xuXG4gIG9uQ29udGFpbmVyQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLnNsaWRlci5mb2N1cygpO1xuICAgIHN1cGVyLm9uQ29udGFpbmVyQ2xpY2soZXZlbnQpO1xuICB9XG59XG4iXX0=