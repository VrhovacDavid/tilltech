import React from "react";
import Image from "next/image";
const socialContent = [
  {
    classCol: "col-lg-3 col-md-4 col-6",
    boxClass: "bx-a",
    img: "Behance",
    link: "#",
    animationDelay: "",
  },
  {
    classCol: "col-lg-2 col-md-4 col-6",
    boxClass: "bx-b",
    img: "Dribble",
    link: "#",
    animationDelay: "50",
  },
  {
    classCol: "col-lg-3 col-md-4 col-6",
    boxClass: "bx-c",
    img: "Facebook",
    link: "#",
    animationDelay: "100",
  },
  {
    classCol: "col-xl-2 col-lg-3 col-md-4 col-6",
    boxClass: "bx-d",
    img: "Google",
    link: "#",
    animationDelay: "150",
  },
  {
    classCol: "col-xl-2 col-lg-3 col-md-4 col-6",
    boxClass: "bx-e",
    img: "Instagram",
    link: "#",
    animationDelay: "200",
  },
  {
    classCol: "col-xl-4 col-lg-2 col-md-4 col-6",
    boxClass: "bx-f",
    img: "Pinterest",
    link: "#",
    animationDelay: "50",
  },
  {
    classCol: "col-xl-2 col-lg-3 col-md-4 col-6",
    boxClass: "bx-g",
    img: "Clubhouse",
    link: "#",
    animationDelay: "100",
  },
  {
    classCol: "col-xl-3 col-lg-3 col-md-4 col-6",
    boxClass: "bx-h",
    img: "Slack",
    link: "#",
    animationDelay: "150",
  },
  {
    classCol: "col-xl-3 col-lg-11 col-md-4 col-6",
    boxClass: "bx-i",
    img: "YouTube",
    link: "#",
    animationDelay: "200",
  },
];

const SocialTwo = () => {
  return (
    <div className="row justify-content-center">
      {socialContent.map((val, i) => (
        <div
          className={val.classCol}
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay={val.animationDelay}
          key={i}
        >
          <div className={`img-box ${val.boxClass}`}>
            
              <Image  width={130} height={82} style={{maxHeight:'50%',objectFit:'contain'}} src={`/images/logo/${val.img}.svg`} alt="logo" />
            
          </div>
          {/* /.img-box */}
        </div>
      ))}

      {/* End .col */}
    </div>
  );
};

export default SocialTwo;
