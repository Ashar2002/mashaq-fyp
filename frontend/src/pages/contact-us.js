import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import Sidebar from '@/components/SideBar'
import React from 'react'

const contactus = () => {
  return (
    <div>
      <Sidebar bg="bg-bisque-0"/>
        <ContactForm />
      <Footer />
    </div>
  )
}

export default contactus
