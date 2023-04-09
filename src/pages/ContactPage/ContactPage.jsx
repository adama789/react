import React from 'react'
import './ContactPage.css'
import ContactForm from "./components/ContactForm/ContactForm";
import ContactInfo from "./components/ContactInfo/ContactInfo";

const ContactPage = () => {

    return (
        <div className="contact">
            <div className="container">
                <div className="row">
                    <div className="contact-left">
                        <ContactInfo/>
                    </div>
                    <div className="contact-right">
                        <ContactForm/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage
