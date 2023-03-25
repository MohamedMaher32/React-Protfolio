import React from 'react'
import './Contact.css'
import Footer from '../Footer/Footer'
export default function Contact() {
  return (
    <div>
     <section className='contact'>
        <div className="container info">
          <div className="header text-center">
              <h3>CONTACT</h3>
              <i className="fa-solid fa-star"></i>
          </div>
          <form className='w-75 my-5'>
            <input type="text" className='form-control pb-4 rounded-0 px-0' placeholder='Name' />
            <input type="email" className='form-control py-4 rounded-0 px-0' placeholder='Email Address' />
            <input type="number" className='form-control py-4 rounded-0 px-0' placeholder='Phone Name' />
            <textarea className='form-control py-4 rounded-0 px-0' placeholder='Message'></textarea>
            <button className='btn btn-success px-4 py-3 mt-3 mb-5'>Send</button>
          </form>
        </div>
      </section>
      <Footer/>
    </div>
  )
}
