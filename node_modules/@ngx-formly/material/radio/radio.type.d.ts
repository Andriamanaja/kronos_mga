import { FieldType } from '@ngx-formly/material/form-field';
import { MatRadioGroup } from '@angular/material/radio';
export declare class FormlyFieldRadio extends FieldType {
    radioGroup: MatRadioGroup;
    defaultOptions: {
        templateOptions: {
            hideFieldUnderline: boolean;
            floatLabel: string;
            options: never[];
        };
    };
    onContainerClick(event: MouseEvent): void;
}
