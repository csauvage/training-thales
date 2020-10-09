import React from 'react';
import { PresideProfileProps } from './types'
import './PresidentProfile.sass'

export default class PresidentProfile extends React.PureComponent<PresideProfileProps> {

    render() {
        return(
            <div>
                {this.props.firstname} {this.props.lastname}
                <img src={require('../../assets/countries/' + this.props.pays + '.svg')}/>
            </div>
        )
    }
        
    

}