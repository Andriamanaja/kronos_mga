import { base_data } from './base_data.model';

export class i_t_tournee extends base_data {

    commercial_id : number = 0 ;
    start_date : Date = new Date(0);
    end_date : Date = new Date(0);
    date : Date = new Date(0);
    state : string = "" ;

    constructor(commercial_id : number,  date : Date, state : string, create_uid : number, name : string, write_uid : number, id? : number){
        super(create_uid, name, write_uid, id) ;
        this.setCommarcial_id(commercial_id) ;
        this.setDate(date) ;
        this.setState(state) ;
    }

    public setCommarcial_id (commercial_id : number) {
        this.commercial_id = commercial_id ;
    }

    public setDate (date : Date) {
        this.date = date ;
    }

    public setState (state : string) {
        this.state = state ;
    }

    public getCommercial_id () : number {
        return this.commercial_id ;
    }

    public getDate () : Date {
        return this.date ;
    }

    public getState () : string {
        return this.state ;
    }

}