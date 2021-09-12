export interface Measures{
    id: number;
    sample: number;
    message: string; 
    status_report: boolean; 
    sample_time: string; 
    satellites_id: string; 
    modules_id: string; 
/*
    constructor(id:number,sample:number[],message:string,status_report:boolean,
        sample_time:string[],satellites_id:string,modules_id:string){
            this.id = id;
            this.sample = sample;
            this.message=message;
            this.status_report=status_report;
            this.sample_time = sample_time;
            this.satellites_id = satellites_id;
            this.modules_id = modules_id;
    }*/

}