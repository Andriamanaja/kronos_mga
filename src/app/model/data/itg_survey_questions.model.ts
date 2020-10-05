import { base_data } from './base_data.model';

export class itg_survey_question extends base_data {
    type : string = "";
    page_id : number =0;
    mandatory : boolean=false ;
    sequence : number = 0 ;
    survey_id : number = 0;
    constructor(){
        super();
    }
}