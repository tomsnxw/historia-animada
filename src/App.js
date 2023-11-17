import React, { useEffect, useRef } from 'react';
import './App.css';

function App() {
  return (
 < div className="App">
      <audio autoPlay loop>
        <source src="/song.mp3" type="audio/mp3" />
      </audio>
      <section className="section" id="section1" >
        <video controls={true} autoPlay loop>
          <source src="/1.mp4" type="video/mp4" />
        </video>
      </section>

      <section className="section" id="section2" >
        <video controls={true} autoPlay loop>
          <source src="/2.mp4" type="video/mp4" />
        </video>
      </section>

      <section className="section" id="section3" >
        <video controls={true} autoPlay loop>
          <source src="/3.mp4" type="video/mp4" />
        </video>
      </section>

      <section className="section" id="section4" >
        <video controls={true} autoPlay loop>
          <source src="/4.mp4" type="video/mp4" />
        </video>
      </section>

      <section className="section" id="section5" >
        <video controls={true} autoPlay loop>
          <source src="/5.mp4" type="video/mp4" />
        </video>
      </section>

      <section className="section" id="section6" >
        <video controls={true} autoPlay loop>
          <source src="/6.mp4" type="video/mp4" />
        </video>
      </section>

      <section className="section" id="section7" >
        <video controls={true} autoPlay loop>
          <source src="/7.mp4" type="video/mp4" />
        </video>
      </section>

      <section className="section" id="section8" >
        <video controls={true} autoPlay loop>
          <source src="/8.mp4" type="video/mp4" />
        </video>
      </section>
    

     
      </div>
  );
}

export default App;