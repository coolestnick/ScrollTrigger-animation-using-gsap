import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import './App.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <div className="smooth-scroll">
      <div className="hero-scroller">
        <div className="section">
          <div className="section-wrapper">
            <div className="content">
              <h1 className="hero-header h-1">the great</h1>
              <h1 className="hero-header h-2">outdoors</h1>
              <h1 className="hero-header h-3">volume</h1>
            </div>
            <div className="pin-wrapper">
              <div className="image-wrapper" id="heroImage">
                <img alt='scrolltrigger-pic'
                  className="image"
                  src="https://images.unsplash.com/photo-1653919450772-489831a08403?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section copy">
        <div className="section-wrapper">
          <div className="content">
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
