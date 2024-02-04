'use client'


import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { PortfolioImages } from "@/data/portfolios";
import Link from "next/link";


const Portfolio = () => {
  const settings = {
    dots: true,
    draggable: true,
    arrow: true,
    infinite: true,
    speed: 900,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {PortfolioImages.map((val, i) => (
          <Link href="https://www.figma.com/file/Ma65D8bBHNFoSAWGaZx3Mr/Top-10%2B-best-modern-websites?type=design&node-id=1%3A1074&mode=design&t=DFb9SfjdU0EH2FK7-1" className="item" key={i}>
            <div className="img-meta item">
              <Image className="item" width={990} height={890} style={{width:'100%',height:'fit-content'}} quality={100}     src={val.img} alt={val.altName} />
            </div>
          </Link>
        ))}
      </Slider>
    </>
  );
};

export default Portfolio;
