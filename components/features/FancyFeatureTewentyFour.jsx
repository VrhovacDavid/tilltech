'use client'
import React from 'react';
import Lottie from "lottie-react";
import Lightning from "public/images/icon/Lightning.json";
import InfinityJson from "public/images/icon/Infinity.json";
import Quality from "public/images/icon/Quality.json";
import Scale from "public/images/icon/Scale.json";
import Fingerprint from "public/images/icon/Fingerprint.json";
import Money from "public/images/icon/Money.json";


const lottieStyle = {
  width: '100px', // Breite der Animation
  height: '100px', // Höhe der Animation
};

const FancyFeatureTewentyFour = () => {
  return (
    <div className="row">
      <div
        className="col-lg-6 d-flex mb-35"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <div className="block-style-twentyFour">
          <div className="d-flex align-items-start">
            <div
              className="icon d-flex align-items-center justify-content-center"
              style={{ background: "#3FE193" }}
            >
             <Lottie animationData={InfinityJson} style={lottieStyle} />
              
            </div>
            <div className="text">
              <h4>Design board</h4>
              <p>
              Füge so viele Designanfragen zu deinem Board hinzu, wie du möchtest.
              </p>
            </div>
          </div>
        </div>
        {/* /.block-style-twentyFour */}
      </div>
      {/* End .col */}

      <div
        className="col-lg-6 d-flex mb-35"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="100"
      >
        <div className="block-style-twentyFour">
          <div className="d-flex align-items-start">
            <div
              className="icon d-flex align-items-center justify-content-center"
              style={{ background: "#FF4F86" }}
            >
              
              <Lottie 
      animationData={Money}
    />
              
            </div>
            <div className="text">
              <h4>Fester monatlicher Preis</h4>
              <p>
              Keine Überraschungen hier! Zahle jeden Monat denselben festen Preis.
              </p>
            </div>
          </div>
        </div>{" "}
        {/* /.block-style-twentyFour */}
      </div>
      {/* End .col */}

      <div
        className="col-lg-6 d-flex mb-35"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <div className="block-style-twentyFour">
          <div className="d-flex align-items-start">
            <div
              className="icon d-flex align-items-center justify-content-center"
              style={{ background: "#FFCF39" }}
            >
             <Lottie animationData={Quality} style={lottieStyle} />
            </div>
            <div className="text">
              <h4>Erstklassige Qualität</h4>
              <p>
              Erstklassige Designqualität steht dir immer zur Verfügung, wenn du sie benötigst.
              </p>
            </div>
          </div>
        </div>{" "}
        {/* /.block-style-twentyFour */}
      </div>
      {/* End .col */}

      <div
        className="col-lg-6 d-flex mb-35"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="100"
      >
        <div className="block-style-twentyFour">
          <div className="d-flex align-items-start">
            <div
              className="icon d-flex align-items-center justify-content-center"
              style={{ background: "#6D64FF" }}
            >
             <Lottie animationData={Scale} style={lottieStyle} />
            </div>
            <div className="text">
              <h4>Flexibel und skalierbar</h4>
              <p>Skaliere nach Bedarf hoch oder runter, pausiere oder kündige jederzeit.
              </p>
            </div>
          </div>
        </div>{" "}
        {/* /.block-style-twentyFour */}
      </div>
      {/* End .col */}

      <div
        className="col-lg-6 d-flex mb-35"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <div className="block-style-twentyFour">
          <div className="d-flex align-items-start">
            <div
              className="icon d-flex align-items-center justify-content-center"
              style={{ background: "#E752FF" }}
            >
             <Lottie animationData={Fingerprint} style={lottieStyle} />
            </div>
            <div className="text">
              <h4>Einzigartig und ganz dein</h4>
              <p>
              Jedes deiner Designs wird speziell für dich angefertigt und gehört zu 100% dir.
              </p>
            </div>
          </div>
        </div>{" "}
        {/* /.block-style-twentyFour */}
      </div>
      {/* End .col */}

      <div
        className="col-lg-6 d-flex mb-35"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="100"
      >
        <div className="block-style-twentyFour">
          <div className="d-flex align-items-start">
            <div
              className="icon d-flex align-items-center justify-content-center"
              style={{ background: "#29EEFB" }}
            >
             <Lottie animationData={Lightning} style={lottieStyle} />
            </div>
            <div className="text">
              <h4>Blitzschnelle Lieferung</h4>
              <p>Erhalte deine Designs im Durchschnitt in nur wenigen Tagen.</p>
            </div>
          </div>
        </div>{" "}
        {/* /.block-style-twentyFour */}
      </div>
      {/* End .col */}

    </div>
  );
};

export default FancyFeatureTewentyFour;