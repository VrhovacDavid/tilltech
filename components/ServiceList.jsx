import React from "react";

const services = [
    ['Websites', 'Mobile Apps', 'Logos', 'Designsysteme', 'SAAS (Software as a Service)', 'Wireframes', 'Stationary', 'Präsentationsunterlagen'],
    ['Video Editing Short Form (z.B TikTok)', 'Video Editing Long Form (z.B YouTube)', 'Icons', 'Branding', 'Broschüren', 'Beschilderung', 'Brand Guides', 'Grafiken für soziale Medien'],
    ['Social Media Templates', 'Ads (Meta & TikTok)', 'Plakatwände', 'Messestandbanner', 'Visitenkarten', 'Verpackungen', 'Blog Grafiken', 'Roll Up Banner'],
  ];
  


const ServiceList = () => {
    return (
      <div className="max-w-6xl mx-auto p-8">
        <h2 className="text-4xl font-bold mb-6 mt-30 text-center ">Apps, websites, logos & mehr.</h2>
        <div className="">
          <div className="d-flex align-items-center justify-content-center underline  ">
            {services.map((row, rowIndex) => (
              <div key={rowIndex} className="border-x-2 border-green-500 rounded mb-50 mt-50 p-3">
                {row.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="p-1">
                    {service}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
export default ServiceList;
