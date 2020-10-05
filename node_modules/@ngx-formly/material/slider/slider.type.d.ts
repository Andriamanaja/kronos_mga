import { FieldType } from '@ngx-formly/material/form-field';
import { MatSlider } from '@angular/material/slider';
export declare class FormlySliderTypeComponent extends FieldType {
    slider: MatSlider;
    defaultOptions: {
        templateOptions: {
            hideFieldUnderline: boolean;
            floatLabel: string;
        };
    };
    onContainerClick(event: MouseEvent): void;
}
