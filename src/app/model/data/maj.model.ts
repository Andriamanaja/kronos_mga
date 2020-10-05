export class maj {
    id : number ;
    name : string ;
    is_executed : number ;

    constructor(id : number , name : string, is_executed : number) {
        this.setId(id) ;
        this.setName(name) ;
        this.setIsExecuted(is_executed) ;
    }

    setId(id : number) {
        this.id = id ;
    } 

    setName(name : string) {
        this.name = name ;
    }

    setIsExecuted(is_executed : number) {
        this.is_executed = is_executed ;
    }

    getId() {
        return this.id ;
    }

    getName() {
        return this.name ;
    }

    getIsExecuted() {
        return this.is_executed ;
    }
}