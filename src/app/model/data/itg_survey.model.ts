import { base_data } from './base_data.model';

export class itg_survey extends base_data {
    view_id : number =0 ;
    state : string ="";
    field_default_value : string ="";

    constructor(){
        super();
    }
}