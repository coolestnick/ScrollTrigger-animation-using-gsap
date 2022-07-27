import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
 
import LocomotiveScroll from 'locomotive-scroll';
import Paragraph from './paragraph';
import './App.css';




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

document.addEventListener('readystatechange', event => { 
gsap.registerPlugin(ScrollTrigger);

const locoScroll= new LocomotiveScroll({
  el: document.querySelector(".smooth-scroll"),
  smooth: true,
  lerp:0.08
});

locoScroll.on("scroll",ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".smooth-scroll",{
  scrollTop(value){
    return arguments.length
    ? locoScroll.scrollTop(value,0,0) : locoScroll.scroll.instance.scroll.y;

  },
  getBoundingClientRect(){
    return{
      top:0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    }
  },
  pinType:document.querySelector(".smooth-scroll").getElementsByClassName.transform
  ? "transform":"fixed"
});


const vh = (coef) => window.innerHeight * (coef / 100);

const heroScroller=gsap.timeline({
  paused:true,
  scrollTrigger:{
    trigger:".hero-header .h-1",
    scroller:".smooth-scroll",
    pin:".pin-wrapper",
    start:"top 10%",
    scrub: true,
    end: `${vh(100)}`
  }
  
});

heroScroller.to(
  [".hero-header.h-1",".hero-header.h-3"],
  {
    scale:2,
    y:vh(150),
    xPercent:-150
  },
  "heroScroll"
)
.to(".hero-header.h-2",{
  scale:2,
  y:vh(150),
  xPercent:150
},
"heroScroll"
)
.to(
  "#heroImage",
  {
    scaleY: 2.5,
  },
  "heroScroll"
)
.to(
  "#heroImage .image",
  {
    scaleX: 2.5,
    xPercent: 50,
  },
  "heroScroll"
);

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

});
