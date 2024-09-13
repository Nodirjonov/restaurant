import React from 'react';
import './Header.css'
import logo from "../image/logo.png"
import { useTranslation } from 'react-i18next';

function Header() {
  
  const {t,i18n}=useTranslation()

  const changeLanguage = (event)=>{
    i18n.changeLanguage(event.target.value)
  }
    return (
        <div className='container'>
          <div className="left">
          <img src={logo} alt="" className='header-im'/> 
            </div>


            <div className="right">
              <a href="" className='tor'>{t('tegA1')}</a>
              <a href="" className='tor'>{t('tegA2')}</a>
              <a href="" className='sakkiz'>{t('tegA3')}</a>
              <a href="" className='sakkiz'>{t('tegA4')}</a>
              <a href="" className='tor'>{t('tegA5')}</a>
              <a href="" className='besh'>{t('tegA6')}</a>
              <select name="" id="" onChange={changeLanguage} defaultValue={i18n.language}>
                <option value="en">English</option>
                <option value="ru">Русский</option>
                
              </select>
              <button className='btn1'>{t('HeaderBTN')}</button>
            </div>
        </div>
    );
}

export default Header;