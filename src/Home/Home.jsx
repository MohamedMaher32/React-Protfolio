import React from 'react'
import myImg from '../image/home.jpg'
import './Home.css'
export default function Home() {
  return (
        <section className='home vh-100'>
            <img src={myImg} alt="home"/>
            <h1>MOHAMED MAHER</h1>
            <i className="fa-solid fa-star"></i>
            <h6>Front-End Developer</h6>
        </section>
  )
}
