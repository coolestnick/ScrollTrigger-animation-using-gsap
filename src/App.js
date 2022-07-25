import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import LocomotiveScroll from 'locomotive-scroll';
import Paragraph from './paragraph';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

const scroll = new LocomotiveScroll();


function App() {
  return (
    <div className="smooth-scroll">
      <div className="hero-scroller">
        <div className="section">
          <div className="section-wrapper">
            <div className="content">
              <h1 className="hero-header h-1">THE GREAT</h1>
              <h1 className="hero-header h-2">OUTDOORS</h1>
              <h1 className="hero-header h-3">VOLUMES</h1>
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
      <Paragraph />
    </div>
  );
}

export default App;
