import React from 'react';
import './Section4.css'
import a1 from '../image/a1.png'
import a2 from '../image/a2.png'
import a3 from '../image/a3.png'
import a4 from '../image/a4.png'
import a5 from '../image/a5.png'
import a6 from '../image/a6.png'
import a7 from '../image/a7.png'
import a8 from '../image/a8.png'
import { useTranslation } from 'react-i18next';

function Section4() {
    const {t,i18n}=useTranslation()

    const imgArr = [a1, a2, a3, a4, a5, a6, a7, a8]
    const backgroundStyle = {
        backgroundImage: 'url(https://images.wallpaperscraft.ru/image/single/belyj_fon_vmiatiny_69592_300x168.jpg)',
        backgroundSize: 'cover',
        height: '110vh', 
        width: '100%',
        opacity: "0.9",
      };
    return (
        <div style={backgroundStyle}>
           <h2 className='sec2-h2'>{t('Sec4H2')}</h2>
           <h1 className='sec2-h1'>{t('Sec4H1')}</h1>
           
           <div className="boss">
            <div className='image__wrapper'>
                {
                    imgArr.map(img => (
                        <div className='image__block'>
                            <div className="img-dv">
                                <h2>{t('Sec4TEXT')}</h2>
                                <div className="pusto"></div>
                                <h1>{t('Sec4MONEY')}</h1>
                                <div className="pusto"></div>
                                <button>{t('Sec2BTN')}</button>
                            </div>
                            <img src={img} alt="" />
                        </div>
                        
                    ))
                }
            </div>
            </div>

        </div>
    );
}

export default Section4;