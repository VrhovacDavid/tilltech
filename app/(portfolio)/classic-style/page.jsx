
import Header from "../../../components/header/Header";
import PortfolioTwo from "../../../components/portfolio/PortfolioTwo";
import CopyRightFour from "@/components/footer/CopyRightFour";
import FooterEight from "@/components/footer/FooterEight";
import Link from "next/link";
import Image from "next/image";
export const metadata = {
    title: 'Portfolio Classic Style || Deski-Saas & Software Nextjs Template',
    description: `Unleash the full potential of your software projects with our SaaS-focused Next.js template. Create engaging blogs, showcase your talented team, set up an online shop, provide helpful FAQs, and offer exceptional services with our feature-rich solution. Elevate your SaaS and software development with ease and drive growth. Try it now and take your projects to new heights.`,
  }
const PortfolioV1 = () => {
  return (
    <div className="main-page-wrapper">

      {/* End Page SEO Content */}

      <Header />
      {/* End Header */}

      {/* =============================================
         Fancy Hero Six
        ==============================================  */}
      <div className="fancy-hero-six">
        <div className="container">
        <div className="title-style-nine text-center">
                  <h6>Awwward winning designs</h6>
                  <h2>
                   Unser{" "}
                    <span>
                      Portfolio <Image width={250} height={62} src="/images/shape/194.svg" alt="shape" />
                    </span>
                   
                  </h2>
                </div>
         
        </div>
      </div>
      {/* /.fancy-hero-six */}

      {/*  =============================================
            Fancy Portfolio Two
        ==============================================  */}
      <div className="fancy-portfolio-two lg-container">
        <div className="container">
          <div className="top-border bottom-border pb-130 md-pb-90">
            <PortfolioTwo />
            <div className="title-style-nine text-center mt-90 md-mt-50">
            <h2 className="contact-title font-gordita">
  Hast du ein Projekt? <br />
</h2>
<h3> Schau dir unser angebot an.</h3>

              <Link href="/contact-cs" className="theme-btn-nine mt-35">
                Pläne ansehen
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* /.fancy-portfolio-two */}

      {/* =====================================================
            Footer Style Seven
        ===================================================== */}
      <footer className="theme-footer-eight mt-100">
        <div className="top-footer">
          <div className="container">
            <FooterEight />
          </div>
          {/* /.container */}
        </div>

        <div className="container">
          <div className="bottom-footer mt-50 md-mt-30">
            <CopyRightFour />
          </div>
        </div>
      </footer>
      {/* /.theme-footer-seven */}
    </div>
  );
};

export default PortfolioV1;
