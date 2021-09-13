import { Profiles } from "./profiles.model";

export interface Satellite{
    id: string;
    satellite_name: string;
    active: string; 
    responsible:Profiles[]; 
}