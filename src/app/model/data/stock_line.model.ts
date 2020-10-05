import { base_data } from './base_data.model';

export class stock_line extends base_data {
    placement : number = 0 ;
    product_id : number = 0 ;
    visit_sheet_id : number = 0 ;
    available_stock : number = 0 ;
    manufacturer_id : number = 0 ;
    last_visit_stock : number = 0 ;
    constructor(){
        super();
    }
}