import { base_data } from './base_data.model';

export class i_t_agence extends base_data {

    code : string ;
    region_id : number ;

    constructor(code : string = "", region_id : number = 0, create_uid : number = 0, name : string = "", write_uid : number = 0, id? : number){
        if(id){
            super(create_uid, name, write_uid, id);
        }
        else {
            super(create_uid, name, write_uid);
        }
        this.setCode(code) ;
        this.setRegion_id(region_id) ;
    }

    public setCode (code : string) {
        this.code = code ;
    }

    public setRegion_id (region_id : number) {
        this.region_id = region_id
    }

    public getCode () : string {
        return this.code
    }

    public getRegion_id () : number {
        return this.region_id ;
    }

}