import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import "@/app/globals.css"



import * as React from "react"

 

export default function InputMain() {
    return (
      <>
<div className="flex items-center justify-center " >
<form action="" className="gap-8 flex items-center mt-20 mb-6" > 

<Input placeholder="Search..." className="min-w-max"  />
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

</form>
</div>

      
  





</>
    );    
}


