import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import Image from "next/image";
  import ImgSale1 from "../../public/img1.jpg"
  import ImgSale2 from "../../public/img2.jpg"
  import ImgSale3 from "../../public/img3.jpg"
import { Button } from "./ui/button";
;
  


export default function Products(){
    return (
        <>
        
    


<div className="flex items-center justify-center">


<Card className="ma"  >
  <CardHeader>
    <CardTitle>Produto 1</CardTitle>
    <CardDescription>Em Oferta</CardDescription>
  </CardHeader>
  <CardContent>
    <Image src={ImgSale1} alt="Imagem 1" className="w-full h-auto" width={200}  />
  </CardContent>
  <CardFooter>
    <p>$100</p>
    <Button  className="bg-green-600"  >Comprar</Button>
  </CardFooter>
  
</Card>

<Card>
  <CardHeader>
    <CardTitle>Produto 2</CardTitle>
    <CardDescription>Em Oferta</CardDescription>
  </CardHeader>
  <CardContent>
  <Image src={ImgSale2} alt="Imagem 1" width={200} className="w-full h-auto"  />
  </CardContent>
  <CardFooter>
    <p>$200</p>
    <Button  className="bg-green-600"  >Comprar</Button>
  </CardFooter>
</Card>

<Card>
  <CardHeader>
    <CardTitle>Produto 3</CardTitle>
    <CardDescription>Em Oferta</CardDescription>
  </CardHeader>
  <CardContent>
  <Image src={ImgSale3} alt="Imagem 1" width={200} className="w-full h-auto"  />
  </CardContent>
  <CardFooter>
    <p>$100</p>
    <Button  className="bg-green-600"  >Comprar</Button>
  </CardFooter>
</Card>

</div>

<div className="flex items-center justify-center">


<Card>
  <CardHeader>
    <CardTitle>Produto 4</CardTitle>
    <CardDescription>Em Oferta</CardDescription>
  </CardHeader>
  <CardContent>
    <Image src={ImgSale3} alt="Imagem 1" width={200} className="w-full h-auto" />
  </CardContent>
  <CardFooter>
    <p>$300</p>
    <Button  className="bg-green-600"  >Comprar</Button>
  </CardFooter>
</Card>

<Card>
  <CardHeader>
    <CardTitle>Produto 5</CardTitle>
    <CardDescription>Em Oferta</CardDescription>
  </CardHeader>
  <CardContent>
  <Image src={ImgSale1} alt="Imagem 1" width={200} className="w-full h-auto" />
  </CardContent>
  <CardFooter>
    <p>$200</p>
    <Button  className="bg-green-600"  >Comprar</Button>
  </CardFooter>
  
</Card>

<Card>
  <CardHeader>
    <CardTitle>Produto 6</CardTitle>
    <CardDescription>Em Oferta</CardDescription>
  </CardHeader>
  <CardContent>
  <Image src={ImgSale2} alt="Imagem 1" width={200}  className="w-full h-auto"/>
  </CardContent>
  <CardFooter>
    <p>$400</p>
    <Button  className="bg-green-600"  >Comprar</Button>
  </CardFooter>
</Card>
</div>

        
        </>
    )
}