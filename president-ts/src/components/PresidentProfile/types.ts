import {Country} from '../../models/Country' 


export interface PresideProfileProps {
    firstname: string, 
    lastname: string,
    status: "En Activité" | "Sur le départ" | "A la retraite",
    age: number | undefined,
    pays?: Country,
    isCurrent?: boolean,
    onChangeCity?: Function,
    onClick?: (e: Event) => void,
    children?: React.ReactNode // React.Children | React.Child[] | JSX.Element
}