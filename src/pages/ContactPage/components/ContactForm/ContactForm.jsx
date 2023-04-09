import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
    return <>
        <form name="submit-to-google-sheet">
            <input type="text" name="Name" autoComplete="off" placeholder="Name" required/>
            <input type="email" name="Email" autoComplete="off" placeholder="Email" required/>
            <textarea name="Message" rows="6" autoComplete="off" placeholder="Message"></textarea>
            <button type="submit" className="btn btn2">Submit</button>
        </form>
        <span id="msg"></span>
    </>;
}

export default ContactForm;
