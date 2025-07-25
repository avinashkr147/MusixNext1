"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem} from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-9999", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          >
          </MenuItem>
        </Link>
         <MenuItem
            setActive={setActive}
            active={active}
            item="Our Courses"
          >
            <div className="  flex flex-col space-y-5  dark-bg-white text-sm m-0 ">

           <HoveredLink  href="/allcourses">
           All Courses
           </HoveredLink>
           <HoveredLink href="/web-dev">
           Basic Music Theory
           </HoveredLink>
           <HoveredLink href="/web-dev">
           Advanced Composition
           </HoveredLink>
           <HoveredLink href="/web-dev">
          Songwriting 
           </HoveredLink>
           <HoveredLink  href="/web-dev">
           Music Production
           </HoveredLink>
            </div> 
          </MenuItem>
          <Link href={'/contactus'}>
            <MenuItem setActive={setActive} active={active} item="ContactUs">
            </MenuItem>
          </Link>

        
      </Menu>
    </div>
  );
};

export default Navbar;
