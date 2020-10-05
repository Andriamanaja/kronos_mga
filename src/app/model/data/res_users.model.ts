import { base_data } from './base_data.model';

export class res_users extends base_data {
    

    active : number = 0;
    login : string = "";
    password : string = "" ;
    company_id : number = 0 ;
    share : boolean = false;
    action_id : number = 0 ;
    signature : string = "" ;
    password_crypt : string = "" ;
    alias_id : number = 0 ;
    sale_team : number = 0 ;
    target_sales_done : number = 0 ;
    target_sales_won : number = 0 ;
    partner_id : number =0 ;

    constructor(active : number = 0, login : string = "" , password : string = "" , company_id : number = 0, partner_id : number = 0, share : boolean = false, action_id : number = 0, signature : string = "" , password_crypt : string = "" , alias_id : number = 0, sale_team : number = 0, target_sales_done : number = 0, target_sales_won : number = 0, create_uid : number = 0, name : string = "" , write_uid : number = 0, id? : number){
        super(create_uid, name, write_uid, id);
        this.setactive(active) ;
        this.setlogin(login);
        this.setpassword(password) ;
        this.setcompany_id(company_id) ;
        this.setshare(share) ;
        this.setaction_id(action_id) ;
        this.setsignature(signature) ;
        this.setpassword_crypt(password_crypt) ;
        this.setalias_id(alias_id) ;
        this.setsale_team(sale_team) ;
        this.settarget_sales_done(target_sales_done) ;
        this.settarget_sales_won(target_sales_won) ;
        this.setpartnerid(partner_id) ;
    }

    public setactive (active: number) {
        this.active = active
    } 

    public setlogin (login : string) {
        this.login = login ;
    }

    public setpartnerid(partner_id: number) {
        this.partner_id = partner_id ;
    }

    public getpartnerid() : number {
        return this.partner_id ;
    }

    public setpassword (password : string) {
        this.password = password ;
    }

    public setcompany_id (company_id  :number) {
        this.company_id = company_id ;
    } 

    public setshare (share : boolean) {
        this.share = share ;
    }

    public setaction_id (action_id : number) {
        this.action_id = action_id ;
    }

    public setsignature (signature : string) {
        this.signature = signature ;
    } 

    public setpassword_crypt (password_crypt : string) {
        this.password_crypt = password_crypt
    }

    public setalias_id (alias_id : number) {
        this.alias_id = alias_id
    }

    public setsale_team (sale_team : number) {
        this.sale_team = sale_team ;
    } 

    public settarget_sales_done (target_sales_done : number) {
        this.target_sales_done = target_sales_done ;
    }

    public settarget_sales_won (target_sales_won : number) {
        this.target_sales_won = target_sales_won ;
    }

    //

    public getactive () : number{
        return this.active ;
} 

public getlogin () : string{
    return this.login ;
}

public getpassword () : string{
    return this.password ;
}

public getcompany_id () : number{
    return this.company_id;
} 

public getshare () : boolean{
    return this.share;
}

public getaction_id () : number{
    return this.action_id;
}

public getsignature () : string{
    return this.signature;
} 

public getpassword_crypt () : string {
    return this.password_crypt;
}

public getalias_id () : number{
    return this.alias_id;
}

public getsale_team () : number{
    return this.sale_team;
} 

public gettarget_sales_done () : number{
    return this.target_sales_done;
}

public gettarget_sales_won () : number{
    return this.target_sales_won;
}

    

}