import Image from "next/image"
import Img1 from '../../assets/images/1 (2).jpg'
import Img2 from '../../assets/images/1 (3).jpg'
import Img3 from '../../assets/images/1 (5).jpg'
import Img4 from '../../assets/images/1 (4).jpg'
import Img5 from '../../assets/images/1 (6).jpg'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { ScrollSmoother } from "gsap/dist/ScrollSmoother"
import gsap from "gsap";
import { useLayoutEffect } from "react";

export default function Landing() {

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
        const ctx = gsap.context(() => {

            ScrollSmoother.create({
                wrapper: "#smooth-wrapper",
                content: "#smooth-content",
                smooth: 5,
                effects: true
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".img1",
                    start: "top top",
                    end: "1000",
                    scrub: 2.5,
                    pin: true,
                    markers: true
                }
            });
            tl.add('first')
            tl.fromTo(".img-data", { scale: 0.6 }, { scale: 5, x: "-500vw" }, 'first')
            tl.fromTo(".img-data1", { scale: 0.3 }, { scale: 3, x: "200vw" }, 'first')
            tl.fromTo(".img-data2", { scale: 0 }, { scale: 2.5, x: "-100vw", }, 'first')
            tl.fromTo(".img-data3", { scale: 0 }, { scale: 0.6, x: "8vw"}, 'first')
            tl.fromTo(".img-data4", { scale: 0 }, { scale: 0.6, x: "-8vw", delay: 0.1 }, 'first')
        });
        return () => ctx.revert();
    })

    return (
        <div id="smooth-wrapper">
            <div id="smooth-content">
                <div className="main-section">
                    <div className="img1">
                        <Image src={Img1} alt="img1" className="img-data" width={500} height={500} />
                        <Image src={Img2} alt="img1" className="img-data1" width={500} height={500} />
                        <Image src={Img3} alt="img1" className="img-data2" width={500} height={500} />
                        <Image src={Img4} alt="img1" className="img-data3" width={500} height={500} />
                        <Image src={Img5} alt="img1" className="img-data4" width={500} height={500} />
                    </div>
                </div>
            </div>
        </div>
    )
}
