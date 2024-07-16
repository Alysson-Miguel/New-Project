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

  import ImgSale3 from "../../public/img3.jpg"
import { Button } from "./ui/button";
;
  


export default function Products(){
    return (
        <>
        
        <h1>Nossos Principais Produtos</h1>
        <Separator className="items-center" />
        <Tabs defaultValue="account" className="w-[400px]">
  <TabsList>
    <TabsTrigger value="Em Oferta">Em Oferta</TabsTrigger>
    <TabsTrigger value="Mais Vendidos">Mais Vendidos</TabsTrigger>
  </TabsList>
  <TabsContent value="Em Oferta" className="" >  
    <div className="" >


<Card  >
  <CardHeader>
    <CardTitle>Produto 1</CardTitle>
    <CardDescription>Em Oferta</CardDescription>
  </CardHeader>
  <CardContent>
    <Image src={ImgSale1} alt="Imagem 1" className="w-full h-auto" width={200}  />
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
  <Button  className="bg-green-600"  >Comprar</Button>
</Card>

<Card>
  <CardHeader>
    <CardTitle>Produto 2</CardTitle>
    <CardDescription>Em Oferta</CardDescription>
  </CardHeader>
  <CardContent>
  <Image src={ImgSale3} alt="Imagem 1" width={200} className="w-full h-auto"  />
  </CardContent>
  <CardFooter>
        <p>Card Footer</p>
  </CardFooter>
  <Button className="bg-green-600" >Comprar</Button>
  
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
    <p>Card Footer</p>
  </CardFooter>
  <Button className="bg-green-600">Comprar</Button>
</Card>


</div></TabsContent>
  <TabsContent value="Mais Vendidos">  
    <div className="">


<Card>
  <CardHeader>
    <CardTitle>Produto 1</CardTitle>
    <CardDescription>Em Oferta</CardDescription>
  </CardHeader>
  <CardContent>
    <Image src={ImgSale3} alt="Imagem 1" width={200} className="w-full h-auto" />
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
  <Button className="bg-green-600">Comprar</Button>
</Card>

<Card>
  <CardHeader>
    <CardTitle>Produto 2</CardTitle>
    <CardDescription>Em Oferta</CardDescription>
  </CardHeader>
  <CardContent>
  <Image src={ImgSale1} alt="Imagem 1" width={200} className="w-full h-auto" />
  </CardContent>
  <CardFooter>
        <p>Card Footer</p>
  </CardFooter>
  <Button  className="bg-green-600">Comprar</Button>
  
</Card>

<Card>
  <CardHeader>
    <CardTitle>Produto 3</CardTitle>
    <CardDescription>Em Oferta</CardDescription>
  </CardHeader>
  <CardContent>
  <Image src={ImgSale1} alt="Imagem 1" width={200}  className="w-full h-auto"/>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
  <Button  className="bg-green-600">Comprar</Button>
</Card>


</div></TabsContent>
</Tabs>

        
        </>
    )
}