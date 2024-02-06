import React from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/e-commerce/Header";

export const metadata = {
    title: '404 | TillTech',
    description: `Seite nicht gefunden`,
  } 
const NotFound = () => {
  return (
    <div className="main-page-wrapper p0">
    
      {/* End Page SEO Content */}

      <div className="error-page d-lg-flex align-items-center">
        <div className="img-holder order-lg-last">
          
          <Image
            src="/images/media/404.svg"
           
            fill
           
            
            alt="media"
            className="w-100 illustration"
          />
          <Image
          width={104}
          height={151}
            src="/images/media/404-q.svg"
            alt="media"
            className="shapes qus"
          />
        </div>
        <div className="text-wrapper order-lg-first">
          <div className="logo">
            <Link href="/">
              <Image width={136} 
              height={43} src="/images/logo/TillTech.svg" alt="logo" />
            </Link>
          </div>
          <h1 className="font-slab">
            Ooooops, <br />
            Die Seite <br />
            konnte nicht gefunden werden.
          </h1>
          <p className="font-rubik">
           Klicke auf den Button um zurück zur Startseite zu gelangen.
          </p>

          <Link
            href="/"
            className="back-home font-rubik d-flex align-items-center justify-content-center"
          >
            <span>Startseite</span>
            <Image width={21} height={10} src="/images/icon/53.svg" alt="icon" />
          </Link>
        </div>
        {/* /.text-wrapper */}
      </div>
      {/* /.error-page */}
    </div>
  );
};

export default NotFound;
