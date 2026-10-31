"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);

  return <div className={cn("fixed inset-x-0 top-10 z-50 mx-auto max-w-2xl", className)}>
    <Menu setActive={setActive} >
        <Link href="/" >
            <MenuItem item="Home" active={active} setActive={setActive}>
            </MenuItem>
        </Link>
        <MenuItem item="Our Courses" active={active} setActive={setActive}>
             <div className="flex flex-col gap-2 space-y-4">
                <HoveredLink href="/courses">All Courses </HoveredLink>
                <HoveredLink href="/courses">Basic Music theory </HoveredLink>
                <HoveredLink href="/courses">Advanced Compositon </HoveredLink>
                <HoveredLink href="/courses">SongWriting </HoveredLink>
                <HoveredLink href="/courses">Music Production </HoveredLink>
                <HoveredLink href="/courses">All Courses </HoveredLink>
             </div>
        </MenuItem>
        <Link href="/contactUs" >
            <MenuItem item="Contact Us" active={active} setActive={setActive}>
            </MenuItem>
        </Link>

    </Menu>
    
    </div>;
};

export default Navbar;
