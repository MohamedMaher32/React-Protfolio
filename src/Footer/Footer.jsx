import React from 'react'
import './Footer.css'
export default function Footer() {
  return (
    <div>
      <footer >
        <div className="container">
          <div className="row gy-5">
            <div className="col-lg-4">
              <div className="self h-100 border border-2 p-3 rounded-4">
                <h4>LOCATION</h4>
                <p>Cairo - Egypt</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="self h-100 border border-2 p-3 rounded-4">
                <h4>AROUND THE WEB</h4>
                <div className="row justify-content-center align-items-center">
                  <div className="icon">
                    <i className="fa-brands fa-facebook-f"></i>
                  </div>
                  <div className="icon">
                    <i className="fa-brands fa-twitter"></i>
                  </div>
                  <div className="icon">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </div>
                  <div className="icon">
                    <i className="fa-brands fa-github"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="self h-100 border border-2 p-3 rounded-4">
                <h4>ABOUT FONTEND</h4>
                <p>The frontend is everything a user sees and interacts with when they click on a link or type in a web address.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className='copy py-4 text-center text-white'><p className='m-0'>Copyright © 2023 Create By Mohamed Maher</p></div>
    </div>
  )
}
