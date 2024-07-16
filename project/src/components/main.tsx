import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import Image from "next/image";
  import ImgSale1 from "../../public/img1.jpg"
  import ImgSale2 from "../../public/img2.jpg"
  import ImgSale3 from "../../public/img3.jpg"
  

export default function Main() {
    return (
        <>
<Carousel className=" w-6/12 h-auto flex justify-center">
  <CarouselContent >
    <CarouselItem className=" flex justify-center py-5  h-full">
        <Image src={ImgSale1} alt="Imagem 1" width={300} className="w-full h-auto"  />
    </CarouselItem>
    <CarouselItem className=" flex justify-center py-10  h-full">
        <Image src={ImgSale2} alt="Imagem 1"  className="w-full h-auto"  />
    </CarouselItem>
    <CarouselItem className=" flex justify-center py-10  h-full">
        <Image src={ImgSale3} alt="Imagem 1"  className="w-full h-auto"/>
    </CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>


        </>
    )
}