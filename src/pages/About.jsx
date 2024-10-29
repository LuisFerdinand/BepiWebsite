import React from 'react'
import '../styles/About.css'
import bgimg from '../assets/img/nobg/Bepi 1.png'
import mixer from '../assets/img/about2.jpg'
import Footer from '../components/Footer'


function About() {
  return (
    <>
      <div>
        <div className='bg-img'></div>
        <div className="about">
          <div className="aboutContainer">
            <div className="allcontent">
              <div className="first-section">
                <div className='content-about'>
                  <h1> BEPI</h1>
                  <p>Whiteheart Management (WHM) is an Artist Management for Music and Music Video Production, Performance, Influencer and Brand Ambassador of Brands and Products exclusively for Bepi. </p>
                </div>
                <img src={bgimg} alt="img" className='aboutImg' />
              </div>

              <div className="second-section">
                <div className="team-info">
                  <h3>Team Information</h3>
                  <p>Manager - Olivia Ribeiro</p>
                  <p>Assistant - Paula Ferreira</p>
                  <p>Assistant - Fidelio da Costa Martins</p>
                </div>
                <div className="company-info">
                  <h3>Company Information</h3>
                  <p>Travessa 10 de Outubro no. 9, Palapasso – Dili, Timor-Leste
                  </p>
                  <p>Email</p>
                  <p>Phone Number</p>
                </div>
              </div>

              <section className="bottom-content">
                <div className="image-container">
                  <img src={mixer} alt="Mixer" className="mixer-image" />
                </div>
                <div className="additional-info">
                  <p>
                    Bepi is a renowned artist and musician from Timor-Leste who began his music career in 2019, transitioning from being a well-known MC at formal events. His debut single, "HAU HO O," released in Tetun, marked his entry into the music scene, followed by a performance at the prestigious International Java Jazz Festival in Jakarta. In 2020, despite the challenges of the pandemic, he recorded his first album "MESAK ONA," which features 15 tracks, including hits like "LA IMAJINA" and "SE LAOS HAU, SE MAK HADOMI O." Currently, Bepi is working on his second album "SHADOW," featuring 10 tracks in English, with singles like "SHADOW" and "I CANNOT IMAGINE" already available on Spotify and YouTube.                  </p>
                  <p>
                    Beyond music, Bepi has gained recognition as a brand ambassador for several major companies in Timor-Leste, including NTWL on Samsung, Nike (TL Sports), and Aero Dili. He previously collaborated with Air Timor, Bintang/ABC Beer, and Balibo Fort Hotel. Bepi holds a Master’s Degree in Human Resource Management from Monash University and a Bachelor's Degree in Psychology from Swinburne University in Melbourne, showcasing his diverse talents and educational background.                  </p>
                </div>
              </section>
            </div>
          </div>
          <Footer />
        </div>
      </div>


    </>
  );
}

export default About