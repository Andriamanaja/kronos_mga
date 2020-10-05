import { base_data } from './base_data.model';

export class plv_line extends base_data {

    product_id : number = 0 ;
    visit_sheet_id : number = 0;
    manufacturer_id : number = 0;
    quantity : number  = 0 ;
    constructor(){
        super();
    }
}