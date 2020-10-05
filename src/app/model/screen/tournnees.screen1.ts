export class tournees_sc1 {
    res_partner_id : number ;
    res_partner_name : string;
    visite : string;
    sequence : number;
    i_t_pos_initial_id : number;
    i_t_pos_additional_id : number;
    name : string ;
    start_date : Date ;
    end_date : Date ;
    id : number ;
    
    constructor(res_partner_id : number, res_partner_name : string, visite : string, sequence : number, i_t_pos_initial_id : number,i_t_pos_additional_id : number, name : string, start_date : Date, end_date : Date, id : number) {
        this.name = name ;
        this.res_partner_name = res_partner_name ;
        this.visite = visite ;
        this.sequence = sequence;
        this.i_t_pos_initial_id  = i_t_pos_initial_id;
        this.i_t_pos_additional_id = i_t_pos_additional_id
        this.start_date = start_date ;
        this.end_date = end_date ;
        this.res_partner_id = res_partner_id ;
        this.id = id;
    }
}