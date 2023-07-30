import React from 'react';
import module from './questt.module.scss';
import map from '../assets/map.png';
import ButtonNum from '../ui/button.jsx'
import Accordion from '../ui/Accordion.jsx'
import whatsAppIcon from '../assets/whatsAppIcon.png'
import telegramIcon from '../assets/telegramIcon.png'

function questt(props) {
    return (
        <div className={module.container}>
            <div className={module.uppertext}>
                <p className={module.addres}>Адреса магазинов и контакты</p>
            </div>
            <div className={module.map}>
                <div className={module.map1}>
                    <img src={map} alt="Map 1" />
                    <div className={module.maptxt}>
                        <p>
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es
                        </p>
                        <div className={module.numBtn1}><ButtonNum /></div>
                    </div>
                </div>
            </div>
            <div className={module.map2}>
                <img src={map} alt="Map 2" />
                <div className={module.maptxt}>
                    <p>
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es
                    </p>
                    <div className={module.numBtn2}><ButtonNum /></div>
                </div>
            </div>
            <Accordion />
            <div className={module.contactUs}>
                <div className={module.contactText}>
                    Если вы не нашли ответ на свой вопрос, обратитесь:
                </div>
                <div className={module.contactIcon}>
                    <img src={whatsAppIcon} className={module.whatsAppIcon} alt="1" />
                    <img src={telegramIcon} className={module.telegramIcon} alt="2" />
                </div>
            </div>
        </div>
    );
}

export default questt;
