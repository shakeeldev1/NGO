import React from 'react'
import Hero from '../components/ContactUs.jsx/Hero'
import ContactForm from '../components/ContactUs.jsx/ContactForm'
import LocationMap from '../components/ContactUs.jsx/LocationMap'
import FAQ from '../components/ContactUs.jsx/FAQ'



const ContactPage = () => {
  return (
    <div>
      <Hero/>
    <ContactForm/>
     <LocationMap/>
     <FAQ/>
    </div>
  ) 
}

export default ContactPage
