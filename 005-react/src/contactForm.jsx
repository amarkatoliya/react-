import {React,useState} from 'react'
import { useContactForm } from './useContactForm.js'

function contactForm() {
    const {loading,successmessage,submitContact,errormessage} = useContactForm();
    const [form,setForm] = useState({name:"",email:"",message:""})

    const handleChange =(e) => {
        e.preventDefault();
        setForm(...form, {[e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }
  return (
    <div>
        contactForm
        <form onSubmit={handleSubmit}>
            <input 
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            />
            <input 
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            />
            <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            />

            <button type='submit' disabled={loading}>
                {loading ? "Sending...":"Send"}
            </button>

        </form>
            {successmessage && <p style={color='green'}> {successmessage}</p>}
            {errormessage && <p style={color='red'}> {errormessage}</p>}
    </div>
  )
}

export default contactForm