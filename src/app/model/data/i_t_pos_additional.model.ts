import { base_data } from './base_data.model';

export class i_t_pos_additional extends base_data {
    sequence : number = 0 ;
    visite : string = "" ;
    tour_id : number = 0;
    partner_id : number = 0;
    constructor(){
        super();
    }
}