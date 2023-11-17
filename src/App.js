import React, { useEffect, useRef } from 'react';
import '/videos/App.css';

function App() {
  const sectionRefs = [
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef()

  ];

  useEffect(() => {
    const handleScroll = () => {
      sectionRefs.forEach((sectionRef, index) => {
        const rect = sectionRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          const video = sectionRef.current.querySelector('video');
          if (video && video.readyState >= 3) {
            if (video.paused) {
              video.play().catch(error => console.error(error));
            }
          }
        } else {
          const video = sectionRef.current.querySelector('video');
          if (video) {
            video.pause();
            video.currentTime = 0; // Reiniciar el video
          }
        }
      });
    };

    const handleWheel = (event) => {
      const delta = Math.sign(event.deltaY);
      if (delta > 0) {
        // Scrolling down
        for (let i = 0; i < sectionRefs.length; i++) {
          const rect = sectionRefs[i].current.getBoundingClientRect();
          if (rect.top > 0) {
            sectionRefs[i].current.scrollIntoView({ behavior: 'smooth' });
            break;
          }
        }
      } else {
        // Scrolling up
        for (let i = sectionRefs.length - 1; i >= 0; i--) {
          const rect = sectionRefs[i].current.getBoundingClientRect();
          if (rect.bottom < window.innerHeight) {
            sectionRefs[i].current.scrollIntoView({ behavior: 'smooth' });
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('wheel', handleWheel);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleWheel);
    };
  }, [sectionRefs]);

  return (
    <div className="App">
      <audio autoPlay loop>
        <source src="/song.mp3" type="audio/mp3" />
      </audio>
      <section className="section" id="section1" ref={sectionRefs[0]}>
        <video controls={true} autoPlay loop>
          <source src="/videos/1.mp4" type="video/mp4" />
        </video>
      </section>

      <section className="section" id="section2" ref={sectionRefs[1]}>
        <video controls={true} autoPlay loop>
          <source src="/videos/2.mp4" type="video/mp4" />
        </video>
      </section>

      <section className="section" id="section3" ref={sectionRefs[2]}>
        <video controls={true} autoPlay loop>
          <source src="/videos/3.mp4" type="video/mp4" />
        </video>
      </section>

      <section className="section" id="section4" ref={sectionRefs[3]}>
        <video controls={true} autoPlay loop>
          <source src="/videos/4.mp4" type="video/mp4" />
        </video>
      </section>

      <section className="section" id="section5" ref={sectionRefs[4]}>
        <video controls={true} autoPlay loop>
          <source src="/videos/5.mp4" type="video/mp4" />
        </video>
      </section>

      <section className="section" id="section6" ref={sectionRefs[5]}>
        <video controls={true} autoPlay loop>
          <source src="/videos/6.mp4" type="video/mp4" />
        </video>
      </section>

      <section className="section" id="section7" ref={sectionRefs[6]}>
        <video controls={true} autoPlay loop>
          <source src="/videos/7.mp4" type="video/mp4" />
        </video>
      </section>

      <section className="section" id="section8" ref={sectionRefs[7]}>
        <video controls={true} autoPlay loop>
          <source src="/videos/8.mp4" type="video/mp4" />
        </video>
      </section>
    

     
      </div>
  );
}

export default App;