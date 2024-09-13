import React from 'react';
import './Section1.css'
import { useTranslation } from 'react-i18next';

function Section1() {
    const {t,i18n}=useTranslation()

    const backgroundStyle = {
        backgroundImage: 'url(https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png)',
        backgroundSize: 'cover',
        height: '100vh', 
        width: '100%',
        opacity: "0.9",
      };
    return (
        <div style={backgroundStyle} className='bac-im1'>
            <div className="center">
<h1 className='sec1-h1'>{t('Sec1H1')}</h1>
<p className='sec1-p'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.</p>
<div className="sec1-btn-dv">
<button className='sec1-btn'>{t('Sec1BTN')}</button>
</div>
            </div>

        </div>
    );
}

export default Section1;