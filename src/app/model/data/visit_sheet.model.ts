import { base_data } from './base_data.model';

export class visit_sheet extends base_data {
    
    show_btn_end_visit : number = 0 ;
    visit_duration : number = 0 ;
    user_id : number = 0 ;
    page_number : number = 0 ;
    page_number_total : number = 0 ;
    page_number_total_str : string = "" ;
    provider_longitude : number = 0 ;
    begin_datetime : Date = new Date(0);
    next_visit_goal : string = "" ;
    provider_latitude : number = 0 ;
    end_datetime : Date = new Date(0);
    hide_btn_next_next_page : number = 0 ;
    tour_id : number = 0 ;
    visit_duration_str : string = "" ;
    partner_id : number = 0 ;
    pos_initial : number = 0 ;
    region_id : number = 0 ;
    secteur_id : number = 0 ;
    agence_id : number = 0 ;
    zone_id : number = 0 ;
    state : string ;
    has_survey : number = 0 ;
    pos_initial_line_id : number = 0 ;
    pos_additional_line_id : number = 0 ;
    constructor(){
        super();
    }
}