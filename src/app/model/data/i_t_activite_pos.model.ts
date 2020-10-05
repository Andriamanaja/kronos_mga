import { base_data } from './base_data.model';

export class i_t_activite_pos extends base_data {

    canal_id : number ;

    constructor(create_uid : number = 0 , name : string = "" , canal_id : number = 0 , write_uid : number = 0, id? : number){
        if(id){
            super(create_uid, name, write_uid, id);
        }
        else {
            super(create_uid, name, write_uid);
        }
        
        this.canal_id = canal_id ;
    }
}

