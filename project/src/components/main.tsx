import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import Image from "next/image";

import * as React from "react"

 

export default function Main() {
    return (
      <>
    <div className="flex  items-center justify-center gap-10 py-10 px-3 sm:px-6 lg:px-8">
        <Input className="w-1/5" placeholder="Location..."  />
        <div className="flex items-center justify-center w-3/4">
  <div className="relative w-2/4">
    <input
      className="w-full py-2 px-4 rounded-lg border border-gray-300 shadow-sm focus:outline-none"
      type="text"
      placeholder="Search..."
    />
    <Image
      className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
      src={"/search.svg"}
      alt="Search"
      width={24}
      height={24}
      
    />
  </div>
</div>
                                                                
        <Select>
  <SelectTrigger className="w-[200px]">
    <SelectValue placeholder="Category" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">clothes</SelectItem>
    <SelectItem value="dark">shoes</SelectItem>
    <SelectItem value="system">mugs</SelectItem>
  </SelectContent>
</Select>
</div>




</>
    );    
}


