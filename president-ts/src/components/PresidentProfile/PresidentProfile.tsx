import React, {useState} from 'react';
import { PresideProfileProps } from './types'
import './PresidentProfile.sass'



const PresidentActions = (props: {

}) => {
    
}


const PresidentProfile = (props: PresideProfileProps) => {

    const [age, setAge] = useState(props.age)
    const [city, setCity] = useState<string | null>(null)

    const modify = (): void => {
        setAge(parseInt((Math.random()*1000).toFixed(2)))
    } 


    return (
        <div className="PresidentProfile">
            {props.firstname} {props.lastname} <br/>
            <em>Status : {props.status}</em><br/>
            {age} ans <br/>
            <img src={require('../../assets/countries/' + props.pays + '.svg')}/>
            <button onClick={modify}> Modify age </button>
        </div>
    )
}

export {PresidentActions}
export default PresidentProfile


/*export default class PresidentProfile extends React.PureComponent<PresideProfileProps> {


    


    render() {
        return(
            
        )
    }
        
    

}*/