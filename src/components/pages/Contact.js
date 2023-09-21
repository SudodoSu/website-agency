import React, { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Header from '../header';
import Footer from '../footer';
import FristSection from '../first-section';
import { useState } from 'react';
import ContactImage from "../../assets/images/contact-img.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faX } from '@fortawesome/free-solid-svg-icons';

export const ContactUs = () => {
  const form = useRef();
  const [selectedFruit, setSelectedFruit] = useState('');
  const [clicked, isClicked] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [closed, setClose] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setMessageSent(true);

    setTimeout(() => {
        setMessageSent(false);
      }, 3000);
    
    emailjs.sendForm('service_q0fv0h8', 'template_k2wqm7h', form.current, 'QslYBLVV8d39BKjwl')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  const handleSelectChange = (event) => {
    setSelectedFruit(event.target.value);
  };

  const handleClick = () => { 
    isClicked(true); 

    setTimeout(() => {
        isClicked(false);
      }, 120);
  }

  const handleClose = () => { 
        setClose(true);
    };

  return (
    <>
        <Header />
        <FristSection title="Contact Us" />

        <main className='contact-us'>
            <div className='contact-us-image'>
                <img 
                    src={ContactImage}
                />
            </div>
            <div className='contact-us-outform'>
                <form ref={form} onSubmit={sendEmail}>
                        <div><input required type="text" name="from_name" placeholder='Name'/></div>
                        <div><input required type="email" name="from_email" placeholder='Email'/></div>
                        <div>
                            <select required name="service" id="selectBox" value={selectedFruit} placeholder='Choose Service' onChange={handleSelectChange}>
                                <option value="">Choose Service</option>
                                <option value="Web Development">Web Development</option>
                                <option value="Web Solutions">Web Solutions</option>
                                <option value="Strategy and Research">Strategy and Research</option>
                            </select>
                        </div>
                        <div className='contact-us-textarea-div'><textarea name="message" placeholder='Message' /></div>
                        <div className={`submit-button ${clicked ? "clicked" : ""}`}><button onClick={handleClick}><input type="submit" placeholder='Send' /></button></div>
                </form>
            </div>
            {messageSent &&
                <div className={`successfully-sent ${closed ? "closed" : ""}`}>
                    <FontAwesomeIcon className='successfully-sent-check' icon={faCheck} size="2xl" style={{color: "#45F248",}} />
                    <div className='successfully-sent-message'>
                        <h2>Success</h2>
                        <p>We have received your message.</p>
                    </div>
                    <FontAwesomeIcon onClick={handleClose} className="successfully-sent-close" icon={faX} style={{color: "#F9F7F7",}} />
                </div>
            }
        </main>
        <Footer />
    </>
  );
};

export default ContactUs;