import { base_data } from './base_data.model';

export class i_t_region extends base_data {

    code : string ;
    constructor(code : string, create_uid : number, name : string, write_uid : number, id? : number){
        if(id){
            super(create_uid, name, write_uid, id);
            this.code = code ;
        }
        else {
            super(create_uid, name, write_uid);
        }
        this.set_code(code) ;
    }

    public set_code(code : string) {
        this.code = code ;
    }

    public get_code () : string {
        return this.code ;
    }
    
}