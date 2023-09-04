import Head from "next/head";
import Link from "next/link";
import React from "react";
import { Suspense, useEffect, useLayoutEffect, useRef, useState } from "react";
import scrollToTop from "../../common/scrollToTo";
import mousecursor from "../../common/mouseEffect";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollSmoother } from "gsap/dist/ScrollSmoother";

export default function Bootstrap() {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  const imgRef = useRef(null);
  const imgContRef = useRef(null);
  const imgCont2Ref = useRef(null);
  const imagePaths = [
    "/images/Comp01.png",
    "/images/Comp02.png",
    "/images/Comp03.png",
    "/images/Comp04.png",
    "/images/Comp05.png",
    "/images/Comp06.png",
    "/images/Comp07.png",
    "/images/Comp08.png",
    "/images/Comp09.png",
    "/images/Comp10.png",
    "/images/Comp11.png",
    "/images/Comp12.png",
    "/images/Comp13.png",
    "/images/Comp14.png",
    "/images/Comp15.png",
    "/images/Comp16.png",
    "/images/Comp17.png",
    "/images/Comp18.png",
    "/images/Comp19.png",
    "/images/Comp20.png",
    "/images/Comp21.png",
    "/images/Comp22.png",
    "/images/Comp23.png",
    "/images/Comp24.png",
  ];

  useEffect(() => {
    const imgElement = imgRef.current as unknown as HTMLImageElement;
    let progress = 0;
    let index = 1;
    const updateImage = () => {
      index > imagePaths.length ? (index = 0) : index++;
      imgElement.src = imagePaths[index];
    };

    gsap.timeline({
      scrollTrigger: {
        id: "imgseq",
        trigger: ".printer",
        start: "top center",
        end: "+=1800 center",
        scrub: 0.2, // Adjust this value for smoother or faster scrubbing
        markers: true,
        onUpdate: (self) => {
          progress = self.progress;
          updateImage();
        },
      },
    });

    updateImage();
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        id: "printer-pin",
        trigger: ".printer",
        pin: true,
        pinSpacing: false,
        start: "top center",
        end: "bottom top",
        endTrigger: ".footer-half",
        markers: true,
      });

      const timeline = gsap.timeline();
      ScrollTrigger.create({
          id:'translate',
          animation:timeline,
          trigger: "#row2",
          start:"top-=200 center",
          end:'+=200 center',
          markers:true
      })
      timeline.fromTo(".printer",{translateY:"0vh"},{translateY:"30vh",duration:'5'})

      const timeline3 = gsap.timeline();

      ScrollTrigger.create({
        id: 'clip2',
        animation: timeline3,
        trigger: ".printer",
        start: "top center",  // Adjust this starting point as needed
        end: "bottom center", // Adjust this ending point as needed
        scrub: 0,
        markers: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const printerPosition = progress * 100; // Adjust this value based on your printer's translation distance
          // Apply clip-path animation to .img-cont2 based on printer position
          if (printerPosition >= 0 && printerPosition <= 30) {
            gsap.to(".img-cont2", { clipPath: `polygon(0 0, 100% 0, 100% ${100 - printerPosition}%, 0% ${100 - printerPosition}%)`, ease: "none" });
          } else {
            gsap.to(".img-cont2", { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", ease: "none" });
          }
        },
      });
    });
    return () => ctx.revert();
  });

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const timeline3 = gsap.timeline();

      ScrollTrigger.create({
        id:'clip1',
        animation: timeline3,
        trigger: ".img-cont",
        start: "top center",
        end:'bottom center',
        scrub: 0,
        markers:true
      });

      timeline3.fromTo(
        ".img-cont",
        { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" },
        { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }
      );

      // const timeline4 = gsap.timeline();

      // ScrollTrigger.create({
      //   id:'clip2',
      //   animation: timeline4,
      //   trigger: ".img-cont2",
      //   start: "top center",
      //   end:'bottom center',
      //   scrub: 0,
      //   markers:true
      // });

      // timeline4.fromTo(
      //   ".img-cont2",
      //   { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" },
      //   { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }
      // );
    });
    return () => ctx.revert();
  }, []);

  React.useEffect(() => {
    scrollToTop();
  }, []);

  React.useEffect(() => {
    mousecursor();
  }, []);

  return (
    <>
      {/* <Head>
        <link rel="stylesheet" href="/css/dark.css" />
      </Head> */}
      <section className="page-header proj-det">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-9">
              <div className="cont">
                <h6>art &amp; illustration</h6>
                <h2>Natural plus modern.</h2>
              </div>
            </div>
          </div>
        </div>
        <div
          className="img-wrapper bg-img parallaxie"
          style={{ backgroundImage: "url(/img/portfolio/project1/bg.jpg)" }}
        ></div>
      </section>

      <section className="intro-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4">
              <div className="htit">
                <h4>
                  <span>01 </span> Introduction
                </h4>
              </div>
            </div>
            <div className="col-lg-8 offset-lg-1 col-md-8 mb-30">
              <div className="text">
                <p className="extra-text">
                  We are a Creative Agency &amp; Startup Studio that provides
                  Digital Products and Services turns to focus on client
                  success. We specialize in user interface design, including
                  front-end development which we consider to be an integral
                  part.
                </p>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="item mt-30">
                <h6>Client</h6>
                <p>
                  <a href="#0">Envato.com</a>
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="item mt-30">
                <h6>Date</h6>
                <p>6 August 2022</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="item mt-30">
                <h6>Categories</h6>
                <p>
                  <Link href="/works/works-dark">Web Design </Link> ,
                  <Link href="/works/works-dark">WordPress</Link>
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="item mt-30">
                <h6>Tags</h6>
                <p>
                  <Link href="/works/works-dark">Minimal</Link> ,
                  <Link href="/works/works-dark">Modern</Link> ,
                  <Link href="/works/works-dark">Design</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="intro-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4">
              <div className="htit">
                <h4>
                  <span>02 </span> Description
                </h4>
              </div>
            </div>
            <div className="col-lg-8 offset-lg-1 col-md-8 mb-30">
              <div className="text">
                <p className="extra-text">
                  We are a Creative Agency &amp; Startup Studio that provides
                  Digital Products and Services turns to focus on client
                  success. We specialize in user interface design, including
                  front-end development which we consider to be an integral
                  part.
                </p>
              </div>
            </div>
            <div className="printer" id="printer">
              <img
                ref={imgRef}
                alt="Image Sequence"
                className="image_printer"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="works section-padding pb-70">
        <h2 style={{ display: "none" }}> &nbsp; </h2>
        <div className="container">
          <div className="row lg-space">
            <div className="col-lg-4 col-md-6">
              <div className="item">
                <Link href="/project-details2/project-details2-dark">
                  <div
                    className="img"
                    data-tooltip-tit="Work image"
                    data-tooltip-sub="Design"
                  >
                    <img src="/img/portfolio/works/1.jpg" alt="" id="row1" />
                    <div
                      className="img-cont"
                      style={{
                        backgroundColor: "gray",
                        height: "100%",
                        width: "100%",
                        position: "absolute",
                        top: "0",
                      }}
                    ></div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 valign">
              <div className="item">
                <Link href="/project-details2/project-details2-dark">
                  <div
                    className="img"
                    data-tooltip-tit="Work image"
                    data-tooltip-sub="Branding"
                  >
                    <img src="/img/portfolio/works/2.jpg" alt="" />
                    <div
                      className="img-cont"
                      style={{
                        backgroundColor: "gray",
                        height: "100%",
                        width: "100%",
                        position: "absolute",
                        top: "0",
                      }}
                    ></div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="item">
                <Link href="/project-details2/project-details2-dark">
                  <div
                    className="img"
                    data-tooltip-tit="Work image"
                    data-tooltip-sub="Photography"
                  >
                    <img src="/img/portfolio/works/3.jpg" alt="" />
                    <div
                      className="img-cont"
                      style={{
                        backgroundColor: "gray",
                        height: "100%",
                        width: "100%",
                        position: "absolute",
                        top: "0",
                      }}
                    ></div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 valign">
              <div className="item">
                <Link href="/project-details2/project-details2-dark">
                  <div
                    className="img"
                    data-tooltip-tit="Work image"
                    data-tooltip-sub="Design"
                  >
                    <img src="/img/portfolio/works/6.jpg" alt="" id="row2" />
                    <div
                      className="img-cont2"
                      style={{
                        backgroundColor: "gray",
                        height: "100%",
                        width: "100%",
                        position: "absolute",
                        top: "0",
                      }}
                    ></div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="item">
                <Link href="/project-details2/project-details2-dark">
                  <div
                    className="img"
                    data-tooltip-tit="Work image"
                    data-tooltip-sub="Web Design"
                  >
                    <img src="/img/portfolio/works/5.jpg" alt="" />
                    <div
                      className="img-cont2"
                      style={{
                        backgroundColor: "gray",
                        height: "100%",
                        width: "100%",
                        position: "absolute",
                        top: "0",
                      }}
                    ></div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 valign">
              <div className="item">
                <Link href="/project-details2/project-details2-dark">
                  <div
                    className="img"
                    data-tooltip-tit="Work image"
                    data-tooltip-sub="Photography"
                  >
                    <img src="/img/portfolio/works/4.jpg" alt="" />
                    <div
                      className="img-cont2"
                      style={{
                        backgroundColor: "gray",
                        height: "100%",
                        width: "100%",
                        position: "absolute",
                        top: "0",
                      }}
                    ></div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="item">
                <Link href="/project-details2/project-details2-dark">
                  <div
                    className="img"
                    data-tooltip-tit="Work image"
                    data-tooltip-sub="Creative"
                  >
                    <img src="/img/portfolio/works/7.jpg" alt="" />
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 valign">
              <div className="item">
                <Link href="/project-details2/project-details2-dark">
                  <div
                    className="img"
                    data-tooltip-tit="Work image"
                    data-tooltip-sub="Branding"
                  >
                    <img src="/img/portfolio/works/8.jpg" alt="" />
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="item">
                <Link href="/project-details2/project-details2-dark">
                  <div
                    className="img"
                    data-tooltip-tit="Work image"
                    data-tooltip-sub="Design"
                  >
                    <img src="/img/portfolio/works/9.jpg" alt="" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer-half section-padding pb-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="cont">
                <div className="logo">
                  <a href="#0">
                    {/* <img src={`${appData.lightLogo}`} alt="" /> */}
                  </a>
                </div>
                <div className="con-info custom-font">
                  <ul>
                    <li>
                      <span>Email : </span> join@skydreamers.club
                    </li>
                    <li>
                      <span>Address : </span> 701,702 Supreme Business Park
                      hiranandani powai.
                    </li>
                    <li>
                      <span>Phone : </span> (+1) 2345 678 44 88
                    </li>
                  </ul>
                </div>
                <div className="social-icon">
                  <h6 className="custom-font stit simple-btn">Follow Us</h6>
                  <div className="social">
                    <a href="#0" className="icon">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#0" className="icon">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#0" className="icon">
                      <i className="fab fa-pinterest"></i>
                    </a>
                    <a href="#0" className="icon">
                      <i className="fab fa-behance"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-2">
              <div className="subscribe mb-50">
                <h6 className="custom-font stit simple-btn">Newslatter</h6>
                <p>Sign up for subscribe out newsletter!</p>
              </div>
              <div className="insta">
                <h6 className="custom-font stit simple-btn">Instagram Post</h6>
                <div className="insta-gallary">
                  <a href="#0">
                    <img src="/img/insta/1.jpg" alt="" />
                  </a>
                  <a href="#0">
                    <img src="/img/insta/2.jpg" alt="" />
                  </a>
                  <a href="#0">
                    <img src="/img/insta/3.jpg" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="copyrights text-center">
            <p>
              © 2023, Avo Template. Made with passion by{" "}
              <a href="#0">ThemesCamp</a>.
            </p>
          </div>
        </div>
      </footer>

      <div className="mouse-cursor cursor-outer"></div>
      <div className="mouse-cursor cursor-inner"></div>

      <div className="progress-wrap cursor-pointer">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
    </>
  );
}
