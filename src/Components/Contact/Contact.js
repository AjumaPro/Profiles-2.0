import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import './Contact.css'
import { useRef } from 'react';
{/* Contact Form */}
function Contact() {

    /* Emailjs Line of code configure email from contact form*/
    const form = useRef();

    const [done, setDone] = useState(false)

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_9i5a4wn', 'template_niaydns', form.current, 'rwdFvz7AgtOi0_m8_')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };
/* Contact Form area */
  return (
    <div className='contact-form'>
        <div className='w-left'>
            <div className='awesome'>
                <span>Get in touch</span>
                <span>Contact me</span>
                <div className='blur s-blur1'
                style={{background: "#ABF1FF94"}}
                ></div>
            </div>
        </div>

        {/* Right side of the contact form */}
        <div
        className='c-right'>
            <form ref={form} onSubmit={sendEmail}>
                <input type='text' name='user_name' className='user' 
                placeholder='Name'/>
                <input type='email' name='user_email' className='user' 
                placeholder='Email'/>
                <textarea name='message' className='user' placeholder='Message'/>
                <input type='submit' value='Send' className='button'/>
                <span>{done && "Thanks for Reaching out to me!"}</span>
                <div
                className='blur c-blur1'
                style={{background: "var(--purple)"}}></div>
            </form>
        </div>
    </div>

  )
}

export default Contact