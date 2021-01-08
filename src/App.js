import React from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";
import "./app.css"
import "./clouds.webp";
import car from './car1.webp'

function App() {

  //  Clouds animations
  const Cloud = useWebAnimations({
    keyframes: [{ transform: "translateX(0px)" },
    { transform: "translateX(-1950px)" }]
    , timing: { duration: 20000, iterations: Infinity, delay: 2000, direction: "normal" }
  })
  const Cloud2 = useWebAnimations({
    keyframes: [{ transform: "translateX(0px)" },
    { transform: 'translateX(-1850px)' }]
    , timing: { duration: 20000, iterations: Infinity, delay: 8000, direction: "normal" }
  })
  const Cloud3 = useWebAnimations({
    keyframes: [{ transform: "translateX(0px)" },
    { transform: "translateX(-1850px)" }]
    , timing: { duration: 20000, iterations: Infinity, delay: 16000, direction: "normal" }
  })
  const Cloud4 = useWebAnimations({
    keyframes: [{ transform: "translateX(0px)" },
    { transform: 'translateX(-1350px)' }]
    , timing: { duration: 15000, iterations: 1, fill: "forwards" }
  })
  const Cloud5 = useWebAnimations({
    keyframes: [{ transform: "translateX(0px)" },
    { transform: "translateX(-900px)" }]
    , timing: { duration: 10000, iterations: 1, fill: "forwards" }
  })

  // Road Lines animations
  const Line1 = useWebAnimations({
    keyframes: [{ transform: "translateX(0px)" },
    { transform: "translateX(-2200px)" }]
    , timing: { duration: 6000, delay: 1000, iterations: Infinity, direction: "normal" }
  })
  const Line2 = useWebAnimations({
    keyframes: [{ transform: "translateX(0px)" },
    { transform: "translateX(-2200px)" }]
    , timing: { duration: 6000, delay: 3000, iterations: Infinity, direction: "normal" }
  })
  const Line3 = useWebAnimations({
    keyframes: [{ transform: "translateX(0px)" },
    { transform: "translateX(-2200px)" }]
    , timing: { duration: 6000, delay: 5000, iterations: Infinity, direction: "normal" }
  })
  const Line4 = useWebAnimations({
    keyframes: [{ transform: "translateX(0px)" },
    { transform: "translateX(-1800px)" }]
    , timing: { duration: 5000, iterations: 1, fill: 'forwards', direction: "normal" }
  })
  const Line5 = useWebAnimations({
    keyframes: [{ transform: "translateX(0px)" },
    { transform: `translateX(-1800px)` }]
    , timing: { duration: 5100, iterations: 1, fill: 'forwards', direction: "normal" }
  })
  const Line6 = useWebAnimations({
    keyframes: [{ transform: "translateX(0px)" },
    { transform: "translateX(-400px)" }]
    , timing: { duration: 2000, iterations: 1, fill: 'forwards', direction: "normal" }
  })

  // Cars animations
  const Car1 = useWebAnimations({
    keyframes: [{ transform: "translateX(0px)" },
    { transform: "translateX(800px)" },
    { transform: "translateX(400px)" },
    { transform: "translateX(600px)" }]
    , timing: { duration: 30000, iterations: Infinity, direction: "alternate" }
  })
  const Car2 = useWebAnimations({
    keyframes: [{ transform: "translateX(0px)" },
    { transform: "translateX(-400px)" },
    { transform: "translateX(100px)" },
    { transform: "translateX(-200px)" },]
    , timing: { duration: 30000, iterations: Infinity, direction: "alternate" }
  })

  // Speed function
  const Speed = () => {
    var cloud1Anm = Cloud.getAnimation();
    var cloud2Anm = Cloud2.getAnimation();
    var cloud3Anm = Cloud3.getAnimation();
    var cloud4Anm = Cloud4.getAnimation();
    var cloud5Anm = Cloud5.getAnimation();
    var line1Anm = Line1.getAnimation();
    var line2Anm = Line2.getAnimation();
    var line3Anm = Line3.getAnimation();
    var line4Anm = Line4.getAnimation();
    var line5Anm = Line5.getAnimation();
    var line6Anm = Line6.getAnimation();
    var car1Anm = Car1.getAnimation();
    var car2Anm = Car2.getAnimation();

    cloud1Anm.updatePlaybackRate(cloud1Anm.playbackRate * 1.15);
    cloud2Anm.updatePlaybackRate(cloud2Anm.playbackRate * 1.15);
    cloud3Anm.updatePlaybackRate(cloud3Anm.playbackRate * 1.15);
    cloud4Anm.updatePlaybackRate(cloud4Anm.playbackRate * 1.15);
    cloud5Anm.updatePlaybackRate(cloud5Anm.playbackRate * 1.15);
    line1Anm.updatePlaybackRate(line1Anm.playbackRate * 1.2);
    line2Anm.updatePlaybackRate(line2Anm.playbackRate * 1.2);
    line3Anm.updatePlaybackRate(line3Anm.playbackRate * 1.2);
    line4Anm.updatePlaybackRate(line4Anm.playbackRate * 1.2);
    line5Anm.updatePlaybackRate(line5Anm.playbackRate * 1.2);
    line6Anm.updatePlaybackRate(line6Anm.playbackRate * 1.2);
    car1Anm.updatePlaybackRate(car1Anm.playbackRate * 1.15)
    car2Anm.updatePlaybackRate(car2Anm.playbackRate * 1.15)
  }
  //Reduce Speed function
  const RSpeed = () => {
    var cloud1Anm = Cloud.getAnimation();
    var cloud2Anm = Cloud2.getAnimation();
    var cloud3Anm = Cloud3.getAnimation();
    var cloud4Anm = Cloud4.getAnimation();
    var cloud5Anm = Cloud5.getAnimation();
    var line1Anm = Line1.getAnimation();
    var line2Anm = Line2.getAnimation();
    var line3Anm = Line3.getAnimation();
    var line4Anm = Line4.getAnimation();
    var line5Anm = Line5.getAnimation();
    var line6Anm = Line6.getAnimation();
    var car1Anm = Car1.getAnimation();
    var car2Anm = Car2.getAnimation();

    cloud1Anm.updatePlaybackRate(cloud1Anm.playbackRate * 0.7);
    cloud2Anm.updatePlaybackRate(cloud2Anm.playbackRate * 0.7);
    cloud3Anm.updatePlaybackRate(cloud3Anm.playbackRate * 0.7);
    cloud4Anm.updatePlaybackRate(cloud4Anm.playbackRate * 0.7);
    cloud5Anm.updatePlaybackRate(cloud5Anm.playbackRate * 0.7);
    line1Anm.updatePlaybackRate(line1Anm.playbackRate * 0.7);
    line2Anm.updatePlaybackRate(line2Anm.playbackRate * 0.7);
    line3Anm.updatePlaybackRate(line3Anm.playbackRate * 0.7);
    line4Anm.updatePlaybackRate(line4Anm.playbackRate * 0.7);
    line5Anm.updatePlaybackRate(line5Anm.playbackRate * 0.7);
    line6Anm.updatePlaybackRate(line6Anm.playbackRate * 0.7);
    car1Anm.updatePlaybackRate(car1Anm.playbackRate * 0.7)
    car2Anm.updatePlaybackRate(car2Anm.playbackRate * 0.7)
  }
  // Stop function

  const Stop = () => {
    var cloud1Anm = Cloud.getAnimation();
    var cloud2Anm = Cloud2.getAnimation();
    var cloud3Anm = Cloud3.getAnimation();
    var cloud4Anm = Cloud4.getAnimation();
    var cloud5Anm = Cloud5.getAnimation();
    var line1Anm = Line1.getAnimation();
    var line2Anm = Line2.getAnimation();
    var line3Anm = Line3.getAnimation();
    var line4Anm = Line4.getAnimation();
    var line5Anm = Line5.getAnimation();
    var line6Anm = Line6.getAnimation();
    var car1Anm = Car1.getAnimation();
    var car2Anm = Car2.getAnimation();

    cloud1Anm.pause();
    cloud2Anm.pause();
    cloud3Anm.pause();
    cloud4Anm.pause();
    cloud5Anm.pause();
    line1Anm.pause();
    line2Anm.pause();
    line3Anm.pause();
    line4Anm.pause();
    line5Anm.pause();
    line6Anm.pause();
    car1Anm.pause();
    car2Anm.pause();
  }
  // Resume function

  const Start = () => {
    var cloud1Anm = Cloud.getAnimation();
    var cloud2Anm = Cloud2.getAnimation();
    var cloud3Anm = Cloud3.getAnimation();
    var cloud4Anm = Cloud4.getAnimation();
    var cloud5Anm = Cloud5.getAnimation();
    var line1Anm = Line1.getAnimation();
    var line2Anm = Line2.getAnimation();
    var line3Anm = Line3.getAnimation();
    var line4Anm = Line4.getAnimation();
    var line5Anm = Line5.getAnimation();
    var line6Anm = Line6.getAnimation();
    var car1Anm = Car1.getAnimation();
    var car2Anm = Car2.getAnimation();

    cloud1Anm.play();
    cloud2Anm.play();
    cloud3Anm.play();
    cloud4Anm.play();
    cloud5Anm.play();
    line1Anm.play();
    line2Anm.play();
    line3Anm.play();
    line4Anm.play();
    line5Anm.play();
    line6Anm.play();
    car1Anm.play();
    car2Anm.play();
  }
  return (
    <div className="Background">
      <img src={require("./clouds.webp")} ref={Cloud4.ref} className="c4" alt="Clouds" />
      <img src={require("./clouds.webp")} ref={Cloud5.ref} className="c5" alt="Clouds" />
      <img src={require("./clouds.webp")} ref={Cloud.ref} className="c1" alt="Clouds" />
      <img src={require("./clouds.webp")} ref={Cloud2.ref} className="c2" alt="Clouds" />
      <img src={require("./clouds.webp")} ref={Cloud3.ref} className="c3" alt="Clouds" />
      <br /><br /><br /><br /><br /><br /><br /><br /><br />
      <div style={{paddingBottom:"30%"}}>
      <button style={{ width: "120px", cursor: "pointer" }} onClick={() => { Speed(); }}>Speed Up</button>&nbsp;&nbsp;
      <button style={{ width: "120px", cursor: "pointer" }} onClick={() => { RSpeed(); }}>Reduce Speed</button>&nbsp;&nbsp;
      <button style={{ width: "120px", cursor: "pointer" }} onClick={() => { Stop(); }}>Stop</button>&nbsp;&nbsp;
      <button style={{ width: "120px", cursor: "pointer", }} onClick={() => { Start(); }}>Resume</button>&nbsp;&nbsp;
      
      </div>
      <div className="road" />

      <div className="line1" ref={Line1.ref}  ></div>
      <div className="line2" ref={Line2.ref}  ></div>
      <div className="line3" ref={Line3.ref}  ></div>
      <div className="line4" ref={Line4.ref} ></div>
      <div className="line5" ref={Line5.ref} ></div>
      <div className="line6" ref={Line6.ref} ></div>

      <img className="car1" ref={Car1.ref} alt="car1" src={car} />
      <img className="car2" ref={Car2.ref} alt="car2" src={car} />
    </div>
  );
}
export default App;
