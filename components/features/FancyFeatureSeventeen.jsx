import React from "react";
import Image from "next/image";
const FeaturesContent = [
  { title: "Websites" },
  { title: "Mobile Apps" },
  { title: "Logos" },
  { title: "Designsysteme" },
  { title: "SAAS (Software as a Service)" },
  { title: "Wireframes" },
  { title: "Stationary" },
  { title: "Präsentationsunterlagen" },
  { title: "Video Editing Short Form (z.B TikTok)" },
  { title: "Video Editing Long Form (z.B YouTube)" },
  { title: "Icons" },
  { title: "Branding" },
  { title: "Broschüren" },
  { title: "Beschilderung" },
  { title: "Brand Guides" },
  { title: "Grafiken für soziale Medien" },
  { title: "Social Media Templates" },
  { title: "Ads (Meta & TikTok)" },
  { title: "Plakatwände" },
  { title: "Messestandbanner" },
  { title: "Visitenkarten" },
  { title: "Verpackungen" },
  { title: "Blog Grafiken" },
  { title: "Roll Up Banner" },
];
const FancyFeatureSeventeen = () => {
  return (
    <>
      {FeaturesContent.map((val, i) => (
        <div
          className="col-lg-4 col-sm-6 d-flex align-items-center justify-content-left text-left"
          data-aos="fade-up"
          data-aos-duration="1200"
          key={i}
        >
          <div className="p-2">
           
            <p>{val.title}</p>
           
          </div>
        </div>
        // .block-meta
      ))}
    </>
  );
};

export default FancyFeatureSeventeen;
