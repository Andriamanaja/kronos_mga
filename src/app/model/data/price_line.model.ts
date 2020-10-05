import { base_data } from './base_data.model';

export class price_line extends base_data {

    product_id : number = 0 ;
    currency_id : number = 0 ;
    visit_sheet_id : number = 0 ;
    current_price : number = 0 ;
    manufacturer_id : number = 0 ;
    constructor(){
        super();
    }
}