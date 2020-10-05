/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild } from '@angular/core';
import { FieldType } from '@ngx-formly/material/form-field';
import { MatSlideToggle } from '@angular/material/slide-toggle';
export class FormlyToggleTypeComponent extends FieldType {
    constructor() {
        super(...arguments);
        this.defaultOptions = {
            templateOptions: {
                hideFieldUnderline: true,
                floatLabel: 'always',
                hideLabel: true,
            },
        };
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onContainerClick(event) {
        this.slideToggle.focus();
        super.onContainerClick(event);
    }
}
FormlyToggleTypeComponent.decorators = [
    { type: Component, args: [{
                selector: 'formly-field-mat-toggle',
                template: `
    <mat-slide-toggle
      [id]="id"
      [formControl]="formControl"
      [formlyAttributes]="field"
      [tabindex]="to.tabindex || 0">
      {{ to.label }}
    </mat-slide-toggle>
  `
            }] }
];
FormlyToggleTypeComponent.propDecorators = {
    slideToggle: [{ type: ViewChild, args: [MatSlideToggle,] }]
};
if (false) {
    /** @type {?} */
    FormlyToggleTypeComponent.prototype.slideToggle;
    /** @type {?} */
    FormlyToggleTypeComponent.prototype.defaultOptions;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLnR5cGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4LWZvcm1seS9tYXRlcmlhbC90b2dnbGUvIiwic291cmNlcyI6WyJ0b2dnbGUudHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzVELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQWNoRSxNQUFNLE9BQU8seUJBQTBCLFNBQVEsU0FBUztJQVp4RDs7UUFjRSxtQkFBYyxHQUFHO1lBQ2YsZUFBZSxFQUFFO2dCQUNmLGtCQUFrQixFQUFFLElBQUk7Z0JBQ3hCLFVBQVUsRUFBRSxRQUFRO2dCQUNwQixTQUFTLEVBQUUsSUFBSTthQUNoQjtTQUNGLENBQUM7SUFNSixDQUFDOzs7OztJQUpDLGdCQUFnQixDQUFDLEtBQWlCO1FBQ2hDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDekIsS0FBSyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7OztZQXpCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsUUFBUSxFQUFFOzs7Ozs7OztHQVFUO2FBQ0Y7OzswQkFFRSxTQUFTLFNBQUMsY0FBYzs7OztJQUF6QixnREFBd0Q7O0lBQ3hELG1EQU1FIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZpZWxkVHlwZSB9IGZyb20gJ0BuZ3gtZm9ybWx5L21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHsgTWF0U2xpZGVUb2dnbGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbGlkZS10b2dnbGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmb3JtbHktZmllbGQtbWF0LXRvZ2dsZScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG1hdC1zbGlkZS10b2dnbGVcbiAgICAgIFtpZF09XCJpZFwiXG4gICAgICBbZm9ybUNvbnRyb2xdPVwiZm9ybUNvbnRyb2xcIlxuICAgICAgW2Zvcm1seUF0dHJpYnV0ZXNdPVwiZmllbGRcIlxuICAgICAgW3RhYmluZGV4XT1cInRvLnRhYmluZGV4IHx8IDBcIj5cbiAgICAgIHt7IHRvLmxhYmVsIH19XG4gICAgPC9tYXQtc2xpZGUtdG9nZ2xlPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtbHlUb2dnbGVUeXBlQ29tcG9uZW50IGV4dGVuZHMgRmllbGRUeXBlIHtcbiAgQFZpZXdDaGlsZChNYXRTbGlkZVRvZ2dsZSkgc2xpZGVUb2dnbGUhOiBNYXRTbGlkZVRvZ2dsZTtcbiAgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgdGVtcGxhdGVPcHRpb25zOiB7XG4gICAgICBoaWRlRmllbGRVbmRlcmxpbmU6IHRydWUsXG4gICAgICBmbG9hdExhYmVsOiAnYWx3YXlzJyxcbiAgICAgIGhpZGVMYWJlbDogdHJ1ZSxcbiAgICB9LFxuICB9O1xuXG4gIG9uQ29udGFpbmVyQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLnNsaWRlVG9nZ2xlLmZvY3VzKCk7XG4gICAgc3VwZXIub25Db250YWluZXJDbGljayhldmVudCk7XG4gIH1cbn1cbiJdfQ==