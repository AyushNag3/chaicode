import { Tweet } from 'react-tweet'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  
export const TwitterCard = () => {


    return (
        <>
   <div className='ml-28 mt-4 dark border rounded-lg w-320 h-80 overflow-x-auto overflow-y-auto'>
   <Carousel className='ml-12 mr-12'>

  <CarouselContent className=''>
    <CarouselItem className="basis-1/3"><Tweet id="1898305906515009938" /></CarouselItem>
    <CarouselItem className="basis-1/3"><Tweet id="1905574126112153860" /></CarouselItem>
    <CarouselItem className="basis-1/3"><Tweet id="1900268932449386570" /></CarouselItem>
    <CarouselItem className="basis-1/3"><Tweet id="1907045909394788416" /></CarouselItem>
    <CarouselItem className="basis-1/3"><Tweet id="1897710019765801384" /></CarouselItem>
    <CarouselItem className="basis-1/3"><Tweet id="1898690626557800598" /></CarouselItem>
  </CarouselContent>
  <CarouselPrevious className='' />
  <CarouselNext />
  </Carousel>
  </div>
  
  <div className='w-100 h-28 ml-140 mt-10 mb-6 border rounded-lg border-amber-400 text-2xl p-4 shadow-lg transition-all duration-700 hover:scale-110'>
    <p className='mt-5'>Join Cohorts Live Classes</p> 
</div> 
    
  


        </>
    )
}