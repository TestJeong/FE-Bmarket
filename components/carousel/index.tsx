"use client"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import {Swiper, SwiperSlide} from "swiper/react"
import {Autoplay, Navigation, Pagination} from "swiper/modules"
import {CSSProperties} from "react"

export default function MainCarousel() {
  return (
    <Swiper
      loop={true}
      autoplay={{delay: 3000, disableOnInteraction: true}}
      modules={[Autoplay]}
      navigation={{nextEl: ".test"}}
      className={""}
      pagination={{
        clickable: true
      }}
      style={
        {
          "--swiper-pagination-color": `${"white"}`
        } as CSSProperties
      }
    >
      <SwiperSlide>
        <div className="flex bg-black overflow-hidden w-full h-[10rem]">1</div>
      </SwiperSlide>
      <SwiperSlide>
        <div>2</div>
      </SwiperSlide>
      <SwiperSlide>
        <div>3</div>
      </SwiperSlide>
    </Swiper>
  )
}
