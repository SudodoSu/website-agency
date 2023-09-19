import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Header from '../header';
import Footer from '../footer';
import FristSection from '../first-section';
import { useState } from 'react';
import ContactImage from "../../assets/images/contact-img.png"

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_q0fv0h8', 'template_k2wqm7h', form.current, 'QslYBLVV8d39BKjwl')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
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
                        <div><input type="text" name="user_name" placeholder='Name'/></div>
                        <div><input type="email" name="user_email" placeholder='Email'/></div>
                        <div>
                            <select id="selectBox" value='Choose Service'>
                                <option value="Web Development">Option 1</option>
                                <option value="Web Solutions">Option 2</option>
                                <option value="Strategy and Research">Option 3</option>
                            </select>
                        </div>
                        <div><textarea name="message" /></div>
                        <div><input type="submit" placeholder='Send' /></div>
                </form>
            </div>
            
        </main>
        <Footer />
    </>
  );
};

export default ContactUs;