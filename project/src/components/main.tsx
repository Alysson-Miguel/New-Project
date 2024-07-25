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
        <Carousel className="relative w-1/2 h-2/2 m-auto mb-5 ">
            <CarouselContent >
              <CarouselItem>
                  <Image src={ImgSale2} alt="Imagem 1"  className="w-full h-auto"  />
              </CarouselItem>
              <CarouselItem>
                  <Image src={ImgSale1} alt="Imagem 1"  className="w-full h-auto"  />
              </CarouselItem>
              <CarouselItem>
                  <Image src={ImgSale3} alt="Imagem 1"  className="w-full h-auto"/>
              </CarouselItem>
            </CarouselContent>
            <CarouselNext />
            <CarouselPrevious />
        </Carousel>


        </>
    )
}


