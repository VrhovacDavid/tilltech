'use client'

import React from "react";
import Link from "next/link";
import Image from "next/image";
const HomeDropdown = [
  {
    img: "portfolio",
    routerPath: "/classic-style",
    inenerText: "",
    inenerTextWrapClass: "",
    clasName: `dropdown-item img-box`,
    title: "Portfolio",
  },
  
];
import { usePathname } from "next/navigation";
const MegaMenuLanding = () => {
  const pathname = usePathname();
  return (
    <ul className="mega-menu d-flex " style={{maxHeight:'calc(100vh - 100px)',overflowY:'scroll'}}>
      {HomeDropdown.map((val, i) => (
        <li key={i}>
          <Link     href={val.routerPath} className={val.clasName}>
            <Image width={990} height={890} style={{width:'100%',height:'fit-content'}}     src={`/images/menu/${val.img}.png`} alt="home-demo" />
            <span className={pathname == val.routerPath ? "font-rubik activeMenu" : 'font-rubik'}>{val.title}</span>
            <div className={val.inenerTextWrapClass}>
              <div className="font-rubik">{val.inenerText}</div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
  // End navbar nav mega menu main
};

export default MegaMenuLanding;
