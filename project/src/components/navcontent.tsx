"use client"

import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { ModeToggle } from "@/components/ui/theme-mode"
import { Menu } from "lucide-react"

// Para cada item eu preciso de um MenubarMenu
export default function NavContent(){
    return(
        <>


<Menubar className="flex justify-center">
    <ul className="flex gap-2 md:gap-5">
        <li>
            <MenubarMenu>
                <MenubarTrigger>Home</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>Profile</MenubarItem>
                    <MenubarItem>Settings</MenubarItem>
                    <MenubarItem>Help</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Sign Out</MenubarItem>
                </MenubarContent>
            </MenubarMenu>
        </li>
        <li>
            <MenubarMenu>
                <MenubarTrigger>Produts</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>Categorys</MenubarItem>
                    <MenubarItem>Promotion</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Cart</MenubarItem>
                </MenubarContent>
            </MenubarMenu>
        </li>
        <li>
            <MenubarMenu>
                <MenubarTrigger>More</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>About</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Register products</MenubarItem>
                </MenubarContent>
            </MenubarMenu>
        </li>
    </ul>
</Menubar>


        </>
    )
}