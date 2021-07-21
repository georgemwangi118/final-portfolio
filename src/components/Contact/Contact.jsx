import React from 'react';
import FooterLink from '../FooterLink/FooterLink';
import Header from '../Header/Header';
import './Contact.css';
import contactVector from './../../assets/contact_anime.png';
import github from './../../assets/gh.png';
import linkedin from './../../assets/li.png';
import twitter from './../../assets/tw.png';

const Contact = () => {
    return (
        <div className='section-container'>
            <Header
                heading='Get in touch.'
                details='Interested to collaborate? Feel free to drop me an email.'
            />

            {/* Form section */}
            <div className='contact-form-container'>
                <form className='contact-form'>
                    {/* Email Id Input */}
                    <input
                        type='email'
                        placeholder='Your Email ID'
                        name='email'
                        className='input-box email-input'
                        autoComplete='off'
                    />

                    {/* Email Body */}
                    <textarea
                        type='text'
                        placeholder='Your Message'
                        name='message'
                        className='input-box body-input'
                    ></textarea>

                    {/* Submit button */}
                    <button type='submit' className='contact-btn'>
                        Send Email
                    </button>
                </form>
            </div>

            {/* Social icons */}
            <div className='social-icons-container'>
                <a 
                    href='https://github.com/georgemwangi118' 
                    className='social-icon'
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <img src={github} alt='social' />
                </a>
                <a
                    href='https://www.linkedin.com/in/george-mwangi-47057215b/'
                    className='social-icon'
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <img src={linkedin} alt='social' />
                </a>
                <a
                    href='https://twitter.com/mr_robot118'
                    className='social-icon'
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <img src={twitter} alt='social' style={{ width: '50px'}}/>
                </a>
            </div>

            <FooterLink
                phrase='Read more '
                toAdress='/about'
                link='about me.'
            />

            <div className='vector-frame'>
                <img
                    src={contactVector}
                    alt='vector'
                    className='about-vector'
                />
            </div>
        </div>
    );
};

export default Contact;
