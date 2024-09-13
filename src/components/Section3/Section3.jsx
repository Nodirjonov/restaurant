
import './Section3.css'
import logo3 from '../image/photo2.png'
import { useTranslation } from 'react-i18next';


function Section3() {
  const {t,i18n}=useTranslation()

    const backgroundStyle = {
        backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/2cb0/c938/a4646a3e83938ce76a46050c152400e0?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DdYl-eJ3X4DBOB6QMG9OBnK5kQVHJGRcLNbCPai9mZffl-4NO6HpAVgvtg777Bar6YUW1ZRB2e1yaObo9tFjAS7t8IgxBcAfmNyT33nAZHW78PxsmtDsOViAd6CsOELZm7IIB7wjC2C0sGM7YOZL8hjs4nZkg92SPBpwhG8q8PfekXx0jIKxjp7mRa60khUK~kuBkj7WA5IV1nv07kPcKm~K7Nm0M4D2v2zuwcIf9AIYnWLhvzkOBqsYDT4Y8yP5U185Pz6s-4~1JuQDVADBSjbox2ZPjIBY6gkUZokQbYzDhLtjDA8EQVsj~QfQ--BeVGDOJ7fJMNfjlD3KZhsQpg__)',
        backgroundSize: 'cover',
        height: '90vh', 
        width: '100%',
        opacity: "0.9",
      };
    const backgroundStyl= {
        backgroundImage: 'url(https://images.wallpaperscraft.ru/image/single/belyj_fon_vmiatiny_69592_300x168.jpg)',
        backgroundSize: 'cover',
        height: '450px', 
        width: '430px',
        opacity: "0.9",
      };
      
    return (
        <div className='bosss' style={backgroundStyle} 
       >
        <div className="overlay" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
      data-aos-duration="1000"
     data-aos-offset="0">
            <div className="lefttt" style={backgroundStyl}  >
            <h2>{t('Sec3H2')}</h2>

<h1>{t('Sec3H1')}</h1>
<div className="spann"></div>
<p>Lorem Ipsum is simply dummy text of the
printing and typesetting industry. Lorem Ipsum
has been the industry's stan</p>
<div className="span"></div>
<div className="mini-right">
<p>{t('Sec2P')}</p>
</div>
<div className="span"></div>
<button className='sec2-btn'>{t('Sec2BTN')}</button>
            </div>



            <div className="righttt"  >
<img src={logo3} alt="" />
            </div>
            </div>
        </div>
    );
}

export default Section3;