'use client'
import { Billboard } from '@/types'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Virtual, Pagination } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/virtual'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import Image from 'next/image'

interface BillboardProps {
  data: Billboard[]
}

const HomeBanner: React.FC<BillboardProps> = ({ data }) => {
  return (
    <div className='p-4 sm:p-6 lg:p-8 '>
      <Swiper
        className=''
        modules={[Virtual, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => {}}
        onSwiper={swiper => {}}
        pagination={{
          dynamicBullets: true
        }}
      >
        {data.map(item => (
          <SwiperSlide key={item.id} virtualIndex={item} className=''>
            <figure className=' aspect-square md:aspect-[2.4/1] relative'>
              <Image
                src={item.imageUrl}
                alt='home-banner'
                fill
                priority={true}
                className='rounded-xl object-cover	w-100 h-100'
              ></Image>
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default HomeBanner
