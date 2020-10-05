export class base_data {
    id : number = 0 ;
    create_uid : number = 0;
    create_date : string = "";
    name : string = "" ;
    write_uid : number = 0;
    write_date : string ="";
    table : string = "" ;
    x_odoo_id : number  = 0;
    

    constructor (create_uid : number = 0, name : string = "", write_uid : number =0 , id? : number) {
        if (id) {
            this.setId(id) ;
        }
        this.setCreate_date() ;
        this.setCreate_uid(create_uid) ;
        this.setName (name) ;
        this.setWtrite_uid(write_uid) ;
        this.setWrite_date() ;
    }

    public setId(id : number) {
        this.id = id ;
    }

    public setCreate_uid (create_uid : number) {
        this.create_uid = create_uid ;
    }

    public setCreate_date() {
        this.create_date = 'DEFAULT' ;
    }

    public setName(name : string) {
        this.name = name ;
    }

    public setWtrite_uid (write_uid : number) {
        this.write_uid = write_uid ;
    }

    public setWrite_date () {
        this.create_date = 'DEFAULT' ;
    }

    public getCreate_uid () : number {
        return this.create_uid ;
    }

    public getCreate_date () : string {
        return this.create_date ;
    }

    public getName () : string {
        return this.name ;
    }

    public getWrite_uid () : number {
        return this.write_uid ;
    }

    public getWrite_date () : string {
        return this.write_date ;
    }

    
}