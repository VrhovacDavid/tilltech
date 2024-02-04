
import FancyFeatureSeventeen from "@/components/features/FancyFeatureSeventeen";
import PricingEight from "@/components/pricing/PricingEight";
import Portfolio from "@/components/portfolio/Portfolio";
import FaqClassic from "@/components/faq/FaqClassic";
import FancyFeatureTewentyFour from "../components/features/FancyFeatureTewentyFour";
import FancyFeatureTewentyTwo from "../components/features/FancyFeatureTewentyTwo";
import HeaderLandingAppointment from "../components/header/landing/HeaderLandingAppointment";
import HeroBannerNine from "../components/hero-banner/HeroBannerNine";
import TestimonialSeven from "../components/testimonial/TestimonialSeven";
import SocialTwo from "../components/social/SocialTwo";
import FooterEight from "../components/footer/FooterEight";
import CopyRightFour from "../components/footer/CopyRightFour";
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from 'next/link';

const Scrollspy = dynamic(() => import('@/components/scrollpy/Scrollphy'), {
  ssr: false,

})



export const metadata = {
    title: 'TillTech',
    description: `Design Abonnements für jeden. Pausiere oder kündige jederzeit.`,
  }

const AppointmentScheduling = () => {


  return (
    <div className="main-page-wrapper p0 font-gordita">
     

      <HeaderLandingAppointment />
      {/* End Header Landing Appoinment Scheduling */}
      <Scrollspy>

      <div id="home">
        <HeroBannerNine />
      </div>
      {/* End Hero Banner Nine */}

      {/* =============================================
            Fancy Feature Twenty Two
        ==============================================  */}
      <div className="fancy-feature-twentyTwo mt-200 md-mt-120">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-7 col-md-8 m-auto"
              data-aos="fade-up"
              data-aos-duration="1200"
            >

              <div className="title-style-eight text-center mb-40 md-mb-10">
                <h2>
                Wir haben das Rad nicht neu erfunden, nur {" "}
                  <span>
                  Design <Image width={313} height={67} src="/images/shape/191.svg" alt="shape" />
                  </span>
                </h2>
                <p className="hero-sub-heading">
                Das Design, wie du es kennst, ist geschichte. Das Design, wie du es möchtest, ist gerade angekommen.
            </p>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <FancyFeatureTewentyTwo />
          </div>
        </div>
      </div>
      {/* /.fancy-feature-twentyTwo */}

      {/* =============================================
            Fancy Feature Twenty Three
        ==============================================  */}
      <div className="fancy-feature-twentyThree pt-170 md-pt-100" id="feature">
        <div className="container">
          <div
            className="title-style-nine text-center pb-180 md-pb-100"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            
            

            <h6>SICHER UNTERWEGS</h6>
            <h2>
            Es ist "Du wirst nie wieder zurück gehen" {" "}
              <span>
              besser.<Image width={442} height={67} src="/images/shape/192.svg" alt="shape" />
              </span>
            </h2>
            <p>
            GmbH ersetzt unzuverlässige Freelancer und teure Agenturen durch eine monatliche Pauschalgebühr, mit Designs, die so schnell geliefert werden, dass es deine Vorstellungen übertrifft.
            </p>
          </div>
          {/* End title */}

          <div className="block-style-twentyThree">
            <div className="row align-items-center">
              <div
                className="col-lg-6 order-lg-last ms-auto"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <div className="screen-container ms-auto">
                  <div
                    className="oval-shape"
                    style={{ background: "#69FF9C" }}
                  ></div>
                  <div
                    className="oval-shape"
                    style={{ background: "#FFF170" }}
                  ></div>
                  <Image width={504} height={374} style={{height:'fit-content'}}    
                    src="/images/assets/async.png"
                    alt="image"
                    className="shapes shape-one"
                  />
                </div>
                {/* /.screen-container */}
              </div>
              <div
                className="col-lg-5 order-lg-first"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <div className="text-wrapper">
                  <h6>Ein Klick entfernt</h6>
                  <h3 className="title">Total async</h3>
                  <p>
                  Magst du keine Meetings? Wir auch nicht; so sehr, dass wir sie komplett abgeschafft haben.</p>
                </div>
                {/*  /.text-wrapper */}
              </div>
            </div>
          </div>
          {/* /.block-style-twentyThree */}

          <div className="block-style-twentyThree">
            <div className="row">
              <div className="col-lg-6">
                <div
                  className="screen-container me-auto"
                  data-aos="fade-right"
                  data-aos-duration="1200"
                >
                  <div
                    className="oval-shape"
                    style={{ background: "#FFDE69" }}
                  ></div>
                  <div
                    className="oval-shape"
                    style={{ background: "#FF77D9" }}
                  ></div>
                  <Image width={529} height={391} style={{height:'fit-content'}}    
                    src="/images/assets/trello.png"
                    alt="screen"
                    className="shapes shape-two"
                  />
                </div>
                {/* /.screen-container */}
              </div>
              <div
                className="col-lg-5 ms-auto"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <div className="text-wrapper">
                  <h6>AUTOMATISIERT</h6>
                  <h3 className="title">Arbeiten mit Trello</h3>
                  <p>Verwalte dein Design-Board mit Trello. Sieh dir aktive, wartende und abgeschlossene Aufgaben ganz einfach an.

                  </p>
                </div>
                {/* /.text-wrapper */}
              </div>
            </div>
          </div>
          {/* /.block-style-twentyThree */}

          <div className="block-style-twentyThree">
            <div className="row">
              <div
                className="col-lg-6 order-lg-last ms-auto"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <div className="screen-container ms-auto">
                  <div
                    className="oval-shape"
                    style={{ background: "#00F0FF" }}
                  ></div>
                  <div
                    className="oval-shape"
                    style={{ background: "#FC6BFF" }}
                  ></div>
                  <Image width={583} height={449} style={{height:'fit-content'}}    
                    src="/images/assets/team1.png"
                    alt="screen"
                    className="shapes shape-three"
                  />
                </div>
                {/* /.screen-container */}
              </div>
              <div
                className="col-lg-5 order-lg-first"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <div className="text-wrapper">
                  <h6>mitarbeiter</h6>
                  <h3 className="title">
                  Lade unbegrenzt viele Teammitglieder ein
                  </h3>
                  <p>Lade dein gesamtes Team ein, damit jeder Anfragen stellen und ihren Fortschritt verfolgen kann
                  </p>
                  <Link     href="#home" 
                    
                     
                      className="theme-btn-nine mt-20 ">Pläne ansehen</Link>
                
                </div>
                {/* /.text-wrapper */}
              </div>
            </div>
          </div>
          {/* /.block-style-twentyThree */}
        </div>
      </div>
      {/* /.fancy-feature-twentyThree */}

      {/* 	=============================================
            Fancy Feature Twenty Four
        ==============================================  */}
      <div className="fancy-feature-twentyFour pt-140 md-pt-60" id="vorteile">
        <div className="container">
          <div className="title-style-nine text-center">
            
            <h2>
            Mitgliedschafts {" "}
              <span>
              Vorteile <Image width={555} height={67} src="/images/shape/194.svg" alt="shape" />
              </span>
            </h2>
            <p>Vorteile, die so gut sind, dass du nie mehr woanders für dein Design hingehen wirst. Im Ernst.
                  </p>
          </div>
        </div>
        <div className="bg-wrapper mt-100 md-mt-80">
          <a
            href="#feedback"
            className="click-scroll-button scroll-target d-flex justify-content-center"
          >
            <Image width={20} height={39} src="/images/shape/200.svg" alt="shape" />
          </a>
          <div className="container">
            <FancyFeatureTewentyFour />
          </div>
          <Image width={56} height={55}
            src="/images/shape/195.svg"
            alt="shape"
            className="shapes shape-one"
          />
          <Image width={40} height={40}
            src="/images/shape/196.svg"
            alt="shape"
            className="shapes shape-two"
          />
          <Image width={51} height={51}
            src="/images/shape/197.svg"
            alt="shape"
            className="shapes shape-three"
          />
          <Image width={38} height={38}
            src="/images/shape/198.svg"
            alt="shape"
            className="shapes shape-four"
          />
          <Image width={29} height={29}
            src="/images/shape/199.svg"
            alt="shape"
            className="shapes shape-five"
          />
        </div>
        {/* /.bg-wrapper */}
      </div>
      {/* End .fancy feature twenty four */}

            {/*=====================================================
				Fancy Portfolio One
			===================================================== */}
      <div className="fancy-portfolio-one pt-180 md-pt-100" id="portfolio">
        <div className="container">
        <div className="title-style-nine text-center">
                  <h6>Awwward winning designs</h6>
                  <h2>
                   Unser{" "}
                    <span>
                      Portfolio <Image width={250} height={62} src="/images/shape/194.svg" alt="shape" />
                    </span>
                   
                  </h2>
                </div>
        </div>

        <div className="portfolioSliderOne pt-120 md-pt-70">
          <Portfolio />
          <div>
<a
                      href="https://www.figma.com/file/Ma65D8bBHNFoSAWGaZx3Mr/Top-10%2B-best-modern-websites?type=design&node-id=1%3A1074&mode=design&t=DFb9SfjdU0EH2FK7-1"
                      
                      rel="noopener noreferrer"
                     
                      className="theme-btn-eight d-flex justify-content-center mt-50 m-5 "
                    >
                      Ganzes Portfolio ansehen
                    </a>
          </div>
        </div>
      </div>
      {/* /.fancy-portfolio-one */}

  {/* =====================================================
				Fancy Feature Seventeen
			===================================================== */}
      <div className="fancy-feature-seventeen mt-150 md-mt-90  " id="inhalt">
        <div className="bg-wrapper ">
          <div className="container ">
          <div className="title-style-nine underline text-center mb-50 ">
            
            <h2>
            Apps, websites, logos & mehr.
              
            </h2>
          </div>
            <div className="row ">
              <FancyFeatureSeventeen />
            </div>
          </div>
        </div>
        {/* /.bg-wrapper */}
      </div>
      {/* /.fancy-feature-seventeen */}
      {/* =====================================================
            Client Feedback Slider Six
        ===================================================== */}
      <div
        className="client-feedback-slider-six pt-170 md-pt-120"
        id="feedback"
      >
        <div className="inner-container">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-7 m-auto"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <div className="title-style-nine text-center">
                  <h6>BEWERTUNGEN</h6>
                  <h2>
                    Was unsere{" "}
                    <span>
                      Kunden <Image width={200} height={62} src="/images/shape/201.svg" alt="shape" />
                    </span>
                    {" "}von uns denken.
                  </h2>
                </div>
              </div>
            </div>
          </div>
          {/* End .container */}
          <div className="clientSliderSix style-two">
            <TestimonialSeven />
          </div>
        </div>
        {/*  /.inner-container */}
      </div>
      {/* /.client-feedback-slider-six */}

      {/*     =====================================================
        Partner Section One
    ===================================================== */}
      <div className="partner-section-one mt-170 md-mt-90 pb-120 md-pb-80">
        <div className="container">
          <div className="title-style-nine text-center mb-100">
            <h6>Unsere Partner</h6>
            <h2>
              Sie{" "}
              <span>
                Vertrauen uns, <Image width={250} height={62} src="/images/shape/194.svg" alt="shape" />
              </span>
              {" "}& Vice Versa
            </h2>
          </div>
          {/* End title-style-nine */}
          <SocialTwo />
        </div>
        {/* End .container */}

        <Image width={55} height={55}
          src="/images/shape/202.svg"
          alt="shape"
          className="shapes shape-one"
        />
        <Image width={25} height={25}
          src="/images/shape/203.svg"
          alt="shape"
          className="shapes shape-two"
        />
        <Image width={46} height={46}
          src="/images/shape/204.svg"
          alt="shape"
          className="shapes shape-three"
        />
        <Image width={21} height={21}
          src="/images/shape/205.svg"
          alt="shape"
          className="shapes shape-four"
        />
        <Image width={36} height={36}
          src="/images/shape/206.svg"
          alt="shape"
          className="shapes shape-five"
        />
        <Image width={29} height={29}
          src="/images/shape/207.svg"
          alt="shape"
          className="shapes shape-six"
        />
        <Image width={57} height={57}
          src="/images/shape/208.svg"
          alt="shape"
          className="shapes shape-seven"
        />
        <Image width={28} height={28}
          src="/images/shape/209.svg"
          alt="shape"
          className="shapes shape-eight"
        />
      </div>
      {/*  /.partner-section-one */}


             {/* =====================================================
            Pricing Section Eight
        ===================================================== */}
      <div
        className="pricing-section-eight lg-container mt-150 md-mt-100"
        id="preise"
      >
        <div className="container">
          <div className="border-top pt-150 md-pt-100">
          <div className="title-style-nine text-center mb-100">
            <h6>wähle deinen plan</h6>
            <h2>
              Mitgliedschafts{" "}
              <span>
                Level <Image width={200} height={62} src="/images/shape/201.svg" alt="shape" />
              </span>
              {" "}
            </h2>
          </div>
    
          </div>
          {/* End title */}

          <PricingEight />


        </div>
      </div>
      {/* /.Pricing Section Eight */}



      <div className="faq-classic with-bg">
        <Image width="28" height="28"
          src="/images/shape/86.svg"
          alt="shape"
          className="shapes shape-one"
        />
        <Image width="33" height="45"
          src="/images/shape/87.svg"
          alt="shape"
          className="shapes shape-two"
        />
        <Image width="135" height="83"
          src="/images/shape/88.svg"
          alt="shape"
          className="shapes shape-three"
        />
        <Image width="45" height="36"
          src="/images/shape/89.svg"
          alt="shape"
          className="shapes shape-four"
        />
        <Image width="30" height="31"
          src="/images/shape/90.svg"
          alt="shape"
          className="shapes shape-five"
        />
        <Image width="142" height="75"
          src="/images/shape/91.svg"
          alt="shape"
          className="shapes shape-six"
        />
        <div className="container">
          <div className="title-style-nine text-center mb-40 md-mb-70">
            <div className="row">
            <div className="title-style-nine text-center mb-40">
            
            <h2>
              Häufig{" "} gestellte{" "}
              <span>
                Fragen<Image width={200} height={62} src="/images/shape/201.svg" alt="shape" />
              </span>
              
            </h2>
          </div>
              {/* End .col */}
            </div>
          </div>
          {/* End title */}
          <div id="faq">
          <FaqClassic />
          </div>
         
        </div>
        
      </div>
      {/* /.faq-classic */}
      </Scrollspy>
      {/*  =====================================================
            Footer Style Eight
        ===================================================== */}

  

      <footer className="theme-footer-eight mt-100">
        <div className="top-footer">
          <div className="container">
            <FooterEight />
          </div>
          {/* /.container */}
        </div>

        <div className="container">
          <div className="bottom-footer mt-50 md-mt-30">
            <CopyRightFour />
          </div>
        </div>
      </footer>
      {/* /.theme-footer-eight  */}
    </div>
  );
};

export default AppointmentScheduling;


