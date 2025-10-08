import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

// NZ images
import nzBeach from "./assets/nz/beach.JPG";
import nzBikeSquare from "./assets/nz/bikeSquare.jpg";
import nzGroup from "./assets/nz/group.JPG";
import nzMountain from "./assets/nz/mountain.jpg";
import nzCave from "./assets/nz/cave.jpg";
import nzMountainLake from "./assets/nz/mountain-lake.jpg";

// Indonesia images
import indoSummitGroup from "./assets/indonesia/summitGroup.jpg";
import indoManta from "./assets/indonesia/manta.jpg";
import indoHorses from "./assets/indonesia/horses.jpg";
import indoSunset from "./assets/indonesia/sunset.jpg";
import indoTurtle from "./assets/indonesia/turtle.jpg";

// Cambodia images
import cambodiaWeatheredStatues from "./assets/cambodia/weatheredStatue.jpg";
import cambodiaGoldStatue from "./assets/cambodia/goldStatue.jpg";
import cambodiaMonkey from "./assets/cambodia/monkey.jpg";
import cambodiaChumMey from "./assets/cambodia/chumMey.jpg";
import cambodiaSleepy from "./assets/cambodia/sleepy.jpg";


// Thailand images
import thailandMonkey from "./assets/thailand/monkey.jpg";
import thailandTemple from "./assets/thailand/temple.jpg";
import thailandElephant from "./assets/thailand/elephant.jpg";
import thailandPalmTrees from "./assets/thailand/palmTrees.jpg";
import thailandGoldStatues from "./assets/thailand/goldStatues.jpg";

// Vietnam images
import vietnamCave from "./assets/vietnam/cave.jpg";
import vietnamDog from "./assets/vietnam/dog.jpg";
import vietnamLightShow from "./assets/vietnam/lightShow.jpg";
import vietnamRicePaddy from "./assets/vietnam/ricePaddy.jpg";
import vietnamSunset from "./assets/vietnam/sunset.jpg";

// Borneo images
import borneoWaterfall from "./assets/borneo/waterfall.jpg";
import borneoBaby from "./assets/borneo/baby.jpg";
import borneoStandoff from "./assets/borneo/standoff.jpg";



function Gallery(){

    useGSAP(() => {
            document.querySelectorAll('.collage > img:nth-child(3n + 1)').forEach((triggerElement) => {
      let tlFirst = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    })
    tlFirst.to(triggerElement,{
      y: "-3vh",
      duration: 1
    })

  })


  document.querySelectorAll('.collage > img:nth-child(3n + 2)').forEach((triggerElement) => {
     let tlSecond = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      start: "top bottom",
      end: "bottom top",
      scrub: 0.7
    }
  })
  tlSecond.to(triggerElement,{
    y: "-6vh",
    duration: 1
  })
  })

  



    document.querySelectorAll('.collage > img:nth-child(3n + 3)').forEach((triggerElement) => {
      let tlThird = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5
        }
      })
      tlThird.to(triggerElement,{
        y: "2vh",
        duration: 1
      })
  })

   
  
  


// Set initial active title
document.querySelectorAll('.location-bg')[0].classList.add('is-active');

// For each .grid_wrapper
document.querySelectorAll('.collage').forEach((triggerElement, index) => {
const targetElement = document.querySelectorAll('.location-bg')[index];

let tlSections = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      start: "top 35%",
      end: "bottom 35%",
      onEnter: () => {
        document.querySelectorAll('.location-bg').forEach(el => el.classList.remove('is-active'));
        targetElement.classList.add('is-active');
      },
      onEnterBack: () => {
        document.querySelectorAll('.location-bg').forEach(el => el.classList.remove('is-active'));
        targetElement.classList.add('is-active');
      }
    }
  });

  let tlTitle = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      start: "20% top",
      end: "bottom 40%",
      immediateRender: false,
      scrub: 1
    }
  });
 
    if(index % 2 != 0){
        tlTitle.fromTo([targetElement,document.body],{
            color: "rgb(225, 219, 205)",
            backgroundColor: "rgb(19, 17, 17)",
        },{
            color: "rgb(19, 17, 17)",
            backgroundColor: "rgb(225, 219, 205)",
            duration: 1
        })
    }
    else{
        tlTitle.fromTo([targetElement,document.body],{
            color: "rgb(19, 17, 17)",
            backgroundColor: "rgb(225, 219, 205)",
        },{
            color: "rgb(225, 219, 205)",
            backgroundColor: "rgb(19, 17, 17)",
            duration: 1
        })
    }
    });

    gsap.set(document.body,{
      backgroundColor: "rgb(29, 32, 32)" // Override the fromTo initial background colour.
    })
    })
    return(
    <>
        <div className="location-list">
            <h1 className="location-bg">New Zealand</h1>
            <h1 className="location-bg">Indonesia</h1>
            <h1 className="location-bg">Cambodia</h1>
            <h1 className="location-bg">Thailand</h1>
            <h1 className="location-bg">Vietnam</h1>
            <h1 className="location-bg">Borneo</h1>
        </div>

        <div className="gap50"></div>

        <div className="collage">
            <img className="nz" src={nzBeach} alt="NZ Beach" />
            <img className="nz" src={nzBikeSquare} alt="NZ Bike" />
            <img className="nz" src={nzGroup} alt="NZ Group" />
            <img className="nz" src={nzMountain} alt="NZ Mountain" />
            <img className="nz" src={nzCave} alt="NZ Cave" />
            <img className="nz" src={nzMountainLake} alt="NZ Mountain Lake" />
        </div>

        <div className="collage">
            <img className="indo" src={indoSummitGroup} alt="Indonesia Summit Group" />
            <img className="indo" src={indoManta} alt="Indonesia Manta" />
            <img className="indo" src={indoHorses} alt="Indonesia Horses" />
            <img className="indo" src={indoSunset} alt="Indonesia Sunset" />
            <img className="indo" src={indoTurtle} alt="Indonesia Turtle" />
        </div>

        <div className="collage">
            <img className="cambodia" src={cambodiaMonkey} alt="Cambodia Monkey" />
            <img className="cambodia" src={cambodiaChumMey} alt="Cambodia Chum Mey" />
            <img className="cambodia" src={cambodiaWeatheredStatues} alt="Cambodia Weathered Statues" />
            <img className="cambodia" src={cambodiaGoldStatue} alt="Cambodia Gold Statue" />
            <img className="cambodia" src={cambodiaSleepy} alt="Cambodia Sleepy" />
        </div>

        <div className="collage">
            <img className="thailand" src={thailandMonkey} alt="Thailand Monkey" />
            <img className="thailand" src={thailandTemple} alt="Thailand Temple" />
            <img className="thailand" src={thailandElephant} alt="Thailand Elephant" />
            <img className="thailand" src={thailandPalmTrees} alt="Thailand Palm Trees" />
            <img className="thailand" src={thailandGoldStatues} alt="Thailand Gold Statues" />
        </div>

        <div className="collage">
            <img className="vietnam" src={vietnamCave} alt="Vietnam Cave"></img>
            <img className="vietnam" src={vietnamDog} alt="Vietnam Dog"></img>
            <img className="vietnam" src={vietnamRicePaddy} alt="Vietnam Rice Paddy"></img>
            <img className="vietnam" src={vietnamLightShow} alt="Vietnam Light Show"></img>
            <img className="vietnam" src={vietnamSunset} alt="Vietnam Sunset"></img>
        </div>

        <div className="collage">
          <img className="borneo" src={borneoWaterfall} alt="Borneo Waterfall" />
          <img className="borneo" src={borneoBaby} alt="Borneo Baby Monkey" />
          <img className="borneo" src={borneoStandoff} alt="Borneo Standoff" />
        </div>
    </>
    )
}

export default Gallery;