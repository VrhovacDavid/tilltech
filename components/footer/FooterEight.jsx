import React from "react";
import Link from "next/link";
import Image from "next/image";
const FooterEight = () => {
  return (
    <div className="row justify-content-end">
      <div className="col-xl-4 col-lg-3 col-12 footer-about-widget">
        <div className="logo">
          <a href="#home">
          <Image width="138" height="40" src="/images/logo/TillTech.svg" alt="brand" />
          </a>
        </div>
        <ul className="font-rubik mt-10">
          <li>
            <a href="mailto:hello@tilltech.ch">hello@tilltech.ch</a>
          </li>
          <li>
            <a href="tel:+41 79 754 9198" className="phone">
            +41 79 754 9198
            </a>
          </li>
        </ul>
      </div>
      {/*  /.about-widget */}
      <div className="col-lg-3 col-md-4 footer-list">
        <h5 className="footer-title">Links</h5>
        <ul>
          <li>
            <Link     href="#home">Home</Link>
          </li>
          <li>
            <Link     href="#vorteile">Vorteile</Link>
          </li>
          <li>
            <Link     href="#portfolio">Portfolio</Link>
          </li>
          <li>
            <Link     href="#inhalt">Inhalt</Link>
          </li>
          <li>
            <Link     href="#preise">Preise</Link>
          </li>
          <li>
            <Link     href="#faq">FAQ</Link>
          </li>
          




        </ul>
      </div>
      {/* /.footer-list */}
      <div className="col-lg-3 col-md-4 footer-list">
        <h5 className="footer-title">Legal</h5>
        <ul>
          <li>
            <Link     href="/terms-conditions">Nutzungsbedingungen</Link>
          </li>
          <li>
            <Link     href="/terms-conditions">AGBs</Link>
          </li>
          <li>
            <Link     href="/terms-conditions">Datenschutz</Link>
          </li>
          <li>
            <Link     href="/terms-conditions">Cookie Richtlinie</Link>
          </li>
        </ul>
      </div>
      {/* /.footer-list */}
      <div className="col-xl-2 col-lg-3 col-md-4 footer-list">
        <h5 className="footer-title">Für Kunden</h5>
        <ul>
          <li>
            <Link     href="https://billing.stripe.com/p/login/28oaHy9m414Bfgk288">Kundenportal</Link>
          </li>
          <li>
            <Link     href="/login">Kontakt</Link>
          </li>
    
    
        </ul>
      </div>
      {/* /.footer-list */}
    </div>
    //   /.row
  );
};

export default FooterEight;
