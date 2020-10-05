import { base_data } from './base_data.model';

export class itg_product extends base_data{
    begin_date : Date  = new Date(0);
    end_date : Date = new Date(0) ;
    retailer_unit_sale_price :number = 0 ;
    retailer_pqt_sale_price :number = 0 ;
    grs_cost_price :number = 0 ;
    tax_status_id :number = 0 ;
    dmg_sale_price :number = 0 ;
    brand_id :number = 0 ;
    dmg_cost_price :number = 0 ;
    active :number = 0 ;
    grs_sale_price :number = 0 ;
    manufacturer_id :number = 0 ;
    ref : string ;
    product_type_code : string ;
    product_type :number = 0 ;
    constructor(){
        super();
    }
}