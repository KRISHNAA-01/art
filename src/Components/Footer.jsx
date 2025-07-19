import React from "react"
import './Footer.css'

const Footer=()=>{
    return(
    <>
    <section id="contact" className="section">
        <h2>Contact Us</h2>
        <form>
            <input type="text" placeholder="Your Name" required/>
            <input type="email" placeholder="Your Email" required/>
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
        </form>
    </section>
    
    
    <footer>
        <p>&copy; 2025 Abhyuday art classes. All rights reserved.</p>
    </footer>
    </>
);
};
export default Footer;