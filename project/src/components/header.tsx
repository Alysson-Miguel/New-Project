"use client"
import * as React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {NavigationMenuDemo} from "./NavDemo"
import { ModeToggle } from "@/components/ui/theme-mode"

export default function Header() {

  return (
<>
<header >
  <nav  >
      <ul className="flex justify-between    ">
        <li>Logo</li>
        <li><NavigationMenuDemo/></li>
        <li className="flex gap-2">    
          <Avatar className="w-8 h-8">
          <AvatarImage src="" />
          <AvatarFallback>A</AvatarFallback>
          </Avatar>
          <ModeToggle/>
        </li>
    
      </ul>

    </nav>
</header>
</>
  );
}


