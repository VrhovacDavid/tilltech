'use client'

import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TestimonialSeven() {
  const settings = {
    dots: false,
    arrow: false,
    infinite: true,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    centerMode: true,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const TestimonilContent = [
    {
      img: "markus_kathriner",
      desc: ` Habe eine sehr gute Zusammenarbeit mit der Firma Till Tech konnten die Zielgruppe analysieren, und dadurch gezielt Werbung schalten. Ihr macht das super gut, weiter so....
      `,
      reviewerName: "M. Kathriner",
      country: " Luzern",
      bgColor: "#FF47E2",
    },
    {
      img: "lead_1",
      desc: ` Die TillTech liefert eine herausragende Leistung, die unsere Erwartungen übertraf. Ihre Kreativität und Kommunikation waren erstklassig. Wir empfehlen sie uneingeschränkt.`,
      reviewerName: "Bostami",
      country: " Zürich",
      bgColor: "#00E5F3",
    },
    {
      img: "lead_2",
      desc: ` Die Zusammenarbeit mit der Tilltech ist gut. Die Design's sind super, und jedes geld wert.`,
      reviewerName: "Kuyeti Krima",
      country: " Bern",
      bgColor: "#FFCF24",
    },
    {
      img: "lead_3",
      desc: ` Die Zusammenarbeit war eine wahre Freude! Ihr Team zeigte das höchste Maß an Professionalität und Kreativität. Von der ersten Besprechung bis zu den finalen Lieferungen arbeiteten sie mit äußerster Hingabe und Präzision. Weiss nicht warum ich nicht früher zu Ihnen gekommen bin 😉`,
      reviewerName: "Peter B.",
      country: " St. Gallen",
      bgColor: "#8F6BF6",
    },
  ];

  return (
    <Slider {...settings}>
      {TestimonilContent.map((val, i) => (
        <div className="item" key={i}>
          <div className="feedback-wrapper">
            <span className="ribbon" style={{ background: val.bgColor }}></span>
            <p>{val.desc}</p>
            <div className="d-flex align-items-center">
              <Image width={43} height={43}
                src={`/images/media/${val.img}.png`}
                alt="icon"
                className="avatar"
              />
              <h6 className="name">
                {val.reviewerName},<span>{val.country}</span>
              </h6>
            </div>
          </div>
          {/* End .feedback-wrapper */}
        </div>
      ))}
    </Slider>
  );
}
