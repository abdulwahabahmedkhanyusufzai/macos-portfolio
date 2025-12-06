import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

const renderText = (text,className,baseWeight="400") => {
    return [...text].map((char,i) => (
        <span key={i} className={className} style={{fontVariationSettings: `'wght' ${baseWeight}`}}>
            {char == " " ? "\u00A0" : char}
            </span>
    ))
}

const FONT_WEIGHTS = {
    subTitle:{min:100,max:420,default:100},
    title:{min:400,max:900,default:400}
}
const setupTextHover = (container,type) => {
    if(!container) return;
    const letters = container.querySelectorAll("span");
    const {min,max,default:base} = FONT_WEIGHTS[type];
    const animateLetters = (letter,weights,duration=0.25)=>{
        return gsap.to(letter,{
            duration,
            ease:"power2.out",
            fontVariationSettings: `'wght' ${weights}`,

        })
    };

    const handleMouseMove = (e) => {
      const {left} = container.getBoundingClientRect();  
      const mouseX = e.clientX - left;
      
      letters.forEach((letter)=>{
        const {left:l,width:w} = letter.getBoundingClientRect();
        const distance = Math.abs(mouseX - (l - left +  w / 2));
        const intensity = Math.exp(-(distance ** 2)/2000);
        animateLetters(letter,min + (max-min)*intensity);
      });
    };
    const handleMouseLeave = (e) => {
        letters.forEach((letter)=>{
            animateLetters(letter,base,0.3);
        })
    }
    container.addEventListener("mousemove",handleMouseMove);
    container.addEventListener("mouseleave",handleMouseLeave);

    return () => {
        container.removeEventListener("mousemove",handleMouseMove);
        container.removeEventListener("mouseleave",handleMouseLeave);
    }
    
};
const Welcome = () => {
    const titleRef = useRef(null);
    const subTitleRef = useRef(null);

    useGSAP(() =>{
        const textCleanup = setupTextHover(subTitleRef.current,"title");
        const textCleanup2 = setupTextHover(titleRef.current,"subTitle");
        
        return () => {
            textCleanup();
            textCleanup2();
        }
    },[])
    return (
        <section id="welcome">
            <p ref={subTitleRef}>
               {renderText("Hey, I'm Abdul Wahab Welcome to my", "text-lg md:text-3xl font-georama",100)}</p>
            <h1 className="mt-7" ref={titleRef}>{renderText("portfolio", "text-5xl md:text-9xl italic font-georama")}</h1>


        </section>
    )
}

export default Welcome