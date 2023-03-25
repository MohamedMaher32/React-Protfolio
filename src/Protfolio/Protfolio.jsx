import React from 'react'
import './Protfolio.css'
import pro1 from'../image/project1.jpg'
import pro2 from'../image/project2.png'
import pro3 from'../image/project3.jpg'
import pro4 from'../image/project4.jpg'
import pro5 from'../image/project5.jpg'
import pro6 from'../image/project6.png'
export default function Protfolio() {
  return (
      <section className='protfolio'>
        <div className="container">
          <div className="header text-center pb-5">
          <h3>PORTFOLIO</h3>
          <i className="fa-solid fa-star"></i>
          </div>
          <div className="row g-5 mx-0 mb-5">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="project h-100 position-relative" data-bs-toggle="modal" data-bs-target="#Pato">
                <img src={pro1} alt="project" className='w-100 rounded-3'/>
                <div className="layer w-100 h-100 rounded-3 d-flex justify-content-center align-items-center text-white flex-column">
                  <h2>PATO</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="project h-100 position-relative" data-bs-toggle="modal" data-bs-target="#Covido">
                <img src={pro2} alt="project" className='w-100 rounded-3'/>
                <div className="layer w-100 h-100 rounded-3 d-flex justify-content-center align-items-center text-white flex-column">
                  <h2>COVIDO</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="project h-100 position-relative" data-bs-toggle="modal" data-bs-target="#Devfolio">
                <img src={pro3} alt="project" className='w-100 rounded-3'/>
                <div className="layer w-100 h-100 rounded-3 d-flex justify-content-center align-items-center text-white flex-column">
                  <h2>DEVFOLIO</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="project h-100 position-relative" data-bs-toggle="modal" data-bs-target="#Danils">
                <img src={pro4} alt="project" className='w-100 rounded-3'/>
                <div className="layer w-100 h-100 rounded-3 d-flex justify-content-center align-items-center text-white flex-column">
                  <h2>DANILS</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="project h-100 position-relative" data-bs-toggle="modal" data-bs-target="#Weather">
                <img src={pro5} alt="project" className='w-100 rounded-3'/>
                <div className="layer w-100 h-100 rounded-3 d-flex justify-content-center align-items-center text-white flex-column">
                  <h2>WEATHER</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="project h-100 position-relative" data-bs-toggle="modal" data-bs-target="#Game">
                <img src={pro6} alt="project" className='w-100 rounded-3'/>
                <div className="layer w-100 h-100 rounded-3 d-flex justify-content-center align-items-center text-white flex-column">
                  <h2>GAMES</h2>
                </div>
              </div>
            </div>
          </div>
          {/* pato model */}
          <div className="modal fade" id="Pato"  aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-body">
                  <i className="fa-solid fa-xmark close " data-bs-dismiss="modal" ></i>
                  <div className="title text-center pb-5">
                    <h3>PATO RESTAURANT</h3>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <img src={pro1} alt="project" className='rounded-3'/>
                  <p className='w-50 text-center py-5'>Restaurants know the importance of making a strong first impression. That's why they invest in exterior design, decorate their entrances, and train hosts to welcome guests with a warm smile. So I designed this page using these tools(HTML5, CSS3, BOOTSTRAP-5, JAVASCRIPT, JQUERY).</p>
                  <div className='pb-5'>
                    <button type="button" className="btn btn-danger me-2" data-bs-dismiss="modal">Close</button>
                    <a href="https://pato-resturant.netlify.app" target="_blank" className='btn btn-success me-2'>Demo</a>
                    <a href="https://github.com/MohamedMaher32/Pato-Resturent" target="_blank" className='btn btn-primary'>Files</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* covido model */}
          <div className="modal fade" id="Covido"  aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-body">
                  <i className="fa-solid fa-xmark close" data-bs-dismiss="modal" ></i>
                  <div className="title text-center pb-5">
                    <h3>COVIDO WEBSITE</h3>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <img src={pro2} alt="project" className='rounded-3'/>
                  <p className='w-50 text-center py-5'>In light of the spread of the Corona virus, many infections spread among people through touch and other things, and therefore people had to follow some instructions to maintain their health, and for that I designed and created this site so that the user knows more information about this virus and how to avoid it and the tools used to build the site(HTML5, CSS3, BOOTSTRAP-5, JAVASCRIPT, JQUERY).</p>
                  <div className='pb-5'>
                    <button type="button" className="btn btn-danger me-2" data-bs-dismiss="modal">Close</button>
                    <a href="https://covido-website.netlify.app" target="_blank" className='btn btn-success me-2'>Demo</a>
                    <a href="https://github.com/MohamedMaher32/Covido-Website" target="_blank" className='btn btn-primary'>Files</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* devfolio model */}
          <div className="modal fade" id="Devfolio"  aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-body">
                  <i className="fa-solid fa-xmark close" data-bs-dismiss="modal" ></i>
                  <div className="title text-center pb-5">
                    <h3>DEVFOLIO WEBSITE</h3>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <img src={pro3} alt="project" className='rounded-3'/>
                  <p className='w-50 text-center py-5'>This is an introductory site for a programmer showing the languages ​​he knows, some of his work and clients, the promise of completed projects, and the tools used to build the site.(HTML5, CSS3, BOOTSTRAP-5, JAVASCRIPT, JQUERY).</p>
                  <div className='pb-5'>
                    <button type="button" className="btn btn-danger me-2" data-bs-dismiss="modal">Close</button>
                    <a href="https://devolifo-website.netlify.app" target="_blank" className='btn btn-success me-2'>Demo</a>
                    <a href="https://github.com/MohamedMaher32/Devfolio-Website" target="_blank" className='btn btn-primary'>Files</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* danils model */}
          <div className="modal fade" id="Danils"  aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-body">
                  <i className="fa-solid fa-xmark close" data-bs-dismiss="modal" ></i>
                  <div className="title text-center pb-5">
                    <h3>DANILS WEBSITE</h3>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <img src={pro4} alt="project" className='rounded-3'/>
                  <p className='w-50 text-center py-5'>This is an introductory site for a programmer showing the languages ​​he knows, some of his work and clients, the promise of completed projects, and the tools used to build the site.(HTML5, CSS3, BOOTSTRAP-5, JAVASCRIPT, JQUERY).</p>
                  <div className='pb-5'>
                    <button type="button" className="btn btn-danger me-2" data-bs-dismiss="modal">Close</button>
                    <a href="https://danills-website.netlify.app" target="_blank" className='btn btn-success me-2'>Demo</a>
                    <a href="https://github.com/MohamedMaher32/Danils-Website" target="_blank" className='btn btn-primary'>Files</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* weather model */}
          <div className="modal fade" id="Weather"  aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-body">
                  <i className="fa-solid fa-xmark close" data-bs-dismiss="modal" ></i>
                  <div className="title text-center pb-5">
                    <h3>WEATHER API</h3>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <img src={pro5} alt="project" className='rounded-3'/>
                  <p className='w-50 text-center py-5'>This is a simple design to display the weather forecast for 3 consecutive days using a weather api the tools used to build the site.(HTML5, CSS3, BOOTSTRAP-5, JAVASCRIPT, API).</p>
                  <div className='pb-5'>
                    <button type="button" className="btn btn-danger me-2" data-bs-dismiss="modal">Close</button>
                    <a href="https://get-weather-api.netlify.app/" target="_blank" className='btn btn-success me-2'>Demo</a>
                    <a href="https://github.com/MohamedMaher32/Weather-Api" target="_blank" className='btn btn-primary'>Files</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* game model */}
          <div className="modal fade" id="Game"  aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-body">
                  <i className="fa-solid fa-xmark close" data-bs-dismiss="modal" ></i>
                  <div className="title text-center pb-5">
                    <h3>GAMES API</h3>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <img src={pro6} alt="project" className='rounded-3'/>
                  <p className='w-50 text-center py-5'>This is a simple design to make smart login system and display free online games using api the tools used to build the site.(HTML5, CSS3, BOOTSTRAP-5, JAVASCRIPT, API).</p>
                  <div className='pb-5'>
                    <button type="button" className="btn btn-danger me-2" data-bs-dismiss="modal">Close</button>
                    <a href="https://smart-login-and-games-api.netlify.app/" target="_blank" className='btn btn-success me-2'>Demo</a>
                    <a href="https://github.com/MohamedMaher32/LoginSystem-GameApi" target="_blank" className='btn btn-primary'>Files</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
