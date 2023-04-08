import React from 'react'
import './contact.css'

const contact = () => {
  return (
    <div className="contact">
    <div className="container">
        <div className="row">
            <div className="contact-left">
                <h1 className="sub-title">Contact <span>Me</span></h1>
                <p><i className="fa-solid fa-paper-plane"></i> cedrq@tlen.pl</p>
                <p><i className="fa-solid fa-phone"></i> +48 735 *** 571</p>
                <div className="social-icons">
                    <a href="https://github.com/adama789" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"/></a>
                    <a href="https://www.linkedin.com/in/adam-cedro-53427025b/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"/></a>
                    <a href="mailto:cedrq@tlen.pl" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-envelope"/></a>
                    <a href="https://www.facebook.com/adam.cedro.39/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook"/></a>
                </div>
            </div>
            <div className="contact-right">
                <form name="submit-to-google-sheet">
                    <input type="text" name="Name" autoComplete="off" placeholder="Name" required/>
                    <input type="email" name="Email" autoComplete="off" placeholder="Email" required/>
                    <textarea name="Message" rows="6" autoComplete="off" placeholder="Message"></textarea>
                    <button type="submit" className="btn btn2">Submit</button>
                </form>
                <span id="msg"></span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default contact
