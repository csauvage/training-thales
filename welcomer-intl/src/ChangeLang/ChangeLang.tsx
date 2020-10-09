import React from 'react';
import './ChangeLang.sass';
import { useTranslation, withTranslation } from 'react-i18next';
import {TranslationKeys} from '../services/traductions/TrKeys'


const ChangeLang = () => {

    const {t, i18n} = useTranslation();

    const changeLanguage = (lang: string) :void => {
        i18n.changeLanguage(lang)
    }



    return (
            <div className="ChangeLang">
              { t(TranslationKeys.ChangeLanguage) }
               <div className="ChangeLang__Countries">
                   <span onClick={ e => changeLanguage('en') } ><img src={require('../assets/countries/GBR.svg')}/></span>
                   <span onClick={ e => changeLanguage('fr') }><img src={require('../assets/countries/FRA.svg')}/></span>
                   <span onClick={ e => changeLanguage('de') }><img src={require('../assets/countries/DEU.svg')}/></span>
               </div> 
            </div>
        )
}



export default withTranslation()(ChangeLang)