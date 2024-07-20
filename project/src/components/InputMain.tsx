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

 

export default function InputMain() {
    return (
      <>
  
      <section className="flex justify-center gap-5 mt-3" >

      <Input className="w-1/6"  placeholder="Location..."  />
      <Input className="w-2/6" placeholder="Search..."  />
  
      <Select>
        <SelectTrigger  className="w-[110px]" >
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">all</SelectItem>
          <SelectItem value="shirts">shirts</SelectItem>
          <SelectItem value="mugs">mugs</SelectItem>
          <SelectItem value="shoes">shoes</SelectItem>
        </SelectContent>
      </Select>
      </section>



</>
    );    
}


