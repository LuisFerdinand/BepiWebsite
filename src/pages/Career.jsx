import React, { useState } from 'react';
import '../styles/Career.css';
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import Footer from '../components/Footer'

// importing images
import firstImg from '../assets/img/nobg/Bepi 2.png';
import nobgImg from '../assets/img/about.png';
import mc1 from '../assets/img/career property/MC/Francis Pope.jpg';
import mc2 from '../assets/img/career property/MC/Malaysia.jpg';
import judges from '../assets/img/career property/Judges/bepi.jpg'
import imgABC from '../assets/img/career property/BA/ABC BA 1.jpg';
import imgAeroDili from '../assets/img/career property/BA/Aero Dili.jpg';
import imgAirTimor from '../assets/img/career property/BA/Air Timor 1.jpg';
import imgBintang from '../assets/img/career property/BA/Bintang BA 1.jpg';
import imgSamsung from '../assets/img/career property/BA/Samsung BA 1.jpg';

const carouselImages = [
  { src: imgABC, title: 'ABC', subtitle: '2000 - 2010', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio numquam aperiam veritatis minima, dicta reprehenderit inventore doloremque iure hic, ipsa ipsum ducimus in perspiciatis nemo illum itaque! Atque neque, sint, rerum ullam quam necessitatibus sapiente ipsa enim adipisci perspiciatis aut.', description2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium tempora commodi aspernatur suscipit assumenda nostrum ducimus soluta in ipsam atque, libero error facere vel laudantium doloribus non accusamus delectus. Maxime, exercitationem quidem unde quia nemo cumque magni non consectetur corrupti.' },
  { src: imgAeroDili, title: 'AERO Dili', subtitle: '2010 - 2020', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio numquam aperiam veritatis minima, dicta reprehenderit inventore doloremque iure hic, ipsa ipsum ducimus in perspiciatis nemo illum itaque! Atque neque, sint, rerum ullam quam necessitatibus sapiente ipsa enim adipisci perspiciatis aut.', description2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium tempora commodi aspernatur suscipit assumenda nostrum ducimus soluta in ipsam atque, libero error facere vel laudantium doloribus non accusamus delectus. Maxime, exercitationem quidem unde quia nemo cumque magni non consectetur corrupti.' },
  { src: imgAirTimor, title: 'Air Timor', subtitle: '2020 - Present', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio numquam aperiam veritatis minima, dicta reprehenderit inventore doloremque iure hic, ipsa ipsum ducimus in perspiciatis nemo illum itaque! Atque neque, sint, rerum ullam quam necessitatibus sapiente ipsa enim adipisci perspiciatis aut.', description2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium tempora commodi aspernatur suscipit assumenda nostrum ducimus soluta in ipsam atque, libero error facere vel laudantium doloribus non accusamus delectus. Maxime, exercitationem quidem unde quia nemo cumque magni non consectetur corrupti.' },
  { src: imgBintang, title: 'Bingtang', subtitle: '2020 - Present', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio numquam aperiam veritatis minima, dicta reprehenderit inventore doloremque iure hic, ipsa ipsum ducimus in perspiciatis nemo illum itaque! Atque neque, sint, rerum ullam quam necessitatibus sapiente ipsa enim adipisci perspiciatis aut.', description2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium tempora commodi aspernatur suscipit assumenda nostrum ducimus soluta in ipsam atque, libero error facere vel laudantium doloribus non accusamus delectus. Maxime, exercitationem quidem unde quia nemo cumque magni non consectetur corrupti.' },
  { src: imgSamsung, title: 'SAMSUNG', subtitle: '2020 - Present', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio numquam aperiam veritatis minima, dicta reprehenderit inventore doloremque iure hic, ipsa ipsum ducimus in perspiciatis nemo illum itaque! Atque neque, sint, rerum ullam quam necessitatibus sapiente ipsa enim adipisci perspiciatis aut.', description2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium tempora commodi aspernatur suscipit assumenda nostrum ducimus soluta in ipsam atque, libero error facere vel laudantium doloribus non accusamus delectus. Maxime, exercitationem quidem unde quia nemo cumque magni non consectetur corrupti.' }
];

function Career() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next image
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
  };

  // Function to go to the previous image
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselImages.length) % carouselImages.length);
  };

  // Get the previous and next images based on current index
  const prevIndex = (currentIndex - 1 + carouselImages.length) % carouselImages.length;
  const nextIndex = (currentIndex + 1) % carouselImages.length;

  return (
    <>
      <div className='bg-img'></div>
      <div className="career">
        <div className="careerContainer">
          <div className='careerItemContainer'>
            {/* Music Section */}
            <section className="section music">
              <h1>🎵 Music</h1>
              <hr className='line' />
              <div className='music-content'>
                <div className='text-content'>
                  <div className='content-header'>
                    <h3>Music Career</h3>
                    <p>2019 - 2023</p>
                  </div>
                  <p>Bepi started to pursue his career as an artist since the beginning of 2019, previously he had been known as a famous MC (Master of Ceremony) for most formal events in the country. His music career commenced after releasing his first single in Tetun titled ‘HAU HO O’ in September 2019 followed by an invitation to sing at International Java Jazz Festival in Jakarta, together with some big talents of Timor-Leste such as: Marvi and Cidalia and some other singers and musician. Post COVID in 2020, he managed to record his first album “MESAK ONA” with 15 tracks available on Spotify including two other singles ‘LA IMAJINA’ and ‘SE LAOS HAU, SE MAK HADOMI O’ – from this album he has released 3 music videos and 4 singles. He is now recording his second album named ‘SHADOW’ with 10 tracks in English, with first premiered English track called ‘SHADOW’ dedicated to his late father on 16 September 2023 and another single ‘I CANNOT IMAGINE’ is now available also on Spotify and YouTube.
                  </p>
                </div>
                <img src={firstImg} className='music-img' />
              </div>
            </section>

            {/* MC Section */}
            <section className='section mc'>
              <h1 className='right-title'>Master Of Ceremony 🎤</h1>
              <hr className='line' />
              <div className='mc-content'>
                <img src={mc1} alt="" className='mc-img' />
                <div className='text-content'>
                  <div className='content-header'>
                    <h3>Pope Francis Visit</h3>
                    <p>2024 - 2024</p>
                  </div>
                  <p>Bepi, a renowned artist from Timor-Leste, has made significant contributions to the nation's cultural landscape, with his career highlighted by his role as the Master of Ceremonies for two pivotal events during the historic visit of Pope Francis to Timor-Leste. On September 11, 2024, Bepi showcased his exceptional talents by serving as the MC for the Pope's meeting with President Horta, state authorities, the diplomatic corps, and representatives of civil society, demonstrating his ability to navigate a high-profile and dignified occasion with poise and professionalism. Additionally, Bepi was entrusted with leading the meeting of Pope Francis with over 3,000 youth at the CCD in Dili, an event that required not only a dynamic stage presence but also a deep understanding of the cultural and social significance of such a gathering. These experiences underline Bepi's versatility as an artist and his dedication to promoting Timorese culture on the world stage, solidifying his reputation as a prominent figure in Timor-Leste's artistic community.</p>
                </div>
              </div>
              <div className='mc-content'>
                <div className='text-content'>
                  <div className='content-header'>
                    <h3>Many MC Events</h3>
                    <p>2024 - 2024</p>
                  </div>
                  <p>Bepi's impressive career as a Master of Ceremonies also includes leading several high-profile events in Timor-Leste, showcasing his exceptional skills in managing significant national and international occasions. He was the MC for the 25th Anniversary of the Popular Consultation held on August 30, 2024, at the National Stadium, which featured renowned artist Paula Rodrigues, reflecting the nation's journey to independence. Additionally, Bepi served as the MC for the Gala Dinner hosted by the Government of Timor-Leste at Palacio Nobre Lahane on September 29, 2024, in honor of the visit by the UN Secretary-General, H.E. Antonio Guterres. His expertise was also displayed during the official visit of the Deputy Prime Minister of Malaysia to Timor-Leste, where he seamlessly facilitated the proceedings. Furthermore, Bepi's role as the MC for the celebration of FALINTIL's Day on August 20, 2024, in Dili, underscored his deep connection to the nation's history and heritage, cementing his status as a distinguished and versatile figure in Timor-Leste's cultural scene.</p>
                </div>
                <img src={mc2} alt="" className='mc-img' />
              </div>
            </section>

            {/* Influencer Section with Carousel */}
            <section className='section influencer'>
              <h1>🔗 Influencer</h1>
              <hr className='line' />
              <div className='content-influencer'>
                <div className="carousel-container">
                  <div className="carousel">
                    <div className="carousel-item prev" onClick={handlePrev}>
                      <img src={carouselImages[prevIndex].src} alt={`Previous: ${carouselImages[prevIndex].title}`} />
                    </div>

                    <div className="carousel-item active">
                      <img src={carouselImages[currentIndex].src} alt={`Active: ${carouselImages[currentIndex].title}`} />
                    </div>

                    <div className="carousel-item next" onClick={handleNext}>
                      <img src={carouselImages[nextIndex].src} alt={`Next: ${carouselImages[nextIndex].title}`} />
                    </div>
                  </div>
                  <div className="carousel-button">
                    <button onClick={handlePrev}> <GrFormPrevious size={25} /> </button>
                    <button onClick={handleNext}> <MdNavigateNext size={25} /> </button>
                  </div>
                </div>
                <div>
                  <div className='content-header-influencer'>
                    <h3>{carouselImages[currentIndex].title}</h3>
                    <p>{carouselImages[currentIndex].subtitle}</p>
                  </div>
                  <p>{carouselImages[currentIndex].description}</p>
                  <p>{carouselImages[currentIndex].description2}</p>
                </div>
              </div>
            </section>

            <section className='section judges'>
              <h1 className='right-title'>Judges  🎟</h1>
              <hr className='line' />
              <div className='judges-content'>
                <img src={judges} className='judges-img' />
                <div className='text-content'>
                  <div className='content-header'>
                    <h3>MEHI music competition</h3>
                    <p>2024</p>
                  </div>
                  <p>In the debut season of the MEHI music competition, Bepi brings a unique blend of expertise, charisma, and genuine passion for music to the judging panel. Known for his sharp ear and extensive background in the industry, Bepi quickly establishes himself as a mentor and motivator, pushing contestants to explore their potential fully. His feedback is constructive yet challenging, encouraging participants to take creative risks and refine their skills. Bepi’s presence on the panel not only adds a layer of professionalism to the show but also creates an inspiring atmosphere for aspiring artists, making MEHI a captivating platform for musical talent to shine.</p>
                </div>
              </div>
            </section>
          </div>
        </div >
        <Footer />
      </div >
    </>
  );
}

export default Career;
