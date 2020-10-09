import {Country} from '../../models/Country' 

export interface PresideProfileProps {
    firstname: string, 
    lastname: string,
    pays?: Country,
    isCurrent?: boolean
}