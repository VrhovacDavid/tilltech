'use client'

import React, { useEffect, useState } from "react";

import Link from "next/link";
import MegaMenuLanding from "./mega-menu/MegaMenuLanding";

import Image from "next/image";

const HeaderLandingAppointment = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (typeof window !== "undefined") {
       if (window.scrollY >= 90) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
    }
   
  };

  useEffect(() => {
      window.addEventListener("scroll", changeBackground);
  
    return () => {
        window.removeEventListener("scroll", changeBackground);
    }
  }, [])
  




  return (
    <>
      {/* =============================================
				Theme Main Menu
			==============================================  */}
      <div
        className={
          navbar
            ? "theme-main-menu sticky-menu theme-menu-six bg-none fixed"
            : "theme-main-menu sticky-menu theme-menu-six bg-none"
        }
      >
        <div className="d-flex align-items-center">
          <div className="logo">
            <Link     href="/">
              <Image width="138" height="40" src="/images/logo/TillTech.svg" alt="brand" />
            </Link>
          </div>
          {/* End logo */}

          <div className="right-widget order-lg-3">
            <ul className="d-flex align-items-center">
              <li>
         
              </li>
              <li>
              <Link     href="#preise" 
                    
                     
                    className="signup-btn">Pläne ansehen</Link>
                
              </li>
            </ul>
          </div>
          {/* End .right-widget */}

          <nav
            id="mega-menu-holder"
            className="navbar navbar-expand-lg ms-lg-auto order-lg-2"
          >
            <div className="container nav-container">
              <div className="mob-header">
                <button className="toggler-menu" onClick={handleClick}>
                  <div className={click ? "active" : ""}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </button>
              </div>
              {/* End Header */}

              <div
                className="navbar-collapse collapse landing-menu-onepage"
                id="navbarSupportedContent"
              >
                <div className="d-lg-flex justify-content-between align-items-center">
                <div 
                    className="navbar-nav  main-side-nav font-gordita"
               
                  >
                <div data-to-scrollspy-id="home"  className="nav-item ">
                      <a href="#home" className="nav-link">
                        Home
                      </a>
                    </div>
                
                    <div   className="nav-item">
                      <a href="#vorteile" className="nav-link">
                        Vorteile
                      </a>
                    </div>
                    <div data-to-scrollspy-id="portfolio" className="nav-item dropdown position-static">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#portfolio"
                        data-toggle="dropdown"
                       
                      >
                        Portfolio
                      </a>
                      <div className="dropdown-menu">
                        <MegaMenuLanding />
                      </div>
                    </div>
                    <div data-to-scrollspy-id="inhalt"  className="nav-item">
                      <a href="#inhalt" className="nav-link">
                        Inhalt
                      </a>
                    </div>
        
                
                    <div data-to-scrollspy-id="preise"  className="nav-item">
                      <a href="#preise" className="nav-link">
                        Preise
                      </a>
                    </div>
                    <div data-to-scrollspy-id="faq"  className="nav-item">
                      <a href="#faq" className="nav-link">
                        FAQ
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* /.theme-main-menu */}

      {/* Mobile Menu Start */}
      <div className={click ? "mobile-menu  menu-open" : "mobile-menu"}>
        <div className="logo order-md-1">
          <Link     href="/project-management">
            <Image width="80" height="47" src="/images/logo/TillTech.svg" alt="brand" />
          </Link>
          <div className="fix-icon text-dark" onClick={handleClick}>
            <Image  width="14" height="14"  src="/images/icon/close.svg" alt="icon" />
          </div>
          {/* Mobile Menu close icon */}
        </div>

        <div 
         
        >
          <p  data-to-scrollspy-id="home" className="nav-item">
            <a href="#home" className="nav-link" onClick={handleClick}>
              Home
            </a>
          </p>
 
          <div data-to-scrollspy-id="vorteile" className="nav-item">
            <a href="#vorteile" className="nav-link" onClick={handleClick}>
            Vorteile
            </a>
          </div>
          <div data-to-scrollspy-id="inhalt" className="nav-item">
            <a href="#inhalt" className="nav-link" onClick={handleClick}>
              Inhalt
            </a>
          </div>
          <div data-to-scrollspy-id="portfolio" className="nav-item">
            <a href="#portfolio" className="nav-link" onClick={handleClick}>
              Portfolio
            </a>
          </div>
          <div data-to-scrollspy-id="preise" className="nav-item">
            <a href="#preise" className="nav-link" onClick={handleClick}>
              Preise
            </a>
          </div>
          <div data-to-scrollspy-id="faq" className="nav-item">
            <a href="#faq" className="nav-link" onClick={handleClick}>
              FAQ
            </a>
          </div>
          <Link     href="#preise" 
                    
                     
                    className="theme-btn-nine mt-20">Pläne ansehen</Link>
        </div>
      </div>
      {/* Mobile Menu End */}
    </>
  );
};

export default HeaderLandingAppointment;
