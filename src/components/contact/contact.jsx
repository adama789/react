import React from 'react'
import './contact.css'

const contact = () => {
  return (
    <div class="contact">
    <div class="container">
        <div class="row">
            <div class="contact-left">
                <h1 class="sub-title">Contact <span>Me</span></h1>
                <p><i class="fa-solid fa-paper-plane"></i> cedrq@tlen.pl</p>
                <p><i class="fa-solid fa-phone"></i> +48 735 *** 571</p>
                <div class="social-icons">
                    <a href="https://github.com/adama789" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github"/></a>
                    <a href="https://www.linkedin.com/in/adam-cedro-53427025b/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin"/></a>
                    <a href="mailto:cedrq@tlen.pl" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-envelope"/></a>
                    <a href="https://www.facebook.com/adam.cedro.39/"target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-facebook"/></a>
                </div>
            </div>
            <div class="contact-right">
                <form name="submit-to-google-sheet">
                    <input type="text" name="Name" autocomplete="off" placeholder="Name" required/>
                    <input type="email" name="Email" autocomplete="off" placeholder="Email" required/>
                    <textarea name="Message" rows="6" autocomplete="off" placeholder="Message"></textarea>
                    <button type="submit" class="btn btn2">Submit</button>
                </form>
                <span id="msg"></span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default contact