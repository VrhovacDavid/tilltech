import React from "react";

const socialContent = [
  {
    icon: "fa-facebook",
    link: "https://www.facebook.com/profile.php?id=100089148592975",
  },
  {
    icon: "fa-twitter",
    link: "https://twitter.com/till_tech",
  },
  {
    icon: "fa-youtube",
    link: "https://www.youtube.com/channel/UCAwIFKKP4Q8QDTMz5mreNVw",
  },
  {
    icon: "fa-instagram",
    link: "https://www.instagram.com/tilltechofficial/",
  },
];

const CopyRightFour = () => {
  return (
    <div className="row">
      <div className="col-lg-6 order-lg-2 mb-20">
        <p className="copyright text-center text-lg-left">
          Copyright @{new Date().getFullYear()}{" "}
          <a
            href="https://themeforest.net/user/ib-themes/portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
           TillTech
          </a>{" "}
          GmbH
        </p>
      </div>
      <div className="col-lg-6 order-lg-3 mb-20">
        <ul
          className=" d-flex
              justify-content-center justify-content-lg-end
              social-icon"
        >
          {socialContent.map((val, i) => (
            <li key={i}>
              <a href={val.link} target="_blank" rel="noreferrer">
                <i className={`fa ${val.icon}`}></i>
              </a>
            </li>
          ))}
        </ul>
        {/* End .social-icon */}
      </div>
    </div>
  );
};

export default CopyRightFour;
