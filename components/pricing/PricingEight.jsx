import React from "react";
import Link from "next/link";
import Image from "next/image";
const PricingContent = [
  {
    plan: "Standart Plan",
    price: "CHF 4'995",
    info: "Pausiere oder Stoppe jederzeit",
    link: "https://checkout.stripe.com/c/pay/cs_live_a1fZ1YyBFXpnMFxKu8VBnMbCJg63WHvz7BMjD3HdS4i6CHRGaQx86EWHM6#fidkdWxOYHwnPyd1blppbHNgWjA0S0R2dldNczxVTkNdZDJuT2tCTWpmYWtnQDBXXzZfcFBOS3VsfU5kbEw9a05RZm1yNGBIcGNLUmJQam9PQmhpUUNgdmc8ZjJBUVZSMXx8MlxcbFx3XVEzNTUxbk98RFJyYScpJ3VpbGtuQH11anZgYUxhJz8nMnZMNDBzYlB0MjAwZk1oNmZmJyknd2BjYHd3YHdKd2xibGsnPydtcXF1dj8qKnFsaWlxYGZtK2ZtKid4JSUl"
    ,featureList: [
      {
        hintsText: "Anfragen auf eimal",
        iconYesNo: "1",
      },
      {
        hintsText: "24-48h Lieferzeit",
        iconYesNo: "155",
      },
      {
        hintsText: "Unbegrenzte Marken",
        iconYesNo: "155",
      },
      {
        hintsText: "Unbegrenzte Benutzer",
        iconYesNo: "155",
      },
      {
        hintsText: "Unbegrenzte Stockfotos",
        iconYesNo: "155",
      },
      {
        hintsText: "Kreditkartenzahlung",
        iconYesNo: "155",
      },
      {
        hintsText: "Pausiere oder Kündige jederzeit",
        iconYesNo: "155",
      },
    ],
  },
  {
    plan: "Pro Plan",
    price: "CHF 6'995",
    info: "Pausiere oder Stoppe jederzeit",
link:"https://checkout.stripe.com/c/pay/cs_live_a19XqBArIXfBL8eVImgmQlmRoioonIQoZg5HEQHkYfCRnwEaPAJlAUYq0k#fidkdWxOYHwnPyd1blppbHNgWjA0S0R2dldNczxVTkNdZDJuT2tCTWpmYWtnQDBXXzZfcFBOS3VsfU5kbEw9a05RZm1yNGBIcGNLUmJQam9PQmhpUUNgdmc8ZjJBUVZSMXx8MlxcbFx3XVEzNTUxbk98RFJyYScpJ3VpbGtuQH11anZgYUxhJz8nPXJIM3VVZ0QzZG1tYFVwY1xfJyknd2BjYHd3YHdKd2xibGsnPydtcXF1dj8qKnFsaWlxYGZtK2ZtKid4JSUl"
    ,featureList: [
      {
        hintsText: "Anfragen auf eimal",
        iconYesNo: "2",
      },
      {
        hintsText: "24-48h Lieferzeit",
        iconYesNo: "155",
      },
      {
        hintsText: "Unbegrenzte Marken",
        iconYesNo: "155",
      },
      {
        hintsText: "Unbegrenzte Benutzer",
        iconYesNo: "155",
      },
      {
        hintsText: "Unbegrenzte Stockfotos",
        iconYesNo: "155",
      },
      {
        hintsText: "Kreditkartenzahlung",
        iconYesNo: "155",
      },
      {
        hintsText: "Pausiere oder Kündige jederzeit",
        iconYesNo: "155",
      },
    ],
  },
  {
    plan: "BUSINESS PLAN",
    img: "/images/logo/TillTech.svg",
  
    info: "Great for Large Business",
    featureList: [

    ],
  },
];


const BusinessPlanContent = () => (
  <div className="col-md-4 pr-column">
    {/* Erster Abschnitt mit Titel und Unterschrift */}
    <div >
    <Image width="200" height="200" src="/images/media/Call.svg" alt="brand" className="m-auto"/>
    </div>
    <div className="">
      <h3>Buchen ein Gespäch</h3>
      <p>Erfahre mehr darüber, wie TillTech funktioniert und wie es dir helfen kann.</p>
                <div className="pr-footer ">
                     {/* End pr-body */}
                     <div className="pr-footer">
                <Link     href="https://calendly.com/tilltech/tilltech-infogesprach" className="trial-button">
                  Termin Buchen
                </Link>
                
              </div>
              {/* End pr-footer */}
     
    </div>
    </div>
    {/* Zweiter Abschnitt mit Titel und Unterschrift */}
    <div className="flex flex-col items-center">
    <Image width="300" height="300" src="/images/media/Friend.svg" alt="friend" className="m-auto"/>

      <h5>Empfehle einen Freund und verdiene</h5>
      <p className="mt-3">Verdiene 5% monatliche wiederkehrende Provisionen für jede Empfehlung.</p>
      <div className="pr-footer">
               {/* End pr-body */}
               <div className="pr-footer">
                <Link     href="/signup" className="trial-button">
                  Jetzt Anmelden
                </Link>
              
              </div>
              {/* End pr-footer */}
    </div>
    </div>
    {/* Optional: Bild einfügen, falls gewünscht */}
   
    {/* Buttons für Spalte 3 */}
   
  </div>
);

const PricingEight = () => {
  return (
    <div className="row no-gutters position-relative">
      <div className="col-lg-3 pr-list-wrapper d-none d-lg-block">
        {/* Linke Spalte Inhalt */}
        <ul>
          <li>Anfragen</li>
          <li>Lieferzeit</li>
          <li>Marken</li>
          <li>Fotos</li>
          <li>Einfache Kartenzahlung</li>
          <li>Pausieren oder Kündigen</li>
        </ul>
      </div>

      <div className="col-lg-9 pr-table-wrapper ms-auto">
        <div className="row no-gutters">
          {PricingContent.map((val, i) => (
            <div className="col-md-4 pr-column" key={i}>
              {val.plan.toUpperCase() !== "BUSINESS PLAN" && (
                <div className="pr-header">
                  <div className="plan">{val.plan}</div>
                  <div className="price"> {val.price}</div>
                  <div className="info">{val.info}</div>
                </div>
              )}
              {val.plan.toUpperCase() === "BUSINESS PLAN" && (
                <BusinessPlanContent />
              )}
              <div className="pr-body">
                <ul>
                  {val.featureList.map((feature, index) => (
                    <li key={index}>
                      <span className="pr-text d-lg-none">
                        {feature.hintsText}
                      </span>
                      <Image width={16} height={16} style={{ objectFit: 'contain' }}
                        src={`/images/icon/${feature.iconYesNo}.svg`}
                        alt="icon"
                        className="m-auto"
                      />
                    </li>
                  ))}
                </ul>
                {/* Buttons für Spalte 1 und 2 ganz unten */}
                {val.plan.toUpperCase() !== "BUSINESS PLAN" && val.link && (
                             
              <div className="pr-footer">
              <Link     href={val.link} className="trial-button">
                Starte noch heute
              </Link>
             
             
            </div>
           
                )}
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default PricingEight;



