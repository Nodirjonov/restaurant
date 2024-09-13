import React, { useEffect } from 'react';
import './Section2.css'
import logo2 from '../image/photo.png'
import Aos from 'aos';
import { useTranslation } from 'react-i18next';


function Section2() {
    const {t,i18n}=useTranslation()

    useEffect(()=>{
        Aos.init()
      },[])

        const backgroundStyle = {
            backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/5ab6/0b4d/ddf9c989314db64dc22ff27184e3e2f8?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LZl28hDZuR5OBX0uCXs27XjW5dkqJ0cdDVQ6Mk9poNgjHKEYo6PilH5rFW0nLBIHvEkiABaFi9a7vFlnsaQAdUYeeILWhhjv9WduQAudnI9vJI2HB34~wcsPBLnTkw8k4U7rAW7~fbHyqZFjXqUKOWz9w9mn~X6IPbVvdSSfJMvO3Z2NyHGjZUFNGY1cZqAIO69Hr762uh226AAC9XALJqg4VscXFqEn3AFaVApp6LzCQT8zItyIe4dgo37NiHjvfIKnKvY6btxlSVxBQgX2x9r8CsXKmeSx7Fjr7u4B-8fkfQyFMkRpRrn-Ishy0Bz9fWcnEUAgb7f3AYSHU5GrSQ__)',
            backgroundSize: 'cover',
            height: '80vh', 
            width: '100%',
            opacity: "0.9",
          };
    return (
        <div className='boss' style={backgroundStyle}>
            <div className="leftt"  data-aos="fade-right"   data-aos-duration="1200">
                <img src={logo2} alt="" />
            </div>



            <div className="rightt" data-aos="fade-left"   data-aos-duration="1200">
<h2>{t('Sec2H2')}</h2>

<h1>{t('Sec2H1')}</h1>
<div className="spann"></div>
<p>Lorem Ipsum is simply dummy text of the printing and
typesetting industry. Lorem Ipsum has been the industry's
stan</p>
<div className="span"></div>
<div className="mini-right">
<p>{t('Sec2P')}</p>
</div>
<div className="span"></div>
<button className='sec2-btn'><span>{t('Sec2BTN')}</span></button>
            </div>
        </div>
    );
}

export default Section2;