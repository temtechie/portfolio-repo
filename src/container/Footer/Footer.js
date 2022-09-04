import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { images } from '../../constants';
import { AppWrapp, MotionWrap } from '../../wrapper';
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const form = useRef();
  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!formData.name.trim() || !formData.email.trim() ){
      setErrorMsg("Please enter valid name or email");
      setTimeout(() => {
        setErrorMsg("");
      }, 3000);
    }else {
    setLoading(true);
    setIsFormSubmitted(true);
    emailjs.sendForm('service_88mlm6m', 'template_4r9y5xa', form.current, '78-jL-RV8ErACu1zN')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    setTimeout(() => {
      setLoading(false);
      setIsFormSubmitted(false);
    }, 3000);
    if(formData){
      setFormData({name: "", email: ""});
    }
    }
  

  };

  console.log('formData', formData);
  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:hello@micael.com" className="p-text">templendukwu144@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+2347069311107" className="p-text">+2347069311107</a>
        </div>
      </div>
      <div style={{color: 'red'}}>{errorMsg}</div>
      {!isFormSubmitted ? (
        <form className="app__footer-form app__flex" ref={form} onSubmit={handleSubmit}>
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="name" onChange={handleChangeInput} required />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="email" onChange={handleChangeInput} required />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="submit" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
        </form>
      ) : (
        <div>
          <h3 className="head-text thank-you-msg">
            Thank you for getting in touch!
          </h3>
        </div>
      )}
    </>
  );
};

export default AppWrapp(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);