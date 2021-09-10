export class satellites{
    satellite_name:string;
    active:boolean;
    responsible_id:number;

    constructor(
                satellite_name: string,
                active:boolean,
                responsible_id:number) {

        this.satellite_name = satellite_name;
        this.active = active;
        this.responsible_id = responsible_id;
    }
}