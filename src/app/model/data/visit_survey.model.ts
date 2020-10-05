import { base_data } from './base_data.model';

export class visit_survey extends base_data {

    question : string = "" ;
    answer : string = "";
    visit_sheet_id : number = 0 ;

    constructor(){
        super();
    }
}