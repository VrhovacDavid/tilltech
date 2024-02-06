import React from "react";
import BrandFour from "../brand/BrandFour";
import FormAppoint from "../form/FormAppoint";
import Link from "next/link";
import Image from "next/image";

const HeroBannerNine = () => {
  return (
    <div className="hero-banner-nine lg-container">
      <Image width="1039" height="973" src="/images/shape/190.svg" alt="shape" className="shapes absolute z-[-1] bg-shape right-0 top-242px" />
      <div className="container">
        <div className="illustration-container absolute z-[1] w-[44%] right-0 top-[22%] before:content-[''] before:absolute before:right-[-30px] before:z-[-1] before:rounded-[10px] before:left-[70px] before:top-0 before:bottom-[50px] before:bg-[rgba(255,255,255,0.4)] after:content-[''] after:absolute after:top-[-25px] after:right-[-30px] after:z-[-2] after:rounded-[10px] after:left-[100px] after:bottom-[50px] after:bg-[rgba(255,255,255,0.2) top-242px]
					 md:relative md:w-full md:mb-[60px]
					 sm:relative sm:w-full sm:mb-[60px]
					 xsm:relative xsm:w-full xsm:mb-[60px]
					 2xl:w-[56%]
					">
          <Image width={844} height={593} style={{height:'fit-content'}}     src="/images/assets/Figma.svg" alt="screen" />
        </div>
        {/* illustration-container */}

        <div className="row">
          <div className="col-lg-6">
            <h1 className="hero-heading">
              Die neue{" "}
              <span>
                Generation <Image  width="430" height="67"  src="/images/shape/189.svg" alt="shape" />
              </span>{" "}
              des Design's.
            </h1>
            <p className="hero-sub-heading">
            Design Abonnements für jeden. Pausiere oder kündige jederzeit.
            </p>
            <a
                      href="#preise"
                    
                     
                      className="theme-btn-nine d-flex justify-content-center "
                    >
                      Pläne ansehen
                    </a>
                
    
            
          </div>
        </div>
        {/* End .row */}
      </div>
      {/* End .container */}

      <div className="partner-slider-two mt-5 md-mt-70">
        <div className="container">
          <p>
          Designs die du lieben wirst ❤️ , garantiert
          </p>
          <div className="partnerSliderTwo">
            <BrandFour />
          </div>
        </div>
      </div>
      {/* /.partner-slider-two */}
    </div>
    //   /.hero-banner-nine
  );
};

export default HeroBannerNine;
