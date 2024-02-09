"use client"

import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import {Autoplay} from "swiper/modules"
import {CSSProperties} from "react"

export default function MainCarousel() {
  return (
    <Swiper
      loop={true}
      autoplay={{delay: 2500, disableOnInteraction: true}}
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
        <div className="flex bg-red-300 overflow-hidden w-full h-[10rem]">1</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex bg-blue-300 overflow-hidden w-full h-[10rem]">2</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex bg-green-300 overflow-hidden w-full h-[10rem]">3</div>
      </SwiperSlide>
    </Swiper>
  )
}
