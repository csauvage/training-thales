import React from 'react';
import { PresideProfileProps } from './types'
import './PresidentProfile.sass'

export default class PresidentProfile extends React.PureComponent<PresideProfileProps> {

    render() {
        return(
            <div className="PresidentProfile">
                {this.props.firstname} {this.props.lastname} <br/>
                <em>Status : {this.props.status}</em><br/>
                {this.props.age} ans <br/>
                <img src={require('../../assets/countries/' + this.props.pays + '.svg')}/>
            </div>
        )
    }
        
    

}