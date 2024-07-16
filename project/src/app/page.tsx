
import Header from "@/components/header";
import React from "react";
import InputMain from "@/components/InputMain";
import Main from "@/components/main";
import Products from "@/components/products"


export default function Home() {
  return (
    <>
      <Header/>
      <InputMain/>
      <div className="container mx-auto">
        <Main />

      </div>
      
      <Products/>
      

    </>
  );
}
