'use client'
import React from "react";
import Lottie from "lottie-react";
import Email from "public/images/icon/Email.json";
import Clock from "public/images/icon/Clock.json";
import LottieTest from "public/images/icon/Circle_Loading.json";




const FeatureContent = [
  {
    icon: Email,
    title: "Unlimitierte Designs",
    subTitle: `Abonniere einen Plan und fordere so viele Designs an, wie du möchtest.`,
    bgColor: "#FF4A8B",
  },
  {
    icon: Clock,
    title: "Rekordzeit",
    subTitle: `Erhalte dein Design in der Regel innerhalb weniger Geschäftstage, von Montag bis Freitag.`,
    bgColor: "#6D49FF",
  },
  {
    icon: LottieTest,
    title: "100% Zufriedentheit",
    subTitle: `Wir werden die Designs überarbeiten, bis du zu 100% zufrieden bist.`,
    bgColor: "#FFB951",
  },
];


const lottieStyle = {
  width: '50px', // Breite der Animation
  height: '50px', // Höhe der Animation
};


const FancyFeatureTewentyTwo = () => {
  return (
    <>
      {FeatureContent.map((val, i) => (
        <div
          className="col-lg-4 col-md-6"
          data-aos="fade-up"
          data-aos-duration="1200"
          key={i}
        >
          <div className="block-style-twentyTwo">
            <div
              className="icon d-flex align-items-center justify-content-center"
              style={{ background: val.bgColor, }}
            >
                           

<Lottie animationData={val.icon} style={lottieStyle} />

                            
      
            </div>
            <h4>{val.title}</h4>
            <p>{val.subTitle}</p>
          </div>
          {/* /.block-style-twentyTwo */}
        </div>
      ))}
    </>
  );
};

export default FancyFeatureTewentyTwo;
