import React from "react";
import InputMain from "@/components/InputMain";
import Main from "@/components/main";
import Products from "@/components/products"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import NavContent from "@/components/navcontent";

export default function Home() {
  return (
    <>
      <header>
      <NavContent/>
      <InputMain />
    </header>
        <main>
      <Main />
        </main>
      <Products/>
      

    </>
  );
}
