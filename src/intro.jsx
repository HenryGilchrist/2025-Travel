import { useRef, useState} from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
import temple from './assets/cambodia/temple.jpg';

function Intro(){

    const introDiv = useRef(null);
    const [textVisible,toggleTextVisible] = useState(true);
    const locationsRef = useRef(null);
    const locationList = ["New Zealand", "Indonesia", "Cambodia", "Thailand","Vietnam", "Borneo"];

    useGSAP(() => {

        gsap.fromTo(".intro-img", 
            {
                scale: 1,
                xPercent: -50,
                yPercent: -50
            },
            {
                scale: 0.85,
                xPercent: -50,
                yPercent: -50,
                ease: "power1.inOut",
                scrollTrigger: {
                    immediateRender: false,
                    trigger: locationsRef.current,
                    start: "top-=150px bottom",
                    end: "top-=150px 15%",
                    scrub: 0.5,
                    markers: true
                }
        });

        const tlNZ = gsap.timeline(
        {
            scrollTrigger: {
                pinSpacing: false,
                trigger: '.intro-img-wrapper',
                start: "top top",
                end: "bottom top",
                scrub: 1.5,
                ease: "power1.inOut",
                pin: true,
                onLeave: () => toggleTextVisible(tv => !tv),
                onEnterBack: () => toggleTextVisible(tv => !tv)
            }
        }
        )
        
        tlNZ.fromTo(".intro-img",
            {
                scale: 0.3,
                rotateZ: -56,
                rotateX: 100,
                xPercent: -50,
                yPercent: -50,
                filter: 'grayscale(1) brightness(0.6)'
            },
            {
                duration: 0.9,
                rotateZ: 0,
                rotateX: 0,
                scale: 1,
                xPercent: -50,
                yPercent: -50,
                filter: 'grayscale(0) brightness(1.05)'
            }
        )
            .fromTo(".intro-img-text", 
                {
                    scale: 1,
                    xPercent: -50,
                    yPercent: -50
                },
                {
                    duration: 1,
                    scale: 30,
                    xPercent: -50,
                    yPercent: -50,
                    ease: "power2.in"
                }
                ,"<");

        const elems = gsap.utils.toArray(".location-text");
        elems.forEach((e) => {
            gsap.to(e,
            {
                scrollTrigger: {
                    trigger: e,
                    scrub: true,
                    markers: true,
                    start: "top 30%",
                    end: "bottom 30%",
                },
                yPercent: 100,
                ease: "power2.in"
            })
        })

        let circleWrapper = document.querySelector(".circle-wrapper");
        let circlePic = document.querySelector(".circle-pic");

        let tlCircle = gsap.timeline({
            scrollTrigger: {
                trigger: circleWrapper,
                start: "top top",
                end: "60% top",
                pin: true,
                scrub: 1,
                markers: true
            }
        })

        tlCircle.fromTo(circlePic, {
                height: "10em",
                width: "10em",
                borderRadius: "10em",
                y: "30vh",
                duration: 1
            },
            {
                height: "100vh",
                width: "100vh",
                y: 0,
                borderRadius: "0em",
                duration: 1
            }
        )


        let tlBG = gsap.timeline({
            scrollTrigger: {
                trigger: circleWrapper,
                start: "top top",
                end: "60% top",
                
                scrub: 1,
                markers: true
            }
        })

        tlBG.fromTo("body", {
                backgroundColor: "rgb(29, 32, 32)"
            },
            {
                backgroundColor: "rgb(225, 219, 205)"
            }
        )
        
    })
    
    return(
        <>
            <div className='gradient-bg'>
                <div className="intro-img-wrapper">
                    <img src={temple} alt="Angkor Wat" className="intro-img" />
                    <div className="intro-img-text" style={{ display: !textVisible ? "none" : "block" }}>2025<br/>TRAVEL</div>
                </div>
            </div>
            <div className="locations-wrapper" ref={locationsRef}>
                {locationList.map((value,index) => 
                    <div className="location-box" key={index}>
                        <h1 className="location-text">{value.toUpperCase()}</h1>
                    </div>
                )}
            </div>
            <div className="circle-wrapper">
                <h1 className="circle-text">To Brighten your day!</h1>
                <div className="circle-pic"></div>
            </div>
        </>
    )
}

export default Intro;