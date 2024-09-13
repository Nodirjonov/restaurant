import React from 'react';
import './Section5.css'
import telefon from '../image/telefon.png'
import btngoogle from '../image/btn-google.png'
import btnapple from '../image/btn-apple.png'
import { useTranslation } from 'react-i18next';

function Section5() {
    const {t,i18n}=useTranslation()

    const backgroundStyle = {
        backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/ed90/8c49/de2b50da9fd18fc5c8933465712ea367?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S8FFVbEdG2XlX~cppBRqUMD-gt7S2srCXpQxZuj9UO03R1~F1a99fVrrBx4Zw7v~kSktnOk5ZmB4jEdW~pguDRhBu5aInc4iJsSrcVjnB5aHKfsVngYJlN7yJ0XGF1~Qj2Wz2xK1P2ffb78zLBJS6yeRHgPDcVeuwnw1OFwl9X3e6N8PuIfMT-cJxTH7xZ6UvMe8T1MDfA7wNtlXYp6dDwnN5O5-Rmt8~Caf4ir4uepndHHG9O7p6n6nCGnO~DS-7K5a1U1puvtDS1kDhbY5-zhWIN~D9EBjIbeE2bs676KKqjfr8syw3g8O~UzTBVAMfgthvy-v1NadneVtCePKZg__)',
        backgroundSize: 'cover',
        height: '100vh', 
        width: '100%',
        opacity: "1",
        
      };
    return (
        <div style={backgroundStyle} className='sec-5-backimg'>
            <div className="ee"  data-aos="zoom-in" data-aos-duration="1000">
            <div className="lefp">
<img src={telefon} alt="" />
            </div>



            <div className="righp">
<h2>{t('Sec5H2')}</h2>
<div className="pusto"></div>
<h1>{t('Sec5H1')}</h1>
<div className="pusto"></div>
<p>{t('Sec5P')}</p>
<div className="pusto"></div>
<div className="btn-img">
<img src={btngoogle} alt="" />

<img src={btnapple} alt="" />
</div>
</div>
            </div>
        </div>
    );
}

export default Section5;